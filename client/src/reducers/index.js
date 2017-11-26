import { combineReducers } from 'redux';
// IMPORT THE INDIVIDUAL REDUCERS:

import { news, dates, sources } from './news';

export default combineReducers( { news, dates, sources } );
