<template>
  <input type="checkbox" id="aa" value="a" v-model="checkedNames">
  <label for="aa">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames | json }}</span>
  <input number v-model="number">
  <span>
    {{number}}
  </span>
  <div>
    <h1 v-for="user in users">
      {{user}}
    </h1>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data(){
      return {
        checkedNames: [],
        users: ['aaa', 'bbb', 'ccc'],
        number:''
      }
    },
    methods: {
      check: function (index) {
        console.log(index);

      }
    }
  }
</script>
