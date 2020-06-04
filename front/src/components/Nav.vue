<template>
  <div class="nav">
    <div class="nav-div">
      <router-link
        to="/registrar"
        active-class="link-active"
        class="link link-register"
      >
        <div class="button">REGISTRAR-SE</div>
      </router-link>
      <router-link
        to="/login"
        active-class="link-active"
        class="link link-login"
      >
        <div class="button">LOGIN</div>
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
  display: flex;
  position: relative;
  height: 35px;
  &-div {
    display: flex;
    position: absolute;
    right: 0;
    .link {
      padding: 8px 8px;
      font-size: 15px;
      font-weight: bold;
      text-decoration: none;
      color: gray;
      opacity: 0.7;
      &-active {
        color: #6500D5;
        opacity: 1.0;
      }
    }
    .button {

    }
  }
}
</style>
