import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/character-collection.api-model';

interface Props {
  result: apiModel.CharacterEntityApi
}

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      console.log(result)
      setCharacterCollection(mapToCollection(result, mapFromApiToVm));
      
    });
  };


  return { characterCollection, loadCharacterCollection };
};
