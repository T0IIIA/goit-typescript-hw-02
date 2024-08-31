import { FC } from 'react'
import s from './ErrorMessage.module.css'

const ErrorMessage: FC = () => {
  return (
    <p className={s.error}>Oops...something went wrong!</p>
  )
}

export default ErrorMessage