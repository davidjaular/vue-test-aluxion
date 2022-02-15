<template>
  <lines-content>
    <span>Autobuses cercanos</span>
    <title-content>
      <span>{{ stopId }}, {{ stop.name }}</span>
      <div>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="selected = true"
        >
          <rect
            width="6.73684"
            height="6.73684"
            rx="1"
            :fill="selected ? 'white' : '#42526E'"
          />
          <rect
            x="9.26318"
            width="6.73684"
            height="6.73684"
            rx="1"
            :fill="selected ? 'white' : '#42526E'"
          />
          <rect
            y="9.26318"
            width="6.73684"
            height="6.73684"
            rx="1"
            :fill="selected ? 'white' : '#42526E'"
          />
          <rect
            x="9.26318"
            y="9.26318"
            width="6.73684"
            height="6.73684"
            rx="1"
            :fill="selected ? 'white' : '#42526E'"
          />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="selected = false"
        >
          <rect
            width="16"
            height="6.73684"
            rx="1"
            :fill="!selected ? 'white' : '#42526E'"
          />
          <rect
            y="9.26318"
            width="16"
            height="6.73684"
            rx="1"
            :fill="!selected ? 'white' : '#42526E'"
          />
        </svg>
      </div>
    </title-content>
    <div />
    <line-component
      v-for="line in stop.dataLine"
      :key="line.line"
      :list="!selected"
      :line="line"
      :stop-id="stopId"
      :select-bus="(id) => selectBus(id)"
      :selected-bus-id="selectedBusId"
    />
  </lines-content>
</template>

<script>
  import LinesContent, {
    TitleContent,
  } from '../styled-components/LinesSection';
  import LineComponent from './LineComponent.vue';

  export default {
    name: 'LinesSection',
    components: {
      TitleContent,
      LinesContent,
      LineComponent,
    },
    data() {
      return {
        selected: true,
        selectedBusId: 0,
        stopId: this.$route.query?.stopId,
        stop: {},
      };
    },
    mounted() {
      this.fetchLineDetail();
    },
    methods: {
      selectBus(busId) {
        this.selectedBusId = busId;
      },
      async fetchLineDetail() {
        const token = localStorage.getItem('accessToken');
        const {
          data: { data },
        } = await this.$axios.get(
          `https://openapi.emtmadrid.es/v1/transport/busemtmad/stops/${this.stopId}/detail/`,
          { headers: { accessToken: token } },
        );

        this.stop = data[0].stops[0];
      },
    },
  };
</script>
