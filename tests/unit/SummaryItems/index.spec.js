import { shallowMount } from '@vue/test-utils'
import SummaryItems from '@/components/SummaryItems'
import SalaryItem from '@/components/SummaryItems/SalaryItem.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(SummaryItems, {
    propsData: {
      items : [
        {
          name: 'SalaryItem',
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
  it('renders Salary child component', () => {
    expect(wrapper.find(SalaryItem).exists()).toBe(true)
  })

  it('passes "current" prop to Salary component', () => {
    const salaryWrapper = wrapper.find(SalaryItem)
    expect(salaryWrapper.props().current).toBe(95058.16)
  })
})
