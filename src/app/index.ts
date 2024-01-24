import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";

import { router } from "@/app/providers";

import App from "./App.vue";

export const application = createApp(App).use(router).use(PrimeVue);
application.component("Dropdown", Dropdown);
