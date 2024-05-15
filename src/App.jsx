import './App.css';
import SearchRepo from './components/SearchRepo';
import Cards from './components/Cards';
import { MyContext } from './MyContext';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [repos, setRepos] = useState('');
  return (
    <MyContext.Provider value={{ name, setName, repos, setRepos }}>
      <SearchRepo />
      <Cards />
    </MyContext.Provider>
  );
}

export default App;
