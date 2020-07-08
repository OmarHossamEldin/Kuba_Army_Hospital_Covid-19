import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import Vuetify from 'vuetify';
import vueCookie from 'vue-cookie';
import VueHtmlToPaper from 'vue-html-to-paper';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
        '/css/app.css',
        '/css/style.css'
    ]
  }

  Vue.use(VueHtmlToPaper, options);

Vue.use(vueCookie);
Vue.use(VueSweetalert2);
Vue.use(Vuetify);

Vue.use(InertiaApp)

const app = document.getElementById('app')

new Vue({
  vuetify: new Vuetify(),
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app)
