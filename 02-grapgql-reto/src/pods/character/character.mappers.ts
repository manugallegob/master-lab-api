import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: {
    name: character.origin.name
  },
  location: {
    name: character.location.name,
  },
  image: character.image,
  episode: character.episode.map(ep => ep.name)
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: {
      name: character.origin.name,
    },
    location: {
      name: character.location.name,
    },
    image: character.image,
  } as unknown) as apiModel.Character);
