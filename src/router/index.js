import  VueRouter  from 'vue-router'
import Vue from  'vue'

const Home=()=>import('../views/home/Home')
const Category=()=>import("../views/category/Catagory")
const ShopCart=()=>import("../views/shopcart/ShopCart")
const Profile=()=>import("../views/profile/Profile")



Vue.use(VueRouter);

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/category',
    component:Category
  }

]

const  router =new VueRouter({
  routes,
  mode:'history'
})

export  default router
