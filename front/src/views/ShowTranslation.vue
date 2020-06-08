<template>
  <div class="show-translation">
    <div
      v-for="progress in translation.Progresses"
      :key="progress.id"
    >
      <div
        class="progress-card"
        v-on:click="() => redirectToShowProgress(progress.id, progress.lawsuitId)"
      >
        id: {{ progress.id }}
        <br />
        date: {{ progress.date }}
        <br />
        description: {{ progress.description }}
        <br /><br />
      </div>
    </div>
  </div>
</template>

<script>
import translationAPI from '@/api/translation';

export default {
  name: 'ShowTranslation',
  data() {
    return {
      translation: []
    }
  },
  mounted() {
    const { translationId } = this.$route.params;
    translationAPI.showTranslationProcess(translationId)
      .then(res => {
        this.translation = res.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    redirectToShowProgress(progressId, lawsuitId) {
      this.$router.replace({ name: 'ShowProgress', params: { progressId, lawsuitId } });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
