<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        name:'清华',
        adress:'北京'
      }
    }
  }
</script>

<style>
  .demo{
    background-color: aqua;
  }
</style>