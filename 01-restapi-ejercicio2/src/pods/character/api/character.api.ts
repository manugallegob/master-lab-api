import Axios from 'axios'
import { Character } from './character.api-model';

const url = '/api/characters';

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

export const saveHotel = async (character: Character): Promise<boolean> => {
  
 return Axios.put(`${url}/${character.id}`, character)
  .then(function (response) {
    return true
  })
  .catch(function (error) {
    return false
  });


};
