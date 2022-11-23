import React, {useEffect} from 'react'
import Footer from '../../../components/screen/Footer/Footer'
import TopicTest from '../../../components/screen/TopicsReact/TopicTest/TopicTest'
import { useActions } from '../../../hooks/useActions'

const TopicTestPage = () => {
  const {cleanCurrentQuestion} = useActions()

  useEffect(() => {
    return () => {
      cleanCurrentQuestion()
    };
  }, []);

  return (
    <>
      <TopicTest />
      <Footer color='white' />
    </>
  )
}

export default TopicTestPage