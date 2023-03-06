import { REMOVE_TNO, ADD_TNO, REMOVE } from "./ticket.types";

export const removeData = (data) => ({ type: REMOVE_TNO, payload: data });

export const saveData1 = (data) => ({ type: ADD_TNO, payload: data });

export const removeall = (data) => ({ type: REMOVE, payload: data });
