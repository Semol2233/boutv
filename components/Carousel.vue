<template>
  <div class="myCarousel mb-2">
    <b-container>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="317"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide img-height="317"  img-src="~/static/bou_monument.jpg">
          <!-- <div class="my-carousel-caption-up">
            {{ date || time }}
          </div> 
          <b-img
            src="~/static/bn3.JPG"
            class="my-carousel-caption-down"
          ></b-img> -->
        </b-carousel-slide>
        <b-carousel-slide img-height="317" img-src="~/static/5convo2.jpg">
          <!-- <b-img
            src="~/static/bn3.JPG"
            class="my-carousel-caption-down"
          ></b-img> -->
        </b-carousel-slide>
        <b-carousel-slide img-height="317" img-src="~/static/5convo3.jpg">
          <!-- <b-img
            src="~/static/bn3.JPG"
            class="my-carousel-caption-down"
          ></b-img> -->
        </b-carousel-slide>
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
      sliding: null,
      date: "",
      time: ""
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    callFunction: function() {
      var currentDate = new Date();

      // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // const currentTime = moment()
      //   .tz(timezone)
      //   .format();
      // this.time = currentTime;

      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      this.date = currentDateWithFormat;

      console.log(currentDateWithFormat);
    }
  },
  mounted() {
    // this.callFunction();
  }
};
</script>

<style scoped>
@media (max-width: 575px) {
  .myCarousel {
    margin-top: 10px;
  }
  /* .my-carousel-caption-down {
    width: 273px;
    height: 66px;
    position: absolute;
    right: 0%;
    bottom: -39px;
    left: -21%;
    z-index: 10;
    padding-top: 0px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  .my-carousel-caption-up {
    font-size: 16px;
    position: absolute;
    right: 0%;
    bottom: 126px;
    left: -121%;
    z-index: 10;
    padding-top: 0px;
    color: #000;
    text-align: center;
  } */
}

@media (min-width: 576px) {
  .myCarousel {
    margin-top: 10px;
  }
  /* .my-carousel-caption-down {
    width: 300px;
    height: 75px;
    position: absolute;
    right: 0%;
    bottom: -39px;
    left: -21%;
    z-index: 10;
    padding-top: 0px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
  }
  .my-carousel-caption-up {
    width: 300px;
    height: 75px;
    font-size: 18px;
    position: absolute;
    right: 0%;
    bottom: 250px;
    left: -21%;
    z-index: 10;
    padding-top: 0px;
    padding-bottom: 20px;
    color: #000;
    text-align: left;
  } */
}

/* .my-carousel-caption {
  position: absolute;
  right: 90%;
  bottom: 20px;
  left: -22%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  height: 80px;
} */

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