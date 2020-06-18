<template>
  <div>
    <!-- start Logo start -->
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
    <!-- start logo end -->

    <!-- navbar start -->
    <div class="side-panel">
      <NavBar />
    </div>
    <!-- navbar end -->

    <div>
      <Carousel />
      <b-container v-if="$fetchState.pending">
        <div class="mt-4 text-center">
          <b-spinner
            style="width: 3rem; height: 3rem;"
            label="Loading..."
          ></b-spinner>
        </div>
      </b-container>
      <!-- Home Page Start -->
      <b-container v-else>
        <b-row class="mb-2" no-gutters>
          <!-- Live Class Start -->
          <b-col class="p-1" cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="d-flex " style="margin-bottom:10px;">
              <div>
                <nuxt-link to="/live-class">
                  <b-img
                    style="background-color: #343a40; padding:5px"
                    height="43"
                    width="43"
                    class="rounded"
                    :src="require('~/static/icons/lt.png')"
                  >
                  </b-img>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/live-class">
                  <h5 style="color:#222;" class="ml-2 mt-2">
                    <strong>Live Class</strong>
                  </h5>
                </nuxt-link>
              </div>
            </div>
            <client-only>
              <b-embed
                style="height:88%;"
                type="iframe"
                aspect="4by3"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></b-embed>
            </client-only>
          </b-col>
          <!-- Live Class End -->

          <!-- Notice Board Start -->
          <b-col class="pl-1 pt-1 pb-1" cols="12" sm="12" md="6" lg="6" xl="6">
            <div class="d-flex" style="margin-bottom:10px;">
              <div>
                <nuxt-link to="/next/Notice Board"
                  ><b-img
                    style="background-color: #343a40; padding:5px"
                    height="43"
                    width="43"
                    class="rounded"
                    :src="require('~/static/icons/n.png')"
                  >
                  </b-img>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/next/Notice Board"
                  ><h5 style="color:#222;" class="ml-2 mt-2">
                    <strong>Notice Board</strong>
                  </h5>
                </nuxt-link>
              </div>
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
                  <b-modal hide-footer size="xl" :id="'modal-nb-1' + index">
                    <b-card no-body :img-src="item.img">
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
                  </b-modal>

                  <div>
                    <b-card
                      v-b-modal="'modal-nb-1' + index"
                      overlay
                      :img-src="item.img"
                      img-alt="Card Image"
                      text-variant="white"
                      title=""
                      sub-title=""
                      img-height="180"
                    >
                      <b-card-text text-tag="h5" style="margin-top:90px;">
                        {{ item.title.slice(0, 40) + ".." }}
                      </b-card-text>
                    </b-card>
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
                  <b-modal hide-footer size="xl" :id="'modal-nb-2' + index">
                    <b-card no-body :img-src="item.img">
                      <p class="text-muted ml-4 mt-2">
                        {{ item.release_date }}
                      </p>
                      <h3 class="ml-4 mt-2">
                        {{ item.title }}
                      </h3>
                      <div class="ml-4 mt-1" v-html="item.details"></div>
                      <div class="ml-4">
                        File:
                        <a :href="item.Pdf_file" style="color:blue;"
                          >Download Document</a
                        >
                      </div>
                    </b-card>
                  </b-modal>

                  <div>
                    <!-- <nuxt-link to=""> -->
                    <b-card
                      overlay
                      v-b-modal="'modal-nb-2' + index"
                      :img-src="item.img"
                      img-alt="Card Image"
                      text-variant="white"
                      title=""
                      sub-title=""
                      img-height="174"
                    >
                      <b-card-text text-tag="h5" style="margin-top:80px;">
                        {{ item.title.slice(0, 33) + ".." }}
                      </b-card-text>
                    </b-card>
                    <!-- </nuxt-link> -->
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
              <div>
                <nuxt-link to="/next/Academic Info">
                  <b-img
                    style="background-color: #343a40; padding:5px"
                    height="43"
                    width="43"
                    class="rounded"
                    :src="require('~/static/icons/p.png')"
                  >
                  </b-img
                ></nuxt-link>
              </div>
              <div>
                <nuxt-link to="/next/Academic Info">
                  <h5 style="color:#222;" class="ml-2 mt-2">
                    <strong>Academic Info</strong>
                  </h5></nuxt-link
                >
              </div>
            </div>
            <div
              v-for="(item, index) in academicInfo.slice(0, 2)"
              :key="index"
              class="latest-home-card p-3"
            >
              <b-modal hide-footer size="xl" :id="'modal-ai-1' + index">
                <b-card no-body :img-src="item.img">
                  <p class="text-muted mt-2 ml-4">{{ item.release_date }}</p>
                  <h3 class="ml-4 mt-2">{{ item.title }}</h3>
                  <div class="ml-4" v-html="item.details"></div>
                </b-card>
              </b-modal>

              <!-- <nuxt-link to=""> -->
              <b-card no-body>
                <b-card-img
                  v-b-modal="'modal-ai-1' + index"
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
              <!-- </nuxt-link> -->
            </div>
          </b-col>
          <b-col class="mb-4" cols="12" sm="6" md="4" lg="4" xl="4">
            <div class="latest-home-card photo-section-two">
              <div>
                <!-- <nuxt-link to=""> -->
                <b-list-group>
                  <b-list-group-item
                    v-for="(item, index) in academicInfo.slice(2, 6)"
                    :key="index"
                    class="custom-list-item"
                  >
                    <b-modal hide-footer size="xl" :id="'modal-ai-2' + index">
                      <b-card no-body :img-src="item.img">
                        <p class="text-muted mt-2 ml-4">
                          {{ item.release_date }}
                        </p>
                        <h3 class="ml-4 mt-2">{{ item.title }}</h3>
                        <div class="ml-4" v-html="item.details"></div>
                      </b-card>
                    </b-modal>

                    <div v-b-modal="'modal-ai-2' + index" class="d-flex">
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
                <!-- </nuxt-link> -->
              </div>
            </div>
          </b-col>
          <!-- Academic End -->

          <!-- Photo Info Start -->
          <b-col cols="12" sm="6" md="4" lg="4" xl="4">
            <div class="ml-md-4 ml-lg-4 ml-xl-4">
              <div class="d-flex " style="margin-bottom:10px;">
                <div>
                  <nuxt-link to="/next/Photo">
                    <b-img
                      style="background-color: #343a40; padding:5px;"
                      height="43"
                      width="43"
                      class="rounded"
                      :src="require('~/static/icons/ai.png')"
                    >
                    </b-img>
                  </nuxt-link>
                </div>
                <div>
                  <nuxt-link to="/next/Photo">
                    <h5 style="color:#222;" class="ml-2 mt-2">
                      <strong>Photo</strong>
                    </h5>
                  </nuxt-link>
                </div>
              </div>
              <!-- </div> -->

              <b-card
                v-b-modal.modal-center
                v-for="(item, index) in photo.slice(0, 1)"
                :key="index"
                no-body
              >
                <b-modal hide-footer size="xl" id="modal-center">
                  <b-card no-body :img-src="item.img">
                    <p class="text-muted mt-2 ml-4">{{ item.release_date }}</p>
                    <h3 class="ml-4 mt-2">{{ item.title }}</h3>
                  </b-card>
                </b-modal>
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

              <div class="mt-4">
                <div>
                  <b-list-group style="background-color:#ffff">
                    <!-- <nuxt-link to="/next/Photo"> -->
                    <b-list-group-item
                      style="border:none;margin-bottom:23px;"
                      v-for="(item, index) in photo.slice(1, 4)"
                      :key="index"
                    >
                      <b-modal
                        hide-footer
                        size="xl"
                        :id="'modal-photo' + index"
                      >
                        <b-card no-body :img-src="item.img">
                          <p class="text-muted mt-2 ml-4">
                            {{ item.release_date }}
                          </p>
                          <h3 class="ml-4 mt-2">{{ item.title }}</h3>
                        </b-card>
                      </b-modal>
                      <div class="d-flex" v-b-modal="'modal-photo' + index">
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
                    <!-- </nuxt-link> -->
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
              <div>
                <nuxt-link to="/next/Class Note">
                  <b-img
                    style="background-color: #343a40; padding:5px"
                    height="43"
                    width="43"
                    class="rounded"
                    :src="require('~/static/icons/v.png')"
                  >
                  </b-img
                ></nuxt-link>
              </div>
              <div>
                <nuxt-link to="/next/Class Note">
                  <h5 style="color:#222;" class="ml-2 mt-2">
                    <strong>Class Note</strong>
                  </h5></nuxt-link
                >
              </div>
            </div>
          </b-col>
          <b-col
            class="mb-4"
            v-for="(item, index) in classNote"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="4"
            xl="4"
          >
            <b-modal hide-footer size="xl" :id="'modal-classNote' + index">
              <b-card no-body :img-src="item.note_img">
                <p class="text-muted mt-2 ml-4">{{ item.release_date }}</p>
                <h3 class="ml-4 mt-2">{{ item.title }}</h3>
                <div v-html="item.details" class="ml-4"></div>
                <div class="ml-4">
                  File:
                  <a :href="item.Pdf_file" style="color:blue;"
                    >Download Document</a
                  >
                </div>
              </b-card>
            </b-modal>

            <b-card no-body>
              <b-card-img
                v-b-modal="'modal-classNote' + index"
                :src="item.note_img"
                alt="Card image"
                height="170"
              ></b-card-img>
              <p class="text-muted mt-1 ml-3" style="font-size:15px;">
                {{ item.release_date }}
              </p>
              <h5 class="ml-3">
                <strong>{{ item.title.slice(0, 30) + ".." }}</strong>
              </h5>
            </b-card>
            <!-- </nuxt-link> -->
          </b-col>
        </b-row>
      </b-container>
      <!-- Home Page End -->
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MyVideoPlayer from "@/components/MyVideoPlayer";
import Carousel from "@/components/Carousel";

export default {
  components: {
    NavBar,
    Carousel,
    MyVideoPlayer
  },
  data() {
    return {
      noticeBoard: [],
      photo: [],
      academicInfo: [],
      classNote: [],
      searched: false
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

    // academic Info
    await this.$axios
      .$get(process.env.baseUrl + "/Academic_Infos_views_home")
      .then(posts => (this.academicInfo = posts.results));
    // class note
    await this.$axios
      .$get(process.env.homeCn)
      .then(posts => (this.classNote = posts.results));
  }
};
</script>
<style scoped>
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
  /* box-shadow: 0 5px 0 -0.8rem rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.05); */
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
