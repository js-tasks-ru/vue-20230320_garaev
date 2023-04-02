import { defineComponent } from 'vue';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',
  components: {
    MeetupAgendaItem,
  },
  props: {
    agenda: {
      type: Array,
      require: true,
    },
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item" v-for="agendaItem in agenda" :key="agendaItem.id">
        <MeetupAgendaItem :agendaItem="agendaItem" />
      </li>
    </ul>`,
});
