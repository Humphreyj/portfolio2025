<script setup>
import { computed } from 'vue'
// Components
import Avatar from '@/components/UI/Avatar.vue'
import Card from '@/components/UI/Card.vue'
// Pinia
import { storeToRefs } from 'pinia'
import { useProfileStore } from '@/stores/profileStore'
import { useModalStore } from '@/stores/modalStore'
// Assets
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
// Utils
import router from '../../router'
import { useWindowSize } from '@vueuse/core'
// const props = defineProps({})
// const emit = defineEmits()

const { userProfiles } = storeToRefs(useProfileStore())
const { handleUserSelect } = useProfileStore()
const { profileFormModal } = storeToRefs(useModalStore())

const handleNavigation = async (user) => {
    handleUserSelect(user)
    await router.push({ name: 'Profile Details', params: { id: user.id } })
}
const { height } = useWindowSize()

const listContainerHeight = computed(() => height.value * 0.6)
</script>

<template>
    <Card container-class="mx-auto my-2 border-none shadow box-shadow">
        <section class="px-2 primary-text">
            <header class="px-3 border-b flex-ic-jb h-14">
                <h4 class="text-xl font-semibold font-display">
                    Manage Profiles
                </h4>
                <!-- <RouterLink to="/profiles/new" class="border-none"> -->
                <h2
                    class="border-gray-700 cursor-pointer hover:border-b"
                    @click="profileFormModal.show"
                >
                    Create Profile
                </h2>
                <!-- </RouterLink> -->
            </header>
            <div class="w-full gap-2 py-3 flex-col-ic-js">
                <section
                    v-for="user in userProfiles.slice(0, 6)"
                    :key="user.id"
                    class="w-full px-3 py-2 shadow dark:shadow-slate-600 dark:shadow-sm flex-is-jb"
                >
                    <div class="w-full gap-4 flex-ic-jb">
                        <div
                            class="gap-2 cursor-pointer flex-ic-js"
                            @click="handleNavigation(user)"
                        >
                            <Avatar :username="user.name" size="15" />
                            <p class="font-bold">{{ user.name }}</p>
                        </div>

                        <ChevronDoubleRightIcon
                            class="cursor-pointer size-7"
                            @click="handleNavigation(user)"
                        />
                    </div>
                </section>
            </div>
        </section>
    </Card>
</template>
