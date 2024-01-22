import App from './App.vue'
import { router } from '@/app/providers'
import { createApp } from 'vue'

export const application = createApp(App).use(router)