import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [numberOfPages, setNumberOfPages] = React.useState<number>();

  const loadCharacterCollection = (idPage: string, nameChar: string = '') => {
    getCharacterCollection(idPage, nameChar).then((result) => {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
      result.pages === null
        ? setNumberOfPages(0)
        : setNumberOfPages(result.pages);
    });
  };

  return { characterCollection, loadCharacterCollection, numberOfPages };
};
