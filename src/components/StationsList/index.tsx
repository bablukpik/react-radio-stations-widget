import React from 'react';
import { useDispatch } from 'react-redux';
import {useSpring, animated} from 'react-spring';
import styles from './StationsList.module.css';
import ListItem from '../ListItem';
import Text from '../Text';
import { State, StationItem } from '../../reducers/stationsReducer';
import Button from '../Button';

interface Props {
  state: State;
}

const StationList = ({ state }: Props) => {
  const { stations } = state;
  const {stationListWrapper, stationList} = styles
  const animateProps = useSpring({delay: 100, opacity: 1, from: {opacity: 0}})

  const dispatch = useDispatch()
  const handleClick = (item: StationItem) => {
    dispatch({
      type: 'SET_CURRENTLY_PLAYING',
      payload: { 
        station: { ...item, isOpen: !item.isOpen },
      },
    });
  }
  return (
    <div className={stationListWrapper}>
      <animated.ul className={stationList} style={animateProps}>
        {stations.map((item: StationItem) => {
          return (
            <React.Fragment key={item.id}>
              <ListItem
                key={item.id}
                isOpen={item.isOpen}
              >
                <Button onClick={() => handleClick(item)}>
                  <Text>{item.name}</Text>
                </Button>
                <Button onClick={() => handleClick(item)}>
                  <Text bold>{item.id}</Text>
                </Button>
              </ListItem>
            </React.Fragment>
          )
        })}
      </animated.ul>
    </div>
  )
}

export default StationList;
