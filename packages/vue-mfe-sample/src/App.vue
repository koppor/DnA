<template>
  <!-- <nav :style="{textAlign:'center'}">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view /> -->
  <HomeView/>
</template>

<script>
import HomeView from './views/HomeView.vue';
export default {
  components: {
    HomeView
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    addOne() {
      this.$store.commit('addOne')
    },
  },
  mounted() {
    console.log(this.user)
  },
  watch: {
    $route(to, from) {
      const withDataSharing = ['/', '/about'].includes(this.$route.fullPath);
      if (!withDataSharing) {
        console.log('Switched out of vue', `${this.$route.fullPath}`)
        // this.$.appContext.app.unmount();
      }
    }
  },
  unmounted() {
    console.log('unmounted')
  }
};
</script>