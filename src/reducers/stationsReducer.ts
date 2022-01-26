export interface StationItem {
  name: string;
  id: string;
  isOpen: boolean;
}

export interface State {
  stations: Array<StationItem>
  currentlyPlaying: StationItem | null;
}

interface ActionTypes {
  setCurrentlyPlaying: string
  setStations: string
}

export type Action = {
  type: string;
  payload: {
    stations?: StationItem[];
    station?: StationItem;
  };
}

const initialState: State = {
  stations: [
    {name: 'Putin FM', id: '66,6', isOpen: false},
    {name: 'Dribbble FM', id: '101,2', isOpen: false},
    {name: 'Doge FM', id: '99,4', isOpen: false},
    {name: 'Ballads FM', id: '87,1', isOpen: false},
    {name: 'Maximum FM', id: '142,2', isOpen: false},
  ],
  currentlyPlaying: null,
}

const actionTypes: ActionTypes = {
  setStations: 'SET_STATIONS',
  setCurrentlyPlaying: 'SET_CURRENTLY_PLAYING',
}

export default function stationsReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.setStations:    
      return {
        ...state,
        stations: action?.payload?.stations,
      };
    case actionTypes.setCurrentlyPlaying:
      const copyStations = state.stations;

      const currentlyPlayingStation = copyStations.find(item => item.isOpen) as StationItem;
      if (currentlyPlayingStation 
        && currentlyPlayingStation?.id !== action.payload.station?.id
      ) {
        currentlyPlayingStation.isOpen = false;
        copyStations[copyStations.findIndex(el => el.id === currentlyPlayingStation?.id)] = currentlyPlayingStation;
      }

      const objIndex = copyStations.findIndex(((obj: StationItem) => obj.id === action.payload?.station?.id));
      copyStations[objIndex].isOpen = action?.payload?.station?.isOpen as boolean;
      return {
        stations: copyStations,
      };
    default:
      return state
  }
}
