import { SemesterPlanner, Summary } from "@/components";


export default function Home() {
  return (
    <div className="flex flex-col h-screen"> 
      <SemesterPlanner styles="flex-grow p-5 min-h-0" />
      <Summary styles="mt-auto h-10"/>
    </div>
  );
}
