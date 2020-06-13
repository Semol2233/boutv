<template>
  <div>
    <!-- <b-card :img-src="imgSrc" img-height="170" style="width:336">
      <b-card-text text-tag="h4">{{ title }}</b-card-text>
      <p class="text-muted">{{ relaseDate }}</p>
    </b-card> -->
    <b-img :src="imgSrc" height="170" width="336"></b-img>
    <h4 class="mt-2">{{ title }}</h4>
    <p class="text-muted">{{ relaseDate }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Demo Title of BOU"
    },
    relaseDate: {
      type: String,
      default: "12-12-2020"
    }
  }
};
</script>

<style>
</style>