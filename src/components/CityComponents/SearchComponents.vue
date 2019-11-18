<template>
    <div id="box">
           <div class="search-bg">
                <div>
                    <el-input placeholder="请输入内容" v-model="message">
                        <template slot="append"><i class="el-icon-search"></i></template>
                    </el-input>
                </div>    

           </div>
           <div class="search-font">
                <ul>
                    <li>电影/电视剧/综艺</li>
                </ul>

           </div>

            <!-- 下面展示部分 -->
             <div class="item-movie" v-for="item in movieList" :key="item.id">
                <div class="movie-img">
                    <img :src="item.img | setWh('128.180')" alt="">
                </div>
                <div class="movie-font">
                    <h4>{{item.nm}}</h4>
                    <p>{{item.cat}}</p>
                    <p>主演：{{item.star}}/p>
                    <p>{{item.rt}}上映</p>

                </div>
                
            </div> 

    </div>
</template>

<script>
export default {
    data(){
            return{
                message:"",
                movieList:[]
            }

    },
    methods:{

        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
        

    },
    watch:{
        message(newVal){
                //  var that = this;
                // 取消上一次请求
                this.cancelRequest();

                this.axios.get("/api/searchList?cityId=10&kw="+newVal,{
            
                cancelToken: new this.axios.CancelToken((c)=>{
                    this.source = c;
                })
            }).then((res)=>{

                    if(res.data.msg === "ok"){
                                
                                this.movieList = res.data.data.movies.list;
                                console.log(this.movieList)

                    }


            }).catch((err) => {

                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })
        },


}
}
</script>

<style lang="less" scoped>
#box{
    margin-top:103px;
    .search-bg{
        padding:10px 10px;
        background-color:#eeeeee;

        .el-input__inne,.el-input-group__append{

            border-radius: 30px;
            -moz-border-radius: 30px;
            -o-border-radius: 30px;
            -webkit-border-radius: 30px;
        }
       
    }
    .search-font{
        ul{

            border-bottom:1px solid #f6f6f6;
       
            li{
                list-style:none;           
                color:#888888;
                margin-left:-20px;
                padding-bottom:10px;
                }
        }  
    }

      .item-movie{

            padding:5px 5px;
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

            }          

    }
}
    
</style>