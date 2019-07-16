import { mount } from '@vue/test-utils'
import ItemSalary from '@/components/SummaryItems/ItemSalary.vue'

describe('ItemSalary.vue', () => {
  it('renders a positive formatted salary difference', () => {
    const wrapper = mount(ItemSalary, {
      propsData: {
        current: 95058.16,
        goal: 109374.97
      }
    })

    expect(wrapper.text()).toMatch('+15%')
  })

  it('has the positive class when salary difference is positive', () => {
    const wrapper = mount(ItemSalary, {
      propsData: {
        current: 95058.16,
        goal: 109374.97
      }
    })

    expect(wrapper.classes('positive')).toBe(true)
  })

  it('renders a negative formatted salary difference', () => {
    const wrapper = mount(ItemSalary, {
      propsData: {
        current: 109374.97,
        goal: 95058.16
      }
    })

    expect(wrapper.text()).toMatch('-13%')
  })

  it('has the negative class when salary difference is negative', () => {
    const wrapper = mount(ItemSalary, {
      propsData: {
        current: 109374.97,
        goal: 95058.16
      }
    })

    expect(wrapper.classes('negative')).toBe(true)
  })
})
