import { SAVE_DATA, FILTER_DATA } from "../filter/filter.actiontypes";

export const filterdata = () => ({ type: FILTER_DATA });

export const saveData = (data) => ({ type: SAVE_DATA, payload: data });
