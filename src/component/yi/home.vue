<template>
 <div>
    <ul>
        <router-link :to="{name:'remen'}" tag="li">热门</router-link>
		<router-link :to="{name:'fenlei'}" tag="li">分类</router-link>
		<router-link :to="{name:'jinpin'}" tag="li">精品</router-link>
		<router-link :to="{name:'zhibo'}" tag="li">直播</router-link>
		<router-link :to="{name:'guangbo'}" tag="li">广播</router-link>
    </ul>
     <div class="bottom">
        <router-view></router-view>
    </div> 

</div> 

    
</template>
<script>
export default {
  
}
</script>
<style>
.main>div{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.main>div ul{
    height: 45px;
    display: flex;
}
.main>div li{
    flex: 1;
    line-height: 45px;
    text-align: center;
}
.bottom{
    flex: 1;
    overflow: auto;
}
</style>


