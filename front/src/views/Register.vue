<template>
  <Background>
    <div class="register">
      Registrar-se
    </div>
  </Background>
</template>

<script>
import Background from '@/components/Background';

export default {
  name: 'Register',
  components: {
    Background
  },
  data() {
    return {

    }
  },
  created() {
    if(!this.$route.query.type)
      this.$router.push({ query: { type: 'client' }});
  }
}
</script>

<style lang="scss" scoped>
.register {
  padding: 0 20px;
}
</style>
