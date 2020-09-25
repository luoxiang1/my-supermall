<template>
<swiper>
<swiper-item v-for="item in banners1">
  <a :href="item.link">
    <img :src="item.image" alt="">
  </a>
</swiper-item>
</swiper>
</template>

<script>
import Swiper from "../../../components/common/swiper/Swiper";
import SwiperItem from "../../../components/common/swiper/SwiperItem";
export default {
name: "HomeSwiper",
  components: {Swiper,SwiperItem},
  props:{
  banners1:{
    type:Array,
    default(){

    }
  }
  }
}
</script>

<style scoped>

</style>
