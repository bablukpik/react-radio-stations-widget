import * as React from 'react'
import Image from '../Image'
import styles from './Header.module.css'
import BackArrow from '../../assets/icons/back-arrow.png'
import Switch from '../../assets/icons/switch.png'
import Button from '../Button'

const Header: React.FC = () => {
  return (
    <header className={styles.widgetHeader}>
      <nav className={styles.nav}>
        <Button>
          <Image
            data-testid="backArrowIcon"
            src={BackArrow}
            alt="Back arrow icon"
          />
        </Button>
        <h1 data-testid="navHeading" className={styles.navHeading}>
          STATIONS
        </h1>
        <Button>
          <Image
            data-testid="switchIcon"
            src={Switch}
            alt="Switch icon"
          />
        </Button>
      </nav>
    </header>
  )
}

export default Header
