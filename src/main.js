import { createApp } from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; //flexbox

import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';

const app = createApp(App)

app.use(PrimeVue);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Card', Card);

app.mount('#app');
