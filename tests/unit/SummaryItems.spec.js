import { shallowMount } from '@vue/test-utils'
import SummaryItems from '@/components/SummaryItems.vue'
import Salary from '@/components/Salary.vue'

let wrapper, salaryWrapper

beforeEach(() => {
  wrapper = shallowMount(SummaryItems, {
    propsData: {
      items : {
        currentRole: 'Software Developer / Engineer',
        education: "Bachelor's Degree",
        demandLevel: 'High',
        experienceYears: 5,
        salary: {
          current: 95058.16,
          goal: 109374.97
        }
      }
    }
  })

  salaryWrapper = wrapper.find(Salary)
})

describe('SummaryItems.vue', () => {
  it('renders summary information', () => {
    expect(wrapper.text()).toContain("Software Developer / Engineer   Bachelor's Degree    High   5")
  })

  it('passes "current" prop to Salary', () => {
    expect(salaryWrapper.props().current).toBe(95058.16)
  })

  it('passes "goal" prop to Salary', () => {
    expect(salaryWrapper.props().goal).toBe(109374.97)
  })
})
