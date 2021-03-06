import React from 'react';
import {useSpring, animated} from 'react-spring';
import Button from '../Button';
import Image from '../Image';
import MinusIcon from '../../assets/icons/minus.png';
import PlusIcon from '../../assets/icons/plus.png';
import CoverImg from '../../assets/icons/cover-img.png';
import styles from './ListItem.module.css';

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
}

const ListItem = ({ 
    isOpen = false,
    children,
  }: Props) => {
  const animateProps = useSpring({
    delay: 90,
    from: {opacity: 0},
    to: {opacity: 1},
  })
  return (
    <React.Fragment>
      {isOpen && (
        <animated.div className={styles.cover} style={animateProps}>
        <Button>
          <Image
            src={MinusIcon}
            alt="Minus icon"
          />
        </Button>
        <div className={styles.coverImgWrapper}>
          <Image
            className={styles.coverImg}
            src={CoverImg}
            alt="Cover image"
          />
        </div>
  
        <Button>
          <Image src={PlusIcon} alt="Plus icon" />
        </Button>
      </animated.div>
      )}
      <li className={styles.listItem}>
        {children}
      </li>
    </React.Fragment>
  )
}

export default ListItem;
