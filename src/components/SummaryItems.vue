<template>
  <div>
    <Salary v-if="items.salary"
      :current = "items.salary.current"
      :goal = "items.salary.goal"
    />
    <p> {{ items.demandLevel }} </p>
    <p> {{ items.experienceYears }} </p>
  </div>
</template>

<script>
import Salary from './Salary.vue'

export default {
  props: {
    items: Object
  },
  components: {
    Salary
  }
}
</script>
