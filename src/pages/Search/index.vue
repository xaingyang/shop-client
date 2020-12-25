<template>
  <div>
    <typeNav/>
    <h2>Search</h2>
    搜索关键字:{{$route.params.keyword}} <br>
    关键字变大写:{{$route.query.keyword2}}
  </div>
</template>

<script>
import typeNav from '../Home/typeNav'

export default {
  name: 'Search',
  data() {
      return {
          
      }
  },
  components:{
    typeNav,
  }
}
</script>

<style lang="less" scoped>

</style>
