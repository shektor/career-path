<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <component :is="item.name" v-bind="item.props"></component>
    </div>
  </div>
</template>

<script>
import ItemBasic from './ItemBasic.vue'
import ItemSalary from './ItemSalary.vue'

export default {
  props: {
    items: Array
  },
  components: {
    ItemBasic,
    ItemSalary
  }
}
</script>
