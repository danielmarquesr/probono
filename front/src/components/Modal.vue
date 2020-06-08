<template>
  <div
    class="custom-modal"
    v-on:click="closeModal"
    v-show="modalIsOpen"
  >
    <div
      class="modal-container"
      v-on:click.stop=""
      :style="{
        width,
        height
      }"
    >
      <div
        @click="closeModal"
        class="btn-close"
      >
        <FontAwesomeIcon :icon="['fas', 'times']" size="lg" />
      </div>
      <div class="modal__title">
        <slot name="title" />
      </div>
      <div class="modal__body">
        <slot />
      </div>
      <div class="modal__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

library.add(faTimes);

export default {
  name: 'Modal',
  components: {
    FontAwesomeIcon
  },
  model: {
    prop: 'modalIsOpen',
    event: 'change-modal-is-open'
  },
  props: {
    modalIsOpen: {
      type: Boolean,
      default: false,
      required: true
    },
    width: {
      type: String,
      default: '',
      required: false
    },
    height: {
      type: String,
      default: '',
      required: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('change-modal-is-open', !this.modalIsOpen);
    }
  }
};
</script>


<style lang="scss" scoped>
.custom-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  background: rgba(0, 0, 0, 0.7);

  .modal-container {
    position: relative;
    min-width: 40vw;
    min-height: auto;
    padding: 12px;
    margin: 10vh 0;
    background: white;
    border-radius: 5px;
    flex-direction: column;

    .btn-close {
      position: absolute;
      top: 12px;
      right: 15px;
      color: gray;
      cursor: pointer;
    }

    .modal__title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px;
      color: gray;
    }

    .modal__body {

    }

    .modal__footer > * {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
}
</style>
