<template>
  <div id="app">
    <b-container>
      <b-row align-h="center">
        <b-col sm="12" md="10" lg="8" class="text-left">
          <CurrentProfile v-if="report"
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
          <LongTerm v-if="report"
            :currentSalary="report.currentRoleDetails.salaryMean"
            :career="report.careerPath[1]"
          />
          <SharePath />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CurrentProfile from '@/components/PathTimeline/CurrentProfile.vue'
import ShortTerm from '@/components/PathTimeline/ShortTerm.vue'
import LongTerm from '@/components/PathTimeline/LongTerm.vue'
import SharePath from '@/components/PathTimeline/SharePath.vue'

export default {
  name: 'app',
  components: {
    CurrentProfile,
    ShortTerm,
    LongTerm,
    SharePath
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

.positive {
  color: green
}

.negative {
  color: red
}
</style>
