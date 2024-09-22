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
import { CourseBadge } from '..';

const CourseCard = React.memo((
  {name, semester, type, ects, tags = [], effects = [], 
    onClickAction = () => {}, doubleClickAction = () => {}, selected}: CourseCardProps) => {

  return (
    <Card 
      className={`${selected ? "bg-[#c54b8c] hover:bg-[#c54b8c]" : "bg-[#282828] hover:bg-[#363636]"} 
                  transition ease-in text-white border-[#1f1f1f] cursor-pointer`}
      onClick={onClickAction}
      onDoubleClick={doubleClickAction}>
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
          <div className="flex flex-wrap gap-1">
            {tags && tags.length > 0 && (
              tags.map((tag: string, index: number) => {
                const courseTag = CourseTags[tag] || CourseTags["default"];
                return (
                  <CourseBadge
                    key={index}
                    text={tag}
                    shortText={courseTag.shortName}
                    textColor={"#ffffff"}
                    bgColor={courseTag.backgroundColor}
                  />
                );
              })
            )}
          </div>
          <div className="flex flex-wrap gap-1">
            {effects && effects.length > 0 && (
              effects.map((effect, index) => {
                const educationEffect = educationEffects[effect] || educationEffects["default"];
                return (
                  <CourseBadge
                    key={index}
                    text={effect}
                    shortText={educationEffect.shortName}
                    textColor={"#ffffff"}
                    bgColor={educationEffect.backgroundColor}
                  />
                );
              })
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
});

export default CourseCard;