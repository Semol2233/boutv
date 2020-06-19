<template>
  <div class="header">
    <b-navbar
      id="my-nav"
      class="my-custom-nav"
      toggleable="sm"
      type="light"
      style="background-color:#fafafa;"
    >
      <b-container>
        <b-navbar-brand to="/"
          ><b-img
            style="height:75px; width:203px; margin-left: -40px;"
            :src="require('~/static/logore-1.png')"
            class="brand-logo"
          ></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="sidebar-backdrop"></b-navbar-toggle>
        <b-sidebar
          id="sidebar-backdrop"
          backdrop
          shadow
          backdrop-variant="light"
        >
          <div class="px-3 py-2">
            <b-navbar-nav v-if="!showInputbar">
              <b-nav-item
                :to="'/next/' + 'Notice Board'"
                class="nav-item-one mr-2 p-1"
                active
                href="#"
                >Notice Board</b-nav-item
              >
              <b-nav-item
                to="/live-class"
                class="nav-item-two mr-2 p-1"
                active
                href="#"
                >Live Class</b-nav-item
              >
              <b-nav-item
                :to="'/next/' + 'Photo'"
                class="nav-item-three mr-2 p-1"
                active
                href="#"
                >Photo</b-nav-item
              >
              <b-nav-item
                :to="'/next/' + 'Academic Info'"
                class="nav-item-four mr-2 p-1"
                active
                href="#"
                >Academic Info</b-nav-item
              >
              <b-nav-item
                :to="'/next/' + 'Class Note'"
                class="nav-item-five mr-2 p-1"
                active
                href="#"
                >Class Note</b-nav-item
              >
              <b-nav-item
                class="nav-item-five mr-2 p-1"
                active
                href="https://www.bou.edu.bd/"
                >Contact</b-nav-item
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
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto nav-items" v-if="!showInputbar">
            <b-nav-item
              :to="'/next/' + 'Notice Board'"
              class="nav-item-one mr-2 p-1"
              active
              href="#"
              >Notice Board</b-nav-item
            >
            <b-nav-item
              to="/live-class"
              class="nav-item-two mr-2 p-1"
              active
              href="#"
              >Live Class</b-nav-item
            >
            <b-nav-item
              :to="'/next/' + 'Photo'"
              class="nav-item-three mr-2 p-1"
              active
              href="#"
              >Photo</b-nav-item
            >
            <b-nav-item
              :to="'/next/' + 'Academic Info'"
              class="nav-item-four mr-2 p-1"
              active
              href="#"
              >Academic Info</b-nav-item
            >
            <b-nav-item
              :to="'/next/' + 'Class Note'"
              class="nav-item-five mr-2 p-1"
              active
              href="#"
              >Class Note</b-nav-item
            >
            <b-nav-item
              class="nav-item-five mr-2 p-1"
              active
              href="https://www.bou.edu.bd/"
              >Contact</b-nav-item
            >
          </b-navbar-nav>
          <div v-else class="nav-s-block">
            <div class="search" id="searchb" style="display: block;">
              <b-input
                @keyup.enter="search"
                autocomplete="on"
                type="text"
                placeholder="Search on Voutv..."
                class="input-search"
                v-model="keyword"
              ></b-input>
              <button type="button" @click="search" class="searchButton">
                Search
              </button>
            </div>
          </div>
          <!-- Right aligned nav items -->
          <b-navbar-nav class=" ml-4 icons-search">
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
      showInputbar: false,
      keyword: ""
    };
  },
  methods: {
    showInput() {
      this.showInputbar = true;
    },
    showNavItem() {
      this.showInputbar = false;
    },
    async search() {
      if (this.keyword != "") {
        await this.$axios
          .$get(process.env.search + this.keyword)
          .then(posts => this.$store.dispatch("SetSearchedKeyword", posts));

        this.$store.dispatch("SetKeyword", this.keyword);
        this.$router.push("/search");
      }
    }
  }
};
</script>


<style scoped>
@media (min-width: 576px) and (max-width: 1199px) {
  .nav-items {
    font-size: 15px;
  }
  li {
    margin: 0px !important;
    padding: 0px !important;
  }
  .brand-logo {
    width: 100px !important;
  }
  .icons-search {
    margin-left: 0px !important;
    margin-bottom: 7px !important;
  }
}
.header {
  position: relative;
}
.logo-top {
  text-align: center;
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
  box-shadow: 0 5px 0.9rem -0.8rem rgba(0, 0, 0, 0.8),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}
@media (min-width: 576px) and (min-width: 768px) and (min-width: 992px) and (min-width: 1200px) {
  .my-custom-nav {
    height: 85px;
  }

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