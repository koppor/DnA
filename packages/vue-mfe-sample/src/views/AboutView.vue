<template>
  <div class="mainPanel">
    <h3>This is an about page</h3>
    <count>Count: {{ count }}</count>
  </div>
</template>;
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
}
</script>