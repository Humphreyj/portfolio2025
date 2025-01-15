import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/UI/Button.vue'

describe('Basic Button tests', () => {
    it('Renders with no value, no error', async () => {
        const wrapper = mount(Button, {
            props: {
                text: 'Do you like magic?',
            },
        })
        const buttonText = wrapper.find('[data-test="button-text"]')

        expect(buttonText.text()).toContain('Do you like magic?')
    })

    it('Renders default button with the correct classes', async () => {
        const wrapper = mount(Button, {
            props: {
                text: 'Do you like magic?',
                buttonClass: '', // Assuming you are passing a 'buttonClass' prop
                disabled: false, // Ensure your button component handles this prop for conditionally setting classes
            },
        })

        const button = wrapper.find('button') // Ensure your button is in the root or adjust the selector accordingly
        expect(button.classes()).toContain('bg-primary-500')
        // Additional checks can be made depending on the expected behavior
        // For example, to check if the 'disabled' class is not applied
        expect(button.classes()).not.toContain('disabled')
    })
})
