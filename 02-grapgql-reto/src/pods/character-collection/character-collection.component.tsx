import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import PaginationControlled from 'common/components/pagination/pagination.component';
import { SearchFieldComponent } from 'common/components/search-field';

interface Props {
  characterCollection: CharacterEntityVm[];
  onGetCharacter: (id: string) => void;
  totalPages: number;
  characterCollectionPage: (page: string) => void;
  searchCharacter: (name: string) => void;
  searchName: string;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onGetCharacter,
    totalPages,
    characterCollectionPage,
    searchCharacter,
    searchName,
  } = props;

  return (
    <div className={classes.root}>
      <SearchFieldComponent onSearch={searchCharacter} />
      {searchName && <h2>Search: {searchName}</h2>}
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onGetCharacter={onGetCharacter}
            />
          </li>
        ))}
      </ul>
      <PaginationControlled
        totalPages={totalPages}
        characterCollectionPage={characterCollectionPage}
      />
    </div>
  );
};
