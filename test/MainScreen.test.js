import { mount } from '@vue/test-utils'
import MainScreen from '@/components/pageHome/MainScreen'

describe('MainScreen', () => {
    test('button to open modal', async () => {
        const wrapper = mount(MainScreen, {
            mocks: {
                $t: () => {}
            },
        })

        const button = wrapper.findComponent({ name: 'v-button' })

        expect(button.exists()).toBe(true)

        expect(wrapper.vm.isOpenModal).toBe(false)

        await button.trigger('click')

        expect(wrapper.vm.isOpenModal).toBe(true)
    })
})