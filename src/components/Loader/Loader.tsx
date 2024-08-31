import { FC } from 'react'
import s from './Loader.module.css'
import {FallingLines} from 'react-loader-spinner'

const Loader: FC = () => {
    return (
        <div className={s.loading}>
            <FallingLines
            color="#ffffff"
            width="65"
            visible={true}
            aria-label="falling-circles-loading"
            />
        </div>
    )
}

export default Loader