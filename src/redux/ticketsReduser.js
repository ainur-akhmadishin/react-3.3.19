import { GET_TICKETS, BUFFER_TICKET } from './types';

const initState = {
  tickets: [],
  buffer: [],
  bufferFlag: false,
  flag: false,
};

const ticketsReduser = (state = initState, action) => {
  switch (action.type) {
    case GET_TICKETS: {
      const newState = state.tickets;
      if (!action.payload.stop) {
        newState.push(...action.payload.tickets);
      }

      return {
        ...state,
        tickets: newState,
        bufferFlag: true,
      };
    }
    case BUFFER_TICKET:
      return {
        ...state,
        buffer: state.tickets.slice(0, 5),
      };

    default:
      return state;
  }
};

export default ticketsReduser;
