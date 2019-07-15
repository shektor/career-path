import { shallowMount } from '@vue/test-utils'
import SummaryItems from '@/components/SummaryItems.vue'
import Salary from '@/components/Salary.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(SummaryItems, {
    propsData: {
      items : [
        {
          name: 'Salary',
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
    expect(wrapper.find(Salary).exists()).toBe(true)
  })

  it('passes "current" prop to Salary component', () => {
    const salaryWrapper = wrapper.find(Salary)
    expect(salaryWrapper.props().current).toBe(95058.16)
  })
})
