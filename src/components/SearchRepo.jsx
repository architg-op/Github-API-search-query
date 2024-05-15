import { Octokit } from '@octokit/core';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import SortRepos from './SortRepos';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function SearchRepo() {
  const { name, setName } = useContext(MyContext);
  const { repos, setRepos } = useContext(MyContext);
  const { loader, setLoader } = useContext(MyContext);

  const callApi = async () => {
    const octokit = new Octokit({
      auth: '',
    });
    setLoader(true);
    let allRepos = await octokit.request(`GET /search/repositories?q=${name}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    setLoader(false);
    allRepos = allRepos.data.items;
    console.log(allRepos);
    allRepos = allRepos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      stars: repo.stargazers_count,
      description: repo.description,
      language: repo.language,
    }));
    console.log(allRepos);
    setRepos(allRepos);
  };

  const clearAll = () => {
    setRepos([]);
    setName('');
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Search Public Repositories"
          variant="standard"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant="outlined" onClick={callApi}>
          Search
        </Button>
        <SortRepos />
        <Button variant="outlined" onClick={clearAll}>
          Reset
        </Button>
      </Box>
    </div>
  );
}

export default SearchRepo;
