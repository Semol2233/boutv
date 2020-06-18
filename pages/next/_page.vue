<template>
  <div>
    <div class="side-panel">
      <NavBar />
    </div>
    <Carousel />
    <b-container v-if="$fetchState.pending">
      <div class="mt-4 text-center">
        <b-spinner
          style="width: 3rem; height: 3rem;"
          label="Loading..."
        ></b-spinner>
      </div>
    </b-container>
    <b-container v-else>
      <b-row no-gutters>
        <b-col class="mt-4 " cols="12" sm="12" md="12" lg="12" xl="12">
          <b-card class="shadow-sm">
            <h1 class="title">{{ this.$route.params.page }}</h1>
          </b-card>
        </b-col>
        <b-col
          v-for="(item, index) in Data.results"
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
          <!-- <div v-if="showModal"> -->
          <b-modal hide-footer size="xl" :id="'modal-photo' + index">
            <!-- class Note -->
            <b-card v-if="classNote" no-body :img-src="item.note_img">
              <p class="ml-4 text-muted mt-2">{{ item.release_date }}</p>
              <h3 class="ml-4">{{ item.title }}</h3>
              <div class="ml-4" v-html="item.details"></div>
              <div class="ml-4">
                File:
                <a :href="item.Pdf_file" style="color:blue;"
                  >Download Document</a
                >
              </div>
            </b-card>

            <!-- notice board -->

            <b-card v-else-if="noticeBoard" no-body :img-src="item.img">
              <p class="text-muted ml-4 mt-2">
                {{ item.release_date }}
              </p>
              <h3 class="ml-4 mt-2">{{ item.title }}</h3>
              <div class="ml-4 mt-1" v-html="item.details"></div>
              <div class="ml-4">
                File:
                <a :href="item.Pdf_file" style="color:blue;"
                  >Download Document</a
                >
              </div>
            </b-card>

            <!-- academic info -->
            <b-card v-else-if="academicInfo" no-body :img-src="item.img">
              <p class="text-muted mt-2 ml-4">{{ item.release_date }}</p>
              <h3 class="ml-4 mt-2">{{ item.title }}</h3>
              <div class="ml-4" v-html=" item.details"></div>
            </b-card>

            <b-card v-else no-body :img-src="item.img">
              <p class="text-muted mt-2 ml-4">{{ item.release_date }}</p>
              <h3 class="ml-4 mt-2">{{ item.title }}</h3></b-card
            >
          </b-modal>
          <!-- </div> -->
          <CommonCard
            v-if="classNote"
            v-b-modal="'modal-photo' + index"
            :imgSrc="item.note_img"
            :title="item.title"
            :relaseDate="item.release_date"
          />

          <CommonCard
            v-else
            v-b-modal="'modal-photo' + index"
            :imgSrc="item.img"
            :title="item.title"
            :relaseDate="item.release_date"
          />
        </b-col>
      </b-row>
      <div class="text-center mt-4 mb-4">
        <b-button-group>
          <b-button
            v-b-tooltip.hover
            title="Previous Page"
            @click="previous"
            class="text-center"
            style="width:60px;"
            ><b-icon icon="chevron-left"></b-icon
          ></b-button>
          <b-button
            v-b-tooltip.hover
            title="Next Page"
            @click="next"
            class="text-center"
            style="width:60px;"
          >
            <b-icon icon="chevron-right"></b-icon>
          </b-button>
        </b-button-group>
      </div>
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
      classNote: false,
      Data: [],
      currentPage: 1,
      noticeBoard: false,
      photo: false,
      academicInfo: false
    };
  },
  components: {
    NavBar,
    Carousel,
    CommonCard
  },
  methods: {
    previous() {
      if (this.Data.previous != null) {
        this.$axios.$get(this.Data.previous).then(posts => (this.Data = posts));
      }
    },
    next() {
      if (this.Data.next != null) {
        this.$axios.$get(this.Data.next).then(posts => (this.Data = posts));
      } else {
        alert("No More Data");
      }
    }
  },
  async fetch() {
    // Notice Board
    if (this.$route.params.page == "Notice Board") {
      await this.$axios
        .$get(process.env.baseUrl + "/notice_bord")
        .then(posts => (this.Data = posts));
      this.noticeBoard = true;
    }

    // Photo
    else if (this.$route.params.page == "Photo") {
      await this.$axios
        .$get(process.env.baseUrl + "/photo")
        .then(posts => (this.Data = posts));
      this.photo = true;
    }

    // AcademicInfo
    else if (this.$route.params.page == "Academic Info") {
      await this.$axios
        .$get(process.env.baseUrl + "/Academic_Info")
        .then(posts => (this.Data = posts));
      this.academicInfo = true;
    }

    // ClassNote
    else if (this.$route.params.page == "Class Note") {
      await this.$axios
        .$get(process.env.baseUrl + "/class_note_seri_views_home")
        .then(posts => (this.Data = posts));
      this.classNote = true;
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