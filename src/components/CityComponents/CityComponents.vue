<template>
    <div id="box">   

      
            <div class="content-left">

                <div class="hot-city" >
                        <h4>热门城市</h4>
                        <ul v-for="item in hotList" :key="item.id">
                            <li>{{ item.nm}}</li>
                            
                        </ul>

                </div>
            
                <div class="other-city" v-for="item in cityList" :key="item.index"  ref="city_sort">
                        <h4>{{ item.index}}</h4>
                        <ul v-for="items in item.list" :key="items.id">
                            <li>{{ items.nm}}</li>                    
                        </ul>
                        
                </div>

            </div>

        <div class="content-right">
            <div class="city-index">
                        <ul>
                            <li v-for="(item,index) in cityList" :key="item.index" @touchstart="moveTop(index)"> 
                                <span>  {{ item.index }} </span>
                                </li>
                        </ul>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{

            cityList:[],
            hotList:[],
            

        }
    },
    mounted(){

           this.axios.get('/api/cityList').then((res)=>{
         
                  var msg = res.data.msg;

                    if(msg === "ok"){

                        var cities = res.data.data.cities;

                            //整理归纳城市
                            for(var i=0;i<cities.length;i++){
                                //获取城市首个的大写字母
                                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                                //进行判断，看看里面index是否重合，进行合并整理
                                if(this.toCom(firstLetter)){

                                            this.cityList.push({index:firstLetter,list:[{nm:cities[i].nm,id:cities[i].id}]});
                                }else{

                                            for(var j=0;j<this.cityList.length;j++){
                                                
                                                if(this.cityList[j].index === firstLetter){

                                                        this.cityList[j].list.push({nm:cities[i].nm,id:cities[i].id});
                                                }

                                            }
                                      }
                                        
 
                           
                           }//----end
                            //整理出热门的城市
                            for(var k=0;k<cities.length;k++){
                                if(cities[k].isHot>0){
                                    
                                    this.hotList.push({nm:cities[k].nm,id:cities[k].id});

                                }

                            }
                     //给ciytList数组拍一下序
                     this.cityList.sort((n1,n2) => {

                                    if( n1.index > n2.index ){
                                        return 1;
                                    }
                                    else if(n1.index < n2.index){
                                        return -1;
                                    }
                                    else{
                                        return 0;
                                    }

                    })
                           


                    }//-----end
        })  
        
        console.log(this.cityList);
    },
    methods:{
        
         //执行判断，判断cityList 里面是否是有重合的index 
         toCom(firstLetter){

            for(var i=0;i<this.cityList.length;i++){

                if( this.cityList[i].index === firstLetter){

                    return false;
                }
            }

              return true;
       
        },

        moveTop(index){

                var h4 = this.$refs.city_sort;
                this.$refs.city_sort.parentNode.scrollTop = h4[index].offsetTop;
                // this.$refs.city_List.toScrollTop(-h4[index].offsetTop);
             

        }
       
       
        
    }
    
}
</script>

<style lang="less" scoped>
    #box{
        display:flex;
        flex-wrap:wrap;
        list-style: none;
        overflow: hidden;
        margin-top:100px;
        background-color:#fcf0f2;
        //  z-index: -1;
         padding-bottom:50px;
        li{
            list-style: none;
        }
        .content-left{
            width:90%;

             h4{
                    background-color:#f6f6f6;
                    padding:5px 5px;
                    font-size:14px;
                    color:#242424;
                }
           
          
            }

        .content-right{
            width:10%;
            height:100%;
            position: fixed;
            right:0;
            font-size:0.8em;
            background-color:#f6f6f6;
            text-align: center;
            padding-top:20px;
            
            ul{
                padding:0;
                margin:0;
                list-style:none;
                li{
                    padding:0;
                    margin:0px 3px 4px 0px;;
                }
        }
        }
        }
        

   
</style>