import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characters: string;
  character: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characters: '/characters',
  character: '/character/:id?',
};

type NavigationFunction = (id: string) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'editHotel'> {
  editCharacter: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  editCharacter: (id) =>
    id
      ? generatePath(switchRoutes.character, { id })
      : switchRoutes.character,
};
