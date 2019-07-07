<template>
  <div>
    Your short term goal
    <h1>{{ career.name }}</h1>
    <SummaryItems
      :items="[
        'Salary +' + Math.round((career.details.meanSalary / currentSalary) * 100 - 100) + '%',
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
      currentSalary: Object,
      career: Object
    }
  }
</script>
