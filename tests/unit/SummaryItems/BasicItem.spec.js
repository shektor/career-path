import { mount } from '@vue/test-utils'
import BasicItem from '@/components/SummaryItems/BasicItem.vue'

describe('BasicItem.vue', () => {
  it('renders item prop', () => {
    const wrapper = mount(BasicItem, {
      propsData: {
        item: 'Display this!'
      }
    })

    expect(wrapper.text()).toMatch('Display this!')
  })
})
