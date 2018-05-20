<template>
  <div>
    <navigate id="navigate"></navigate>
    <tools id="tools"></tools>
  </div>
</template>

<script>
    import Navigate from "./navigate";
    import Tools from "./tools";
    export default {
        name: "Top",
      components: {Tools, Navigate}
    }
</script>

<style lang="less" scoped>
  div{
    #navigate{
      display: block;
      height: 100%;
    }
  }
</style>
