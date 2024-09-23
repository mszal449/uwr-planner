'use client'
import React from 'react'
import { CourseI, SummaryProps } from '@/types'
import { bachelorRequirements, OIKP } from '@/const';
import { useEffect } from 'react';
import { usePlanContext } from '@/context/PlanContext';
import { requiredTags } from '@/const';

const Summary = ( { styles }: SummaryProps ) => {
  const { plan } = usePlanContext();
  const [totalEcts, setTotalEcts] = React.useState(0);
  const [OIKPECTS, setOIKPECTS] = React.useState(0);
  const [proseminar, setProseminar] = React.useState(false);
  const [humanisticEcts, setHumanisticEcts] = React.useState(0);
  const [OWI, setOWI] = React.useState(false);
  const [economical, setEconomical] = React.useState(false);
  const [tags, setTags] = React.useState<{ [key: string]: boolean }>({
    "RPiS": false,
    "IO": false,
    "PiPO": false,
    "ASK": false,
    "SO": false,
    "SK": false,
    "BD": false,
  });


  useEffect(() => { 
    if (plan) {
      let totalEctsAcc = 0;
      let proseminar = false;
      let OIKPECTS = 0;
      let humanisticEcts = 0;
      let OWI = false
      let economical = false
      let tags = {
        "RPiS": false,
        "IO": false,
        "PiPO": false,
        "ASK": false,
        "SO": false,
        "SK": false,
        "BD": false,
      }
  
      plan.semesters.forEach(semester => {
        semester.forEach((course: CourseI) => {
          totalEctsAcc += course.ects;
  
          if (course.type && OIKP.type.includes(course.type)) {
            OIKPECTS += course.ects;
          }
          
          if (course.type === "Proseminarium") {
            proseminar = true
          }
          
          if (course.type === "Humanistyczno-społeczny") {
            humanisticEcts += course.ects;
          }

          if (course.name === "Ochrona własności intelektualnej") {
            OWI = true;
          }

          if (course.tags?.includes("E (Ekonomia)")) {
            economical = true;
          }

          if (course.tags) {
            course.tags.forEach(tag => {
              const tagKey = tag.split(" ")[0] as keyof typeof tags;
              console.log(`tagKey: ${tagKey}`)
              if (tagKey in tags) { 
                tags[tagKey] = true;
              }
            });
          }


        });
      });
  
      setTotalEcts(totalEctsAcc);
      setOIKPECTS(OIKPECTS);
      setProseminar(proseminar);
      setHumanisticEcts(humanisticEcts);
      setOWI(OWI);
      setEconomical(economical);
      setTags(tags);
    }
  }, [plan]);


  return (
    <div className={`${styles} bg-[#282828] flex flex-col md:flex-row justify-center items-center px-5 gap-3`}>
      <div className={`${ totalEcts < bachelorRequirements.totalECTS ? "text-red-500" : "text-green-500"}`}>
        {totalEcts}/{bachelorRequirements.totalECTS} ECTS
      </div>
      <div>
        <span className={`rounded-md p-1 ${ OIKPECTS <= OIKP.bachelor.ects ? "text-red-500" : "text-green-500"}`}>O+I+K+P: {OIKPECTS}/{bachelorRequirements.OIKPECTS} ECTS</span>
      </div>
        <div className={`rounded-md p-1 ${ proseminar ? "text-green-500" : "text-red-500"}`}>Proseminarium: {proseminar ? <span>true</span> : <span>false</span>}</div>
        <div className={`rounded-md p-1 ${ humanisticEcts < 5 ? "text-red-500" : "text-green-500"}`}>Humianistyczno-społeczny: {humanisticEcts}/5 ECTS</div>
        <div className={`${OWI ? "text-green-500" : "text-red-500"}`}>OWI</div>
        <div className={`${economical ? "text-green-500" : "text-red-500"}`}>E</div>
        <h3>Wyniki tagów:</h3>
        {Object.entries(tags).map(([tag]) => (
          <div key={tag} className={tags[tag] ? "text-green-500" : "text-red-500"}>
            {tag}
          </div>
        ))}      
        </div>
  )
}

export default Summary