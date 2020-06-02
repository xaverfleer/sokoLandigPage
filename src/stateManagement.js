/* global localStorage */
function validateState(stringState) {
  let state;
  try {
    state = JSON.parse(stringState);
  } catch (e) {
    return false;
  }
  const checks = [(s) => typeof s === "object"];

  const isValid = checks.reduce((acc, check) => {
    return acc && check(state);
  }, true);

  return isValid;
}

function getState() {
  const defaultState = {};

  const lsState = localStorage.getItem("soko");
  return (validateState(lsState) && JSON.parse(lsState)) || defaultState;
}

const subscriptions = [];

function callSubscriptions(state) {
  subscriptions.forEach((subscriber) => subscriber(state));
}

function subscribe(subscriber) {
  if (typeof subscriber === "function") subscriptions.push(subscriber);
  return getState();
}

function setState(change) {
  const oldState = getState();

  const newState = change(oldState);
  if (validateState(JSON.stringify(newState))) {
    localStorage.setItem("soko", JSON.stringify(newState));
    callSubscriptions(newState);
  }
}

function updatePath(path) {
  setState((oldState) => ({ ...oldState, path }));
}

function updateSession(session) {
  setState((oldState) => ({ ...oldState, session }));
}

export default { updatePath, updateSession, subscribe };
