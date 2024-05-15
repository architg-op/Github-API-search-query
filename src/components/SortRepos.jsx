import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import { Octokit } from '@octokit/core';

export default function SortRepos() {
  const { name, setName } = useContext(MyContext);
  const { repos, setRepos } = useContext(MyContext);

  const callApiSorted = async (menuItem) => {
    const octokit = new Octokit({
      auth: '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',
    });

    let allRepos = await octokit.request(
      `GET /search/repositories?q=${name}&sort=${menuItem}&order=desc`,
      {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
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

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      callApiSorted(menuItem);
    };
  };

  return (
    <Dropdown>
      <MenuButton>Sort By</MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        <MenuItem onClick={createHandleMenuClick('stars')}>Stars</MenuItem>
        <MenuItem onClick={createHandleMenuClick('Watchers count,')}>
          Watchers count
        </MenuItem>
        <MenuItem onClick={createHandleMenuClick('score')}>Score</MenuItem>
        <MenuItem onClick={createHandleMenuClick('name')}>Name</MenuItem>
        <MenuItem onClick={createHandleMenuClick('created')}>Created</MenuItem>
        <MenuItem onClick={createHandleMenuClick('updated')}>Updated</MenuItem>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E6',
  700: '#0059B3',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
  };
  z-index: 1;
  `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:active {
    background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${
      theme.palette.mode === 'dark' ? blue[300] : blue[200]
    };
    outline: none;
  }
  `
);