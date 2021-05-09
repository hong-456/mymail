<template>
  <div id="nav">
    <router-view></router-view>
    <main-tagbar></main-tagbar>
  </div>

</template>
<script>
import mainTagbar from "@/components/mainTagbar"

export default {
  components: { mainTagbar },
  name:"app",
}
</script>
<style lang="less">
@import url("~@/assets/css/base.less");

</style>
