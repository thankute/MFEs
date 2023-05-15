import { createApp } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default function placeHello(el: any) {
  createApp(HelloWorld).mount(el);
}

// const mount = (el: any) => {
//   const app = createApp(HelloWorld);
//   app.mount(el); // this a function from Vue.
// };
// // We are running through container and we should export the mount function
// export { mount };
