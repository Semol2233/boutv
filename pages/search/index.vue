<template>
  <div>
    <div class="side-panel">
      <NavBar />
    </div>

    <!-- <div class="mt-4"> -->
    <b-container>
      <b-row>
        <b-col
          v-for="(item, index) in searchedItems.results"
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
            <b-card no-body :img-src="item.img">
              <p class="ml-4 text-muted mt-2">{{ item.release_date }}</p>
              <h3 class="ml-4">{{ item.title }}</h3>
              <p class="ml-4">{{ item.details }}</p>
            </b-card>
          </b-modal>
          <!-- </div> -->
          <CommonCard
            v-b-modal="'modal-photo' + index"
            :imgSrc="item.img"
            :title="item.title"
            :relaseDate="item.release_date"
          />
        </b-col>
      </b-row>
      <div class="text-center mt-4 ">
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
    <!-- </div> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CommonCard from "@/components/CommonCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    CommonCard
  },
  data() {
    return {
      searchedItems: []
    };
  },
  async fetch() {
    await this.$axios
      .$get(process.env.search + this.searchKeyword)
      .then(posts => (this.searchedItems = posts));
  },
  computed: mapState({
    searchKeyword: state => state.searchKeyword
  }),
  methods: {
    previous() {
      if (this.searchedItems.previous != null) {
        this.$axios
          .$get(this.searchedItems.previous)
          .then(posts => (this.searchedItems = posts));
      }
    },
    next() {
      if (this.searchedItems.next != null) {
        this.$axios
          .$get(this.searchedItems.next)
          .then(posts => (this.searchedItems = posts));
      } else {
        alert("No More Data");
      }
    }
  }
};
</script>

<style>
</style>