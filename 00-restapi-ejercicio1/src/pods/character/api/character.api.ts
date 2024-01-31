import Axios from 'axios'
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './character.mock-data';

// export const getHotel = async (id: string): Promise<Hotel> => {
//   return mockHotelCollection.find((h) => h.id === id);
// };

const url = "https://rickandmortyapi.com/api/character/"

export const getHotel = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};

export const saveHotel = async (hotel: Character): Promise<boolean> => {
  return true;
};
