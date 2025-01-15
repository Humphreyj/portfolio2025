import { it, describe, expect } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import BasicSelect from '@/components/inputs/BasicSelect.vue'

describe('Basic Select tests', () => {
    it('displays correct starting value', async () => {
        const wrapper = mount(BasicSelect, {
            props: {
                label: 'Do you like magic?',
                options: [
                    { label: 'Yes', value: true },
                    { label: 'No', value: false },
                ],
                modelValue: false,
            },
        })

        await flushPromises()
        const input = wrapper.find('[data-test="select-input"]')
        expect(input.element.value).toBe('No')
        // Ensure the internal modelValue is set to false
        expect(wrapper.props('modelValue')).toBe(false)
    })
})
