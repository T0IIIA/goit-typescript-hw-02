import { Hit } from "../App.types";


export interface ImageGalleryProps {
  items: Hit[]
  onOpen: (result: string) => void
}