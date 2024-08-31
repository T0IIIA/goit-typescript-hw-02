import { ReactElement } from 'react'
import s from './ImageCard.module.css'
import { ImageCardProps } from './ImageCard.type'

const ImageCard = ({ item, onOpen }: ImageCardProps): ReactElement => {
  return (
    <div className={s.imageCard}>
      <img
        onClick={() => onOpen(item.urls.full)}
        src={item.urls.small}
        alt={item.alt_description}
        className={s.image}
      />
    </div>
  )
}

export default ImageCard