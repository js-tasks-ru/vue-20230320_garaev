import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
    date: {
      type: Number,
      require: false,
    },
  },
  computed: {
    formatDate() {
      const date = new Date(this.date);
      const optionFormat = { year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString(navigator.language, optionFormat);
    },

    formatISODate() {
      const date = new Date(this.date);

      return date.toISOString().substr(0, 10);
    },
  },

  template: `
    <ul class="meetup-info">
    <li>
      <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg"/>
      {{ organizer }}
    </li>
    <li>
      <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg"/>
      {{ place }}
    </li>
    <li>
      <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg"/>
      <time :datetime="formatISODate">{{ formatDate }}</time>
    </li>
    </ul>`,
});
