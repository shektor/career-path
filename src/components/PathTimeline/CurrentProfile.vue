<template>
  <div>
    <h1>{{ personalDetails.firstName }} {{ personalDetails.lastName }}</h1>
    <SummaryItems
      :items = "[
        {
          name: 'ItemBasic',
          props: {
            item: personalDetails.currentRole
          }
        },
        {
          name: 'ItemBasic',
          props: {
            item: personalDetails.education
          }
        },
        {
          name: 'ItemExperience',
          props: {
            experience: `${personalDetails.experience}`
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
    personalDetails: Object
  }
}
</script>
