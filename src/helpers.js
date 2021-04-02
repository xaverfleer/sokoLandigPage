export function isEarlyBird(that) {
  return -1 < that.$route.path.indexOf("/early-bird/");
}

export function kursToEarlyBird(courseRoute) {
  return {
    ...courseRoute,
    to: courseRoute.to.split("/kurs/").join("/early-bird/"),
  };
}
