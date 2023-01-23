<template>
    <div class="flex flex-row">
            <VideoCameraIcon class="w-6 h-6 stroke-pink-light"/>
            <p class="px-2">Most Popular Video</p>
        </div>
    <div class="flex flex-row p-8 rounded-lg p-8 border-2 border-white border-solid">
        <div class="flex flex-row">
            <div class="flex flex-col">
                <img class="rounded-3xl" src="https://pbs.twimg.com/media/EbQ1oAHXsAIoHUy?format=jpg&name=small" alt=""/>
            </div>
            <div class="flex flex-col">
                <p>Clash of clans village</p>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <HeartIcon class="w-6 h-6 stroke-pink-light"/><p class="px-2">230</p>
                    <ChatBubbleLeftEllipsisIcon class="w-6 h-6 stroke-pink-light"/><p class="px-2">230</p>
                    <BookmarkIcon class="w-6 h-6 stroke-pink-light"/>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <p>reacao</p>
                    <p>reacao</p>
                    <p>reacao</p>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row">
                    <p>... Icon</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { VideoCameraIcon } from '@heroicons/vue/24/outline';
import { HeartIcon } from '@heroicons/vue/24/outline';
import { BookmarkIcon } from '@heroicons/vue/24/outline';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
    name: 'ContentFooter',
    components: {
    VideoCameraIcon,
    BookmarkIcon,
    ChatBubbleLeftEllipsisIcon,
    HeartIcon
    }
});
</script>
    