<template>
  <div class="show-progress">
    <h1>Andamento traduzido</h1>

    <Card>
      <b>Data:</b> {{ progress.date.slice(0, 10) }}
      <br /><br />
      <b>Descrição original:</b><br /> {{ progress.description }}
      <br /><br />
      <b>Descrição traduzida:</b><br />
      <div v-html="progress.translated" />
    </Card>
  </div>
</template>

<script>
import Card from '@/components/Card';
import progressAPI from '@/api/progress';

export default {
  name: 'ShowProgress',
  components: {
    Card
  },
  data() {
    return {
      progress: {
        date: ''
      },
      teste: ''
    }
  },
  mounted() {
    this.getProgress();
  },
  methods: {
    translateDescription(progress) {
      let description = progress.description;
      const translations = progress.Translations;

      let span = '';
      let translated = description;
      for(const translation of translations) {
        span = `<span>${translation.explanation}</span>`;
        translated = translated.replace(translation.textTarget, span);
        progress.translated = translated;
      }
      this.progress = progress;
      this.teste = '<p>This is a simple example to demonstrate usage of v-html</p><a href=”#”>Read more</a>';
    },
    getProgress() {
      const { progressId } = this.$route.params;
      progressAPI.showProgress(progressId)
        .then(async res => {
          this.progress = await res.data;
          await this.translateDescription(res.data)
        })
        .catch(error => {
          console.error(error);
        })
      }
  }
}
</script>

<style scoped>
  div >>> span {
    color: gray;
  }
</style>

<style lang="scss" scoped>
.show-progress {
  h1 {
    margin-top: 0;
  }
}
</style>
