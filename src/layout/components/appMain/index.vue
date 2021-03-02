<template>
  <router-view class="container"></router-view>
</template>
<script>
export default {
  name: 'appMain',
}
</script>
<style lang="less" scoped>
.container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>