import { combineReducers } from "redux";
import user from "./user";
import event from "./events";

export default combineReducers({ user, event });
