<template>
  <div :class="[level === 'High' ? 'positive' : '']">
    {{ level }} market demand
  </div>
</template>

<script>
export default {
  props: {
    level: String
  }
}
</script>
