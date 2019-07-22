<template>
  <div class="mt-4">
    <div class="ml-3">Your long term goal</div>
    <b-card
      :title="[career.name]"
    >
      <b-card-text>
        <SummaryItems
          :items = "[
            {
              name: 'ItemSalary',
              props: {
                current: currentSalary,
                goal: career.details.salaryMean
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
      </b-card-text>
    </b-card>
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
