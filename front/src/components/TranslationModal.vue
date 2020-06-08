<template>
  <div>
    <Modal :width="'10px'" v-model="showModal">
      <div slot="title">Regra de tradução</div>
      <InputField
        :id="'explanation'"
        v-model="explanation"
        :placeholder="'Explicação'"
      >
        <FontAwesomeIcon :icon="['fas', 'comment']" />
      </InputField>
      <InputField
        :id="'textTarget'"
        v-model="textTarget"
        :placeholder="'Texto alvo'"
      >
        <FontAwesomeIcon :icon="['fas', 'align-justify']" />
      </InputField>
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
          :click="createTranslation"
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
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons/faAlignJustify';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import Modal from '@/components/Modal';
import InputField from '@/components/form/InputField';
import ButtonField from '@/components/form/ButtonField';
import translationAPI from '@/api/translation';

library.add(faAlignJustify, faComment);

export default {
  name: 'TranslationModal',
  components: {
    FontAwesomeIcon,
    Modal,
    InputField,
    ButtonField
  },
  data () {
    return {
      showModal: false,
      explanation: '',
      textTarget: ''
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
    createTranslation() {
      const explanation = this.explanation;
      const textTarget = this.textTarget;
      const body = { explanation, textTarget };
      translationAPI.createTranslation(body)
        .then(res => {
          this.$emit('refreshTranslation');
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
