<template>
    <div class="box">   
        <div class="header">
            <h3>{{ title }}</h3>
        </div> 
        
    </div>
</template>

<script>
export default {
    props:["title"]
}
</script>

<style lang="less" scoped>

@bgColor:#F56C6C;
#box{
    position: relative;
    margin:0;
    padding:0;
    
    .header{

        width:100%;
        height:50px;
        background-color:@bgColor;
        position: fixed;
        margin-top:0;
        top:0px;
        z-index:99;
    
        h3{ 

            text-align: center;
            color:white;
            height:50px;
            line-height:50px;
            font-size:14px;
            line-height: 30px;

        }

    }
}   
</style>