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
            <div class="liveView">
              <video-player
                class="vjs-custom-skin videojs"
                ref="videoPlayer"
                :options="playerOptions"
                @ready="onPlayerReadied"
                @timeupdate="onTimeupdate"
              >
              </video-player>
            </div>
          </client-only>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      videoData: [],
      initialized: false,
      playerOptions: {
        autoplay: false,
        controls: true,
        techOrder: ["flash", "html5"],
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: this.videoData
          }
        ],
        poster: "~/static/brand.png"
      }
    };
  },
  components: {
    NavBar,
    Carousel
  },
  async fetch() {
    await this.$axios
      .$get(process.env.baseUrl + "/livetvfedd")
      .then(posts => (this.videoData = posts.results.live_tv_url));
  }
};
</script>

<style scoped>
.liveView {
  position: relative;
}
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