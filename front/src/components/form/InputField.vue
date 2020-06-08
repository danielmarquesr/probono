<template>
  <div class="input-div">
    <label v-if="!label">
      {{ label }}
    </label>
    <div class="input">
      <input
        class="input-field"
        v-model="input"
        :value="input"
        :type="type"
        :placeholder="placeholder"
        :id="id"
      />
      <div class="icon">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  data() {
    return {
      input: ''
    };
  },
  model: {
    prop: 'text',
    event: 'change-text'
  },
  watch: {
    input(newVal) {
      this.$emit('change-text', newVal);
    }
  },
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    label: {
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
    },
    id: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.input-div {
  margin-bottom: 20px;
  .input {
    display: flex;
    position: relative;
    .input-field {
      width: 100%;
      transition: all 0.5s;
      padding: 10px;
      outline: none;
      border-radius: 5px 0 0 5px;
      border: 1px solid gray;
      font-size: 15px;
      line-height: 20px;
      &:focus {
        border: 2px solid #6500D5;
      }
      // border-width: 0;
      // border-bottom-width: 3px;
      // border-bottom-color: black;
      // font-size: 14px;
      // border-radius: 1px;
    }
    .icon {
      padding: 10px;
      background: #6500D5;
      color: white;
      min-width: 30px;
      text-align: center;
      border-radius: 0 5px 5px 0;
    }
  }
}
</style>
