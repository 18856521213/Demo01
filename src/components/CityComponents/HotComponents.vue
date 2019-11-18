<template>
    <div id="box" class="wrapper" ref="box">
        <ul>
            
            <li class="item-movie content" v-for="item in movieList" :key="item.id">
                <div class="movie-img">
                    <img :src="item.img | setWh('128.180')" alt="">
                </div>
                <div class="movie-font">
                    <h4>{{item.nm}}</h4>
                    <p>观众评<span class="movie-num">{{item.sc}}</span></p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.showInfo}}</p>

                </div>
                <div class="movue-buy">

                        <el-button type="danger" size="mini">购票</el-button>

                </div>
            </li> 

        </ul>
        
           
    </div>
</template>

<script>
import BScroll from "better-scroll"

export default {

        data(){

            return{
                movieList:[]

            }
    },
    mounted(){
        
        this.getHotMovieList();

       
    },
    methods:{

        getHotMovieList(){
                    // var that =  this;
                     this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
        
                            if(res.data.msg === "ok"){
                                    
                                    this.movieList =res.data.data.movieList; 
                                    this.$nextTick(()=>{
                                             new BScroll(this.$refs.box,{

                                                
                                            });
         

                                    })
                                
                            }else{
                                console.log("获取失败")
                            }
                           

                      });
                     


        },
        ssss(){
            console.log(111111);
        }
        
    }
    
}
</script>

<style lang="less" scoped>
#box{
    margin-top:100px;
    padding-bottom:50px;
    z-index: -3;
    max-height:500px;
  // overflow: hidden;
  ul{
        margin:0;
        padding:0px;
            .item-movie{
                    
                    border-bottom:1px solid #f6f6f6;
                    display:flex;
                    flex-wrap: wrap;
                    
                    .movie-img{

                        width:25%;

                        img{
                            width:100%;
                        }

                    }
                    .movie-font{

                        width:55%;
                        h4,p{
                            margin:10px 5px;
                        }
                        p{
                            font-size:14px;
                            color:#353535;
                        }
                        .movie-num{

                            color:#fd8d43;
                            font-weight: 800;
                            font-size:15px;

                        }

                    }
                    .movue-buy{
                        width:20%;
                        display:flex;
                        align-items:center;
                    }

            }

     }
}
    
</style>