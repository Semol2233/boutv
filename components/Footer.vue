<template>
  <div style="background-color:#2e2d2d;">
    <b-container>
      <b-row class="mt-4">
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="3" lg="3" xl="3">
          <p>Notice Board</p>
          <p>Live Class</p>
          <p>Photo</p>
        </b-col>
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="3" lg="3" xl="3">
          <p>Academic Info</p>
          <p>Class Note</p>
          <p>Contact</p>
        </b-col>
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="3" lg="3" xl="3">
          <p>
            Download the <strong>BouTv</strong> app for the best watching
            experience
          </p>
          <b-img
            src="~/static/google.png"
            style="width:140px;height:42px;"
          ></b-img>
        </b-col>
        <b-col cols="12" class="mt-4 mb-4" sm="12" md="3" lg="3" xl="3">
          <div class="d-flex">
            <b-img
              style="background-color:white;"
              class="social-icons"
              src="~/static/footer/facebook.png"
            ></b-img>
            <p>facebook</p>
          </div>
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
            <strong
              >©2020 All Rights Reserved.Developed and maintained by:
              NUXTIT</strong
            >
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
.social-icons {
  height: 25px;
  width: 25px;
  margin-right: 15px;
  cursor: pointer;
}
p {
  color: white;
  cursor: pointer;
}
img {
  cursor: pointer;
}
</style>