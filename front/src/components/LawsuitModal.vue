<template>
  <div>
    <Modal :width="'10px'" v-model="showModal">
      <div slot="title">Processo</div>
      <InputField
        :id="'date'"
        v-model="date"
        :type="'date'"
        :placeholder="'Data'"
      >
        <FontAwesomeIcon :icon="['fas', 'calendar']" />
      </InputField>
      <TextArea
        :id="'description'"
        v-model="description"
        :placeholder="'Descrição'"
        :height="'200px'"
      />
      <div slot="footer">
        <ButtonField
          :background="'gray'"
          width="90px"
          :click="() => { showModal = false }"
        >
          Cancelar
        </ButtonField>
        <ButtonField
          :background="'#6500D5'"
          width="90px"
          :click="createProgress"
        >
          Salvar
        </ButtonField>
      </div>
    </Modal>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import Modal from '@/components/Modal';
import InputField from '@/components/form/InputField';
import TextArea from '@/components/form/TextArea';
import ButtonField from '@/components/form/ButtonField';
import lawsuitAPI from '@/api/lawsuit';

library.add(faCalendar);

export default {
  name: 'LawsuitModal',
  components: {
    FontAwesomeIcon,
    Modal,
    InputField,
    ButtonField,
    TextArea
  },
  data () {
    return {
      showModal: false,
      date: '',
      description: ''
    }
  },
  model: {
    prop: 'modalIsOpen',
    event: 'change-modal-is-open'
  },
  watch: {
    modalIsOpen(newVal) {
      this.showModal = newVal;
    },
    showModal(newVal) {
      this.$emit('change-modal-is-open', newVal);
    }
  },
  props: {
    modalIsOpen: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  methods: {
    createProgress() {
      const date = this.date;
      const description = this.description;
      const body = { date, description };
      lawsuitAPI.createLawsuit(body)
        .then(res => {
          this.$emit('refreshProgress');
          this.$emit('change-modal-is-open', false);
        })
        .catch(error => {
          console.error(error);
        })
    }
  }
}
</script>

<style lang="scss" scoped>
// .title {

// }
// .footer {
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// }
</style>
