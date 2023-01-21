<template>
    <div class="flex w-4/5 flex-row p-8">
        <div class="basis-1/4">
            <span class="material-symbols-outlined">
            menu
            </span>
        </div>
        <div class="basis-1/2">
            <img class="rounded-3xl" src="https://pbs.twimg.com/media/EbQ1oAHXsAIoHUy?format=jpg&name=small" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ContentHeader',
});
</script>