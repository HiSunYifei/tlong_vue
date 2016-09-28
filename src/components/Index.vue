<template>
  <user-list></user-list>
</template>
<style>

</style>
<script>
  import userList from './templates/UserList.vue'
  export default{
    data(){
      var pathname = location.pathname.split('/');
      var userId = parseInt(pathname[pathname.length - 1]);
      if(!userId){
        userId = '';
      }
      return {
        msg: ['1','2','3']
      }
    },
    components:{
      userList
    }
  }
</script>
