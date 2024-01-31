import Axios from 'axios';
import { RequestDocument, gql } from 'graphql-request';
import { graphQLClient } from 'core/api';
import { CharacterEntityApi } from './character-collection.api-model';

interface GetHotelCollectionResponse {
  characters: {
    info: {
      pages: number;
    };
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (
  idPage: string,
  filterName: string,
): Promise<{ pages: number; results: CharacterEntityApi[] }> => {
  let query1;
  const idPageNumber = parseInt(idPage, 10);
    query1 = gql`
      query CharacterFromPageId($idPageNumber: Int $filterName: String) {
        characters(page: $idPageNumber filter: {name: $filterName}) {
          info {
            pages
          }
          results {
            id
            name
            species
            image
          }
        }
      }
    `;

  const { characters } =
    await graphQLClient.request<GetHotelCollectionResponse>(query1, {
      idPageNumber,
      filterName
    });
  return { pages: characters.info.pages, results: characters.results };
};
