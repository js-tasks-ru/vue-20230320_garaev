import { defineComponent } from './vendor/vue.esm-browser.js';
import PageMeetups from './components/PageMeetups.js';

export default defineComponent({
  name: 'App',

  components: {
    PageMeetups,
  },
  template: `<PageMeetups />`,
});
