import React, {useRef} from 'react'
import Footer from '../Footer/Footer'
import AfterLearnCourse from './AfterLearnCourse/AfterLearnCourse'
import CourseAuthors from './CourseAuthors/CourseAuthors'
import OurProgram from './OurProgram/OurProgram'
import PaymentCourse from './PaymentCourse/PaymentCourse'
import PersonalProject from './PersonalProject/PersonalProject'
import PresentCourse from './PresentCourse/PresentCourse'

const Main = () => {
  const scrollToRef = useRef<HTMLDivElement | null>(null)



  return (
    <>
      <PresentCourse myRefToScroll={scrollToRef}/>
      <AfterLearnCourse />
      <OurProgram myRefToScroll={scrollToRef}/>
      <PersonalProject />
      <CourseAuthors />
      <PaymentCourse />
      <Footer color='black' />
    </>
  )
}

export default Main