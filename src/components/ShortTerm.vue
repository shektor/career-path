<template>
  <div>
    Your short term goal
    <h1>{{ career.name }}</h1>
    <SummaryItems
      :items = "[
        {
          name: 'Salary',
          props: {
            current: currentSalary,
            goal: career.details.meanSalary
          }
        }
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
  }
}
</script>
