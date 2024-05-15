import SingleCard from './SingleCard';
import { useContext } from 'react';
import { MyContext } from '../MyContext';

function Cards() {
  const { repos, setRepos } = useContext(MyContext);
  console.log(repos);
  return (
    <div>
      {repos
        ? repos.map((repo) => <SingleCard key={repo.id} repo={repo} />)
        : null}
    </div>
  );
}

export default Cards;
