<template>
  <div class="nav">
    <div class="nav-div">
      <router-link
        to="/registrar"
        active-class="link-active"
        class="link link-register"
      >
        <div class="button">REGISTRAR</div>
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
  name: 'ButtonSwitch'
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  &-div {
    display: flex;
    align-items: center;
    .link {
      // margin-right: 0.5px;
      padding: 8px 12px;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      // color: gray;
      // border-bottom: 3px solid gray;
      color: white;
      background: gray;
      opacity: 0.4;
      &-register {
        border-radius: 10px 0px 0px 10px;
      }
      &-login {
        border-radius: 0px 10px 10px 0px;
      }
      &-active {
        background: #6500D5;
        opacity: 1.0;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      }
    }
    .button {

    }
  }
}
</style>
