import { createApp } from "vue"
import App from "./App.vue"
import "tailwindcss/tailwind.css"
import router from "./router"
import pinia from "./stores"

const app = createApp(App)
app.use(router).use(pinia).mount("#app")
