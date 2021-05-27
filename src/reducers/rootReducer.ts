import {combineReducers} from 'redux'
//import currentSongDataReducer from './currentSongDataReducer';
import userReducer from './userReducer';
import projectsReducer from './projectsReducer';


const rootReducer = combineReducers({
    //songData: currentSongDataReducer,
    user: userReducer,
    projects: projectsReducer
})
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>