import React, {useState, useEffect} from 'react'
import Button from '../../../ui/Button/Button'
import Checkbox from '../../../ui/Checkboxes/Checkbox'
import RadioButton from '../../../ui/RadioButtons/RadioButton'
import styles from './TopicTest.module.scss'
import cn from 'classnames'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { useActions } from '../../../../hooks/useActions'
import { userTest } from '../../../../service/userTest/userTest.service'
import { useAuth } from '../../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import { getClassAnimationTest } from '../../../../utils/getClassAnimation'
import Modal from '../../../ui/Modal/modal'
import { getPointUser } from '../../../../utils/getPointUser'

const TopicTest = () => {
  const {allAnswersUser, allQuestions, currentQuestion, currentTopicTitle, idTest, nextTopicId} = useTypedSelector(state => state.currentTest)
  const [idCheckedBtns, setIdCheckedBtns] = useState<string[]>([])
  const {addAnswer, changeCurrentQuestion, cleanCurrentQuestion} = useActions()
  const [typeQuestionAnimation, setTypeQuestionAnimation] = useState<'back' | 'next' | 'current'>('current')
  const [isQuestionAnimation, setIsQuestionAnimation] = useState<boolean>(true)
  const [isViewModal, setIsViewModal] = useState<boolean>(false)
  const {user} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(allAnswersUser && allAnswersUser.length > 0 && currentQuestion) {
      const answers = allAnswersUser.find(answer => answer.idQuestion === currentQuestion.id)
      if(answers !== undefined) {
        setIdCheckedBtns(answers.IdAnswersUser)
      }
    }
  }, [currentQuestion])

  const handleClickCheckbox = (checked: boolean, answerId: string) => {
    if(checked === true) {
      setIdCheckedBtns([...idCheckedBtns, answerId])
    }
    if(checked === false) {
      const filteredCheckbox = idCheckedBtns.filter(idCheckbox => idCheckbox !== answerId)
      setIdCheckedBtns([...filteredCheckbox])
    }
  }

  const currentIndex = allQuestions?.findIndex(question => question.id === currentQuestion?.id)

  const nextTest = () => {
    if(currentQuestion && currentIndex !== undefined && allQuestions) {
      if(currentIndex < allQuestions.length - 1) {
        addAnswer({
          idQuestion: currentQuestion.id,
          idAnswersUser: idCheckedBtns
        })
        setTypeQuestionAnimation('next')
        setIsQuestionAnimation(false)

        setTimeout(() => {
          changeCurrentQuestion({index: currentIndex + 1})
          setIdCheckedBtns([])
          setTypeQuestionAnimation('back')
          setIsQuestionAnimation(true)
        }, 200)
      }
    }
  }

  const prevTest = () => {
    if(currentQuestion && currentIndex !== undefined && allQuestions) {
      if(currentIndex > 0) {
        addAnswer({
          idQuestion: currentQuestion.id,
          idAnswersUser: idCheckedBtns
        })
        setTypeQuestionAnimation('back')
        setIsQuestionAnimation(false)
        setTimeout(() => {
          changeCurrentQuestion({index: currentIndex - 1})
          setIdCheckedBtns([])
          setTypeQuestionAnimation('next')
          setIsQuestionAnimation(true)
        }, 200)
      }
    }
  }

  const saveResultTest = () => {

    if(currentQuestion && currentIndex !== undefined && allQuestions && user && idTest && nextTopicId) {
      const indexAnswer = allAnswersUser?.findIndex(answer => answer.idQuestion === currentQuestion.id)
      let userAnswers = allAnswersUser?.map(a => ({...a}));
      
      if(userAnswers && indexAnswer !== undefined && indexAnswer !== -1) {
        userAnswers[indexAnswer] = {
          IdAnswersUser: idCheckedBtns,
          idQuestion: currentQuestion.id
        }
      }
      else if (userAnswers && (indexAnswer === undefined || indexAnswer === -1)) {
        userAnswers.push({
          IdAnswersUser: idCheckedBtns,
          idQuestion: currentQuestion.id
        })
      }

      if(userAnswers) {
        userTest.saveResultsTest(user.id, idTest, userAnswers, allQuestions)
        setIsViewModal(true)

        if(nextTopicId === 'lastTopic') {
          setTimeout(() => {
            cleanCurrentQuestion()
            navigate('/topics/react')
          }, 3500)
        }
        else {
          setTimeout(() => {
            cleanCurrentQuestion()
            navigate(`/topics/react/${nextTopicId}`)
          }, 3500)
        }
      }
    }
  }

  return (
    <div className={styles.topicTest}>
      {allQuestions && currentQuestion &&  currentIndex !== undefined && currentIndex !== -1 &&     
      <>
        <div className={styles.header}>
          <h1 className={styles.title}>Вопросы по теме {currentTopicTitle}</h1>
          <span className={styles.numberTest}>{currentIndex + 1} / {allQuestions?.length}</span>
        </div>
        <div className={styles.contentTest} style={{overflow: 'hidden'}}>
          <CSSTransition
          in={isQuestionAnimation}
          classNames={getClassAnimationTest(typeQuestionAnimation)}
          timeout={200}
          mountOnEnter
          unmountOnExit>
            <div>
              <h2 className={styles.questions}>{currentQuestion?.textQuestion}</h2>
              <div className={styles.answersContainer}> 
                {currentQuestion.correctAnswerId.length === 1 && currentQuestion.allAnswer.map(answer => <RadioButton onChange={(checked) => checked === true && setIdCheckedBtns([answer.id])} key={answer.id} className={styles.answer} type='radioBtn' checked={idCheckedBtns.some(idRadio => idRadio === answer.id)}>{answer.textAnswer}</RadioButton>)}
                {currentQuestion.correctAnswerId.length > 1 && currentQuestion.allAnswer.map(answer => <Checkbox onChange={(checked) => handleClickCheckbox(checked, answer.id)} key={answer.id} className={styles.answer} checked={idCheckedBtns.some(idCheckbox => idCheckbox === answer.id)}>{answer.textAnswer}</Checkbox>)}
              </div>
            </div>
          </CSSTransition>
          <div className={styles.containerBtn}>
            <Button className={cn(styles.btn, styles.btnBack)} onClick={() => prevTest()} color='White'  disabled={currentIndex <= 0 || idCheckedBtns.length === 0}>Назад</Button>
            {currentIndex < allQuestions.length - 1 && <Button className={cn(styles.btn, styles.btnNext)} onClick={() => nextTest()} color='Pink' disabled={allQuestions.length - 1 <= currentIndex || idCheckedBtns.length === 0}>Следующий вопрос</Button>}
            {currentIndex === allQuestions.length - 1 && <Button className={cn(styles.btn, styles.btnNext)} onClick={() => saveResultTest()} color='Pink' disabled={idCheckedBtns.length === 0}>Завершить тест</Button>}
          </div>
        </div>
      </>}
      <Modal active={isViewModal} setActive={setIsViewModal} count={Number(getPointUser(allQuestions || [], [...allAnswersUser || [], {
          IdAnswersUser: idCheckedBtns,
          idQuestion: currentQuestion?.id || ''
        }]))}/>
    </div>
  )
}

export default TopicTest