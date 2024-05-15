import './App.css';
import SearchRepo from './components/SearchRepo';
import Cards from './components/Cards';
import { MyContext } from './MyContext';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [repos, setRepos] = useState('');
  const [loader, setLoader] = useState(false);
  return (
    <MyContext.Provider
      value={{ name, setName, repos, setRepos, loader, setLoader }}
    >
      <SearchRepo />
      <Cards />
    </MyContext.Provider>
  );
}

export default App;
