import useSWR from 'swr';
import { SemesterPlanner, CourseBrowser, Summary } from "@/components";
import { getPlanById } from "@/services";
import { updatePlan } from "@/services/planService";
import { CourseI } from "@/types";
import { useEffect, useState } from "react";
import { Navbar } from "@/components";
import { usePlanContext } from "../../context/PlanContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PlanView({params}: {params: {id: string}}) {
  const { plan, setPlan } = usePlanContext();
  const [selectedCourse, setSelectedCourse] = useState<CourseI | null>(null)
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/api/auth/signin?callbackUrl=/');
    },
  });

  // Disable SWR re-fetching on focus and reconnect
  const { data, error } = useSWR(params.id ? `/api/plans/${params.id}` : null, getPlanById, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  function addSelectedCourse(semId: number) {
    if (plan && plan.semesters && selectedCourse) {
        const updatedSemesters = plan.semesters.map((semester, index) => {
            semester = semester.filter(c => c._id !== selectedCourse._id)
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

  function savePlan() {
    if (plan && plan._id) {
      updatePlan(plan._id, plan)
    }
  }
  
  useEffect(() => {
    const getdata = async () => {
      if (params.id && session) {
        const data = await getPlanById(params.id);
        if (data?.user != session.user.id) {
          router.push('/');
        } 
        setPlan(data);
      }
    };
    getdata();
  }, [params.id, session]);
  
  return (
    <div className="flex flex-col h-screen "> 
      <Navbar planName={plan?.name} savePlan={savePlan}/>
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
        />
      </div>
      <Summary styles="mt-3 h-10"/>
    </div>
  );
}
