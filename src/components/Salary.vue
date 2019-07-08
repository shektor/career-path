<template>
  <span>
    SalaryIcon {{ formatDifference }}%
  </span>
</template>

<script>
export default {
  props: {
    current: Number,
    goal: Number
  },
  computed: {
    calculateDifference () {
      let percDiff = this.goal / this.current
      return percDiff
    },
    formatDifference () {
      let percDiff = Math.round(this.calculateDifference * 100 - 100)
      return percDiff
    }
  }
}
</script>
