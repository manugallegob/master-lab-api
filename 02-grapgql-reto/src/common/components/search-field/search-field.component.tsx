import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';

interface Props {
  onSearch: (name: string) => void;
}

export const SearchFieldComponent: React.FunctionComponent<Props> = (props) => {
  const { onSearch } = props;

  const [name, setName] = React.useState('');

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={() => {
        onSearch(name);
      }}
    >
      {() => (
        <Form>
          <Box
            component="div"
            sx={{
              '& > :not(style)': { m: 1, width: 500 },
            }}
          >
            <Stack spacing={2} direction="row">
              <TextField
                name="search"
                label="Search"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Button type="submit" variant="contained">
                Buscar
              </Button>
            </Stack>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
