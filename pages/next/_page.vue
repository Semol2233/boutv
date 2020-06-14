<template>
  <div>
    <div class="side-panel">
      <NavBar />
    </div>
    <b-container>
      <b-row>
        <b-col cols="12" sm="12" md="12" lg="12" xl="12">
          <Carousel />
        </b-col>
        <b-col class="mt-4 px-4 " cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card class="shadow-sm">
            <h1 class="title">{{ this.$route.params.page }}</h1>
          </b-card>
        </b-col>
        <b-col
          v-for="(item, index) in Data"
          :key="index"
          class="p-4"
          cols="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
        >
          <CommonCard
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