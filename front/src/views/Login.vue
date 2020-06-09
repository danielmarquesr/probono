<template>
  <Background>
    <div class="login">
      <router-link
        to="/registrar"
        class="link-login"
      >
        Deseja criar uma conta?
      </router-link>

      <h1>Login</h1>

      <form class="form">
        Perfil da conta:

        <ButtonSwitch />

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

        <ButtonField :type="'submit'" class="button-form" :click="login">
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
import ButtonSwitch from '@/components/form/ButtonSwitch';
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
    ButtonField,
    ButtonSwitch
  },
  data() {
    return {
      typeUser: '',
      email: '',
      cpf: '',
      password: ''
    };
  },
  mounted() {
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
            localStorage.role = await res.data.role;
            this.$router.push({ path: '/processos' });
          })
          .catch(error => {
            console.error(error);
          });
      }
      else if(this.$route.query.type === 'lawyer') {
        body = { email, password };
        authAPI.loginLawyer(body)
          .then(async res => {
            localStorage.token = await res.data.token;
            localStorage.role = await res.data.role;
            this.$router.push({ path: '/processos' });
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  padding: 10px 15px;

  .link-login {
    position: absolute;
    right: 0;
    padding-right: 15px;
    text-decoration: none;
    color: #2c60d9;

    @media only screen and (max-width: 600px) {
      padding-right: 10px;
    }
  }

  h1 {
    color: #5700d0;
  }

  .form {
    .button-form {
      margin-top: 30px;
    }
  }
}
</style>
