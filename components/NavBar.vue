<template>
  <div>
    <b-navbar class="mb-2" toggleable="lg" type="dark" variant="dark">
      <b-container>
        <b-navbar-brand href="#">
          <b-img
            style="height:50px;"
            :src="require('~/static/brand.jpeg')"
          ></b-img>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Authority</b-nav-item>
            <b-nav-item href="#">Results</b-nav-item>
            <b-nav-item href="#">Academic Info</b-nav-item>
            <b-nav-item href="#">News/Notice</b-nav-item>
            <b-nav-item href="#">Schools</b-nav-item>
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