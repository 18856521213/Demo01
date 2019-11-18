<template>
    <div>
        <div id="box">

            <div class="item-movie" v-for="item in willMovie" :key="item.id">
                <div class="movie-img">
                    <img :src="item.img | setWh('128.180')" alt="">
                </div>
                <div class="movie-font">
                    <h4>{{item.nm}}</h4>
                    <p>观{{item.wish}}人想看</p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.rt}}上映</p>

                </div>
                <div class="movue-will-sale">

                        <el-button type="primary" size="mini">预售</el-button>

                </div>
            </div> 

           

    
           
    </div>
    </div>
</template>

<script>
export default {

    data(){
        return{

            willMovie:[]

        }
    },
    mounted(){
        this.getWillMovieList();

    },
    methods:{

        getWillMovieList(){

                this.axios.get("/api/movieComingList?cityId=10").then((res)=>{

                            if(res.data.msg === "ok"){

                                this.willMovie = res.data.data.comingList;

                                console.log(this.willMovie)
                            }



                })


        }

    }
    
}
</script>

<style lang="less" scoped>

#box{
    margin-top:100px;
    padding-bottom:50px;
    z-index: -3;
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
            .movue-will-sale{
                width:20%;
                display:flex;
                align-items:center;
            }

    }

}
    
</style>