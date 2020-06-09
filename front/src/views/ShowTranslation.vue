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
        <Card>
          <b>Data:</b> {{ progress.date.slice(0, 10) }}
          <br /><br />
          <b>Descrição:</b><br /> {{ progress.description }}
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card';
import translationAPI from '@/api/translation';

export default {
  name: 'ShowTranslation',
  components: {
    Card
  },
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
