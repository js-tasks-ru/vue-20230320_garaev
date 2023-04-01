import { defineComponent } from 'vue';
import MeetupInfo from './MeetupInfo.js';
import meetups from '../api/meetups.js';

export default defineComponent({
  name: 'MeetupIndex',

  components: {
    MeetupInfo,
  },

  data() {
    return {
      meetups,
      selectedMeetup: 0,
    };
  },

  template: `
    <div class="sample container">
      <p>
        <select v-model="selectedMeetup">
          <option v-for="(meetup, index) in meetups" :key="meetup.id" :value="index">
            {{ index }}: {{ meetup.title }}
          </option>
        </select>
      </p>

      <MeetupInfo
        :organizer="meetups[selectedMeetup].organizer"
        :place="meetups[selectedMeetup].place"
        :date="meetups[selectedMeetup].date"
      />
    </div>
  `,
});
