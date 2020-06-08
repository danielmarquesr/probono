<template>
  <div class="index-translation">
    <ButtonField
      :width="'200px'"
      :click="() => {showModal = true}"
    >
      CRIAR
    </ButtonField>

    <TranslationModal
      v-model="showModal"
      @refreshTranslation="getTranslationsOfLawyer"
    />

    <div
      v-for="translation in translations"
      :key="translation.id"
    >
      <div
        class="translation-card"
        v-on:click="() => redirectToShowTranslation(translation.id)"
      >
        id: {{ translation.id }}
        <br />
        explanation: {{ translation.explanation }}
        <br />
        textTarget: {{ translation.textTarget }}
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import translationAPI from '@/api/translation';
import TranslationModal from '@/components/TranslationModal';
import ButtonField from '@/components/form/ButtonField';

export default {
  name: 'IndexTranslation',
  components: {
    TranslationModal,
    ButtonField
  },
  data() {
    return {
      showModal: false,
      translations: []
    }
  },
  created() {
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

</style>
