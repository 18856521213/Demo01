<template>
  <div>
       <div class="menu">
            <router-link to="/city" class="menu-child"><div class="menu-icon"><i class="el-icon-video-camera-solid"></i></div><div class="menu-font">影院</div> </router-link>
            <router-link to="/house" class="menu-child"><div class="menu-icon"><i class="el-icon-office-building"></i></div><div class="menu-font">影城</div></router-link>
            <router-link to="/mine" class="menu-child"><div class="menu-icon"><i class="el-icon-user-solid"></i></div><div class="menu-font">个人</div></router-link>
       </div>
       <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
          return{


          }
    },
    methods:{

    },

}
</script>

<style lang="less" scoped>
@bgColor:#F56C6C;
.menu{
        width:100%;
        position: fixed;
        bottom: 0;
        height: 50px;
        background-color:#f9f9f9;
        border-top:0.7px solid #f5f5f5;
        z-index: 99;
       .menu-child{
          float:left;
          width:33%;
          height:50px;
          text-align: center;
          color:#303133;
         
          .menu-icon{
            font-size:22px;
          }
          .menu-font{
            font-size:12px;
          }
       }
       .router-link-active{

          color:@bgColor;

       }
}
</style>
