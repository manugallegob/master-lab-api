import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onGetCharacter: (id: string) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onGetCharacter } = props;

  return (
    <Card>
      <CardHeader
        title={
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => onGetCharacter(character.id)}
          >
            {character.name}
          </span>
        }
        subheader={character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            style={{ height: 10, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
