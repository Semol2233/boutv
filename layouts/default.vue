<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  components: {}
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
