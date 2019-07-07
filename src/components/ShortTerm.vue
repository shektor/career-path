<template>
  <div>
    Your short term goal
    <h1>{{ career.name }}</h1>
    <SummaryItems
      :items="[
        'Salary +' + salaryDifference + '%',
        career.details.demandLevel + ' market demand',
        career.details.experienceYears + ' years experience'
      ]"
    />
  </div>
</template>

<script>
import SummaryItems from './SummaryItems.vue'

export default {
  components: {
    SummaryItems
  },
  props: {
    currentSalary: Number,
    career: Object
  },
  computed: {
    salaryDifference() {
      let percDiff = (this.career.details.meanSalary / this.currentSalary)
      let formattedDiff = Math.round(percDiff * 100 - 100)
      return formattedDiff
    }
  }
}
</script>
