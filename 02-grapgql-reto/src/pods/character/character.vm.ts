export interface Character {
  id: string,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
  },
  location: {
    name: string,
  },
  image: string,
  episode: string[]
}

export const createEmptyHotel = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  type: '',
  gender: '',
  origin: {
    name: '',
  },
  location: {
    name: '',
  },
  image: '',
  episode: []
});
