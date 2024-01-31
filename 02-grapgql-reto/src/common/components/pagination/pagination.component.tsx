import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
  totalPages: number;
  characterCollectionPage: (page: string | number) => void;
}

export default function PaginationControlled(props: Props) {
    const {totalPages, characterCollectionPage} = props;
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      characterCollectionPage(value)
    };
  
    return (
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination color="primary" count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    );
  }
