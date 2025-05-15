<script setup lang="ts">

</script>

<template>
    <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-dark-primary md:block flex-shrink-0"
    >
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <ul class="pt-6">
                <AdminSidebarLink
                    href="/"
                    text="Home"
                    icon="fa-solid fa-house"
                />
                <AdminSidebarLink
                    href="/admin"
                    text="Dashboard"
                    icon="fas fa-tachometer-alt"
                />
                <AdminSidebarLink
                    text="Clients"
                    icon="fa-brands fa-guilded"
                    active="/admin/clients"
                    :sub_menu="[
                        {
                            text: 'Index',
                            href: '/admin/clients',
                        },
                    ]"
                />
                <AdminSidebarLink
                    text="StyleGuide"
                    icon="fa-brands fa-guilded"
                    active="/admin/style-guide"
                    :sub_menu="[
                        {
                            text: 'Button',
                            href: '/admin/style-guides/button',
                        },
                        {
                            text: 'Checkbox',
                            href: '/admin/style-guides/checkbox',
                        },
                    ]"
                />
            </ul>
        </div>
    </aside>
</template>
