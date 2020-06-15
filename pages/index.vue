<template>
  <div>
    <!-- start Logo start -->

    <!-- start logo end -->
    <b-container>
      <b-row>
        <b-col
          cols="12"
          sm="12"
          offset-md="3"
          offset-lg="3"
          offset-xl="3"
          md="6"
          lg="6"
          xl="6"
        >
          <b-card style="text-align:center;border:none !important;" no-body>
            <b-card-img height="134" src="~/static/bn3.JPG"></b-card-img>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- navbar start -->
    <div class="side-panel">
      <NavBar />
    </div>
    <!-- navbar end -->
    <Carousel />
    <b-container>
      <b-row class="mb-4" no-gutters>
        <!-- Live Class Start -->
        <b-col class="p-1" cols="12" sm="12" md="6" lg="6" xl="6">
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="43"
              width="43"
              class="rounded"
              :src="require('~/static/icons/lt.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Live Class</strong>
            </h5>
          </div>
          <client-only>
            <VideoPlayer />
          </client-only>
        </b-col>
        <!-- Live Class End -->

        <!-- Notice Board Start -->
        <b-col class="pl-1 pt-1 pb-1" cols="12" sm="12" md="6" lg="6" xl="6">
          <div class="d-flex" style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="43"
              width="43"
              class="rounded"
              :src="require('~/static/icons/n.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Notice Board</strong>
            </h5>
          </div>
          <div>
            <b-row>
              <b-col
                v-for="(item, index) in noticeBoard.slice(0, 1)"
                :key="index"
                class=""
                cols="12"
                sm="12"
                md="12"
                lg="12"
                xl="12"
              >
                <div>
                  <nuxt-link to="/next/Notice Board">
                    <b-card
                      overlay
                      :img-src="item.img"
                      img-alt="Card Image"
                      text-variant="white"
                      title=""
                      sub-title=""
                      img-height="180"
                    >
                      <b-card-text text-tag="h5" style="margin-top:90px;">
                        {{ item.title }}
                      </b-card-text>
                    </b-card>
                  </nuxt-link>
                </div>
              </b-col>
            </b-row>
            <b-row no-gutters>
              <b-col
                v-for="(item, index) in noticeBoard.slice(1, 3)"
                :key="index"
                class="p-md-1 pt-md-2 mb-2 mt-2 my-md-0 my-lg-0 my-xl-0 "
                cols="12"
                sm="12"
                md="6"
                lg="6"
                xl="6"
              >
                <div>
                  <nuxt-link to="/next/Notice Board">
                    <b-card
                      overlay
                      :img-src="item.img"
                      img-alt="Card Image"
                      text-variant="white"
                      title=""
                      sub-title=""
                      img-height="174"
                    >
                      <b-card-text text-tag="h5" style="margin-top:80px;">
                        {{ item.title }}
                      </b-card-text>
                    </b-card>
                  </nuxt-link>
                </div></b-col
              >
            </b-row>
          </div>
        </b-col>
        <!-- Notice Board End -->
      </b-row>
      <b-row no-gutters>
        <!-- Academic Start -->
        <b-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="d-flex" style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="43"
              width="43"
              class="rounded"
              :src="require('~/static/icons/p.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Academic Info</strong>
            </h5>
          </div>
          <div
            v-for="(item, index) in academicInfo.slice(0, 2)"
            :key="index"
            class="latest-home-card p-3"
          >
            <nuxt-link to="/next/Academic Info">
              <b-card no-body>
                <b-card-img
                  :src="item.img"
                  alt="Card image"
                  height="170"
                ></b-card-img>
                <p class="text-muted mt-1 ml-2" style="font-size:15px;">
                  {{ item.release_date }}
                </p>
                <h5 class=" ml-2">
                  <strong>{{ item.title.slice(0, 29) + ".." }}</strong>
                </h5>
              </b-card>
            </nuxt-link>
          </div>
        </b-col>
        <b-col class="mb-4" cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="latest-home-card photo-section-two">
            <div>
              <nuxt-link to="/next/Academic Info">
                <b-list-group>
                  <b-list-group-item
                    v-for="(item, index) in academicInfo.slice(2, 6)"
                    :key="index"
                    class="custom-list-item"
                  >
                    <div class="d-flex">
                      <div>
                        <b-img-lazy
                          class="custom-latest-image"
                          :src="item.img"
                          alt="Image 1"
                        ></b-img-lazy>
                      </div>
                      <div class="custom-latest-text">
                        {{ item.title.slice(0, 30) + ".." }}
                        <p class="mt-4 text-muted">{{ item.release_date }}</p>
                      </div>
                    </div>
                    <hr class="m-0 p-0" />
                  </b-list-group-item>
                </b-list-group>
              </nuxt-link>
            </div>
          </div>
        </b-col>
        <!-- Academic End -->

        <!-- Photo Info Start -->
        <b-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="ml-md-4 ml-lg-4 ml-xl-4">
            <div class="d-flex " style="margin-bottom:10px;">
              <b-img
                style="background-color: #343a40; padding:5px"
                height="43"
                width="43"
                class="rounded"
                :src="require('~/static/icons/ai.png')"
              >
              </b-img>
              <h5 style="color:#222;" class="ml-2 mt-2">
                <strong>Photo</strong>
              </h5>
            </div>
            <nuxt-link to="/next/Photo">
              <b-card
                v-for="(item, index) in photo.slice(0, 1)"
                :key="index"
                no-body
              >
                <b-card-img
                  :src="item.img"
                  alt="Card image"
                  height="170"
                ></b-card-img>

                <p class="text-muted mt-1 ml-2" style="font-size:15px;">
                  {{ item.release_date }}
                </p>
                <h5 class="pb-2 pr-2 ml-2">
                  <strong>{{ item.title.slice(0, 30) + ".." }}</strong>
                </h5>
              </b-card>
            </nuxt-link>
            <div class="mt-4">
              <div>
                <b-list-group style="background-color:#ffff">
                  <nuxt-link to="/next/Photo">
                    <b-list-group-item
                      style="border:none;margin-bottom:23px;"
                      v-for="(item, index) in photo.slice(1, 4)"
                      :key="index"
                    >
                      <div class="d-flex">
                        <div>
                          <b-img-lazy
                            class="custom-latest-image"
                            :src="item.img"
                            alt="Image 1"
                          ></b-img-lazy>
                        </div>
                        <div class="custom-latest-text">
                          {{ item.title.slice(0, 30) + ".." }}
                          <p class="mt-4 text-muted">{{ item.release_date }}</p>
                        </div>
                      </div>
                      <hr class="m-0 p-0" />
                    </b-list-group-item>
                  </nuxt-link>
                </b-list-group>
              </div>
            </div>
          </div>
        </b-col>
        <!-- Photo Info End -->
      </b-row>
      <b-row class="mt-4">
        <!-- Class note Start -->
        <b-col cols="12">
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="43"
              width="43"
              class="rounded"
              :src="require('~/static/icons/v.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Class Note</strong>
            </h5>
          </div>
        </b-col>
        <b-col
          class="mb-4"
          v-for="i in 3"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <nuxt-link to="/next/Class Note">
            <b-card no-body>
              <b-card-img
                src="https://placekitten.com/1000/300"
                alt="Card image"
                height="170"
              ></b-card-img>
              <p class="text-muted mt-1 ml-3" style="font-size:15px;">
                12-11-2101
              </p>
              <h5 class="ml-3">
                <strong
                  >Game Changing Virtual Reality Console Hits the Market</strong
                >
              </h5>
            </b-card>
          </nuxt-link>
        </b-col>
        <!-- Class Video End -->

        <!-- Contact -->
        <!-- <b-col
          offset-md="4"
          offset-lg="4"
          offset-xl="4"
          cols="12"
          sm="6"
          md="4"
          lg="4"
          xl="4"
        >
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="43"
              width="43"
              class="rounded"
              :src="require('~/static/icons/c.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Contact</strong>
            </h5>
          </div>

          <b-card no-body>
            <b-card-img
              src="https://placekitten.com/1000/300"
              alt="Card image"
              height="170"
            ></b-card-img>
            <p class="text-muted mt-3" style="font-size:16px;">12-11-2101</p>
            <h5 class="">
              <strong
                >Game Changing Virtual Reality Console Hits the Market</strong
              >
            </h5>
          </b-card>
        </b-col> -->
        <!-- Contact End -->
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import VideoPlayer from "@/components/VideoPlayer";
import Carousel from "@/components/Carousel";

