import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Container from './components/Container'
import AppRouter from './routers/AppRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Container>
                    <AppRouter />
                </Container>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
