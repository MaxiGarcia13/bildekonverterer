import React, { memo, SFC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeControl from '../ThemeControl';
import HeaderComponent from '../Header';
import RoutesComponent from '../Routes';
import { Provider } from 'react-redux';
import configureStore from '../../store';

const store = configureStore();

const RootComponent: SFC = () => {
    return (
        <Provider store={store}>
            <ThemeControl>
                <Router>
                    <HeaderComponent />
                    <RoutesComponent />
                </Router>
            </ThemeControl>
        </Provider>
    );
};

export default memo(RootComponent);
