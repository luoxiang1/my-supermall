<template>
<div class="nar-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>

</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nar-bar{
  display: flex;
  line-height: 44px;
  text-align: center;

  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.left, .right{
  width: 60px;
  /*background-color: red;*/
}
.center{
  width: 100%;
  /*background-color: #42b983;*/
}
</style>
