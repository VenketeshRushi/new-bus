import { SAVE_DATA, FILTER_DATA } from "./filter.actiontypes";

export const filterInitalState = {
  data: [],
  backupdata: [],
};

export const filterReducer = (state = filterInitalState, { type, payload }) => {
  switch (type) {
    case FILTER_DATA:
      return {
        ...state,
        data: payload,
      };

    case SAVE_DATA:
      return {
        ...state,
        data: payload,
        backupdata: payload,
      };

    default: {
      return state;
    }
  }
};
