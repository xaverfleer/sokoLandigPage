/* eslint-disable import/prefer-default-export */
/* global document, localStorage */
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

export function updatePage() {
  const state = getState();
  document
    .querySelector(".page")
    .setAttribute("data-active-block", state.activeBlock);
}

function setState(change) {
  const oldState = getState();

  const newState = change(oldState);
  if (validateState(JSON.stringify(newState))) {
    localStorage.setItem("soko", JSON.stringify(newState));
    updatePage();
  }
}

export function updateActiveBlock(activeBlock) {
  setState((oldState) => {
    const newState = oldState;
    newState.activeBlock = activeBlock;
    return newState;
  });
}
