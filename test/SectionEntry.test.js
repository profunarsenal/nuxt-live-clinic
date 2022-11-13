import { mount } from '@vue/test-utils'
import SectionEntry from '@/components/pageHome/SectionEntry'

describe('SectionEntry', () => {
    test('change input value and v-model', async () => {
        const wrapper = mount(SectionEntry, {
            mocks: {
                $t: () => {}
            }
        })

        const inputName = wrapper.findAll('.input').at(0)
        
        await inputName.setValue('name')

        expect(inputName.element.value).toBe('name')

        expect(wrapper.vm.name).toBe('name')
    })

    test('change input add mask', async () => {
        const wrapper = mount(SectionEntry, {
            mocks: {
                $t: () => {}
            }
        })

        const inputPhone = wrapper.findAll('.input').at(1)

        expect(wrapper.vm.phone).toBe('')

        await inputPhone.setValue('9990001122')

        expect(wrapper.vm.phone).toBe('+7 (999) 000-11-22')
    })
})