<template>
  <view-content>
    <nav-bar />
    <search-section />
    <team-section />
  </view-content>
</template>

<script>
  import ViewContent from './styled-components/Content';

  import NavBar from './Home/NavBar.vue';
  import SearchSection from './Home/SearchSection.vue';
  import TeamSection from './Home/TeamSection.vue';

  export default {
    name: 'HomeView',
    components: {
      ViewContent,
      NavBar,
      SearchSection,
      TeamSection,
    },
  };
</script>
