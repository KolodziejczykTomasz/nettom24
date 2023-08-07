import './assets/styles/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquarePhone, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSquarePhone, faSquareEnvelope, faSquareFacebook, faSquareInstagram);

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.mount('#app')