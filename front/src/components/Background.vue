<template>
  <div class="background">
    <div class="background-card">
      <div class="logo" />
      <div class="card-image" />
      <div class="background-card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Background',
  data() {
    return {

    }
  },
  mounted() {
    if(!this.$route.query.type)
      this.$router.push({ query: { type: 'client' }});
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100vw;
  min-height: 100vh;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5;

  &-card {
    display: flex;
    position: relative;
    width: 560px;
    height: auto;
    background: white;
    border-radius: 6px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid #d8dee2;

    @media only screen and (max-width: 600px) {
      width: 80vw;
    }

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

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }

    .card-image {
      background-image: url('../assets/images/probono.png');
      background-size: cover;
      background-position-x: 76%;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      height: auto;
      width: 40%;
      border-radius: 6px;

      @media only screen and (max-width: 600px) {
        display: none;
      }
    }

    &-body {
      width: 60%;
      height: 100%;
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }
}
</style>
