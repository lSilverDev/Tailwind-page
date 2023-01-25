<template>
    <div class="flex flex-row py-8 justify-between items-center">
        <div class="flex items-center">
            <img class="rounded-full w-12 h-12" src="../../assets/img/IMG_20220914_180902_852.jpg" alt="user photo"/>
            <p class="px-2 text-white">Edward S. S.</p>
        </div>
        <span class="material-symbols-outlined text-white">
            menu
        </span>
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        name: 'SidebarProfile'
    });
</script>