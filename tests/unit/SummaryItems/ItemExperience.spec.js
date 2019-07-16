import { mount } from '@vue/test-utils'
import ItemExperience from '@/components/SummaryItems/ItemExperience.vue'

describe('ItemExperience.vue', () => {
  it('renders experience prop with ending statement', () => {
    const wrapper = mount(ItemExperience, {
      propsData: {
        experience: 'Less than 3'
      }
    })

    expect(wrapper.text()).toMatch('Less than 3 years experience')
  })
})
