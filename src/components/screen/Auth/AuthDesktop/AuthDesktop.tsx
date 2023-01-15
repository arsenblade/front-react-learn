import {useState, useEffect} from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import FormInput from '../../../ui/FormInput/FormInput'
import styles from './AuthDesktop.module.scss'
import cn from 'classnames'
import { validEmail } from '../../../../utils/regex'
import Button from '../../../ui/Button/Button'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'

const AuthDesktop = () => {
  const [type, setType] = useState<'login' | 'registration'>('login')
  const {user, isLoading} = useAuth()
  const {isVisible} = useTypedSelector(state => state.authModal)
  const {registration, login, toggleModalAuth} = useActions()
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
    if(width <= 950) {
      toggleModalAuth({isVisible: false})
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
    toggleModalAuth({isVisible: false})
  }

  if(isLoading === true || user) {
    return (null)
  }

  return (
      isVisible ?
      <div className={styles.authContainer} onClick={() => toggleModalAuth({isVisible: false})}>
          <form className={cn(styles.authForm)} onSubmit={handleSubmit(onSubmit)} onClick={(e) => e.stopPropagation()}>
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
                <div className={styles.typeBtn} onClick={() => setType('registration')}>Зарегистрироваться</div>
                <button type='submit' disabled={!isValid}>
                  <Button className={styles.btnAuth} children={'Войти'} color={'Pink'} disabled={!isValid}/>
                </button>            
              </div>
            }
            {type === 'registration' &&
              <div className={styles.btnContainer}>
                <div className={styles.typeBtn} onClick={() => setType('login')}>Войти</div>
                <button type='submit'>
                  <Button className={styles.btnAuth} children={'Зарегистрироваться'} color={'Pink'} disabled={!isValid}/>
                </button>
              </div>
            }
          </form>
      </div> : null
  )
}

export default AuthDesktop