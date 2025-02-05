<script setup>
// Components
import Button from '../UI/Button.vue'
// Assets
import github from '@/assets/github-mark.svg'
import linkedin from '@/assets/linkedin.svg'
import resume from '@/assets/resume.pdf'

// const props = defineProps({})
// const emit = defineEmits()

const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resume
    link.target = '_blank'
    link.download = 'Joshua Humphrey Resume.pdf' // Name of the file to be downloaded

    // Simulate a click on the element <a>
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
</script>

<template>
    <section
        class="w-full gap-6 pt-4 font-semibold font-display flex-col-ic-jc"
    >
        <div class="w-full gap-2 flex-col-ic-jc">
            <p class="text-2xl text-center">Joshua Humphrey</p>
            <p class="text-lg text-center">Fullstack Developer</p>
            <p class="w-10/12 text-center md:w-2/3 font-subtext">
                Passionate about writing clean code and eating good meals.
            </p>
        </div>

        <div class="w-full gap-3 flex-ic-jc motion-blur-in-md">
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
        <Button
            @click="downloadResume"
            button-class="hover:mt-[1px]"
            text="Get Resume"
        />
    </section>
</template>
