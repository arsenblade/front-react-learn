
import { FC} from 'react'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import Button from '../../ui/Button/Button'
import styles from './Auth.module.scss'
import cn from 'classnames'
import { validEmail } from '../../../utils/regex'
import Header from '../Header/Header'
import FormInput from '../../ui/FormInput/FormInput'
import { useActions } from '../../../hooks/useActions'

interface IAuthProps {
  type: 'registration' | 'login'
}

const Auth:FC<IAuthProps> = ({type}) => {
  const {user, isLoading} = useAuth()
  const {registration, login} = useActions()
  const navigate = useNavigate()

  const {
    register,
    formState:{
        errors,
        isValid
    },
    handleSubmit,
    reset,
    getValues
  } = useForm({
    mode: "onBlur"
  })

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    if(type === 'login') {
      login({email: data.email, password: data.password})
      reset();
    }
    if(type === 'registration') {
      registration({email: data.email, password: data.password, avatar: '', name: data.name})
      reset();
    }
  }

  if(user && isLoading === false) {
    navigate('/')
  }

  if(isLoading === true || user) {
    return (null)
  }

  return (
    <>
    <div className={styles.authContainer}>
        <form className={cn(styles.authForm, {
        })} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={styles.title}>{type === 'registration' ? 'Регистрация' : 'Авторизация'}</h1>

          {type === 'registration' && 
            <div className={styles.field}>
              <label htmlFor='name'>Имя:</label>
              <FormInput className={styles.input} 
                id='name'
                type="text" 
                placeholder='Введите имя' 
                {...register('name', 
                  {required:"Поле обязательно к заполнению", 
                    minLength:{
                      value: 2, 
                      message:'Минимум 2 символа'},
                    maxLength:{
                      value: 18,
                      message: 'Максимум 18 символов'                   
              }})}/>
              <div>{errors?.name?.message && 
                <p className={styles.errorText}>{`${errors.name.message || "Ошибка заполнения"}`}</p>
              }</div>
            </div>
          }

          <div className={styles.field}>
            <label htmlFor='email'>Email:</label>
            <FormInput className={styles.input} 
              id='email'
              type="text" 
              placeholder='Введите email' 
              {...register('email', 
                {required:"Поле обязательно к заполнению",
                  pattern: {
                    value:
                      validEmail,
                    message: 'Неправильный формат email'                
            }})}/>
            <div>{errors?.email && 
              <p className={styles.errorText}>{`${errors.email.message || "Ошибка заполнения"}`}</p>
            }</div>
          </div>
          
          <div className={styles.field}>
            <label htmlFor='password'>Пароль:</label>
            <FormInput className={styles.input} 
              type="password" 
              placeholder='Введите пароль' 
              {...register('password', 
                {required:"Поле обязательно к заполнению", 
                minLength:{
                  value: 5, 
                  message:'Минимум 5 символов'},
                maxLength:{
                  value: 18,
                  message: 'Максимум 18 символов'                   
            }})}/>
            <div>{errors?.password && 
              <p className={styles.errorText}>{`${errors.password.message || "Ошибка заполнения"}`}</p>
            }</div>
          </div>
          {type === 'registration' && 
            <div className={styles.field}>
              <label htmlFor='password'>Повторите пароль:</label>
              <FormInput className={styles.input}
                type="password" 
                placeholder='Введите пароль еще раз' 
                {...register('repeatPassword', 
                  {required:"Поле обязательно к заполнению", 
                  minLength:{
                    value: 5, 
                    message:'Минимум 5 символов'},
                    maxLength:{
                      value: 18,
                      message: 'Максимум 18 символов'},
                    validate: {
                      value: value => value === getValues('password'),
                    }               
              })}/>
              <div>{errors?.repeatPassword && 
                <p className={styles.errorText}>{`${errors.repeatPassword.message || "Пароли не совпадают"}`}</p>
              }</div>
            </div>
          }

          {type === 'login' &&
            <div className={styles.btnContainer}>
              <Link to='/registration'>Зарегистрироваться</Link>
              <button type='submit' disabled={!isValid}>
                <Button className={styles.btnAuth} children={'Войти'} color={'Pink'}/>
              </button>            
            </div>
          }
          {type === 'registration' &&
            <div className={styles.btnContainer}>
              <Link to='/login'>Войти</Link>
              <button type='submit' disabled={!isValid}>
                <Button className={styles.btnAuth} children={'Зарегистрироваться'} color={'Pink'}/>
              </button>
            </div>
          }
        </form>
    </div>
    </>
    
  )
}

export default Auth