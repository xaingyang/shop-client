<template>
  <div>
    <h2>Search</h2>
    搜索关键字:{{$route.params.keyword}} <br>
    关键字变大写:{{$route.query.keyword2}}
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
      return {
          
      }
  },
}
</script>

<style lang="less" scoped>

</style>
