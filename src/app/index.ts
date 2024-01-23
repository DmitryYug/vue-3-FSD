import { createApp } from "vue";

import { router } from "@/app/providers";

import App from "./App.vue";

export const application = createApp(App).use(router);
