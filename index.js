import shareIt from './components/shareIt.vue';
import shareButton from './components/shareButton.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faWhatsapp, faLinkedin, faRedditAlien } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const shareItPlugin =  {
  install (app, options) {
    library.add(faTwitter, faFacebookF, faWhatsapp, faLinkedin, faRedditAlien, faEnvelope);
    app.component('font-awesome-icon', FontAwesomeIcon);
    app.component('share-it', shareIt);
    app.component('share-button', shareButton);
  }
};

export default shareItPlugin;
