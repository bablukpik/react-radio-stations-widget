import { State } from '../reducers/stationsReducer';

const getCurrentlyPlayingStation = (state: State) => {
  const station = [...state.stations].find(item => item.isOpen);
  return station;
}

async function fetchStations(url: string): Promise<State> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export { getCurrentlyPlayingStation, fetchStations }
