<template>
  <detail-content>
    <detail-nav-bar />
    <lines-section />
  </detail-content>
</template>

<script>
  import DetailContent from './styled-components/Details';
  import DetailNavBar from './Details/NavBar.vue';
  import LinesSection from './Details/LinesSection.vue';

  export default {
    name: 'DetailsView',
    components: {
      DetailContent,
      DetailNavBar,
      LinesSection,
    },
    data() {
      return {
        route: this.$route.query,
        stopId: undefined,
      };
    },
  };
</script>
