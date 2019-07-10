import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'

import App from '@/App.vue'
import Profile from '@/components/Profile.vue'
import ShortTerm from '@/components/ShortTerm.vue'

let wrapper, profileWrapper, shortTermWrapper, reportData

beforeEach(() => {
  reportData = {
    currentRoleDetails: {
      salaryMean: 1000
    },
    careerPath: [{ name: 'Senior Software Developer / Engineer' }],
    firstName: 'John',
    lastName: 'Doe',
    currentRole: 'Software Developer / Engineer',
    education: "Bachelor's Degree",
    experience: 'Less than 3',
  }

  global.fetch = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
     resolve({
       json: function() {
         return reportData
       }
     });
    });
  });

  wrapper = shallowMount(App)
})

describe('App.vue', () => {
  it('mounts with a fetch API call', async () => {
    await flushPromises()

    expect(global.fetch).toHaveBeenCalledWith('/data/report.json')
  })

  it('passes prop data to Profile component', async () => {
    await flushPromises()

    profileWrapper = wrapper.find(Profile)

    expect(profileWrapper.props().personalDetails).toEqual({
      firstName: reportData.firstName,
      lastName: reportData.lastName,
      currentRole: reportData.currentRole,
      education: reportData.education,
      experience: reportData.experience
    })
  })

  it('passes prop data to ShortTerm component', async () => {
    await flushPromises()

    shortTermWrapper = wrapper.find(ShortTerm)

    expect(shortTermWrapper.props().currentSalary).toBe(reportData.currentRoleDetails.salaryMean)
    expect(shortTermWrapper.props().career).toEqual(reportData.careerPath[0])
  })
})
