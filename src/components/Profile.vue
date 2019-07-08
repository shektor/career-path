<template>
  <div>
    <h1>{{ personalDetails.firstName }} {{ personalDetails.lastName }}</h1>
    <SummaryItems
      :items = "{
        currentRole: personalDetails.currentRole,
        education: personalDetails.education,
        experienceYears: personalDetails.experience
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
    personalDetails: Object
  }
}
</script>
