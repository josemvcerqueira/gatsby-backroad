export default [
  {
    path: "/",
    text: "home",
  },
  {
    path: "/tours",
    text: "tours",
  },
  {
    path: "/blog",
    text: "blog",
  },
  {
    path: "/contact",
    text: "contact",
  },
] as ReadonlyArray<LinkObj>

interface LinkObj {
  path: string
  text: string
}
