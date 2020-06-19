<template>
  <div>
    <div class="side-panel">
      <NavBar />
    </div>
    <Carousel />
    <b-container>
      <b-row
        ><b-col class="mt-4 " cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card class="shadow-sm text-center">
            <h1 class="title">Live CLass</h1>
          </b-card>
        </b-col>
        <b-col class="mt-4" cols="12" sm="12" md="12" lg="12" xl="12">
          <client-only>
            <div class="player">
              <div>
                <b-embed
                  type="iframe"
                  aspect="21by9"
                  src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                  allowfullscreen
                ></b-embed>
              </div>
              <!-- <video-player
                ref="videoPlayer"
                class="vjs-custom-skin"
                :options="playerOptions"
                @play="onPlayerPlay($event)"
                @ready="onPlayerReady($event)"
              >
              </video-player> -->
            </div>
          </client-only>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel.vue";
import NavBar from "@/components/NavBar.vue";
// import videoPlayer from "vue-videojs7";
export default {
  // data() {
  //   return {
  //     playerOptions: {
  //       autoplay: false,
  //       controls: true,
  //       controlBar: {
  //         timeDivider: false,
  //         durationDisplay: false
  //       },
  //       poster: "../static/logore-1.png"
  //     }
  //   };
  // },
  // computed: {
  //   player() {
  //     return this.$refs.videoPlayer.player;
  //   }
  // },
  components: {
    NavBar,
    Carousel,
    Footer
    // videoPlayer
  }
  // methods: {
  //   onPlayerPlay(player) {
  //     console.log("player play!", player);
  //   },
  //   onPlayerReady(player) {
  //     console.log("player ready!", player);
  //     this.player.play();
  //   },
  //   playVideo: function(source) {
  //     const video = {
  //       withCredentials: false,
  //       type: "application/x-mpegurl",
  //       src: source
  //     };
  //     this.player.reset(); // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,
  //     this.player.src(video);
  //     // this.player.load()
  //     this.player.play();
  //   }
  // },
  // async fetch() {
  //   await this.$axios
  //     .$get(process.env.baseUrl + "/livetvfedd")
  //     .then(posts => (this.videoData = posts.results.live_tv_url));
  //   this.playVideo(this.videoData);
  // }
};
</script>

<style scoped>
/* .player {
  position: absolute !important;
  width: 100%;
  height: 100%;
}
.vjs-custom-skin {
  height: 100% !important;
}

.vjs-custom-skin /deep/ .video-js {
  height: 84%;
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
} */
</style>