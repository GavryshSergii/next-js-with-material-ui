export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
};

export const failure = (error) => ({
  type: actionTypes.FAILURE,
  error,
});

export const increment = () => ({ type: actionTypes.INCREMENT });

export const decrement = () => ({ type: actionTypes.DECREMENT });

export const reset = () => ({ type: actionTypes.RESET });

export const loadData = () => ({ type: actionTypes.LOAD_DATA });

export const loadDataSuccess = (data) => ({
  type: actionTypes.LOAD_DATA_SUCCESS,
  data,
});

export const startClock = () => ({ type: actionTypes.START_CLOCK });

export const tickClock = (isServer) => ({
  type: actionTypes.TICK_CLOCK,
  light: !isServer,
  ts: Date.now()
});
