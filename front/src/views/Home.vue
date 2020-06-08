<template>
  <div class="home">
    <div class="home-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  min-height: 100vh;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  &-body {
    margin: 8vh 0;
    width: 80vw;
    min-height: 80vh;
    height: auto;
    padding: 0.7rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
