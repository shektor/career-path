<template>
  <div id="app">
    <Profile />
    <ShortTerm />
    <LongTerm />
    <Share />
  </div>
</template>

<script>
import Profile from './components/Profile.vue'
import ShortTerm from './components/ShortTerm.vue'
import LongTerm from './components/LongTerm.vue'
import Share from './components/Share.vue'

export default {
  name: 'app',
  components: {
    Profile,
    ShortTerm,
    LongTerm,
    Share
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
