import { State } from 'src/redux/reducers/stationsReducer';
import { getCurrentlyPlayingStation } from '../../utils/helperFunctions';
import Text from '../Text';
import styles from './Footer.module.css';

interface Props {
  state: State;
}

const Footer = ({ state }: Props) => {
  const [station] = getCurrentlyPlayingStation(state)

  return (
    <footer className={styles.footer}>
      {station && (
        <>
          <Text className={styles.footerTitle}>Currently playing</Text>
          <Text>{station.name}</Text>
        </>
      )}
    </footer>
  )
}

export default Footer;
