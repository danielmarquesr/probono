<template>
  <div class="progress">
    <ProgressModal
      v-model="showModal"
      @refreshProgress="indexProgress"
    />

    <h1>Andamentos</h1>

    <div
      class="progress-card"
      v-for="progress in progresses"
      :key="progress.id"
      v-on:click="() => redirectToProgressShow(progress.id)"
    >
      <Card>
        <b>Data:</b> {{ progress.date.slice(0, 10) }}
        <br /><br />
        <b>Descrição:</b><br /> {{ progress.description }}
      </Card>
    </div>
    <CreateButton :click="() => {showModal = true}" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import CreateButton from '@/components/CreateButton';
import ProgressModal from '@/components/ProgressModal';
import progressAPI from '@/api/progress';
import userAPI from '@/api/user';

export default {
  name: 'IndexProgress',
  components: {
    Card,
    ProgressModal,
    CreateButton
  },
  data() {
    return {
      userInfo: {},
      showModal: false,
      progresses: []
    }
  },
  mounted() {
    this.getUserInfo()
    this.indexProgress();
  },
  methods: {
    getUserInfo() {
      userAPI.getUserInfo()
      .then(async res => {
        this.userInfo = await res.data;
      });
    },
    indexProgress() {
      const { lawsuitId } = this.$route.params;
      progressAPI.indexProgressOfLawsuit(lawsuitId)
        .then(res => {
          this.progresses = res.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    redirectToProgressShow(progressId) {
      this.$router.push({ name: 'ShowProgress', params: { progressId } });
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  h1 {
    margin-top: 0;
  }
}
</style>
