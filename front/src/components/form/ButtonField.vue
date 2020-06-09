<template>
  <div>
    <button
      :type="{type}"
      class="button"
      :style="{
        background,
        padding: `${paddingV} ${paddingH}`,
        width,
        height
      }"
      v-on:click.prevent="click()"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonField',
  props: {
    click: {
      type: Function,
      default: () => {},
      required: false
    },
    type: {
      type: String,
      default: '',
      required: false
    },
    background: {
      type: String,
      default: '',
      required: false
    },
    paddingH: {
      type: String,
      default: '0',
      required: false
    },
    paddingV: {
      type: String,
      default: '0',
      required: false
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
  }
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background: rgb(0,191,226);
  background: linear-gradient(
    90deg,
    rgba(0,191,226,1)
    15%,
    rgba(39,105,218,1)
    50%,
    rgba(87,0,208,1) 85%
  );
  border-radius: 5px;
  border: 0 solid;
  cursor: pointer;
}
</style>
