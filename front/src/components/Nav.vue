<template>
  <div class="nav">
    <div class="nav-div">
      <router-link
        to="/registrar"
        active-class="link-active"
        class="link link-register"
      >
        REGISTRAR-SE
      </router-link> 
      <router-link
        to="/login"
        active-class="link-active"
        class="link link-login"
      >
        LOGIN
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
.nav {
  height: 35px;
  &-div {
    .link {
      padding: 8px 8px;
      font-weight: bold;
      text-decoration: none;
      color: gray;
      opacity: 0.7;
      &-active {
        color: #5700D0;
        opacity: 1.0;
      }
    }
    .button {

    }
  }
}
</style>
