<template>
  <div class="index-translation">
    <TranslationModal
      v-model="showModal"
      @refreshTranslation="getTranslationsOfLawyer"
    />

    <h1>Regras de tradução</h1>

    <div
      v-for="translation in translations"
      :key="translation.id"
    >
      <div
        class="translation-card"
        v-on:click="() => redirectToShowTranslation(translation.id)"
      >
        <Card>
          <b>Explicação:</b> {{ translation.explanation }}
          <br /><br />
          <b>Texto alvo:</b> {{ translation.textTarget }}
        </Card>
      </div>
    </div>
    <CreateButton :click="() => {showModal = true}" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import CreateButton from '@/components/CreateButton';
import translationAPI from '@/api/translation';
import TranslationModal from '@/components/TranslationModal';

export default {
  name: 'IndexTranslation',
  components: {
    CreateButton,
    TranslationModal,
    Card
  },
  data() {
    return {
      showModal: false,
      translations: []
    }
  },
  mounted() {
    this.getTranslationsOfLawyer()
  },
  methods: {
    getTranslationsOfLawyer() {
      translationAPI.indexTranslation()
        .then(res => {
          this.translations = res.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    redirectToShowTranslation(translationId) {
      this.$router.push({ name: 'ShowTranslation', params: { translationId } });
    }
  }
}
</script>

<style lang="scss" scoped>
.index-translation {
  h1 {
    margin-top: 0;
  }
}
</style>
