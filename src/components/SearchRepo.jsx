import { Octokit } from '@octokit/core';
import { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import SortRepos from './SortRepos';

function SearchRepo() {
  const { name, setName } = useContext(MyContext);
  const { repos, setRepos } = useContext(MyContext);

  const callApi = async (e) => {
    setName(e.target.value);
    const octokit = new Octokit({
      auth: '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',
    });

    let allRepos = await octokit.request(`GET /search/repositories?q=${name}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
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

  return (
    <div>
      <input
        style={{ width: '160px' }}
        type="text"
        placeholder="Search Public Repositories"
        name="search"
        value={name}
        onChange={callApi}
      />
      <SortRepos />
    </div>
  );
}

export default SearchRepo;
