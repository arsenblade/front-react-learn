import { FC, useEffect} from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import {FieldValues, SubmitHandler, useForm} from 'react-hook-form'
import styles from './AuthMobile.module.scss'
import cn from 'classnames'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import FormInput from '../../../ui/FormInput/FormInput'
import { validEmail } from '../../../../utils/regex'
import Button from '../../../ui/Button/Button'

interface IAuthProps {
  type: 'registration' | 'login'
}

const AuthMobile:FC<IAuthProps> = ({type}) => {
  const {user, isLoading} = useAuth()
  const {registration, login, toggleModalAuth} = useActions()
  const navigate = useNavigate()
  const {width} = useWindowDimensions()

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
    mode: "onChange"
  })

  useEffect(() => {
    if(width >= 950) {
      navigate('/')
      toggleModalAuth({isVisible: true})
    }
  }, [width])

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
          <h1>Email: arsen@mail.ru</h1>
          <h1>Password: 123456</h1>
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
                <Button className={styles.btnAuth} children={'Войти'} color={'Pink'} disabled={!isValid}/>
              </button>            
            </div>
          }
          {type === 'registration' &&
            <div className={styles.btnContainer}>
              <Link to='/login'>Войти</Link>
              <button type='submit' disabled={!isValid}>
                <Button className={styles.btnAuth} children={'Зарегистрироваться'} color={'Pink'} disabled={!isValid}/>
              </button>
            </div>
          }
        </form>
    </div>
    </>
    
  )
}

export default AuthMobile