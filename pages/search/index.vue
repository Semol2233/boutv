<template>
  <div class="search-page">
    <div class="side-panel">
      <NavBar />
    </div>
    <b-container v-if="$fetchState.pending">
      <div class="mt-4 text-center">
        <b-spinner
          style="width: 3rem; height: 3rem;"
          label="Loading..."
        ></b-spinner>
      </div>
    </b-container>
    <b-container v-else>
      <b-row>
        <b-col
          v-if="searchKeyword.results == ''"
          cols="12"
          md="12"
          sm="12"
          lg="12"
          xl="12"
          class="text-center mt-4 mb-4"
        >
          <div style="margin-top:50px; margin-bottom:268px;">
            <h5>Your search - {{ keyword }} - did not match any documents.</h5>
            <p>Suggestions:</p>
            <ul>
              <li>Make sure that all words are spelled correctly.</li>
              <li>Try different keywords.</li>
              <li>Try more general keywords.</li>
            </ul>
          </div>
        </b-col>
        <b-col
          v-else-if="searchKeyword.results != ''"
          v-for="(item, index) in searchKeyword.results"
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
          <b-modal hide-footer size="xl" :id="'modal-photo' + index">
            <b-card no-body :img-src="item.img">
              <p class="ml-4 text-muted mt-2">{{ item.release_date }}</p>
              <h3 class="ml-4">{{ item.title }}</h3>
              <div v-html="item.details" class="ml-4"></div>
            </b-card>
          </b-modal>

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

    <div class="custom-footer-class">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import CommonCard from "@/components/CommonCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    NavBar,
    CommonCard,
    Footer
  },
  data() {
    return {
      searchedItems: []
    };
  },
  head() {
    return {
      title: `BouTv - Bangladesh Open University Search page`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Searching results on BouTv website."
        }
      ]
    };
  },
  async fetch() {
    if (this.searchKeyword == "") {
      await this.$axios
        .$get(process.env.search)
        .then(posts => this.$store.dispatch("SetSearchedKeyword", posts));
    }
    console.log(this.searchKeyword);
  },
  computed: mapState({
    searchKeyword: state => state.searchKeyword,
    keyword: state => state.keyword
  }),
  methods: {
    async previous() {
      if (this.searchKeyword.previous != null) {
        await this.$axios
          .$get(this.searchKeyword.previous)
          .then(posts => this.$store.dispatch("SetSearchedKeyword", posts));
      }
    },
    async next() {
      if (this.searchKeyword.next != null) {
        this.$axios
          .$get(this.searchKeyword.next)
          .then(posts => this.$store.dispatch("SetSearchedKeyword", posts));
      } else {
        this.$bvToast.toast("No more data are available", {
          title: "Go Back",
          autoHideDelay: 5000,
          appendToast: true,
          toaster: "b-toaster-bottom-center",
          solid: true
        });
      }
    }
  }
};
</script>

<style  scoped>
.custom-footer-class {
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
