import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';  // Dùng để xử lý các action bất đồng bộ
import rootReducer from './redux/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      {}
    </Provider>
  );
}

export default store;
