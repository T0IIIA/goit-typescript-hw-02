import { Hit } from "../App.types"


export interface ImageCardProps {
  item: Hit
  onOpen: (result: string) => void
}
