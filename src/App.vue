<template>
  <div id="app">
      <div class="box">
            <div class="small-box">
              我这是小盒子，最后丢了真爱，丢了美好幸福
            </div>
            <div class="big-box">
              我这是大盒子
            </div>

      </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  width:300px;
  height:150px;
  background-color: azure;
  .box {
    .small-box {
      font-size: 20px;
      color: pink;
    }

    .big-box {
      font-size: 14px;
      color: black;
    }
  }
  }
</style>
