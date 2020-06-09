<template>
  <div>
    <b-navbar class="mb-4" toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#"
          >VouTv
          <!-- <b-img :src="require('~/static/favicon.ico')"></b-img> -->
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link 1</b-nav-item>
            <b-nav-item href="#">Link 2</b-nav-item>
            <b-nav-item href="#">Link 3</b-nav-item>
            <b-nav-item href="#">Link 4</b-nav-item>
            <b-nav-item href="#">Link 5</b-nav-item>
          </b-navbar-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button variant="dark" size="md"
                ><b-icon icon="search"></b-icon
              ></b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>