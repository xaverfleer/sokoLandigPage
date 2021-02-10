export function isEarlyBird(that) {
  return -1 < that.$route.path.indexOf("/early-bird/");
}
