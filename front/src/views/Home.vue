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
  height: 100vh;
  background: #e5e9ea;
  display: flex;
  justify-content: center;
  align-items: center;
  &-body {
    width: 80vw;
    height: 80vh;
    padding: 0.7rem;
    background: white;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
