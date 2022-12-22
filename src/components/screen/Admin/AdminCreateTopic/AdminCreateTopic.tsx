import {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import { useActions } from '../../../../hooks/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { topicService } from '../../../../service/topics/topics.service'
import { IAnswerCreateTest } from '../../../../store/adminCreateTest/adminCreateTest.interface'
import { IAnswer, ICurrentQuestion } from '../../../../types/question.types'
import Button from '../../../ui/Button/Button'
import Checkbox from '../../../ui/Checkboxes/Checkbox'
import FormInput from '../../../ui/FormInput/FormInput'
import { MyToast } from '../../../ui/MyToast/MyToast'
import Textarea from '../../../ui/Textarea/Textarea'
import styles from './AdminCreateTopic.module.scss'
import {motion} from 'framer-motion'
import { getClassAnimationTest } from '../../../../utils/getClassAnimation'

const adminAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}

const uuid = require('uuid')

const AdminCreateTopic = () => {
  const [valueTextQuestion, setValueTextQuestion] = useState<string>('')
  const [answersCreateTest, setAnswersCreateTest] = useState<IAnswerCreateTest[]>([{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''}])
  const {questions} = useTypedSelector(state => state.adminCreateTest)
  const [valueTextTitle, setValueTextTitle] = useState('')
  const [valueTextDescription, setValueTextDescription] = useState('')
  const [indexQuestion, setIndexQuestion] = useState(0)
  const {addQuestion, cleanQuestions} = useActions()
  const [typeQuestionAnimation, setTypeQuestionAnimation] = useState<'back' | 'next' | 'current'>('current')
  const [isQuestionAnimation, setIsQuestionAnimation] = useState<boolean>(true)

  const isQuestionAdd = answersCreateTest.filter(a => a.answerText !== '').length >= 2 && answersCreateTest.filter(a => a.answerCorrect && a.answerText !== '').length >= 1 && valueTextQuestion !== ''

  useEffect(() => {
    setValueTextQuestion(questions[indexQuestion].textQuestion)
    if(questions[indexQuestion].allAnswer.length === 4) {
      const answers: IAnswerCreateTest[] = questions[indexQuestion].allAnswer.map(a => ({
        answerCorrect: questions[indexQuestion].correctAnswerId.some(correctA => correctA === a.id),
        answerText: a.textAnswer
      }))
      setAnswersCreateTest(answers)
    }
  }, [indexQuestion])

  const handleClickNextTest = () => {
    if(indexQuestion < 4 &&  isQuestionAdd) {
      addQuestion({answers: answersCreateTest, questionsText: valueTextQuestion, questionId: questions[indexQuestion].id})
      setValueTextQuestion('')
      setAnswersCreateTest(([{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''}]))
      setTypeQuestionAnimation('next')
      setIsQuestionAnimation(false)
      setIndexQuestion((prev) => prev + 1)
      setTimeout(() => {
        setTypeQuestionAnimation('back')
        setIsQuestionAnimation(true)
      }, 200)
    }
  }

  const handleClickBackTest = () => {
    if(indexQuestion >= 1 &&  isQuestionAdd) {
      addQuestion({answers: answersCreateTest, questionsText: valueTextQuestion, questionId: questions[indexQuestion].id})
      setValueTextQuestion('')
      setAnswersCreateTest(([{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''}]))
      setTypeQuestionAnimation('back')
      setIsQuestionAnimation(false)
      setIndexQuestion((prev) => prev - 1)
      setTimeout(() => {
        setTypeQuestionAnimation('next')
        setIsQuestionAnimation(true)
      }, 200)
    }
  }

  const handleClickSaveTopic = () => {
    if(indexQuestion === 4 &&  isQuestionAdd && valueTextTitle !== '' && valueTextDescription !== '') {
      const correctAnswerId: string[] = []
      const allAnswer: IAnswer[] = answersCreateTest.map(a => {
        const id = String(uuid.v4())
        if(a.answerCorrect === true && a.answerText !== '') {
          correctAnswerId.push(id)
        }
        return {id, idQuestion: questions[indexQuestion].id, textAnswer: a.answerText}
      })
      const question: ICurrentQuestion = {id: questions[indexQuestion].id, allAnswer, correctAnswerId, textQuestion: valueTextQuestion}
      const allQuestions = questions.map(a => a)
      if(allQuestions.length === 5) {
        allQuestions[4] = question
      }
      else {
        allQuestions.push(question)
      }
      topicService.addTopic(allQuestions, valueTextDescription, valueTextTitle)
      setValueTextQuestion('')
      setValueTextTitle('')
      setValueTextDescription('')
      setAnswersCreateTest(([{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''},{answerCorrect: false, answerText: ''}]))
      cleanQuestions()
      setIndexQuestion(0)
    }
  }


  return (
    <div className={styles.adminCreateTopic}>
      <motion.div className={styles.containerContentTopic}
      variants={adminAnimation}
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.2, once: true}}>
        <div className={styles.videoContent}>
          <h3 className={styles.title}>Добавить лекцию</h3>
        </div>
        <div className={styles.containerTextContent}>
          <div className={styles.containerTitleInput}>
            <span>Название темы</span>
            <FormInput className={styles.titleInput} onChange={(e) => setValueTextTitle(e.target.value)} value={valueTextTitle}/>
          </div>
          <div className={styles.containerDescriptionInput}>
            <span>Описание темы</span>
            <Textarea className={styles.descriptionInput} onChange={(e) => setValueTextDescription(e.target.value)} value={valueTextDescription}/>
          </div>
        </div>
      </motion.div>
      <div className={styles.containerTest}>
        <div className={styles.header}>
          <h2 className={styles.title}>Вопрос:</h2>
          <span className={styles.numberTest}>{indexQuestion + 1} / 5</span>
        </div>
        <div className={styles.createTest} style={{overflow: 'hidden'}}>
          <CSSTransition
          in={isQuestionAnimation}
          classNames={getClassAnimationTest(typeQuestionAnimation)}
          timeout={200}
          mountOnEnter
          unmountOnExit>
            <div>
              <div className={styles.containerQuestionInput}>
                  <FormInput className={styles.questionsInput} placeholder='Напишите вопрос' onChange={(e) => setValueTextQuestion(e.target.value)} value={valueTextQuestion}/>
              </div>
              <div className={styles.answers}>
                <h3 className={styles.title}>Ответы</h3>
                <div className={styles.containerAnswersInput}>
                  <div className={styles.containerAnswerInput}>
                    <Checkbox className={styles.checkbox} 
                      onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                        if(idx === 0) {
                          const currentAnswer: IAnswerCreateTest = {
                            answerCorrect: e,
                            answerText: a.answerText
                          }
                          return currentAnswer
                        }
                        return a
                      }))} 
                      checked={answersCreateTest[0].answerCorrect}
                    />
                    <span>1</span>
                    <Textarea className={styles.answerInput} onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                      if(idx === 0) {
                        const currentAnswer: IAnswerCreateTest = {
                          answerCorrect: a.answerCorrect,
                          answerText: e.target.value
                        }
                        return currentAnswer
                      }
                      return a
                    }))} 
                    value={answersCreateTest[0].answerText}/>
                  </div>
                  <div className={styles.containerAnswerInput}>
                    <Checkbox className={styles.checkbox}
                      onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                        if(idx === 1) {
                          const currentAnswer: IAnswerCreateTest = {
                            answerCorrect: e,
                            answerText: a.answerText
                          }
                          return currentAnswer
                        }
                        return a
                      }))} 
                      checked={answersCreateTest[1].answerCorrect}
                    />
                    <span>2</span>
                    <Textarea className={styles.answerInput} onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                      if(idx === 1) {
                        const currentAnswer: IAnswerCreateTest = {
                          answerCorrect: a.answerCorrect,
                          answerText: e.target.value
                        }
                        return currentAnswer
                      }
                      return a
                    }))} value={answersCreateTest[1].answerText}/>
                  </div>
                  <div className={styles.containerAnswerInput}>
                    <Checkbox className={styles.checkbox}
                      onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                        if(idx === 2) {
                          const currentAnswer: IAnswerCreateTest = {
                            answerCorrect: e,
                            answerText: a.answerText
                          }
                          return currentAnswer
                        }
                        return a
                      }))} 
                      checked={answersCreateTest[2].answerCorrect}
                    />
                    <span>3</span>
                    <Textarea className={styles.answerInput} onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                      if(idx === 2) {
                        const currentAnswer: IAnswerCreateTest = {
                          answerCorrect: a.answerCorrect,
                          answerText: e.target.value
                        }
                        return currentAnswer
                      }
                      return a
                    }))} value={answersCreateTest[2].answerText}/>
                  </div>
                  <div className={styles.containerAnswerInput}>
                    <Checkbox className={styles.checkbox}
                      onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                        if(idx === 3) {
                          const currentAnswer: IAnswerCreateTest = {
                            answerCorrect: e,
                            answerText: a.answerText
                          }
                          return currentAnswer
                        }
                        return a
                      }))} 
                      checked={answersCreateTest[3].answerCorrect}
                    />
                    <span>4</span>
                    <Textarea className={styles.answerInput} onChange={(e) => setAnswersCreateTest(answersCreateTest.map((a, idx) => {
                      if(idx === 3) {
                        const currentAnswer: IAnswerCreateTest = {
                          answerCorrect: a.answerCorrect,
                          answerText: e.target.value
                        }
                        return currentAnswer
                      }
                      return a
                    }))} value={answersCreateTest[3].answerText}/>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
          <motion.div className={styles.containerBtn}
          variants={adminAnimation}
          initial='hidden'
          whileInView='visible'
          viewport={{once: true}}>
            <Button className={styles.btn} color='White' onClick={() => handleClickBackTest()} disabled={indexQuestion < 1 || !isQuestionAdd}>Предыдущий тест</Button>
            {indexQuestion < 4 &&  <Button className={styles.btn} color='Pink' onClick={() => handleClickNextTest()}  disabled={!isQuestionAdd}>Следующий тест</Button>}
            {indexQuestion === 4 &&  <Button className={styles.btn} color='Pink' onClick={() => handleClickSaveTopic()}>Добавить тему</Button>}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdminCreateTopic