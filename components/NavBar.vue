<template>
  <div>
    <b-navbar
      class="my-custom-nav mb-2"
      toggleable="sm"
      type="light"
      variant="light"
    >
      <b-container>
        <b-navbar-brand href="#">
          <b-img
            style="height:50px; width:70px;"
            :src="require('~/static/brand.png')"
          ></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-if="!showInputbar">
            <b-nav-item active href="#">বাংলাদেশ</b-nav-item>
            <b-nav-item active href="#">বিশ্ব</b-nav-item>
            <b-nav-item active href="#">খেলাধুলা</b-nav-item>
            <b-nav-item active href="#">বিনোদন</b-nav-item>
            <b-nav-item active href="#">ছবি</b-nav-item>
            <b-nav-item active href="#">ভিডিও</b-nav-item>
          </b-navbar-nav>
          <div v-else class="shadow-sm w-100">
            <b-input-group>
              <b-form-input></b-form-input>
              <b-input-group-append>
                <b-button variant="dark" size="md">
                  Search
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button
                v-if="!showInputbar"
                @click="showInput"
                variant="light"
                size="md"
                ><b-icon icon="search"></b-icon
              ></b-button>
              <b-button v-else variant="light" size="md" @click="showNavItem"
                ><b-icon icon="x" variant="dark"></b-icon
              ></b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInputbar: false
    };
  },
  methods: {
    showInput() {
      this.showInputbar = true;
    },
    showNavItem() {
      this.showInputbar = false;
    }
  }
};
</script>

<style>
@media (min-width: 575.98px) and (min-width: 768px) and (min-width: 992px) and (min-width: 1200px) {
  .my-custom-nav {
    height: 60px;
  }
}
@media (min-width: 786px) {
  .my-custom-nav {
    height: 60px;
  }
}
</style>