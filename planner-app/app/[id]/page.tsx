'use client'
import { SemesterPlanner, CourseBrowser, Summary } from "@/components";
import { getPlanById } from "@/services";
import { updatePlan } from "@/services/planService";
import { CourseI, PlanI } from "@/types";
import { useEffect, useState } from "react";
import { Navbar } from "@/components";

export default function PlanView({params}: {params: {id: string}}) {
  const [plan, setPlan] = useState<PlanI | null>(null)
  const [selectedCourse, setSelectedCourse] = useState<CourseI | null>(null)

  function addSelectedCourse(semId: number) {
    if (plan && selectedCourse) {
      const updatedSemesters = plan.semesters.map((semester, index) => {
        if (index === semId) {
          return [...semester, selectedCourse];
        }
        return semester;
      });
      setPlan({...plan, semesters: updatedSemesters});
      setSelectedCourse(null);
    }
  }  

  function deleteSelectedCourse(semId: number, courseId: string) {
    if (plan) {
      const updatedSemesters = plan.semesters.map((semester, index) => {
        if (index === semId) {
          return semester.filter(c => c._id !== courseId);
        }
        return semester;
      });
      setPlan({...plan, semesters: updatedSemesters});
    }
  }

  function savePlan() {
    if (plan) {
      updatePlan(plan._id, plan)
    }
  }
  
  useEffect(() => {
    const getdata = async () => {
      if (params.id) {
        const data = await getPlanById(params.id)
        console.log(data)
        setPlan(data)
      }
    }
    getdata()
  }, [params.id]);

  return (
    <div className="flex flex-col h-screen "> 
      {/* todo: to be changed to normal navbar XD */}
      {/* <div className="p-4">
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={savePlan}>
          Save
        </button>
        click course from list, then select semester to assign course to semester; click course in semester column to delete it.
      </div> */}
      <Navbar savePlan={savePlan}/>

      {/*  */}
      <div className="flex-grow grid grid-cols-12 gap-4 px-5 min-h-0">
        <CourseBrowser 
          styles="col-start-1 col-end-3 overflow-auto" 
          onSelectCourse={(c: CourseI) => setSelectedCourse(c)} />
        <SemesterPlanner 
          styles="col-start-3 col-end-13" 
          plan={plan}
          onSelectSemester={(semId: number) => addSelectedCourse(semId)}
          deleteCourse={(semId: number, courseId: string) => deleteSelectedCourse(semId, courseId)}
          />
      </div>
      <Summary styles="mt-3 h-10"/>
    </div>
  );
}
