import Main from './components/Main'
import {StationProvider} from './context/stationsContext'
function App() {
  return (
    <StationProvider>
      <div className="App">
        <Main />
      </div>
    </StationProvider>
  )
}

export default App
