import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';

// import css
import './common/modules/uilab/bundle/css/uilab.min.css';
import './common/globals/css/main.scss';

const mount = (el) => {
  const app = createApp(App);
  console.log(el);
  console.log(JSON.stringify(el.getAttribute('data-history')));
  app
    .use(store)
    // .use(router)
    .mount(el);
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app');
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
