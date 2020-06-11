<template>
  <div class="header">
    <b-navbar
      class="shadow my-custom-nav"
      toggleable="sm"
      type="light"
      style="background-color:white;"
      fixed="top"
    >
      <b-container>
        <b-navbar-brand href="#">
          <b-img
            style="height:50px; width:70px;"
            :src="require('~/static/brand.png')"
          ></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="sidebar-backdrop"></b-navbar-toggle>
        <b-sidebar
          id="sidebar-backdrop"
          backdrop
          shadow
          :backdrop-variant="light"
        >
          <div class="px-3 py-2">
            <b-navbar-nav class="ml-auto" v-if="!showInputbar">
              <b-nav-item class="nav-item-one" active href="#"
                >বাংলাদেশ</b-nav-item
              >
              <b-nav-item class="nav-item-two" active href="#"
                >বিশ্ব</b-nav-item
              >
              <b-nav-item class="nav-item-three" active href="#"
                >খেলাধুলা</b-nav-item
              >
              <b-nav-item class="nav-item-four" active href="#"
                >বিনোদন</b-nav-item
              >
              <b-nav-item class="nav-item-five" active href="#">ছবি</b-nav-item>
              <b-nav-item class="nav-item-six" active href="#"
                >ভিডিও</b-nav-item
              >
            </b-navbar-nav>
            <div v-else class="nav-s-block">
              <div class="search" id="searchb" style="display: block;">
                <b-input
                  autocomplete="on"
                  type="text"
                  placeholder="Search on Voutv..."
                  class="input-search"
                ></b-input>
                <button type="submit" class="searchButton">Search</button>
              </div>
            </div>
            <!-- Right aligned nav items -->
            <b-navbar-nav>
              <b-nav-form class="mt-3" style="cursor:pointer;">
                <b-icon
                  v-if="!showInputbar"
                  @click="showInput"
                  icon="search"
                ></b-icon>
                <b-icon
                  v-else
                  scale="2"
                  icon="x"
                  @click="showNavItem"
                  variant="dark"
                ></b-icon>
              </b-nav-form>
            </b-navbar-nav>
          </div>
        </b-sidebar>

        <b-collapse id="nav-collapse sidebar-backdrop" is-nav>
          <b-navbar-nav class="ml-auto" v-if="!showInputbar">
            <b-nav-item class="nav-item-one mr-3 p-2" active href="#"
              >বাংলাদেশ</b-nav-item
            >
            <b-nav-item class="nav-item-two mr-3 p-2" active href="#"
              >বিশ্ব</b-nav-item
            >
            <b-nav-item class="nav-item-three mr-3 p-2" active href="#"
              >খেলাধুলা</b-nav-item
            >
            <b-nav-item class="nav-item-four mr-3 p-2" active href="#"
              >বিনোদন</b-nav-item
            >
            <b-nav-item class="nav-item-five mr-3 p-2" active href="#"
              >ছবি</b-nav-item
            >
            <b-nav-item class="nav-item-six mr-3 p-2" active href="#"
              >ভিডিও</b-nav-item
            >
          </b-navbar-nav>
          <div v-else class="nav-s-block">
            <div class="search" id="searchb" style="display: block;">
              <b-input
                autocomplete="on"
                type="text"
                placeholder="Search on Voutv..."
                class="input-search"
              ></b-input>
              <button type="submit" class="searchButton">Search</button>
            </div>
          </div>
          <!-- Right aligned nav items -->
          <b-navbar-nav class=" ml-4">
            <b-nav-form style="cursor:pointer;">
              <b-icon
                v-if="!showInputbar"
                @click="showInput"
                icon="search"
              ></b-icon>
              <b-icon
                v-else
                scale="2"
                icon="x"
                @click="showNavItem"
                variant="dark"
              ></b-icon>
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

<style scoped>
.header {
  margin-bottom: 70px !important;
}
.search {
  animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}

.nav-s-block {
  width: 92%;
  float: left;
  padding: 0 10px;
  height: 55px;
  position: relative;
}
.search {
  width: 100%;
  position: relative;
  display: none;
  margin-top: 5px;
}
.input-search {
  float: left;
  width: 100%;
  outline: none;
  border: 1px 1px 0px 1px solid black;
  border-radius: 6px;
  padding: 0 10px;
  z-index: 1;
  box-sizing: border-box;
  font-size: 16px;
  background: #ffffff;
  outline: none;
  color: black;
  height: 45px;
}
.searchButton {
  margin-top: 2px;
  position: absolute;
  right: 1px;
  width: 85px;
  height: 42px;
  background: #ffffff;
  text-align: center;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  border: 0;
  outline: none;
}

.my-custom-nav {
  font-size: 19px;
}
@media (max-width: 785px) {
  .header {
    margin-bottom: 85px !important;
  }
}

@media (min-width: 575.98px) and (min-width: 768px) and (min-width: 992px) and (min-width: 1200px) {
  .my-custom-nav {
    height: 60px;
  }
  /* .header {
    margin-bottom: 70px !important;
  } */
  .nav-item-one :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }
  .nav-item-two :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
    /* border-bottom: 3px solid rgb(77, 178, 236); */
  }

  .nav-item-three :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }

  .nav-item-four :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }

  .nav-item-five :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }

  .nav-item-six :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }
}

@media (min-width: 786px) {
  .my-custom-nav {
    height: 60px;
  }
  /* .header {
    margin-bottom: 70px !important;
  } */
  .nav-item-one :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }
  .nav-item-two :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
    /* border-bottom: 3px solid rgb(77, 178, 236); */
  }

  .nav-item-three :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }

  .nav-item-four :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }

  .nav-item-five :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }

  .nav-item-six :hover {
    border-bottom: 3px solid rgb(77, 178, 236);
    padding-bottom: 3px;
  }
}
</style>