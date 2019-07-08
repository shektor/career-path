<template>
  <div id="app">
    <Profile v-if="report"
      :personalDetails="{
        firstName: report.firstName,
        lastName: report.lastName,
        currentRole: report.currentRole,
        education: report.education,
        experience: report.experience
        }"
    />
    <ShortTerm v-if="report"
      :currentSalary="report.currentRoleDetails.salaryMean"
      :career="report.careerPath[0]"
    />
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
  },
  data() {
    return {
      report: 0
    }
  },
  mounted: function() {
    fetch('/data/report.json')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.report = data
      })
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
