<template>
  <div class="background">
    <div class="card">
      <div class="logo" />
      <div class="card-image" />
      <div class="body">
        <Nav />
        <div class="login-body">
          <h1>Login</h1>
          Deseja
          {{ this.$route.path === '/login' ? 'fazer login' : 'se registrar' }}
          como:
        </div>
        <ButtonSwitch />
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import ButtonSwitch from '@/components/form/ButtonSwitch';

export default {
  name: 'Background',
  components: {
    Nav,
    ButtonSwitch
  }
};
</script>

<style lang="scss" scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5E9EA;
  width: 100vw;
  height: 100vh;

  .card {
    display: flex;
    position: relative;
    background: white;
    width: 550px;
    height: 400px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    .logo {
      position: absolute;
      left: -60px;
      top: -60px;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
      background-image: url('../assets/images/logo.png');
      background-size: 100%;
    }

    &-image {
      background-image: url('../assets/images/probono.png');
      background-size: cover;
      background-position-x: 78%;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      height: 100%;
      width: 350px;
      border-radius: 6px;
    }

    .body {
      width: 100%;
      padding: 10px;

      .login-body {
        padding: 0 10px;

        h1 {
          color: #5700D0;
          margin-top: 8px;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
