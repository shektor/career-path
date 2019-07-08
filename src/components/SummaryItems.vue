<template>
  <div>
    <p v-for="(item, index) in items" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    items: Object
  }
}
</script>
