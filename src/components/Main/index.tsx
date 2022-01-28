import { useEffect } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import Header from '../Header';
import StationsList from '../StationsList';
import Footer from '../Footer';
import styles from './Main.module.css';
import { fetchStations } from '../../utils/helperFunctions';
import { actionTypes } from 'src/reducers/stationsReducer';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const url = 'https://fc15faa5-0e6b-4657-a9b0-37e876ee51d1.mock.pstmn.io/stations';
    (async () => {
      const fetchedStations = await fetchStations(url);
      if (fetchedStations 
        && Object.keys(fetchedStations).length > 0
      ) {
        dispatch({ type: actionTypes.setStations, payload: fetchedStations });
      }
    })();
  }, [dispatch]);
  const allStations = useSelector((store: RootStateOrAny) => store.allStations);
  return (
    <div className={styles.container}>
      <Header />
        {(!allStations || allStations?.stations.length === 0)
        ? <h1>Loading Stations...</h1>
        : <StationsList state={allStations} />}
      <Footer state={allStations} />
    </div>
  );
}

export default Main;
