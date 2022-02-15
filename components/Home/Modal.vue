<template>
  <modal>
    <div class="modal">
      <slot />
    </div>
  </modal>
</template>

<script>
  import Modal from '../styled-components/Modal';

  export default {
    name: 'ModalComponent',
    components: {
      Modal,
    },
  };
</script>
