<template>
    <div class="mid">
           <div v-for="(i,index) in data" :key="index">
              <router-link tag='div' :to ="{name:'class',params:{id:i.tex}}">{{i.tex}}</router-link>
          </div>
      </div>
</template>
<script>
export default {
  data(){
      return{
          data:""
      }
  },
  beforeRouteEnter(to,from,next){
    next((vm)=>{
      vm.axios.get("/fenlei").then(function(data){
        vm.data=data.data;
        console.log(data)
      })
    })
  }
}
</script>
<style>
.mid{
    height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap
}
.mid>div{
    width: 25%;
    height: 68px;
    border:1px solid #ccc;
    box-sizing: border-box;
    text-align: center;
    line-height: 70px;
}
</style>

