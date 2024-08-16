import { combineReducers } from 'redux';

import defaultReducer from './default/defaultReducers';
import filterableProductTableReducer from './filterableProductTable/filterableProductTableReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    filterableProductTable: filterableProductTableReducer,
})

export default rootReducer;