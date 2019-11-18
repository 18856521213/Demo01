<template>

    <div id="box">
        <!-- 顶部 -->
        <div>
        <Header :title="this.title"></Header>
        </div>
        <!-- 切换的路由 -->

        <div class="content">
            <router-link  tag="div" to="/city/cityComponents" class="content-dress">北京<i class="el-icon-caret-bottom"></i></router-link>
            <router-link  tag="div" to="/city/hotComponents" class="content-hot">正在热映</router-link>
            <router-link  tag="div" to="/city/willComponents" class="content-will">即将上映</router-link>
            <router-link  tag="div" to="/city/searchComponents" class="content-search"><i class="el-icon-search"></i></router-link>
        </div>

        <!-- 路由显示 -->
        <router-view></router-view>
        
    </div>


</template>

<script>

//引入头部组件
import Header from "@/components/headerComponents/headerTitle.vue"

export default {
     data(){
        return{

            title:"好看电影"

        }

    },
    components:{
        Header
    }
    
}
</script>

<style lang="less" scoped>
#box{
    position: relative;
    .content{

        display:flex;
        flex-wrap:wrap;
        background-color:white;
        border-bottom:0.7px solid #f6f6f6;
        width:100%;
        height:50px;
       z-index:999;
        align-items:center;
        text-align:center;
        position: fixed;
        top:50px;
        
        .content-dress{
            width:20%;
            height:50px;
            line-height: 50px;
            

        }
        .content-hot{
            width:35%;
            height:50px;
            line-height: 50px;
            
        }
        .content-will{
            width:35%;
            height:50px;
            line-height: 50px;
           
        }
        .content-search{
            width:10%;
            color:#F56C6C;
            height:50px;
            line-height: 50px;
           
        }
        .router-link-active{

           border-bottom:2px solid #F56C6C;
           color:#F56C6C;

       }



    }



}
</style>

