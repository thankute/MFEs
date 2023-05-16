import { createApp } from "vue";
import HomeView from "./views/HomeView.vue";

export default function placeHello(el: any) {
  createApp(HomeView).mount(el);
}

// const mount = (el: any) => {
//   const app = createApp(HelloWorld);
//   app.mount(el); // this a function from Vue.
// };
// // We are running through container and we should export the mount function
// export { mount };
