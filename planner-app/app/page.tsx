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
    <div className="flex flex-col h-screen "> {/* Use h-screen to take the full screen */}
      <div className="flex-grow grid grid-cols-12 gap-4 p-5 pb-0 min-h-0"> {/* Set min-h-0 to prevent overflow */}
        {/* CourseBrowser and SemesterPlanner */}
        <CourseBrowser styles="col-start-1 col-end-3 overflow-auto" />
        <SemesterPlanner styles="col-start-3 col-end-13" />
      </div>
      {/* Summary with fixed or limited height */}
      <Summary styles="mt-3 h-10"/> {/* You can adjust the height as needed */}
    </div>
  );
}
