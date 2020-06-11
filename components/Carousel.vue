<template>
  <div class="myCarousel mb-2">
    <b-container>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="430"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-blank img-alt="Blank image"> </b-carousel-slide>
        <b-carousel-slide img-blank img-alt="Blank image"> </b-carousel-slide>
        <b-carousel-slide img-blank img-alt="Blank image"> </b-carousel-slide>
      </b-carousel>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
/* @media (min-width: 400px) {
  .myCarousel {
    margin-top: 70px !important;
  }
} */
/* .myCarousel {
  margin-top: 70px !important;
} */
/* @media (min-width: 575.98px) and (min-width: 768px) and (min-width: 992px) and (min-width: 1200px) {
  .myCarousel {
    margin-top: 70px !important;
  }
}

@media (min-width: 786px) {
  .myCarousel {
    margin-top: 70px !important;
  }
} */
</style>