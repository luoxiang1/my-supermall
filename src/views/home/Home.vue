<template>
 <div id="home">
  <nav-bar  class="home-nav"><div slot="center">购物街</div></nav-bar>
   <home-swiper  :banners1="banners"></home-swiper>
   <recommend-view :recommends1="recommends"></recommend-view>
 </div>


</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from "../../network/home";
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data(){
     return{
       banners:[],
       recommends:[],

     }
  },
  created() {
   getHomeMultidata().then((res)=>{

    this.banners = res.data.banner.list;
    this.recommends = res.data.recommend.list;
   })
  }
}
</script>

<style scoped>
.home-nav{
  background-color:var(--color-tint);
  color:#fff;
}
</style>
