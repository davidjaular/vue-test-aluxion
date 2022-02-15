<template>
  <Home />
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'IndexPage',
    mounted() {
      this.fetchToken();
    },
    methods: {
      storeToken(user: { accessToken: string }) {
        if (user.accessToken) {
          localStorage.setItem('accessToken', user.accessToken);
        }
      },
      async fetchToken() {
        const { data } = await this.$axios.$get(
          'https://openapi.emtmadrid.es/v1/mobilitylabs/user/login/',
          {
            headers: {
              email: 'work.jaular@gmail.com',
              password: '4815162342Lost..',
              'X-ClientId': 'dac11db2-94b4-4ece-a494-2d23c6f7d5f1',
              passKey:
                'C981D1681C09B827728FFFB753AC82982D75BB34C265451A5EEBEB30708DD8D4F8275A8E2FA60F86B0FA0097597D29D94F65F11D25C36ED9223517BDA3A15802',
            },
          },
        );
        this.storeToken(data[0]);
      },
    },
  });
</script>
