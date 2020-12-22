<template>
  <div>
    <TypeNav/>
    <List/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import TypeNav from './typeNav'
import List from './List'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'

export default {
  name: 'Home',
  components:{
     TypeNav,
     List,
     Recommend,
     Rank,
     Like,
     Floor,
     Brand
  },
  data() {
      return {
          
      }
  },
}
</script>

<style lang="less" scoped>

</style>
