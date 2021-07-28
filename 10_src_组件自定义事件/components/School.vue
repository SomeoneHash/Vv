<template>
  <div class="school">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{adress}}</h2>
    <button @click="sendShoolName"></button>
  </div>
</template>

<script>
  export default {
    naem:'School',
    props:['getSchoolName'],
    data() {
      return {
        name:'~~~',
        adress:'北京'
      }
    },
    methods:{
      sendShoolName(){
        this.getSchoolName(this.name)
      }
    },
  }
</script>

<style>
.school{
  background-color: skyblue;
  padding: 5px;
}
</style>