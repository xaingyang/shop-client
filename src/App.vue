<template>
  <div id="app" class="outer">
    <Header/>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
// import Home from '@/pages/Home'

// import {getCategoryList} from './api'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    
  },
  mounted(){
    // getCategoryList().then(result=>{
    //   console.log('result',result)
    // })

    this.$store.dispatch('getCategoryList')
  }
}
</script>

<style>

</style>
