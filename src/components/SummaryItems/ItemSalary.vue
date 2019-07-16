<template>
  <div :class="[formatDifference > 0 ? 'positive' : 'negative']">
    SalaryIcon {{ addSymbol }}{{ formatDifference }}%
  </div>
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
      let wholeDiff = Math.round(this.calculateDifference * 100 - 100)
      return wholeDiff
    },
    addSymbol() {
      if (this.formatDifference > 0) {
        return '+'
      } else {
        return '-'
      }
    }
  }
}
</script>
