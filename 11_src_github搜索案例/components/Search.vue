<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" 
      v-model="keyword"/>  &nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name:'Search',
    data() {
      return {
        keyword:''
      }
    },
    methods:{
      searchUsers(){
        //请求当前更新的List数据
        this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false})
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            console.log('请求成功了')
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
          },
          error => {
            this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
          }
        )
      }
    }
  };
</script>

