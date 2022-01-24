import * as React from 'react'
import {State} from '../../context/stationsContext'
import {getCurrentlyPlayingStation} from '../../utils/helperFunctions'
import Text from '../Text'
import styles from './Footer.module.css'
interface Props {
  state: State
}

const Footer: React.FC<Props> = ({ state }) => {
  const [station] = getCurrentlyPlayingStation(state.currentlyPlaying, state)

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

export default Footer
