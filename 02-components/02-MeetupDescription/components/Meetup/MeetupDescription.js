import { defineComponent } from 'vue';

/**
 * @description component описания страницы Meetup
 */

export default defineComponent({
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
    },
  },

  template: `<p class="meetup-description">{{ description }}</p>`,
});
