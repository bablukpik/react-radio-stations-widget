import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './StationsList.module.css';
import ListItem from '../ListItem';
import Text from '../Text';
import {useSpring, animated} from 'react-spring';
import { State, StationItem } from 'src/reducers/stationsReducer';

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
                onClick={() => handleClick(item)}
                key={item.id}
                id={item.id}
                isOpen={item.isOpen}
              >
                <Text>{item.name}</Text>
                <Text bold>{item.id}</Text>
              </ListItem>
            </React.Fragment>
          )
        })}
      </animated.ul>
    </div>
  )
}

export default StationList;
