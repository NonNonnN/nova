<template>
  <span>
    <button v-model="hehe">确定</button>
    <input type="text" v-show="hehe"/>
  </span>
</template>

<script>
    export default {
        name: "inputgroup",
      data(){
          return{
            hehe:function () {

            }
          }
      }
    }
</script>

<style scoped>

</style>
