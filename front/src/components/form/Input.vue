<template>
  <div class="input">
    <label v-if="this.labelText !== ''">
      {{ this.labelText }}
    </label>
    <input
      v-model="this.text"
      :type="this.type"
      :placeholder="this.placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  model: {
    prop: '',
    event: ''
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.input {

}
</style>
