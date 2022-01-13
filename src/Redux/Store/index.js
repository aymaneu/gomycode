import { createStore } from "redux";
import { MovieReducer } from "../Reducer/Movies";
import { UserReducer } from "../Reducer/user";


const store= createStore(MovieReducer);

export default store;