import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './StationsList.module.css';
import ListItem from '../ListItem';
import Text from '../Text';
import {useSpring, animated} from 'react-spring';
import { State, StationItems } from 'src/redux/reducers/stationsReducer';

interface Props {
  state: State;
}

const StationList = ({ state }: Props) => {
  const { stations } = state;
  const {stationListWrapper, stationList} = styles
  const animateProps = useSpring({delay: 100, opacity: 1, from: {opacity: 0}})

  const dispatch = useDispatch()
  const handleClick = (e: any) => {
    dispatch({type: 'SET_CURRENTLY_PLAYING', payload: e.currentTarget.id})
  }
  return (
    <div className={stationListWrapper}>
      <animated.ul className={stationList} style={animateProps}>
        {stations.map((item: StationItems) => {
          return (
            <React.Fragment key={item.number}>
              <ListItem
                onClick={handleClick}
                isOpen={item.isOpen}
                key={item.number}
                id={item.number}
              >
                <Text>{item.name}</Text>
                <Text bold>{item.number}</Text>
              </ListItem>
            </React.Fragment>
          )
        })}
      </animated.ul>
    </div>
  )
}

export default StationList;
