import { defineComponent } from 'vue';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from './MeetupView.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },

  data() {
    return {
      meetup: null,
      meetupIsLoad: false,
      meetupError: null,
    };
  },

  watch: {
    meetupId: {
      handler(id) {
        this.updateMeetups(id);
      },
      immediate: true,
    },
  },

  methods: {
    updateMeetups(id) {
      this.meetupIsLoad = false;
      this.meetupError = null;
      fetchMeetupById(id)
        .then((meetup) => {
          this.meetup = meetup;
          this.meetupIsLoad = true;
        })
        .catch((e) => {
          this.meetupError = e.message;
        });
    },
  },

  template: `
    <div class="page-meetup">
    <MeetupView v-if="meetupIsLoad" :meetup="meetup"/>

    <UiContainer v-else-if="!meetupIsLoad && !meetupError">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>

    <UiContainer v-else>
      <UiAlert>{{ meetupError }}</UiAlert>
    </UiContainer>
    </div>`,
});
