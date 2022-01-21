import * as React from 'react'
import {State} from '../../context/stationsContext'
import {getCurrentlyPlayingStation} from '../../utils/helperFunctions'
import Text from '../Text'
import styles from './index.module.css'
interface Props {
  state: State
}

const Footer: React.FC<Props> = ({ state }) => {
  console.log('state', state)
  const [station] = getCurrentlyPlayingStation(state.currentlyPlaying, state)
  console.log('currently playing station', station);

  return (
    <footer className={styles.footer}>
      {station && (
        <>
          <Text className={styles.footerTitle}>CURRENTLY PLAYING</Text>
          <Text>{station.name}</Text>
        </>
      )}
    </footer>
  )
}

export default Footer
