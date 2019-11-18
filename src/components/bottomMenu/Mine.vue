<template>
    <div id="box">
        <!-- 顶部 -->
       <Header :title="this.title"></Header>
        <!-- 登录框 -->
        <div class="box-up">
        <el-input v-model="uName" placeholder="账户名/手机号/Email" class="mb5"></el-input>
         <el-input v-model="uPas" placeholder="请输入您的密码" class="mb5"></el-input>

         <el-button type="danger" size="medium" class="bt-size mb5">登陆</el-button>
         <div class="up-font">
             <p>立即注册</p>
             <p>找回密码</p>
         </div>

        </div>      

    </div>

</template>

<script>
//引入头部组件
import Header from "@/components/headerComponents/headerTitle.vue"

export default {

        data(){
            return{
                title:"个人中心",
                uName:"",
                uPas:""
            }
        },

        components:{
            "Header":Header
        }

    
}
</script>

<style lang="less" scoped>


#box{
    .box-up{
        padding-top:50px;
        text-align: center;
        .bt-size{

            width:100%;
            margin-top:5px;

        }
         .mb5{
        margin-bottom:5px;

        }
        .up-font{

            display:flex;
            padding:0 10px;
            justify-content:space-between;
            font-size:12px;
            color:#F56C6C;

        }
        
    }
   
}
    
</style>