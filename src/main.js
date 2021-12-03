import { createApp } from 'vue';
import App from './App.vue';
import { Example } from 'component-composable';

const app = createApp(App);
app.use(Example);
app.mount('#app');
