<template>
  <div class="min-h-screen flex flex-col">
    <NavBar v-if="!this.$route.meta.hideNavBar" />

    <main :class="['flex-grow', $route.meta.noMarginTop ? '' : 'mt-4']">
      <router-view />
    </main>

    <myFooter v-if="!this.$route.meta.hideNavBar" />
  </div>
</template>

<script>
import NavBar from "./components/navBar.vue";
import myFooter from "./components/footer.vue";
export default {
  components: {
    NavBar,
    myFooter,
  },
};
</script>
