import SingleCard from './SingleCard';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Cards() {
  const { repos, setRepos } = useContext(MyContext);
  const { loader, setLoader } = useContext(MyContext);
  console.log(repos);
  return (
    <Box
      sx={{ width: '25%', display: 'flex', height: '25%', marginTop: '50px' }}
    >
      {loader ? <LinearProgress /> : null}
      {repos
        ? repos.map((repo) => <SingleCard key={repo.id} repo={repo} />)
        : null}
    </Box>
  );
}

export default Cards;
