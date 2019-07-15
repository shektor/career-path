<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <component :is="item.name" v-bind="item.props"></component>
    </div>
  </div>
</template>

<script>
import Salary from './Salary.vue'

export default {
  props: {
    items: Array
  },
  components: {
    Salary
  }
}
</script>
