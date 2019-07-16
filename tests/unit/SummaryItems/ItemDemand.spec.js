import { mount } from '@vue/test-utils'
import ItemDemand from '@/components/SummaryItems/ItemDemand.vue'

let wrapper

beforeEach(() => {
  wrapper = mount(ItemDemand, {
    propsData: {
      level: 'High'
    }
  })
})

describe('ItemDemand.vue', () => {
  it('renders demand prop with ending statment', () => {
    expect(wrapper.text()).toMatch('High market demand')
  })

  it('has the positive class with level is High', () => {
    expect(wrapper.classes('positive')).toBe(true)
  })

  it('does not have the positive class when level not High', () => {
    wrapper = mount(ItemDemand, {
      propsData: {
        level: 'Low'
      }
    })

    expect(wrapper.classes('positive')).toBe(false)
  })
})
