'use client'
import { SemesterPlanner, CourseBrowser, Summary } from "@/components";
import { CourseI } from "@/types";
import { useEffect, useState } from "react";
import { Navbar } from "@/components";
import { usePlanContext } from "../../context/PlanContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function PlanView({params}: {params: {id: string}}) {
  const { plan, setPlan } = usePlanContext();
  const [selectedCourse, setSelectedCourse] = useState<CourseI | null>(null)
  const [markedCoursesKey, selectMarkedCoursesKey] = useState<"tag" | "effect" | "type" | null>("tag") // tag, effect or type
  const [markedCoursesValue, selectMarkedCoursesValue] = useState<string | string[] | null>(null) // name, e.g. "Bazy Danych", "Kurs Inżynierski"

  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/');
    },
  });

  function onClickMark(key: string, value: string | string[]) {
    selectMarkedCoursesKey(key as "tag" | "effect" | "type")
    selectMarkedCoursesValue(value)
  }

  function addSelectedCourse(semId: number) {
    if (plan && plan.semesters && selectedCourse) {
        const updatedSemesters = plan.semesters.map((semester, index) => {
          // semester = semester.filter(c => c._id !== selectedCourse._id)
          if (index === semId) {
            const courseExists = semester.some(c => c._id === selectedCourse._id);
            if (courseExists) {
                return semester
            }
            return [...semester, selectedCourse]
          }
          return semester;
        })
        setPlan({ ...plan, semesters: updatedSemesters })
        setSelectedCourse(null);
    }
}

  function deleteCourse(courseId: string, semId: number) {
    if (plan && plan.semesters) {
      const updatedSemesters = plan.semesters.map((semester, index) => {
        if (index === semId) {
          return semester.filter(c => c._id !== courseId);
        }
        return semester;
      });
      setPlan({...plan, semesters: updatedSemesters});
      setSelectedCourse(null);
    }
  }

  async function savePlan() {
    if (plan && plan._id) {
      const response = await fetch(`/api/plans/${plan._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plan),
      });
    }
  }
  
  useEffect(() => {
    const getdata = async () => {
      if (params.id && session) {
        const response = await fetch(`/api/plans/${params.id}`);
        const data = await response.json();
        if(!response.ok) {
          return
        }

        if (data.user == session.user.id) {
          setPlan(data);
        } 
        else router.push('/');
      }
    };
    getdata();
  }, [params.id, session]);
  
  return (
    <div className="flex flex-col h-screen "> 
      <Navbar planName={plan?.name} degree={plan?.degree} savePlan={savePlan}/>
      <div className="flex-grow grid grid-cols-12 gap-4 px-5 min-h-0">
        <CourseBrowser 
          styles="col-start-1 col-end-3 overflow-auto" 
          onSelectCourse={(c: CourseI) => setSelectedCourse(c)}
          selectedCourseId={selectedCourse?._id || null}
          />
        <SemesterPlanner 
          styles="col-start-3 col-end-13" 
          plan={plan}
          onSelectSemester={(semId: number) => addSelectedCourse(semId)}
          onSelectCourse={(c: CourseI) => setSelectedCourse(c)}
          deleteCourse={(courseId: string, semId: number) => deleteCourse(courseId, semId)}
          selectedCourseId={selectedCourse?._id || null}
          markedCoursesKey={markedCoursesKey}
          markedCoursesValue={markedCoursesValue}
        />
      </div>
      <Summary 
        styles="mt-3 h-20"
        onClickMark={(key: string, value: string | string[]) => onClickMark(key, value)}/>
    </div>
  );
}