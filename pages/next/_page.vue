<template>
  <div>
    <div class="side-panel">
      <NavBar />
    </div>
    <Carousel />
    <b-container>
      <b-row no-gutters>
        <b-col class="mt-4 " cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card class="shadow-sm">
            <h1 class="title">{{ this.$route.params.page }}</h1>
          </b-card>
        </b-col>
        <b-col
          v-for="(item, index) in Data"
          :key="index"
          class="p-1
          mt-3
          "
          cols="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
        >
          <div v-if="showModal">
            <b-modal
              ok-title="close"
              ok-only
              size="xl"
              :id="'modal-photo' + index"
            >
              <b-card no-body :img-src="item.img">
                <h3 class="ml-4 mt-2">{{ item.title }}</h3>
                <p class="text-muted ml-4">{{ item.release_date }}</p>
              </b-card>
            </b-modal>
          </div>
          <CommonCard
            v-b-modal="'modal-photo' + index"
            :imgSrc="item.img"
            :title="item.title"
            :relaseDate="item.release_date"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CommonCard from "@/components/CommonCard.vue";
import Carousel from "@/components/Carousel.vue";

import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      showModal: false,
      Data: []
    };
  },
  components: {
    NavBar,
    Carousel,
    CommonCard
  },
  async fetch() {
    if (this.$route.params.page == "Notice Board") {
      await this.$axios
        .$get(process.env.baseUrl + "/notice_bord")
        .then(posts => (this.Data = posts.results));
    } else if (this.$route.params.page == "Photo") {
      await this.$axios
        .$get(process.env.baseUrl + "/photo")
        .then(posts => (this.Data = posts.results));
      this.showModal = true;
    } else if (this.$route.params.page == "Academic Info") {
      await this.$axios
        .$get(process.env.baseUrl + "/Academic_Info")
        .then(posts => (this.Data = posts.results));
    }
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