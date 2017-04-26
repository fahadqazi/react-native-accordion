import { CombineReducers } from 'redux';
import LibraryReducer form './LibraryReducer';

export default CombineReducers({
    libraries: LibraryReducer
});
