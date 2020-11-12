/* global window */
import LogRocket from "logrocket";
import "./app";

if (window.location.toString().indexOf("localhost") === -1) {
  LogRocket.init("yxvjmb/soko");
}
