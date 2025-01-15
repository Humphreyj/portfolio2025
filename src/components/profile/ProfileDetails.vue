<script setup>
import { ref, onBeforeMount } from 'vue'
// Components
import BasicForm from '@/components/forms/BasicForm.vue'
import ProfileDetailsCard from '@/components/profile/ProfileDetailsCard.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useProfileStore } from '../../stores/profileStore'
// Routing
import { useRoute } from 'vue-router'
// Utils
import { useToggle } from '@vueuse/core'
const route = useRoute()

const { selectedUser } = storeToRefs(useProfileStore())
const { getProfileById } = useProfileStore()

onBeforeMount(() => {
    if (!selectedUser.value) {
        getProfileById(route.params.id)
    }
})

const isEditingProfile = ref(false)
const toggleEditingProfile = useToggle(isEditingProfile)
</script>

<template>
    <div class="w-11/12 pt-12 mx-auto">
        <div v-if="isEditingProfile" class="w-full mx-auto md:w-2/3">
            <BasicForm
                form-title="Edit Profile"
                :data="selectedUser"
                @handle-submit="() => (isEditingProfile = false)"
            />
        </div>
        <ProfileDetailsCard
            v-else
            :user="selectedUser"
            @toggle-editing="toggleEditingProfile"
        />
    </div>
</template>
