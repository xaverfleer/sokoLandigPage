/* global localStorage */
function validateState(stringState) {
  let state;
  try {
    state = JSON.parse(stringState);
  } catch (e) {
    return false;
  }
  const checks = [
    (s) => typeof s === "object",
    (s) => s && typeof s.activeBlock === "string",
    (s) => ["01", "02", "03", "04", "05"].indexOf(s.activeBlock) > -1,
  ];

  const isValid = checks.reduce((acc, check) => {
    return acc && check(state);
  }, true);

  return isValid;
}

function getState() {
  const defaultState = {
    activeBlock: "01",
  };

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

function updateActiveBlock(activeBlock) {
  setState((oldState) => {
    const newState = oldState;
    newState.activeBlock = activeBlock;
    return newState;
  });
}

function updatePath(path) {
  setState((oldState) => {
    const newState = oldState;
    newState.path = path;
    return newState;
  });
}

export default { updateActiveBlock, updatePath, subscribe };
