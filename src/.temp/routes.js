const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/xavmac/Documents/sokoLandigPage/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/xavmac/Documents/sokoLandigPage/src/pages/404.vue")

export default [
  {
    path: "/blog/:title/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
