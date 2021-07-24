<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment='comment'></Add>
      <List :comments='comments'></List>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Add from './components/Add.vue'
  import List from './components/List.vue'

  export default {
    name:'',
    components:{
      Header,
      Add,
      List
    },
    data(){
      return {
        comments:[
          {id:1, content:'Vue牛批！', username:'赵丽颖'},
          {id:2, content:'Vue不错！', username:'杨幂'},
          {id:3, content:'Vue可以！', username:'迪丽热巴'}
        ]
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment)
      }
    }
  }
</script>

<style>

</style>