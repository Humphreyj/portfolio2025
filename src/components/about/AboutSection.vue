<script setup>
// Components

// Assets
import github from '@/assets/github-mark.svg'
import linkedin from '@/assets/linkedin.svg'
// const props = defineProps({})
// const emit = defineEmits()
</script>

<template>
    <section
        class="w-full gap-4 pt-4 font-semibold font-display flex-col-ic-jc"
    >
        <div class="w-full gap-2 flex-col-ic-jc">
            <p class="text-xl text-center">Joshua Humphrey</p>
            <p class="text-center">Fullstack Developer</p>
        </div>

        <div class="w-full gap-3 flex-ic-jc">
            <a
                href="https://github.com/Humphreyj"
                target="_blank"
                rel="noopener noreferrer"
                ><img :src="github" alt="" class="size-8 md:size-10"
            /></a>
            <a
                href="https://www.linkedin.com/in/joshahumphrey/"
                target="_blank"
                rel="noopener noreferrer"
                ><img :src="linkedin" alt="" class="size-8 md:size-10"
            /></a>
        </div>
    </section>
</template>
