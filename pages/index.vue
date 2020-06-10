<template>
  <div>
    <NavBar />
    <Carousel />
    <client-only>
      <VideoPlayer />
    </client-only>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import VideoPlayer from "@/components/VideoPlayer";
import Carousel from "@/components/Carousel";

export default {
  components: {
    NavBar,
    Carousel,
    VideoPlayer
  }
};
</script>
<style>
</style>
