import './App.css';
import './defaults.css';

import { Provider } from 'react-redux';
import store from './store.js';

import Titlebar from './components/Titlebar/Titlebar';
import GroupContentArea from './components/Misc/GroupContentArea';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <div id="main-flex-container">
        <div id="group-list">
          <Titlebar titleContent="Groups" />
        </div>
        <div id="group-viewer">
          <Titlebar titleContent="My group" />
          <GroupContentArea />
        </div>
      </div>
      </Provider>
    </div>
  );
}

export default App