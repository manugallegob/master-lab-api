import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState('');
  const { characterCollection, loadCharacterCollection, numberOfPages } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection(page, search);
  }, [page, search]);

  const handleGetCharacter = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handleGetCharactersPage = (page: string) => {
    setPage(page);
  }

  const handleGetCharacterFilterName = (name: string) =>{
    setSearch(name);
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onGetCharacter={handleGetCharacter}
      totalPages={numberOfPages}
      characterCollectionPage={handleGetCharactersPage}
      searchCharacter={handleGetCharacterFilterName}
      searchName={search}
    />
  );
};
