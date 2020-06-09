<template>
  <div class="create-icon">
    <div class="icon" v-on:click.prevent="click()">
      <FontAwesomeIcon :icon="['fas', 'plus']" size="2x" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

library.add(faPlus);

export default {
  name: 'CreateButton',
  components: {
    FontAwesomeIcon
  },
  props: {
    click: {
      type: Function,
      default: () => {},
      required: false
    },
  }
}
</script>

<style lang="scss" scoped>
.create-icon {
  position: fixed;
  text-align: center;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #6500D5;
  color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  .icon {
    padding: 14px 0;
  }
}
</style>
