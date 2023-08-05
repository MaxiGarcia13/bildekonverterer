import React from 'react';
import { render } from 'react-dom';
import RootComponent from './app/components/Root';
import './i18next';
import './index.css';

render(<RootComponent />, document.getElementById('root'));
