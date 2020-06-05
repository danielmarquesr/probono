<template>
  <div class="nav">
    <div class="nav-div">
      <div
        :class="getType() === 'client' ? 'link-active link-active-client': ''"
        class="link link-register"
        v-on:click="setType('client')"
      >
        CLIENTE
      </div>
      <div
        :class="getType() === 'lawyer' ? 'link-active link-active-lawyer': ''"
        class="link link-login"
        v-on:click="setType('lawyer')"
      >
        ADVOGADO
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonSwitch',
  data() {
    return {
      type: 'client'
    }
  },
  methods: {
    setType(type) {
      if(type === 'client' && this.$route.query.type !== 'client')
        this.$router.push({ query: { type: 'client' }});
      else if(type === 'lawyer' && this.$route.query.type !== 'lawyer')
        this.$router.push({ query: { type: 'lawyer' }});
    },
    getType() {
      return this.$route.query.type;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 20px 0;
  &-div {
    display: flex;
    align-items: center;
    .link {
      width: 120px;
      padding: 12px 0;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      text-align: center;
      color: white;
      background: gray;
      opacity: 0.4;
      cursor: pointer;
      &-register {
        border-radius: 5px 0px 0px 5px;
      }
      &-login {
        border-radius: 0px 5px 5px 0px;
      }
      &-active {
        opacity: 1.0;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
        cursor: default;
        &-client {
          // background: #00BFE2;
          background: #6500D5;
        }
        &-lawyer {
          // background: #00BFE2;
          background: #6500D5;
        }
      }
    }
  }
}
</style>
