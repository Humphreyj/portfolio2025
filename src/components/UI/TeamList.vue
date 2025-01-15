<script setup>
// Components
import Card from '@/components/UI/Card.vue'
import TextBlock from '@/components/UI/TextBlock.vue'
import Button from '@/components/UI/Button.vue'
import Avatar from '@/components/UI/Avatar.vue'
import Modal from  '@/components/UI/Modal.vue'
// Icons
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'

// Utils
import { getStyles } from '@/composables/getStyles'

// Pinia
import { useModalStore } from '@/stores/modalStore';
import { storeToRefs } from 'pinia'
const { changeTeamMember } = useModalStore();
const {memberSettingsModal} = storeToRefs(useModalStore())

// Data
import { userProfileMocks } from '@/stores/mockData'

const props = defineProps({
    containerClass: {
        type: String,
        default: 'w-1/2',
    },
    iconClass: {
        type: String,
        default: '',
    },
}) 

const title = 'Team List'

const openModal = (member) => {
    changeTeamMember(member)
    // toggleSettingsModal()
    memberSettingsModal.value.toggle()
}
const classes = getStyles(props, 'textBlock')
</script>
<template>
    <section class="w-100">
        <Card>
            <section class="m-2 flex-col-js w-100">
                <TextBlock 
                    :text-content="title" 
                    content-class="text-2xl font-bold text-left"
                />
                <section class="flex flex-row items-center h-20 gap-3" v-for="member in userProfileMocks">
                    <Avatar 
                        :username="member.name"
                        :avatar-img="member.img"
                    />
                    <TextBlock
                        :label="member.name"
                        :text-content="member.email"
                        label-class="font-bold text-left text-black-600 opacity-1"
                        content-class="text-xs"
                    />
                    <div class="flex flex-row items-center justify-end">
                        
                        <Button 
                            text="&#x2709"
                        />
                        <slot name="icon">
                            <Cog6ToothIcon class="cursor-pointer size-6" @click="openModal(member)"/>
                        </slot>
                        
                    </div>
                </section>
                
            </section>
        </Card>
    </section>
</template>