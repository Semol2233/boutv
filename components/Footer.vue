<template>
  <div class="my-footer" style="background-color:#2e2d2d;">
    <b-container>
      <b-row class="mt-4">
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="4" lg="4" xl="4">
          <p>
            <nuxt-link :to="'/next/' + 'Notice Board'">Notice Board</nuxt-link>
          </p>
          <p><nuxt-link to="/live-class">Live class</nuxt-link></p>
          <p><nuxt-link :to="'/next/' + 'Photo'">Photo</nuxt-link></p>
        </b-col>
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="4" lg="4" xl="4">
          <p>
            <nuxt-link :to="'/next/' + 'Academic Info'"
              >Academic Info</nuxt-link
            >
          </p>
          <p><nuxt-link :to="'/next/' + 'Class Note'">Class note</nuxt-link></p>
          <p><a href="https://www.bou.edu.bd/">Contact</a></p>
        </b-col>
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="4" lg="4" xl="4">
          <p>Download the <strong>BouTv</strong> app.</p>
          <b-img
            src="~/static/google.png"
            style="width:140px;height:42px;"
          ></b-img>
        </b-col>
        <b-col
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
          class="mb- mt-4 text-center"
        >
          <p>
            ©2020 BouTv.All Rights Reserved.Developed by: NUXTIT
          </p>
        </b-col>
      </b-row>
      <!-- <div class="text-center mt-4 mb-4">
        
      </div> -->
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-footer {
}
.social-icons {
  height: 25px;
  width: 25px;
  margin-right: 15px;
  cursor: pointer;
}
a,
p {
  text-decoration: none;
  color: white;
  cursor: pointer;
}
img {
  cursor: pointer;
}
</style>