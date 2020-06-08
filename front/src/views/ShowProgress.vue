<template>
  <div class="show-progress">
    <b>id:</b> {{ progress.id }}
    <br />
    <b>date:</b> {{ progress.date }}
    <br />
    <b>description:</b> {{ progress.description }}
    <br />
    <div v-html="progress.translated" />
  </div>
</template>

<script>
import progressAPI from '@/api/progress';

export default {
  name: 'ShowProgress',
  data() {
    return {
      progress: {},
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
        .then(res => {
          this.progress = res.data;
          this.translateDescription(res.data)
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

</style>
