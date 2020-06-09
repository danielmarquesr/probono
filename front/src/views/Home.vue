<template>
  <div class="home">
    <div class="sidebar">
      <a
        class="link"
        v-on:click="redirectToIndexLawsuit"
      >
        Processos
      </a>
      <a
        class="link"
        v-on:click="redirectToIndexTranslation"
      >
        Regras de tradução
      </a>
      <a
        class="link"
        v-on:click="removeToken"
      >
        Sair
      </a>
    </div>
    <div class="home-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    redirectToIndexLawsuit() {
      if(this.$route.name !== 'IndexLawsuit')
        this.$router.push({ name: 'IndexLawsuit' });
    },
    redirectToIndexTranslation() {
      if(this.$route.name !== 'IndexTranslation')
        this.$router.push({ name: 'IndexTranslation' });
    },
    removeToken() {
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  min-height: 100vh;
  background: #f9f9f9;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .sidebar {
    margin: 8vh 0;
    padding: 0;
    width: 140px;
    height: auto;
    overflow: auto;

    a {
      display: block;
      color: black;
      padding: 16px;
      text-decoration: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 700px) {
    .sidebar {
      height: auto;
      width: 100%;
      position: relative;
      margin: 0;
    }
  }

  @media screen and (max-width: 400px) {
    .sidebar a {
      float: none;
      text-align: center;
    }
  }

  &-body {
    margin: 8vh 0;
    width: 70vw;
    min-height: 80vh;
    height: auto;
    padding: 0.7rem;
    background: white;
    border-radius: 5px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width: 700px) {
      margin: 0;
      margin-bottom: 8vh;
      width: 80vw;
      display: inline-block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
}
</style>
