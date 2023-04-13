

import './bootstrap';
import { createApp } from 'vue';
import Vuetify from '../plugins/vuetify'

const app = createApp({});

app.use(Vuetify)
app.mount('#app');
