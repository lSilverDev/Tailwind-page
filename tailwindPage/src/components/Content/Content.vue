<template>
<main class="flex flex-col">
      <ContentHeader/>
      <ContentInfo/>
      <ContentAccount/>
      <div class="flex flex-row">
        <VideoCameraIcon class="w-6 h-6 stroke-pink-light"/>
        <p class="px-2">Most Popular Video</p>
      </div>
      <div class="flex flex-row p-8">
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          Video
          <p>isjdijasidijsijdiasidisaidisdiasidiajdasddasds</p>
          <div>
            footer
          </div>
        </div>
      </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentHeader from "./ContentHeader.vue";
import ContentInfo from "./ContentInfo.vue";
import ContentAccount from "./ContentAccount.vue";
import { VideoCameraIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  name: 'Content',
  components: {
    ContentHeader,
    ContentInfo,
    ContentAccount,
    VideoCameraIcon
  }
});
</script>
