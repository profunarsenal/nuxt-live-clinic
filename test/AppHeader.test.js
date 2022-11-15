import { mount, RouterLinkStub  } from '@vue/test-utils'
import AppHeader from '@/components/header/AppHeader'

const links = {
    main: '/',
    services: '/services',
    specialists: '/specialists',
    info: '/info',
    contacts: '/contacts'
}

describe('AppHeader', () => {
    test('check nav-links route', () => {
        const wrapper = mount(AppHeader, {
            mocks: {
                $t: () => {}
            },
            stubs: {
                NuxtLink: RouterLinkStub
            }
        })

        Object.values(links).forEach((link, index) => {
            const item = wrapper.findAll('.navigation-link').at(index)
            expect(item.props().to).toBe(link)
        })
    })
})