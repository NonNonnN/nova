<template>
  <div id="app">
    <Top id="top"></Top>
    <Index id="index"></Index>
    <Bottom id="bottom"></Bottom>
  </div>
</template>
<script>

import Top from "./components/Top";
import Index from "./components/index";
import Bottom from "./components/bottom";
export default {
  name: 'App',
  components: {Bottom, Index, Top},
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  #top{
    @media(min-width: 300px){
    }
    @media(min-width: 728px){
    }
    @media(min-width: 1280px){
    }
    height: @top-height;
    background: black;
    display: flex;
    overflow: hidden;
  }
  #index{
    display: block;
    width: 1300px;
    text-align: center;
    position: relative;
    margin: auto;
    border-right: grey solid 1px;
    overflow: hidden;
  }
  #bottom{
    background: black;
    height: 100px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  #tools{
    display: flex;
    position: fixed;
    right: 30px;
    background: red;
    bottom: 130px;
  }
}

*{
  padding: 0;
  margin: 0;
}
body{
  background: beige;
}
@top-height:80px;
/*响应式*/
</style>
