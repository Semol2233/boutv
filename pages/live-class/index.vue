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
export default {
  components: {
    NavBar,
    Carousel,
    Footer
  },
  head() {
    return {
      title: "BouTv -Live Class",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Live classes of  Bangladesh open university"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>