<template>
  <Background>
    <div class="register">
      <router-link
        to="/login"
        class="link-login"
      >
        Já tem uma conta?
      </router-link>
      <h1>Registrar</h1>
      <form class="form">
        Perfil da conta:
        <ButtonSwitch />

        <InputField
          v-model="email"
          :placeholder="'Email'"
          :id="'email'"
        >
          <FontAwesomeIcon :icon="['fas', 'envelope']" />
        </InputField>

        <InputField
          v-show="this.$route.query.type === 'lawyer'"
          v-model="cna"
          :placeholder="'CNA'"
          :id="'cna'"
        >
          <FontAwesomeIcon :icon="['fas', 'address-card']" />
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

        <InputField
          v-model="confirmPassword"
          :type="'password'"
          :placeholder="'Confirmar senha'"
          :id="'confirm-password'"
        >
          <FontAwesomeIcon :icon="['fas', 'lock']" />
        </InputField>

        <ButtonField class="button-form" :click="register">
          REGISTRAR
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
  name: 'Register',
  components: {
    FontAwesomeIcon,
    Background,
    ButtonSwitch,
    InputField,
    ButtonField
  },
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      cpf: '',
      cna: ''
    }
  },
  methods: {
    register() {
      const { cpf, cna, email, password } = this;
      let body = {};

      if(this.$route.query.type === 'client') {
        body = { cpf, email, password };
        authAPI.registerClient(body)
          .then(async res => {
            localStorage.token = await res.data.token;
            localStorage.role = await res.data.role;
            this.$router.push({ name: 'IndexLawsuit' });
          })
          .catch(error => {
            console.error(error);
          });
      }
      else if(this.$route.query.type === 'lawyer') {
        body = { cna, email, password };
        authAPI.registerLawyer(body)
          .then(async res => {
            localStorage.token = await res.data.token;
            localStorage.role = await res.data.role;
            this.$router.push({ name: 'IndexLawsuit' });
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  position: relative;
  padding: 10px 15px;
  width: 91.5%;
  height: 100%;

  @media only screen and (max-width: 600px) {
    padding: 10px;
  }

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
}
</style>
