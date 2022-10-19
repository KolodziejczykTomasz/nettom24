import { createApp } from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquareFacebook,  faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";

import App from './App.vue'
import router from "./router";

library.add(
  faSquareFacebook,
  faSquareGithub,
  faSquareEnvelope,
  faSquarePhone
);


createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");