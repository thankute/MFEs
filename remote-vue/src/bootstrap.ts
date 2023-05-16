import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HomeView from "./views/HomeView.vue";

// Mount function to start up the app
const mount = (el: any) => {
  const app = createApp(App).use(router).use(store);
  app.mount(el);
};

// createApp(HomeView).mount("#app");

export { mount };
