<template>

    <div id="box">
        <!-- 顶部 -->
        <div>
             <Header :title="this.title"></Header>
        </div>

        <!-- 影院展示 -->

        <div class="item-movie-dress" v-for="item in houseList" :key="item.id">
                 <div class="font-box">
                     <p>{{item.nm}}<span class="price">{{item.sellPrice}}</span><span class="price-unit">元起</span></p>
                     <p class="dress">{{item.addr}}</p>
                     <div class="font-icon">
                         <div class="icon">
                             <ul>
                                 <li>折扣卡</li>
                                 <li>小吃</li>
                             </ul>
                         </div>
                         <div class="distance">{{item.distance}}</div>
                     </div>
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

            title:"附近影院",
            houseList:[]
        }
    },
     mounted(){

            this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
                    
                    if(res.data.msg === "ok"){
                        
                        this.houseList=res.data.data.cinemas;
                        console.log( this.houseList);
                    }


            })
            
        },
    components:{
        Header
    }
    
}
</script>

<style lang="less" scoped>
#box{
    margin-top:50px;
    padding-bottom:50px;
    .item-movie-dress{
        padding:10px 20px;
        border-bottom:1px solid #f6f6f6;
        .price{
            font-size:16px;
            color:red;
            font-weight:900;

        }
        .price-unit{

            font-size:12px;
            color:red;
        }
        .dress{

            font-size:13px;
            color:#808080;
        }
        .font-icon{
            display:flex;
            justify-content:space-between;
            align-items: center;
            ul{ 
                text-align: center;
                margin:0;
                padding:0;
                li{
                list-style:none;
                float:left;
                color:#ffa068;
                border:1px solid #ffa068;
                font-size:12px;
                margin-left:5px;
               }
            }
            .distance{
                font-size:15px;
                color:#888888;
            }
        }

    }
}

</style>

