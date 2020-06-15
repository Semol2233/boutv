<template>
  <div>
    <div class="side-panel">
      <NavBar />
    </div>
    <Carousel />
    <b-container>
      <b-row
        ><b-col class="mt-4 " cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card class="shadow-sm">
            <h1 class="title">Live CLass</h1>
          </b-card>
        </b-col>
        <b-col cols="12" sm="12" md="12" lg="12" xl="12">
          <client-only>
            <VideoPlayer />
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
import Carousel from "@/components/Carousel.vue";

import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      videoData: []
    };
  },
  components: {
    NavBar,
    Carousel,
    VideoPlayer
  },
  async fetch() {
    await this.$axios
      .$get(process.env.baseUrl + "/livetvfedd")
      .then(posts => (this.videoData = posts.results));
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  text-transform: uppercase;
  word-wrap: break-word;
  font-size: 30px;
  line-height: 38px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: #111;
}
</style>