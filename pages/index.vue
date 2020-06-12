<template>
  <div>
    <NavBar />
    <Carousel />
    <b-container>
      <b-row class="mb-4" no-gutters>
        <!-- Live Class Start -->
        <b-col class="p-1" cols="12" sm="12" md="6" lg="6" xl="6">
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="48"
              width="48"
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
              height="48"
              width="48"
              class="rounded"
              :src="require('~/static/icons/n.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Notice Board</strong>
            </h5>
          </div>
          <b-row>
            <b-col cols="12" sm="12" md="12" lg="12" xl="12">
              <div>
                <b-card
                  overlay
                  img-src="https://picsum.photos/900/250/?image=3"
                  img-alt="Card Image"
                  text-variant="white"
                  title=""
                  sub-title=""
                  img-height="180"
                >
                  <b-card-text text-tag="h5" style="margin-top:90px;">
                    Some quick example text to build on the card and make up the
                    bulk of the card's content.
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col
              class="p-1 pt-2"
              v-for="i in 2"
              :key="i"
              cols="12"
              sm="12"
              md="6"
              lg="6"
              xl="6"
            >
              <div>
                <b-card
                  overlay
                  img-src="https://picsum.photos/900/250/?image=3"
                  img-alt="Card Image"
                  text-variant="white"
                  title=""
                  sub-title=""
                  img-height="174"
                >
                  <b-card-text text-tag="h5" style="margin-top:80px;">
                    Some quick example text to build on the card and make up.
                  </b-card-text>
                </b-card>
              </div></b-col
            >
          </b-row>
        </b-col>
        <!-- Notice Board End -->
      </b-row>
      <b-row>
        <!-- Photo Start -->
        <b-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="48"
              width="48"
              class="rounded"
              :src="require('~/static/icons/p.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Photo</strong>
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
          <b-card class="mt-4" no-body>
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
        </b-col>

        <b-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="latest-home-card" style="margin-top:57px;">
            <div>
              <b-list-group>
                <b-list-group-item
                  class="custom-list-item"
                  v-for="i in 4"
                  :key="i"
                >
                  <div class="d-flex">
                    <div>
                      <b-img-lazy
                        class="custom-latest-image"
                        :src="require('~/static/brand.png')"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                    <div class="custom-latest-text">
                      This is a sample title for latest div.This will show on
                      right
                      <p class="mt-4 text-muted">2012-7-90</p>
                    </div>
                  </div>
                  <hr class="m-0 p-0" />
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </b-col>
        <!-- Photo End -->

        <!-- Academic Info Start -->
        <b-col cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="48"
              width="48"
              class="rounded"
              :src="require('~/static/icons/ai.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Academic Info</strong>
            </h5>
          </div>
          <b-card no-body>
            <b-card-img
              src="https://placekitten.com/1000/300"
              alt="Card image"
              height="170"
            ></b-card-img>

            <p class="text-muted mt-3" style="font-size:16px;">12-11-2101</p>
            <h5 class="pb-2 pr-2">
              <strong
                >Game Changing Virtual Reality Console Hits the Market</strong
              >
            </h5>
          </b-card>
          <div class="latest-home-card mt-4">
            <div>
              <b-list-group>
                <b-list-group-item
                  style="border:none;margin-bottom:3px;"
                  v-for="i in 2"
                  :key="i"
                >
                  <div class="d-flex">
                    <div>
                      <b-img-lazy
                        class="custom-latest-image"
                        :src="require('~/static/brand.png')"
                        alt="Image 1"
                      ></b-img-lazy>
                    </div>
                    <div class="custom-latest-text">
                      This is a sample title for latest div.This will show on
                      right
                      <p class="mt-4 text-muted">2012-7-90</p>
                    </div>
                  </div>
                  <hr class="m-0 p-0" />
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </b-col>
        <!-- Academic Info End -->
      </b-row>
      <b-row class="mt-4">
        <!-- Class Video Start -->
        <b-col class="mb-4" cols="12" sm="6" md="4" lg="4" xl="4">
          <div class="d-flex " style="margin-bottom:10px;">
            <b-img
              style="background-color: #343a40; padding:5px"
              height="48"
              width="48"
              class="rounded"
              :src="require('~/static/icons/v.png')"
            >
            </b-img>
            <h5 style="color:#222;" class="ml-2 mt-2">
              <strong>Class Video</strong>
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
        </b-col>
        <!-- Class Video End -->

        <!-- Contact -->
        <b-col
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
              height="48"
              width="48"
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
        </b-col>
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
  }
};
</script>
<style scoped>
.latest-home-card {
  background: #ffff;
  /* box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px; */
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
  border: none !important;
  margin-bottom: 14px;
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
</style>
