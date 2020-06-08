<template>
  <div class="progress">
    <ButtonField
      v-if="userInfo.role === 'lawyer'"
      :width="'200px'"
      :click="() => {showModal = true}"
    >
      CRIAR
    </ButtonField>

    <ProgressModal
      v-model="showModal"
      @refreshProgress="indexProgress"
    />

    <div
      class="progress-card"
      v-for="progress in progresses"
      :key="progress.id"
      v-on:click="() => redirectToProgressShow(progress.id)"
    >
      <b>id:</b> {{ progress.id }}
      <br />
      <b>date:</b> {{ progress.date }}
      <br />
      <b>description:</b> {{ progress.description }}
      <br /><br />
    </div>
  </div>
</template>

<script>
import ProgressModal from '@/components/ProgressModal';
import ButtonField from '@/components/form/ButtonField';
import progressAPI from '@/api/progress';
import userAPI from '@/api/user';

export default {
  name: 'IndexProgress',
  components: {
    ProgressModal,
    ButtonField
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

</style>
