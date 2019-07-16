import { shallowMount } from '@vue/test-utils'
import SummaryItems from '@/components/SummaryItems'
import ItemSalary from '@/components/SummaryItems/ItemSalary.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(SummaryItems, {
    propsData: {
      items : [
        {
          name: 'ItemSalary',
          props: {
            current: 95058.16,
            goal: 109374.97
          }
        }
      ]
    }
  })
})

describe('SummaryItems.vue', () => {
  it('renders ItemSalary child component', () => {
    expect(wrapper.find(ItemSalary).exists()).toBe(true)
  })

  it('passes "current" prop to ItemSalary component', () => {
    const salaryWrapper = wrapper.find(ItemSalary)
    expect(salaryWrapper.props().current).toBe(95058.16)
  })
})
