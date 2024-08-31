
import { FC } from 'react'
import s from './LoadMoreBtn.module.css'
import { LoadMoreProps } from './LoadMoreBtn.type'

const LoadMoreBtn: FC<LoadMoreProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.btn}> ⇧ Load More  ⇧</button>
  )
}

export default LoadMoreBtn