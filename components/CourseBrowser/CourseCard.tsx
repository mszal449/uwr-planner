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
    onClickAction = () => {}, doubleClickAction = () => {}, selected, marked}: CourseCardProps) => {

  return (
    <Card 
    className={`border-2 transition ease-in text-white cursor-pointer
      ${marked ? 
        "border-yellow-500 bg-[#282828] hover:bg-[#363636]" : 
        selected ? 
        "border-purple-400 hover:border-purple-500 bg-[#3b3b3b]" : 
        "border-[#1f1f1f] bg-[#282828] hover:bg-[#363636]"} `}
      onClick={onClickAction}
      onDoubleClick={doubleClickAction}>
      <CardHeader className='p-4 pb-1'>
        <CardTitle className='font-normal'>{name}</CardTitle>
        <CardDescription className='text-[#8b8b8b] select-none'>
          <span className='flex flex-col justify-between items-start gap-1'>
            <span>{type}</span>
            <span>{semester} | {ects} ECTS</span>
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className='px-4 pt-0 pb-2'>
        <div className='flex justify-between items-center w-full gap-1 overflow-hidden overflow-x-scroll no-scrollbar'>
          <div className="flex gap-[1px] ">
            {tags && tags.length > 0 && (
              tags.map((tag: string, index: number) => {
                const courseTag = CourseTags[tag] || CourseTags["default"];
                return (
                  <CourseBadge
                    key={index}
                    text={`Tag: ${tag}`}
                    shortText={courseTag.shortName}
                    textColor={"text-green-400"}
                    borderColor={"border-green-400"}
                  />
                );
              })
            )}
            {!tags && <s className="text-[#8b8b8b] text-sm text-">Tagi</s>}
          </div>
          <div className="flex gap-[1px]">
            {effects && effects.length > 0 && (
              effects.map((effect, index) => {
                const educationEffect = educationEffects[effect] || educationEffects["default"];
                return (
                  <CourseBadge
                    key={index}
                    text={`Efekt: ${effect}`}
                    shortText={educationEffect.shortName}
                    textColor={"text-[#ff9b9b]"}
                    borderColor={"border-[#ff9b9b]"}
                  />
                );
              })
            )}
            {!effects && <s className="text-[#8b8b8b] text-sm">Efekty</s>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
});

export default CourseCard;