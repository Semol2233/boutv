<template>
  <div>
    <div class="channel-common-card">
      <b-card no-body class="custom-channel-common-card">
        <b-card-img-lazy
          blank-color="#bbb"
          :src="imgSrc"
          top
          height="165"
          style="border-radius: 10px;"
        ></b-card-img-lazy>
        <b-card-text text-tag="h6" class="custom-card-text-title">{{
          title
        }}</b-card-text>

        <b-card-text class="text-muted custom-card-text-date" text-tag="p">{{
          relaseDate
        }}</b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Demo Title of BOU"
    },
    relaseDate: {
      type: String,
      default: "12-12-2020"
    }
  }
};
</script>

<style scoped>
/* .channel-common-card{

} */
.custom-channel-common-card {
  border: none !important;
  cursor: pointer;
  background-color: #fafafa;
  margin-bottom: 30px;
}
.custom-card-text-date {
  margin-top: 10px;
  font-weight: 400;
  font-size: 10px;
  text-transform: uppercase;
  margin-bottom: 0px !important;
}
.custom-card-text-title {
  margin-top: 0px !important;
  color: rgb(27, 30, 33);
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: -0.5px;
}
/* .custom-channel-common-card img {
  border-top-left-radius: 15px;
 border-top-right-radius: 15px;
} */
</style>