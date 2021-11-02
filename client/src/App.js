import './App.css';
import './defaults.css';

import { Provider } from 'react-redux';
import store from './store.js';

import Titlebar from './components/Titlebar/Titlebar';
import GroupContentArea from './components/Misc/GroupContentArea';
import GroupList from './components/Groups/GroupList';
import GroupOptionsBar from './components/Cards/GroupOptionsBar';
import CardModal from './components/Modals/Card Modal/CardModal';
import Overlay from './components/Misc/Overlay';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Overlay /> */}
        <div id="main-flex-container">
          <div id="group-list" style={{position: "fixed"}}>
            <Titlebar titleContent="Groups" />
            <GroupList />
          </div>
          <div id="group-menu" style={{position: "fixed", zIndex: 10}}>
              <div>
              <Titlebar titleContent="My group" />
              <GroupOptionsBar />
              <div style={{width: "100%", height: "1rem", background: "linear-gradient(var(--drop-shadow-color), transparent)"}} />
              </div>
          </div>
          <GroupContentArea cards={store.getState().group.groups.cards}/>
        </div>
        {/* <CardModal /> */}
      </Provider>
    </div>
  );
}

export default App