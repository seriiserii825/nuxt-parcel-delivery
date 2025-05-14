<script setup lang="ts">
</script>

<template>
    <aside
        class="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
    >
        <div class="py-4 text-gray-500 dark:text-gray-400">
            <ul class="pt-6">
                <AdminSidebarLink
                    route_name="home"
                    text="Home"
                    icon="fa-solid fa-house"
                />
                <AdminSidebarLink
                    route_name="admin"
                    text="Dashboard"
                    icon="fas fa-tachometer-alt"
                />
                <AdminSidebarLink
                    text="Clients"
                    icon="fa-brands fa-guilded"
                    active="/admin/clients"
                    :sub_menu="[
                        {
                            text: 'All',
                            route_name: 'admin.clients.index',
                        },
                        {
                            text: 'Create',
                            route_name: 'admin.clients.create',
                        },
                    ]"
                />
                <AdminSidebarLink
                    text="Managers"
                    icon="fa-brands fa-guilded"
                    active="/admin/managers"
                    :sub_menu="[
                        {
                            text: 'All',
                            route_name: 'admin.managers.index',
                        },
                        {
                            text: 'Create',
                            route_name: 'admin.managers.create',
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
                            route_name: 'admin.style-guide.button',
                        },
                        {
                            text: 'Checkbox',
                            route_name: 'admin.style-guide.checkbox',
                        },
                    ]"
                />
            </ul>
        </div>
    </aside>
</template>
