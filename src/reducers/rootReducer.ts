import {combineReducers} from 'redux'
//import currentSongDataReducer from './currentSongDataReducer';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';
import linksReducer from './linksReducer';


const rootReducer = combineReducers({
    //songData: currentSongDataReducer,
    user: userReducer,
    projects: projectsReducer,
    links: linksReducer
})
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>