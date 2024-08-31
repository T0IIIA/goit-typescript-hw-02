import axios from 'axios'
import { Data } from './Api.types';

const myAccessKey = 'l1jrEcQi9zAbLOtMDCSDuYecyRjPMdKi6gOD3yY5KZs'

const apiImages = async (searchItems:string, page:number): Promise<Data> => {

  const res = await axios.get<Data>('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${myAccessKey}`,
    },
    params: {
      query: searchItems,
      page: page,
      per_page: 8,
    },
  })
  return res.data;
};

export default apiImages;
