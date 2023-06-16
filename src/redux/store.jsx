import { rootReducer } from "../redux/reducer/index";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
export const store = createStore(rootReducer, composeWithDevTools());
