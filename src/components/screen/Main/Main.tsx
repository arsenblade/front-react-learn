import React from 'react'
import Footer from '../Footer/Footer'
import AfterLearnCourse from './AfterLearnCourse/AfterLearnCourse'
import CourseAuthors from './CourseAuthors/CourseAuthors'
import OurProgram from './OurProgram/OurProgram'
import PaymentCourse from './PaymentCourse/PaymentCourse'
import PersonalProject from './PersonalProject/PersonalProject'
import PresentCourse from './PresentCourse/PresentCourse'

const Main = () => {
  return (
    <div>
      <PresentCourse />
      <AfterLearnCourse />
      <OurProgram />
      <PersonalProject />
      <CourseAuthors />
      <PaymentCourse />
      <Footer color='black' />
    </div>
  )
}

export default Main