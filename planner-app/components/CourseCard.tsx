import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { educationEffects, CourseTags } from '@/const';
import { CourseCardProps } from '@/types';
import { CourseBadge } from '.';


const CourseCard = ({name, semester, type, ects, tags = [], effects = []}: CourseCardProps) => {
  return (
    <Card className="bg-[#282828] hover:bg-[#363636] transition ease-in text-white border-none cursor-pointer">
      <CardHeader className='p-4 pb-1'>
        <CardTitle className='font-normal'>{name}</CardTitle>
        <CardDescription className='text-[#8b8b8b]'>
          <span className='flex flex-col justify-between items-start gap-1'>
            <span>{type}</span>
            <span>{semester} | {ects} ECTS</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className='px-4 pt-0 pb-2'>
        <div className='flex justify-between w-full'>
          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {tags && tags.length > 0 && (
              tags.map((tag: string, index: number) => (
                <CourseBadge
                  key={index}
                  text={CourseTags[tag].shortName}
                  textColor={"#ffffff"}
                  bgColor={CourseTags[tag].backgroundColor}
                />
              ))
            )}
          </div>

          {/* Effects */}
          <div className="flex flex-wrap gap-1">
            {effects && effects.length > 0 && (
              effects.map((effect, index) => (
                <CourseBadge
                  key={index}
                  text={educationEffects[effect].shortName}
                  textColor={"#ffffff"}
                  bgColor={educationEffects[effect].backgroundColor}
                />
              ))
            )}
          </div>
        </div>
        </CardContent>
      </Card >
  )
}

export default CourseCard
