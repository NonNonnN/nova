<template>
<div>
  <a v-for="item in items" :href="item.url">{{item.name}}</a>
</div>
</template>

<script>
  const config={
    items:[
      {
        name:'回到顶部',
        url:''
      },
      {
        name:'打卡',
        url:''
      }
    ]
  };


    export default {
        name: "tools",
      data(){
          return config
      }
    }
</script>

<style scoped>

</style>
