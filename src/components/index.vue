<template>
    <div>
      <Catalog id="catalog"></Catalog>
      <div id="upload">
        <router-view/>
      </div>
    </div>
</template>

<script>
    import Catalog from "./Catalog";
    export default {
        name: "index",
      components: {Catalog}
    }
</script>

<style lang="less" scoped>
  div{
    #catalog{
      float: left;
      width: 150px;
      border-right: grey solid 1px;
    }
    #upload{
      overflow: hidden;
    }
  }
</style>
