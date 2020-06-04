import Account from "./components/Account.vue";
import AccountDeleted from "./components/AccountDeleted.vue";
import ConfirmEmail from "./components/ConfirmEmail.vue";
import Course from "./components/Course.vue";
import EmailConfirmed from "./components/EmailConfirmed.vue";
import EmailConfirmFailed from "./components/EmailConfirmFailed.vue";
import LoggedIn from "./components/LoggedIn.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import RegisterMeeting from "./components/RegisterMeeting.vue";
import Registered from "./components/Registered.vue";
import RegisteredMeeting from "./components/RegisteredMeeting.vue";
import ChangedPassword from "./components/ChangedPassword.vue";

export default [
  { path: "/account", component: Account },
  { path: "/account-deleted", component: AccountDeleted },
  { path: "/changed-password", component: ChangedPassword },
  { path: "/course/:block", component: Course },
  { path: "/confirm-email", component: ConfirmEmail },
  { path: "/email-confirm-failed", component: EmailConfirmFailed },
  { path: "/email-confirmed", component: EmailConfirmed },
  { path: "/logged-in", component: LoggedIn },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/register-meeting", component: RegisterMeeting },
  { path: "/registered", component: Registered },
  { path: "/registered-meeting", component: RegisteredMeeting },
  { path: "/kursblock-1", redirect: "course/block-1" },
  { path: "/kursblock-2", redirect: "course/block-2" },
  { path: "/kursblock-3", redirect: "course/block-3" },
  { path: "/kursblock-4", redirect: "course/block-4" },
  { path: "/kursblock-5", redirect: "course/block-5" },
  { path: "*", redirect: "course/block-1" },
];
