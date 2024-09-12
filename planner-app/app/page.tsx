'use client';
import Image from "next/image";
import { useState } from "react";
import { sample_courses } from "@/const";
import { SemesterPlanner, CourseBrowser, Summary } from "@/components";


// temporary types for data from the API
interface Course {
  _id: ObjectId;
  name: string;
  semester: string;
  type: string;
  ects: string;
  tags: string[] | null;
  effects: string[] | null;
}

interface ObjectId {
  $oid: string;
}

export default function Home() {
  // const [courses, setCourses] = useState<Course[]>(sample_courses);

  return (
    <div className="min-h-screen flex flex-col p-5">
      <div className="flex-grow grid grid-cols-12 gap-4 text-xl">
        {/* courses browser and semester planner */}
        <CourseBrowser styles={"col-start-1 col-end-3 py-5"} />
        <SemesterPlanner styles={"border border-blue-500 col-start-3 col-end-13"} />
      </div>
      {/* summary */}
      <Summary styles={"p-4 border border-purple-500]"}/>
    </div>
  );
}