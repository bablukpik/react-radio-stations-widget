import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  )
}

export default App;
