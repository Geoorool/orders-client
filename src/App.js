import React from 'react';
import { Provider } from 'react-redux'
import { store } from './actions/store'
import UserInfo from './components/UserInfo';
import UserList from './components/UserList';

function App() {
  return (
    <Provider store={store}>
      <div className="container pt-3">
        <div className="row">
          <div className="col">
            <UserList />
          </div>
          <div className="col">
            <UserInfo/>
          </div>
        </div>
        </div>
      </Provider>
  );
}

export default App;
