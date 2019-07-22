<template>
  <div>
    <div class="ml-3">{{ personalDetails.firstName }}'s career path</div>
    <div class="mt-4">
      <b-card
        :title="[personalDetails.firstName, ' ', personalDetails.lastName]"
      >
        <b-card-text>
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
        </b-card-text>
      </b-card>
    </div>
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
