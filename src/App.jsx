import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';

import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}