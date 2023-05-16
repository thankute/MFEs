import { createApp } from "vue";
import App from "./App.vue";
import HomeView from "./views/HomeView.vue";

createApp(HomeView).mount("#app");

import("./bootstrap");
