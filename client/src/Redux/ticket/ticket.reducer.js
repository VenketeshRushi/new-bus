import { REMOVE_TNO, ADD_TNO, REMOVE } from "./ticket.types";

export const ticketInitalState = {
  ticketNo: [],
};

export const ticketReducer = (state = ticketInitalState, { type, payload }) => {
  switch (type) {
    case REMOVE_TNO:
      return {
        ...state,
        ticketNo: state.ticketNo.filter((ele) => ele !== payload),
      };

    case ADD_TNO:
      return {
        ...state,
        ticketNo: state.ticketNo.concat(payload),
      };

    case REMOVE:
      return {
        ...state,
        ticketNo: [],
      };

    default: {
      return state;
    }
  }
};
