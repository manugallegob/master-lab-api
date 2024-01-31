import Axios from 'axios'
import { CharacterEntityApi } from './character-collection.api-model';

const url = "https://rickandmortyapi.com/api/character/"

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(url);
  let pages = data.info.pages
  let characters = data.results;

  if (data.info.pages > 1) {
    for (let i = 2; i <= pages; i++) {
      const { data: pageData } = await Axios.get(`${url}?page=${i}`);
      console.log(`${url}?page=${i}`)
      characters = [...characters, ...pageData.results]
 
    }
  }
  return characters;
};

 export const getCharacter = async (id: string): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};
