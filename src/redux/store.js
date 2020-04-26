import { createStore } from "redux";
import rootReducer from "./rootReducer.js";



export const store = createStore(rootReducer);
