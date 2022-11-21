import React from 'react'
import Button from '../../../ui/Button/Button'
import FormInput from '../../../ui/FormInput/FormInput'
import Textarea from '../../../ui/Textarea/Textarea'
import styles from './AdminCreateTopic.module.scss'

const AdminCreateTopic = () => {
  return (
    <div className={styles.adminCreateTopic}>
      <div className={styles.containerContentTopic}>
        <div className={styles.videoContent}>
          <h3 className={styles.title}>Добавить лекцию</h3>
        </div>
        <div className={styles.containerTextContent}>
          <div className={styles.containerTitleInput}>
            <span>Название темы</span>
            <FormInput className={styles.titleInput} />
          </div>
          <div className={styles.containerDescriptionInput}>
            <span>Описание темы</span>
            <Textarea className={styles.descriptionInput}/>
          </div>
        </div>
      </div>
      <div className={styles.containerTest}>
        <div className={styles.header}>
          <h2 className={styles.title}>Добавить тесты</h2>
          <span className={styles.numberTest}>1 / 10</span>
        </div>
        <div className={styles.createTest}>
          <div className={styles.containerQuestionInput}>
            <span>Вопрос:</span>
            <FormInput className={styles.questionsInput}/>
          </div>
          <div className={styles.answers}>
            <h3 className={styles.title}>Ответы</h3>
            <div className={styles.containerAnswersInput}>
              <div className={styles.containerAnswerInput}>
                <span>1</span>
                <Textarea className={styles.answerInput}/>
              </div>
              <div className={styles.containerAnswerInput}>
                <span>2</span>
                <Textarea className={styles.answerInput}/>
              </div>
              <div className={styles.containerAnswerInput}>
                <span>3</span>
                <Textarea className={styles.answerInput}/>
              </div>
              <div className={styles.containerAnswerInput}>
                <span>4</span>
                <Textarea className={styles.answerInput}/>
              </div>
            </div>
          </div>
          <div className={styles.containerBtn}>
            <Button className={styles.btn} color='White'>Предыдущий тест</Button>
            <Button className={styles.btn} color='Pink'>Следующий тест</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminCreateTopic