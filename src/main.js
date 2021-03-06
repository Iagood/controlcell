require('./bootstrap')
require('./plugins')
import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'

import { faVuejs } from '@fortawesome/free-brands-svg-icons'
library.add(faVuejs)

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import loader from 'vue-ui-preloader'

Vue.use(loader)

dom.watch()

library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/**
 * Global Components
 */
Vue.component('preloader-component', () => import('./components/PreLoader'))

new Vue({
  render: h => h(BaseTemplate),
  router,
  store
}).$mount('#app')
