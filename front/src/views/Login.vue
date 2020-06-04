<template>
  <Background>
    <div class="login">
      <form>
        oi: {{this.email}}
        <Input
          v-model="this.email"
        />
      </form>
    </div>
  </Background>
</template>

<script>
import Background from '@/components/Background';
import Input from '@/components/form/Input';

export default {
  name: 'Login',
  components: {
    Background,
    Input
  },
  data: {
    email: ''
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 0 20px;
}
</style>
