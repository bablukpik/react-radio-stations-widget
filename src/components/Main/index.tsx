import { useSelector, RootStateOrAny } from 'react-redux';
import Header from '../Header';
import StationList from '../StationsList';
import Footer from '../Footer';
import styles from './Main.module.css';

const Main = () => {
  const allStations = useSelector((store: RootStateOrAny) => store.allStations);
  return (
    <div className={styles.container}>
      <Header />
        <StationList state={allStations} />
      <Footer state={allStations} />
    </div>
  )
}

export default Main;
