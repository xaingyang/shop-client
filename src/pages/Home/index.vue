<template>
  <div>
    <TypeNav/>
    <List/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor"/>
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

import {mapState} from 'vuex'

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

   mounted() {
      this.$store.dispatch('getRececommends')
      // console.log(this.$store.dispatch('getRececommends').then())
      this.$store.dispatch('getFloors')
      console.log('floor',this.$store.dispatch('getFloors'))
      
  },

  computed:{
    ...mapState({
      floors:state=>state.home.floors
    })
  }
}
</script>

<style lang="less" scoped>

</style>
