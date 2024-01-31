import Axios from 'axios'
import { CharacterEntityApi } from './character-collection.api-model';
const url = '/api/characters';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const {data } = await Axios.get(url);
  return data;
};

 export const getCharacter = async (id: string): Promise<CharacterEntityApi[]> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};
