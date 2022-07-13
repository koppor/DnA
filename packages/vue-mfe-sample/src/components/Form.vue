<template>
  <div class="mainPanel">
    <div :style="{display:'flex', justifyContent:'center'}">
      <img alt="Vue logo" width="40" src="../assets/logo.png" />
    </div>
    <div class="wrapper">
      <div class="caption">
        <h3>Forms</h3>
      </div>
    </div>
    <div class="content">
      <div class="formGroup">
        <div class="flexLayout">
          <div>
            <div class="input-field-group include-error bucketNameInputField">
              <label class="input-label inputLabel">
                Name of Bucket <sup>*</sup>

                <div class="infoIcon">
                  <i className="icon mbc-icon info" :click="() => { }" />
                </div>

              </label>
              <div>
                <input :value="text" @input="onInput" placeholder="Type here" class="input-field bucketNameField" />
                <span class="error-message">

                </span>
              </div>
            </div>

          </div>
        </div>
        <div class="submitBtn">
          <button class="btn btn-tertiary" type="button" @click="onSubmit">
            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <Modal :show="showModal" :onCancel="() => showModal = false" :showCancelButton="true" cancelButtonTitle="Cancel"
    :hiddenTitle="false" :showAcceptButton="true" acceptButtonTitle="Proceed" title="Form Title">
    <div>Hello, Sample message</div>
  </Modal>

</template>
<style>
</style>
<style lang="scss">
@import '../styles/Form.style.scss';
</style>
<script>
import Modal from './Modal.vue';
export default {
  data() {
    return {
      text: '',
      showModal: false,
    }
  },
  methods: {
    onInput(e) {
      this.text = e.target.value;
    },
    onSubmit() {
      this.showModal = true;
    }
  },
  components: {
    Modal
  }
}
</script>