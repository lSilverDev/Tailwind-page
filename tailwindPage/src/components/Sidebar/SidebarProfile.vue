<template>
    <div class="flex flex-row py-8">
        <div class="basis-1/4">
            <div>
            <img class="rounded-full w-10 h-10" src="../../assets/img/IMG_20220914_180902_852.jpg" alt="user photo"/>
            </div>
        </div>
        <div class="basis-1/2">
            <div>
            <p>Edward S. S.</p>
            </div>
        </div>
        <div class="basis-1/4">
            <span class="material-symbols-outlined">
            menu
            </span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'SidebarProfile'
});
</script>