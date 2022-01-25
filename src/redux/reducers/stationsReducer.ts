import { setCurrentlyPlaying } from '../../utils/helperFunctions';

export interface StationItems {
  name: string
  number: string
  isOpen: boolean
}

export interface State {
  stations: Array<StationItems>
  currentlyPlaying: string | null
}

interface ActionTypes {
  setCurrentlyPlaying: string
  getStations: string
  updateStations: string
}

export type Action = {
  type: string
  payload: string | boolean | Array<StationItems> | null
}

const initialState: State = {
  stations: [
    {name: 'Putin FM', number: '66,6', isOpen: false},
    {name: 'Dribbble FM', number: '101,2', isOpen: false},
    {name: 'Doge FM', number: '99,4', isOpen: false},
    {name: 'Ballads FM', number: '87,1', isOpen: false},
    {name: 'Maximum FM', number: '142,2', isOpen: false},
  ],
  currentlyPlaying: null,
}

const actionTypes: ActionTypes = {
  getStations: 'GET_STATIONS',
  updateStations: 'UPDATE_STATIONS',
  setCurrentlyPlaying: 'SET_CURRENTLY_PLAYING',
}

export default function stationsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.getStations:
      return state;
    case actionTypes.setCurrentlyPlaying:
      if (state.currentlyPlaying === action.payload) {
        return state;
      }
      return {
        ...state,
        stations: setCurrentlyPlaying(state, action),
        currentlyPlaying: action.payload,
      };
    default:
      return state
  }
}
