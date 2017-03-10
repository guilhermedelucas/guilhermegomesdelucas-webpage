import { combineReducers } from 'redux';

import sidebar from './SideBarReducers';
import home from './HomeReducers';
import colorslider from './ColorSliderReducers';

export default combineReducers({
    sidebar, home, colorslider
})
