import { defineComponent } from 'vue';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      require: false,
    },
  },

  computed: {
    agendaItemIcon() {
      const agendaItemType = this.agendaItem.type;
      const agendaItemIcon = agendaItemIcons[agendaItemType];

      return `/assets/icons/icon-${agendaItemIcon}.svg`;
    },

    agendaItemTimePeriod() {
      const agendaItemStartsAt = this.agendaItem.startsAt;
      const agendaItemEndsAt = this.agendaItem.endsAt;

      return `${agendaItemStartsAt} - ${agendaItemEndsAt}`;
    },

    agendaItemIsTalk() {
      const agendaItemType = this.agendaItem.type;
      return agendaItemType === 'talk';
    },
    agendaItemTitle() {
      const agendaItemType = this.agendaItem.type;
      const agendaItemTitle = this.agendaItem.title;

      return agendaItemTitle || agendaItemDefaultTitles[agendaItemType];
    },
    agendaItemDescription() {
      const agendaItemDescription = this.agendaItem.description;
      return agendaItemDescription ?? false;
    },
  },

  template: `
    <div class="agenda-item">
    <div class="agenda-item__col">
      <img :src="agendaItemIcon" class="icon" :alt="agendaItemTitle"/>
    </div>
    <div class="agenda-item__col" :data-time="agendaItemTimePeriod">{{ agendaItemTimePeriod }}</div>
    <div class="agenda-item__col">
      <h3 class="agenda-item__title">{{ agendaItemTitle }}</h3>
      <p v-if="agendaItemIsTalk" class="agenda-item__talk">
        <span>{{ agendaItem.speaker }}</span>
        <span class="agenda-item__dot"></span>
        <span class="agenda-item__lang">{{ agendaItem.language }}</span>
      </p>
      <p v-if="agendaItemDescription">{{ agendaItem.description }}</p>
    </div>
    </div>`,
});
