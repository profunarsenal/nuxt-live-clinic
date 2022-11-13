import { mount, RouterLinkStub  } from '@vue/test-utils'
import AppHeader from '@/components/header/AppHeader'

describe('AppHeader', () => {
    test('test nav-links', () => {
        const wrapper = mount(AppHeader, {
            mocks: {
                $t: () => {}
            },
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })

        const mainLink = wrapper.findAll('.navigation-link').at(0)
        const servicesLink = wrapper.findAll('.navigation-link').at(1)
        const specialistsLink = wrapper.findAll('.navigation-link').at(2)
        const infoLink = wrapper.findAll('.navigation-link').at(3)
        const contactsLink = wrapper.findAll('.navigation-link').at(4)

        expect(mainLink.props().to).toBe('/')
        expect(servicesLink.props().to).toBe('/services')
        expect(specialistsLink.props().to).toBe('/specialists')
        expect(infoLink.props().to).toBe('/info')
        expect(contactsLink.props().to).toBe('/contacts')
    })
})