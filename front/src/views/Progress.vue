<template>
  <div class="progress">
    <div
      class="progress-card"
      v-for="progress in progresses"
      :key="progress.id"
    >
      <b>id:</b> {{ progress.id }}
      <br />
      <b>title:</b> {{ progress.title }}
      <br />
      <b>date:</b> {{ progress.date }}
      <br /><br />
    </div>
  </div>
</template>

<script>
import progressAPI from '@/api/progress';

export default {
  name: 'Progress',
  data() {
    return {
      progresses: []
    }
  },
  created() {
    const { lawsuitId } = this.$route.params;
    progressAPI.indexProgressOfLawsuit(lawsuitId)
      .then(res => {
        this.progresses = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>

</style>