export default {
  components: {
    NavBar,
    Carousel,
    VideoPlayer
  },
  data() {
    return {
      noticeBoard: [],
      photo: [],
      academicInfo: []
    };
  },
  async fetch() {
    // get notice board
    await this.$axios
      .$get(process.env.baseUrl + "/home_notice")
      .then(posts => (this.noticeBoard = posts.results));

    // get photo board
    await this.$axios
      .$get(process.env.baseUrl + "/photo_views_home")
      .then(posts => (this.photo = posts.results));

    await this.$axios
      .$get(process.env.baseUrl + "/Academic_Infos_views_home")
      .then(posts => (this.academicInfo = posts.results));
  }
};
</script>
<style scoped>
/* .side-panel {
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  z-index: 20;
  border-right: solid 0.5px rgba(0, 0, 0, 0.2);
} */
@media (min-width: 576px) {
  .photo-section-two {
    margin-top: 53px;
  }
}
@media (min-width: 576px) and (min-width: 768px) and (min-width: 992px) and (min-width: 1200px) {
  .photo-section-two {
    margin-top: 53px;
  }
}
.latest-home-card {
  background: #ffff;
  box-shadow: 0 5px 0 -0.8rem rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.custom-latest-title {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  text-align: left;
  font-size: 20px;
  color: rgb(20, 23, 24);
  padding: 0 12px;
  border-bottom: 1px solid #eee;
}
.custom-list-item {
  margin-left: 10px;
  border: none !important;
  margin-bottom: 24px;
  cursor: pointer;
}
.custom-latest-image {
  width: 80px;
  height: 80px;
  left: 10px;
  top: 10px;
}
.custom-latest-text {
  margin-left: 20px;
  margin-top: 10px;
  text-align: left;
  line-height: 20px;
  font-size: 14px;
}
a {
  color: black;
  text-decoration: none;
}
</style>
