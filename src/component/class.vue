<template>
  <div>
    这是一个{{name}}页面
  </div>
</template>
<script>
export default {
  data(){
      return{
        name:''
      } 
  },
  created(){
    this.name=this.$route.params.id
  }
}
</script>
<style>

</style>
