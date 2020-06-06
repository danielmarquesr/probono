<template>
  <div class="lawsuit">
    <div
      class="lawsuit-card"
      v-for="lawsuit in lawsuits"
      :key="lawsuit.id"
      v-on:click="() => redirectToProgressIndex(lawsuit.id)"
    >
      <b>id:</b> {{ lawsuit.id }}
      <br />
      <b>title:</b> {{ lawsuit.title }}
      <br />
      <b>cpf:</b> {{ lawsuit.Client.cpf }}
      <br />
      <b>description:</b> {{ lawsuit.description }}
      <br /><br />
    </div>
  </div>
</template>

<script>
import lawsuitAPI from '@/api/lawsuit';

export default {
  name: 'Lawsuit',
  data() {
    return {
      lawsuits: []
    };
  },
  created() {
    lawsuitAPI.indexLawsuitOfLawyer({}).then(async res => {
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
