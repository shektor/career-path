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
import ItemExperience from './ItemExperience.vue'
import ItemDemand from './ItemDemand.vue'

export default {
  props: {
    items: Array
  },
  components: {
    ItemBasic,
    ItemSalary,
    ItemExperience,
    ItemDemand
  }
}
</script>
