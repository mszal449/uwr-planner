import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { educationEffects, CourseTags } from '@/const';

interface CourseCardProps {
  name: string;
  semester: string;
  type: string
  ects: string;
  tags?: string[];
  effects?: string[];
}

const CourseCard = ({name, semester, type, ects, tags = [], effects = []}: CourseCardProps) => {
  return (
    <Card className="bg-[#282828] hover:bg-[#363636] transition ease-in text-white border-none cursor-pointer">
      <CardHeader className='p-4'>
        <CardTitle>{name}</CardTitle>
        <CardDescription className='text-[#8b8b8b]'>
          <span className='flex flex-col justify-between items-start gap-1'>
            <span>{type}</span>
            <span>{semester} | {ects} ECTS</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className='p-4 pt-0'>
        <div className='flex justify-between w-full'>
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags && tags.length > 0 && (
              tags.map((tag: string, index: number) => (
                <div key={index} className={`bg-[${CourseTags[tag].backgroundColor}] text-white rounded-md px-2 py-1 text-sm border border-white`}>
                  {CourseTags[tag].shortName}
                </div>
                // ${CourseTags[tag].backgroundColor}
              ))
            )}
          </div>

          {/* Effects */}
          <div className="flex flex-wrap gap-1">
            {effects && effects.length > 0 && (
              effects.map((effect, index) => (
                <div key={index} className={`bg-[${educationEffects[effect].backgroundColor}] text-white rounded-md px-2 py-1 text-sm`}>
                  {educationEffects[effect].shortName}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="bg-[#FFC1E1]"></div>
        </CardContent>
      </Card >
  )
}

export default CourseCard
