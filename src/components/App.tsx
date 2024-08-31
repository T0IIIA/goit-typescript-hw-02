import s from './App.module.css'
import SearchBar from "./SearchBar/SearchBar"
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import { useEffect, useState } from 'react'
import apiImages from '../servises/api'
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import ImageModal from './ImageModal/ImageModal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Hit } from './App.types'


// ---------------------------
function App() {
    const [searchValue, setSearchValue] = useState<string>('')
    const [hits, setHits] = useState<Hit[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [modalImage, setModalImage] = useState<string>('')



    
// ---------------------------
    const notify = () => toast('Enter text for search pls 🙏', {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        closeButton: false,
        style: {
            width: '250px',
            fontSize: '18px'
        }
    })

    const loadMoreBtn = ():void => {
        setPage(prev => prev + 1)
    }

    const handleSetQuery = (query: string): void => {
        if(searchValue === query){
            return
        }
      setHits([])
      setPage(1)
      setSearchValue(query)
    }

    const openModal = (query: string): void => {
      setModalIsOpen(true)
      setModalImage(query)
    }

    const closeModal = (): void => {
      setModalIsOpen(false)
      setModalImage('')
    }



// -----------API-------------
    useEffect(() => {
        if(!searchValue){
            return
        }

        const getData = async (): Promise<void> => {
          try {
            setIsError(false)
            setIsLoading(true)
            const res = await apiImages(searchValue, page)
            
            setHits((prev) => [...prev, ...res.results])
            setTotalPages(res.total_pages)
          } catch (err) {
            setIsError(true)
          } finally {
            setIsLoading(false)
          }
        }
        getData()
    }, [searchValue, page])

    
    return (
        <div className={s.container}>
            <SearchBar onSubmit={handleSetQuery} notify={notify} />
            <ImageGallery items={hits} onOpen={openModal} />
            {isError && <ErrorMessage /> }
            {isLoading && <Loader />}
            {totalPages > page && !isLoading && searchValue && <LoadMoreBtn onClick={loadMoreBtn} />}
            <ImageModal isClose={closeModal} isOpen={modalIsOpen} modalImage={modalImage}/>
            <ToastContainer />
        </div>
    )
}


// ---------------------------
export default App