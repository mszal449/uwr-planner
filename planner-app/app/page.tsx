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
  return (
    <div className="h-screen flex flex-col px-2 overflow-hidden">
      <div className="flex-grow grid grid-cols-12 gap-4 text-xl mb-0">
        {/* courses browser and semester planner */}
        <CourseBrowser styles={"max-h-[95vh] col-start-1 col-end-3 py-5"} />
        <SemesterPlanner styles={"p-5 col-start-3 col-end-13"} />
      </div>
      {/* summary */}
      <Summary styles="h-full m-0"/>
    </div>
  );
}
