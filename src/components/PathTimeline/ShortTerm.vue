<template>
  <div>
    Your short term goal
    <h1>{{ career.name }}</h1>
    <SummaryItems
      :items = "[
        {
          name: 'ItemSalary',
          props: {
            current: currentSalary,
            goal: career.details.meanSalary
          }
        },
        {
          name: 'ItemDemand',
          props: {
            level: career.details.demandLevel
          }
        },
        {
          name: 'ItemExperience',
          props: {
            experience: `${career.details.experienceYears}`
          }
        }
      ]"
    />
  </div>
</template>

<script>
import SummaryItems from '@/components/SummaryItems'

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
