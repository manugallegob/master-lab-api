import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  // onEdit: (id: string) => void;
  // onDelete: (id: string) => void;
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
      {/* <CardActions>
        <IconButton onClick={() => onEdit(character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};
