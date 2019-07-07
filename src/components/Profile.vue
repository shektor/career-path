<template>
  <div>
    <h1>{{ personalDetails.firstName }} {{ personalDetails.lastName }}</h1>
    <SummaryItems
      :items="[
        personalDetails.currentRole,
        personalDetails.education,
        personalDetails.experience + ' years experience'
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
    personalDetails: Object
  }
}
</script>
