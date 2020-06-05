<template>
  <div class="lawsuit">
    <div
      class="lawsuit-card"
      v-for="lawsuit in lawsuits"
      :key="lawsuit.id"
      v-on:click="() => redirectToProgress(lawsuit.id)"
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
    redirectToProgress(lawsuitId) {
      console.log('clicou:', lawsuitId);
      this.$router.push({ name: 'Progress', params: { lawsuitId } });
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
