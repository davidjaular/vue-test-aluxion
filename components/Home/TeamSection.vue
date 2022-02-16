<template>
  <team-content>
    <titles>
      <span>Team</span>
      <h2>Aluxioners</h2>
    </titles>
    <aluxioner-section>
      <aluxioner-card
        v-for="aluxioner in aluxioners"
        :key="aluxioner.id"
        @click="
          aluxioner.id < 7
            ? modalShow(
                aluxioner.name,
                aluxioner.id,
                aluxioner.stopHome,
                aluxioner.stopWork,
              )
            : undefined
        "
      >
        <img :src="aluxioner.img" />
        <h3>{{ aluxioner.name }}</h3>
        <span>
          {{ aluxioner.title }}
        </span>
      </aluxioner-card>
    </aluxioner-section>
    <modal v-if="isModalVisible">
      <modal-content>
        <button @click="modalShow">cerrar</button>
        <span>Hey {{ name }},</span>
        <span>¿Cuál es tu rumbo, aluxioner?</span>
        <buttons>
          <NuxtLink :to="`/search/${id}?stopId=${stopHome}`">
            <button>casa</button>
          </NuxtLink>
          <NuxtLink :to="`/search/${id}?stopId=${stopWork}`">
            <button>aluxion</button>
          </NuxtLink>
        </buttons>
      </modal-content>
    </modal>
  </team-content>
</template>

<script>
  import TeamContent, {
    Titles,
    AluxionerCard,
    AluxionerSection,
    ModalContent,
    Buttons,
  } from '../styled-components/TeamSection';
  import Modal from './Modal.vue';
  import data from '~/assets/data';

  export default {
    name: 'TeamSection',
    components: {
      TeamContent,
      Titles,
      AluxionerCard,
      AluxionerSection,
      Modal,
      ModalContent,
      Buttons,
    },
    data() {
      return {
        aluxioners: data,
        isModalVisible: false,
        name: 'Aluxioner',
        id: 0,
        stopHome: 0,
        stopWork: 0,
      };
    },
    methods: {
      modalShow(name, id, home, work) {
        this.isModalVisible = !this.isModalVisible;
        this.name = name;
        this.id = id;
        this.stopHome = home;
        this.stopWork = work;
      },
    },
  };
</script>
