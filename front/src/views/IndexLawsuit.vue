<template>
  <div class="lawsuit">
    <LawsuitModal
      v-model="showModal"
      @refreshProgress="indexLawsuit"
    />

    <h1>Processos</h1>

    <div
      class="lawsuit-card"
      v-for="lawsuit in lawsuits"
      :key="lawsuit.id"
      v-on:click="() => redirectToProgressIndex(lawsuit.id)"
    >
      <Card>
        <b>Nº do processo:</b> {{ lawsuit.number }}
        <br /><br />
        <b>Descrição:</b><br /> {{ lawsuit.description }}
      </Card>
    </div>

    <CreateButton :click="() => {showModal = true}" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import LawsuitModal from '@/components/LawsuitModal';
import CreateButton from '@/components/CreateButton';
import userAPI from '@/api/user';
import lawsuitAPI from '@/api/lawsuit';

export default {
  name: 'IndexLawsuit',
  components: {
    Card,
    CreateButton,
    LawsuitModal
  },
  data() {
    return {
      showModal: false,
      userInfo: {},
      lawsuits: []
    };
  },
  mounted() {
    this.indexLawsuit();
  },
  methods: {
    indexLawsuit() {
      userAPI.getUserInfo()
      .then(async res => {
        this.userInfo = await res.data;
        if(res.data.role === 'lawyer') {
          await lawsuitAPI.indexLawsuitOfLawyer()
            .then(async res => {
              this.lawsuits = await res.data;
            });
        } else if(res.data.role === 'client') {
          await lawsuitAPI.indexLawsuitOfClient()
            .then(async res => {
              this.lawsuits = await res.data;
            });
        }
      });
    },
    redirectToProgressIndex(lawsuitId) {
      this.$router.push({ name: 'IndexProgress', params: { lawsuitId } });
    }
  }
};
</script>

<style lang="scss" scoped>
.lawsuit {
  h1 {
    margin-top: 0;
  }
}
</style>
