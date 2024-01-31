import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent,
  SelectComponent,
  RatingComponent,
} from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      
      {() => (
        <Form className={classes.root}>
          <img
            style={{ width: '300px', objectFit: 'cover' }}
            src={character.image}
            alt=""
          />
          <TextFieldComponent name="name" label="Name" disabled={true} />
          <TextFieldComponent name="species" label="Species" disabled={true} />
          <TextFieldComponent name="gender" label="Gender" disabled={true} />
          <TextFieldComponent
            name="origin.name"
            label="Origin"
            disabled={true}
          />
          <TextFieldComponent
            name="location.name"
            label="Location"
            disabled={true}
          />
          <TextFieldComponent name="status" label="Status" disabled={true} />
          <TextFieldComponent
            name="episode"
            label="Episodes"
            multiline={true}
            rows={4}
            disabled={true}
          />
          <TextFieldComponent
            name="bestSentences"
            label="Best Sentences"
            multiline={true}
            rows={4}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>

    
  );
};
