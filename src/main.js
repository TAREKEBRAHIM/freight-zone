import './assets/main.css'
import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

// Font Awesome

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faTruck, faPhone, faEnvelope, faArrowRight, faChevronDown, faCheckCircle ,faHome } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter, faFacebook, faLinkedin, faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'


// normalize-css

import 'normalize.css';

library.add(
  faCheckCircle,
  faHome,  faChevronDown, 
  faFacebookF, faInstagram, faPinterestP,  
  faArrowRight,
  faUser,
  faTruck,
  faPhone,
  faEnvelope,
  faYoutube,
  faTwitter,
  faFacebook,
  faLinkedin
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

const head = createHead()

app.use(head)

app.mount('#app')
