<template>
  <div class="lawsuit">
    <router-link
      v-if="userInfo.role === 'lawyer'"
      to="/regras-traducao"
    >
      REGRAS DE TRADUÇÃO
    </router-link>
    <br /><br />
    <div
      class="lawsuit-card"
      v-for="lawsuit in lawsuits"
      :key="lawsuit.id"
      v-on:click="() => redirectToProgressIndex(lawsuit.id)"
    >
      <b>id:</b> {{ lawsuit.id }}
      <br />
      <b>number:</b> {{ lawsuit.number }}
      <br />
      <b>description:</b> {{ lawsuit.description }}
      <br /><br />
    </div>
  </div>
</template>

<script>
import userAPI from '@/api/user';
import lawsuitAPI from '@/api/lawsuit';

export default {
  name: 'IndexLawsuit',
  data() {
    return {
      userInfo: {},
      lawsuits: []
    };
  },
  mounted() {
    userAPI.getUserInfo()
      .then(async res => {
        this.userInfo = await res.data;
      });
    lawsuitAPI.indexLawsuit({})
      .then(async res => {
        this.lawsuits = await res.data;
      });
  },
  methods: {
    redirectToProgressIndex(lawsuitId) {
      this.$router.push({ name: 'IndexProgress', params: { lawsuitId } });
    }
  }
};
</script>

<style lang="scss" scoped>
.lawsuit {
  
  &-card {
    
  }
}
</style>
