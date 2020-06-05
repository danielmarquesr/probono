<template>
  <Background>
    <div class="login">
      <form class="form">
        <InputField
          v-show="this.$route.query.type === 'lawyer'"
          v-model="email"
          :placeholder="'Email'"
          :id="'email'"
        >
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
        </InputField>
        <InputField
          v-show="this.$route.query.type === 'client'"
          v-model="cpf"
          :placeholder="'CPF'"
          :id="'cpf'"
        >
          <FontAwesomeIcon :icon="['fas', 'address-card']" />
        </InputField>
        <InputField
          v-model="password"
          :type="'password'"
          :placeholder="'Senha'"
          :id="'password'"
        >
          <FontAwesomeIcon :icon="['fas', 'lock']" />
        </InputField>
        <ButtonField class="button-form" :click="login">
          ENTRAR
        </ButtonField>
      </form>
    </div>
  </Background>
</template>

<script>
import Background from '@/components/Background';
import InputField from '@/components/form/InputField';
import ButtonField from '@/components/form/ButtonField';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons/faAddressCard';
import authAPI from '@/api/auth';

library.add(faEnvelope, faLock, faAddressCard);

export default {
  name: 'Login',
  components: {
    FontAwesomeIcon,
    Background,
    InputField,
    ButtonField
  },
  data() {
    return {
      typeUser: '',
      email: '',
      cpf: '',
      password: ''
    };
  },
  created() {
    if(!this.$route.query.type)
      this.$router.push({ query: { type: 'client' }});
  },
  methods: {
    login() {
      const { cpf, email, password } = this;
      let body = {};
      if(this.$route.query.type === 'client') {
        body = { cpf, password };
        authAPI.loginClient(body)
          .then(async res => {
            localStorage.token = await res.data.token;
            this.$router.push({ path: '/processos' });
          })
          .catch(error => {
            console.log(error);
          });
      }
      else if(this.$route.query.type === 'lawyer') {
        body = { email, password };
        authAPI.loginLawyer(body)
          .then(async res => {
            localStorage.token = await res.data.token;
            this.$router.push({ path: '/processos' });
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 0 10px;
  .form {
    .button-form {
      margin-top: 30px;
    }
  }
}
</style>
