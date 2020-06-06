<template>
  <div class="show-progress">
    <b>id:</b> {{ progress.id }}
    <br />
    <b>title:</b> {{ progress.title }}
    <br />
    <b>date:</b> {{ progress.date }}
    <br />
    <b>description:</b> {{ progress.description }}
    <br />
    <b>Translations:</b>
    <br />
    <div
      v-for="translation in progress.Translations"
      :key="translation.id"
    >
      <b>id:</b> {{ translation.id }}
      <br />
      <b>explanation:</b> {{ translation.explanation }}
      <br />
      <b>textTarget:</b> {{ translation.textTarget }}
      <br />
    </div>
  </div>
</template>

<script>
import progressAPI from '@/api/progress';

export default {
  name: 'ShowProgress',
  data() {
    return {
      progress: {}
    }
  },
  created() {
    const { progressId } = this.$route.params;
    progressAPI.showProgress(progressId)
      .then(res => {
        this.progress = res.data;
      })
      .catch(error => {
        console.error(error);
      })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
