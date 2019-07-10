<template>
  <div>
    Your short term goal
    <h1>{{ career.name }}</h1>
    <SummaryItems
      :items="{
        salary: {
          current: currentSalary,
          goal: career.details.meanSalary
        },
        demandLevel: career.details.demandLevel,
        experienceYears: career.details.experienceYears
      }"
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
  }
}
</script>
