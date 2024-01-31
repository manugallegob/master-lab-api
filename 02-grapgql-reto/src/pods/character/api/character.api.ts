import Axios from 'axios';
import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCities, mockHotelCollection } from './character.mock-data';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

const url = 'https://rickandmortyapi.com/api/character';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query1 = gql`
    query GetCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        episode {
          name
        }
      }
    }
  `;
  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query1,
    { id }
  );
  return character;
};

export const saveHotel = async (character: Character): Promise<boolean> => {
  return Axios.put(`${url}/${character.id}`, character)
    .then(function (response) {
      console.log(response);
      return true;
    })
    .catch(function (error) {
      console.log(error);
      return false;
    });
};
