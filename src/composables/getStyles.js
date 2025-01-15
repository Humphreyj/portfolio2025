import { ref } from 'vue'
import { twMerge } from 'tailwind-merge'
import { componentStyles } from '@/CSS/componentStyles'

export const getStyles = (props, element, category) => {
    let keys = Object.keys(props)
    let styles = {}
    keys.forEach((key) => {
        if (category) {
            styles[`${key}`] = twMerge(
                componentStyles[`${category}`][`${element}`],
                props[`${key}`]
            )
        } else {
            styles[`${key}`] = twMerge(
                componentStyles[`${element}`][`${key}`],
                props[`${key}`]
            )
        }
    })
    const classes = ref(styles)
    return classes
}
