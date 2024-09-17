'use client';
import { getCourses } from './services';
import { CourseI } from '@/types';

import { useEffect, useState } from 'react';
import Head from 'next/head';


export default function Home() {
  const [courses, setCourses] = useState<CourseI[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const data  = await getCourses({name: "A ", tags: ["AZ (algorytmika i złożoność obliczeniowa)"]});
      setCourses(data.result);
    };
    fetchCourses();
  }, []);


  return (
    <div>
      <Head>
        <title>Courses List</title>
      </Head>
      <h1>Courses</h1>
      <br />
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};