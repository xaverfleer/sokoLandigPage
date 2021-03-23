/* global localStorage */
typeof window === "object" &&
  window.addEventListener("storage", () => {
    const newState = JSON.parse(window.localStorage.getItem("soko"));
    setState(() => newState);
  });

const ls =
  typeof localStorage !== "undefined"
    ? localStorage
    : { getItem() {}, setItem() {} };

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

function getSessionId() {
  const state = getState();
  return state && state.session && state.session.sessionId;
}

function getState() {
  const defaultState = { currency: "CHF" };

  const lsState = ls.getItem("soko");
  return (validateState(lsState) && JSON.parse(lsState)) || defaultState;
}

const subscriptions = [];

function callSubscriptions(state) {
  subscriptions.forEach((subscriber) => subscriber(state));
}

function hasSession() {
  const state = getState();
  return state.session != null;
}

function isLoggedIn() {
  const state = getState();
  const activeUntil =
    hasSession() && state.session.ts + 30 * 24 * 60 * 60 * 1000;
  const hasActiveSession = hasSession() && Date.now() < activeUntil;
  return hasActiveSession;
}

function isPaidAccount() {
  const state = getState();
  return (hasSession() && state.session.isPaidAccount) || false;
}

function subscribe(subscriber) {
  if (typeof subscriber === "function") subscriptions.push(subscriber);
  return getState();
}

function setCurrency(currency) {
  setState((oldState) => ({ ...oldState, currency }));
}

function setState(change) {
  const oldState = getState();

  const newState = change(oldState);
  if (validateState(JSON.stringify(newState))) {
    ls.setItem("soko", JSON.stringify(newState));
    callSubscriptions(newState);
  }
}

function updateSession(session) {
  setState((oldState) => ({ ...oldState, session }));
}

function upgradeToPaidAccount() {
  const state = getState();
  if (hasSession()) {
    const oldSession = state.session;
    const newSession = { ...oldSession, isPaidAccount: true };
    updateSession(newSession);
  }
}

export default {
  getSessionId,
  isLoggedIn,
  isPaidAccount,
  updateSession,
  upgradeToPaidAccount,
  setCurrency,
  subscribe,
};
