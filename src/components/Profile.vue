<template>
  <div>
    <h1>{{ personalDetails.firstName }} {{ personalDetails.lastName }}</h1>
    <p>{{ personalDetails.currentRole }}</p>
    <p>{{ personalDetails.education }}</p>
    <p>{{ personalDetails.experience }} years experience</p>
  </div>
</template>

<script>
export default {
  props: {
    personalDetails: Object
  }
}
</script>
