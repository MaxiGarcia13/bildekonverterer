import { combineReducers } from 'redux';

import configurations from './configurations';
import image_processing from './imageProcessing';

const rootReducers = combineReducers({ configurations, image_processing });

export default rootReducers;
