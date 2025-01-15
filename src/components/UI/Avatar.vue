<script setup>
import { computed } from 'vue'
// Assets
import imageUpload from '@/assets/imageUpload.svg'
// Styles
import { getStyles } from '@/composables/getStyles'

const props = defineProps({
    avatarImg: {
        type: String,
        default: '',
    },
    avatarClass: {
        type: String,
        default: '',
    },
    avatarAlt: {
        type: String,
        default: 'profile picture',
    },
    username: {
        type: String,
        default: '',
    },
})

const avatarText = computed(() => {
    let result = ''
    let split = props.username?.split(' ')
    let first = split[0].charAt(0).toUpperCase()
    let last = split[1].charAt(0).toUpperCase()
    result = `${first}${last}`
    return result
})

const classes = getStyles(props, 'avatarStyles')
import { storeToRefs } from 'pinia'
import { useModalStore } from '@/stores/modalStore'

// Modal Store

const { avatarModalContent, avatarModal } = storeToRefs(
    useModalStore()
)
</script>

<template>
    <section :class="classes.avatarClass">
        <img
            v-if="avatarImg"
            :src="avatarImg"
            :alt="avatarAlt"
            :class="['w-full', 'h-full', 'rounded-full', avatarModal.showing ? 'rounded-none' : '',]"
        />
        <h2
            v-else-if="!avatarImg && username"
            data-test="avatar-text"
            class="primary-text flex-ic-jc dark:bg-slate-800"
            :class="classes.avatarClass"
        >
            {{ avatarText }}
        </h2>
        <img
            v-else
            :src="imageUpload"
            class="rounded-full"
            @error="handleImageError"
        />
    </section>
</template>
