'use client'
import React from 'react'
import { CourseI, SummaryProps } from '@/types'
import { OIKP } from '@/const';
import { useEffect } from 'react';
import { usePlanContext } from '@/context/PlanContext';

const defaultTags = {
  "RPiS": false,
  "IO": false,
  "PiPO": false,
  "ASK": false,
  "SO": false,
  "SK": false,
  "BD": false,
}

const Summary = ( { styles, onClickMark}: SummaryProps ) => {
  const { plan } = usePlanContext();
  const [totalEcts, setTotalEcts] = React.useState(0);        // 170
  const [itEcts, setItEcts] = React.useState(0);              // 66
  const [engineerEcts, setEngineerEcts] = React.useState(0);  // 12
  const [engineerCourseEcts, setEngineerCourseEcts] = React.useState(0); // 10
  const [OIKPECTS, setOIKPECTS] = React.useState(0);
  const [proseminar, setProseminar] = React.useState(false);
  const [humanisticEcts, setHumanisticEcts] = React.useState(0);
  const [OWI, setOWI] = React.useState(false);
  const [economical, setEconomical] = React.useState(false);
  const [tags, setTags] = React.useState<{ [key: string]: boolean }>(defaultTags);

  const infCourses = ["Informatyczny", 
    "Informatyczny 1", 
    "Informatyczny 2", 
    "Informatyczny 3", 
    "Informatyczny inż.",
    "I2.T - teoria inf.",
    "I2.Z - zastosowania inf."]
  


  useEffect(() => { 
    if (plan) {
      let totalEctsAcc = 0;
      let itEcts = 0;
      let engineerEcts = 0;
      let engineerCourseEcts = 0;
      let proseminar = false;
      let OIKPECTS = 0;
      let humanisticEcts = 0;
      let OWI = false
      let economical = false
      let tags = {...defaultTags}
      
      if(!plan.semesters) return;
      
      plan.semesters.forEach(semester => {
        semester.forEach((course: CourseI) => {
          totalEctsAcc += course.ects;
          
          if (infCourses.includes(course.type)) {
            itEcts += course.ects;
          }

          if (course.type && OIKP.type.includes(course.type)) {
            OIKPECTS += course.ects;
          }
          if (course.type == "Informatyczny inż.") {
            engineerEcts += course.ects
          }

          if (course.type == "Kurs inżynierski") {
            engineerCourseEcts += course.ects
          }

          if (course.type === "Proseminarium" || course.type === "Seminarium") {
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
      setEngineerEcts(engineerEcts);
      setEngineerCourseEcts(engineerCourseEcts);
      setItEcts(itEcts);
      setTags(tags);
    }
  }, [plan]);


  return (
    <div className={`${styles} text-sm bg-[#282828] flex flex-col md:flex-row justify-center items-center px-5 gap-2`}>
      <div className={`${ totalEcts < 200 ? "text-red-500" : "text-green-500"}`}>{totalEcts}/{200} ECTS</div>
      <div className={`rounded-md p-1 ${ OIKPECTS < OIKP.engineer.ects ? "text-red-500" : "text-green-500"}`}>
        <button onClick={() => onClickMark("type", OIKP.type)}>
          O+I+K+P: {OIKPECTS}/{OIKP.engineer.ects} ECTS
        </button>
        </div>

      <div className={`rounded-md p-1 ${ itEcts < 66 ? "text-red-500" : "text-green-500"}`}>
        <button onClick={() => onClickMark("type", infCourses)}>
          Inf: {itEcts}/66 ECTS
        </button>
      </div>

      <div className={`rounded-md p-1 ${ engineerEcts < 12 ? "text-red-500" : "text-green-500"}`}>
        <button onClick={() => onClickMark("type", ["Informatyczny inż."])}>
          I.inż: {engineerEcts}/12 ECTS
        </button>
      </div>

      <div className={`rounded-md p-1 ${ engineerCourseEcts < 10 ? "text-red-500" : "text-green-500"}`}>
        <button onClick={() => onClickMark("type", ["Kurs inżynierski"])}>
          K.inż: {engineerCourseEcts}/10 ECTS
        </button>
      </div>

      <div className={`rounded-md p-1 ${ proseminar ? "text-green-500" : "text-red-500"}`}>
        <button onClick={() => onClickMark("type", ["Proseminarium"])}>
          Proseminarium
        </button>
      </div>

      <div className={`rounded-md p-1 ${ humanisticEcts < 5 ? "text-red-500" : "text-green-500"}`}>
        <button onClick={() => onClickMark("type", ["Humanistyczno-społeczny"])}>
          Humanistyczno-społeczny: {humanisticEcts}/5 ECTS
        </button>
      </div>

      <div className={`${OWI ? "text-green-500" : "text-red-500"}`}>
            OWI
      </div>

      <div className={`${economical ? "text-green-500" : "text-red-500"}`}>
        <button onClick={() => onClickMark("tag", "E")}>
          E
        </button>
      </div>

      <h3>Tagi:</h3>
      <div className='flex gap-1'>
        {Object.entries(tags).map(([tag]) => (
          <div key={tag} className={tags[tag] ? "text-green-500" : "text-red-500"}>
            <button onClick={() => onClickMark("tag", tag)}>{tag}</button>
          </div>
        ))}      
      </div>
      </div>
  )
}

export default Summary