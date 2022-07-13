<template>
    <div :class="[show ? 'mbc-modal-wrapper' : 'hide']">
      <div className="mbc-modal">
        <header>
          <h4>
            {{ title }}
          </h4>
          <button className="modal-close-button" v-on:click="onCancel">
            <i className="icon mbc-icon close thin" />
          </button>
        </header>
        <div :class="[scrollableContent ? 'modal-content scrollable mbc-scroll' : 'modal-content']">
         <slot/>
        </div>
        <footer
        :class="[showAcceptButton || showCancelButton ? buttonAlignment === 'center'
                ? 'footerCenter'
                : 'footerRight'
              : 'hide']"
        >
          <div class="btn-set">
            <button
              :class="[showCancelButton ? 'btn btn-secondary' : 'hide']"
              type="button"
              @click="onCancel"
            >
              {{cancelButtonTitle}}
            </button>
            <button
              :class="[showAcceptButton ? 'btn btn-primary' : 'hide']"
              type="submit"
              :click="onAccept"
            >
             {{acceptButtonTitle}}
            </button>
          </div>
        </footer>
      </div>
    </div>
</template>
<style lang="scss">
@import '../styles/Modal.style.scss';
</style>
<script>
export default {
  props: {
      title: {
          type: String
      },
      hiddenTitle: Boolean,
      titleIconImage: Object,
      content: String | Object,
      show: Boolean,
      buttonAlignment: String,
      showAcceptButton: Boolean,
      showCancelButton: Boolean,
      acceptButtonTitle: String,
      cancelButtonTitle: String,
      scrollableContent: Boolean,
      onAccept:  {
          type: Function
      },
      onCancel: {
          type: Function
      },
      modalWidth: String,
      modalStyle: Object,
      show: Boolean
  },   
}
</script>
