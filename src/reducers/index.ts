import { combineReducers } from "redux";
import stationsReducer from './stationsReducer';
const reducers = combineReducers({
  allStations: stationsReducer,
});
export default reducers;
