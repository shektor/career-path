import { mount } from '@vue/test-utils'
import ItemBasic from '@/components/SummaryItems/ItemBasic.vue'

describe('ItemBasic.vue', () => {
  it('renders item prop', () => {
    const wrapper = mount(ItemBasic, {
      propsData: {
        item: 'Display this!'
      }
    })

    expect(wrapper.text()).toMatch('Display this!')
  })
})
