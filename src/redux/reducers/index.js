import {combineReducers} from "redux";
import posts from "./posts";
import regions from "./regions";



const rootReducer = combineReducers({posts, regions})

export default rootReducer;
