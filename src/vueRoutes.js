import Account from "./components/Account.vue";
import AccountDeleted from "./components/AccountDeleted.vue";
import Audio from "./components/Audio.vue";
import ChangedPassword from "./components/ChangedPassword.vue";
import ConfirmEmail from "./components/ConfirmEmail.vue";
import Course from "./components/Course.vue";
import DefinedPassword from "./components/DefinedPassword.vue";
import EmailConfirmed from "./components/EmailConfirmed.vue";
import EmailConfirmFailed from "./components/EmailConfirmFailed.vue";
import EnterNewPassword from "./components/EnterNewPassword.vue";
import LoggedIn from "./components/LoggedIn.vue";
import LoggedOut from "./components/LoggedOut.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";
import Order from "./components/Order.vue";
import PasswordLinkSent from "./components/PasswordLinkSent.vue";
import PageNotFound from "./components/PageNotFound.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";
import Register from "./components/Register.vue";
import RegisterMeeting from "./components/RegisterMeeting.vue";
import Registered from "./components/Registered.vue";
import Registered2 from "./components/Registered2.vue";
import RegisteredMeeting from "./components/RegisteredMeeting.vue";
import ResetPassword from "./components/ResetPassword.vue";
import SetInitialPassword from "./components/SetInitialPassword.vue";
import UpgradedAccount from "./components/UpgradedAccount.vue";

export default [
  { path: "/account", component: Account },
  { path: "/account-deleted", component: AccountDeleted },
  { path: "/Audio", component: Audio },
  { path: "/changed-password", component: ChangedPassword },
  { path: "/course/:block", component: Course },
  { path: "/confirm-email", component: ConfirmEmail },
  { path: "/defined-password", component: DefinedPassword },
  { path: "/email-confirm-failed", component: EmailConfirmFailed },
  { path: "/email-confirmed", component: EmailConfirmed },
  { path: "/enter-new-password", component: EnterNewPassword },
  { path: "/logged-in", component: LoggedIn },
  { path: "/logged-out", component: LoggedOut },
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/order", component: Order },
  { path: "/password-link-sent", component: PasswordLinkSent },
  { path: "/page-not-found", component: PageNotFound },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/register", component: Register },
  { path: "/register-meeting", component: RegisterMeeting },
  { path: "/registered", component: Registered },
  { path: "/registered2", component: Registered2 },
  { path: "/registered-meeting", component: RegisteredMeeting },
  { path: "/reset-password", component: ResetPassword },
  { path: "/set-initial-password", component: SetInitialPassword },
  { path: "/upgraded-account", component: UpgradedAccount },
  { path: "/", redirect: "course/block-1" },
  { path: "/kursblock-1", redirect: "course/block-1" },
  { path: "/kursblock-2", redirect: "course/block-2" },
  { path: "/kursblock-3", redirect: "course/block-3" },
  { path: "/kursblock-4", redirect: "course/block-4" },
  { path: "/kursblock-5", redirect: "course/block-5" },
  { path: "*", redirect: "page-not-found" },
];
