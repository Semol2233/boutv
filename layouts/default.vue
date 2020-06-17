<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>
<style>
html {
  overflow-y: scroll;
}
body {
  background: #fafafa !important;
}
.side-panel {
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  z-index: 20;
  border-right: solid 0.5px rgba(0, 0, 0, 0.2);
}
</style>
