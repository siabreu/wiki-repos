import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`)

      if (data.id) {
        const isExist = repos.find(repo => repo.id === data.id)

        if (!isExist) {
          setRepos(prev => [...prev, data]);
          setCurrentRepo("");
          return
        }
        alert("Repositório já adicionado a lista!");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const handleRemoveRepo = (id) => {
    console.log("removendo repo: ", id)
    setRepos(repos.filter(repo => repo.id !== id))
  }

  return (
    <Container>
      <text>Find</text>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <text>Repo</text>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, index) => <ItemRepo key={index} handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
