<template>
      <div class="flex flex-row p-8">
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <p>Upload or create video</p>
          <p>To increase activity in your channel, dont forget to upload new videos</p>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row items-center">
              <PhotoIcon  class="w-6 h-6"/>
              <p class="px-2">Add Photo</p>
            </div>
            <div class="flex flex-row items-center">
              <VideoCameraIcon class="w-6 h-6"/>
              <p class="px-2">Add Video</p>
            </div>
            <div class="flex flex-row items-center">
              <TvIcon class="w-6 h-6"/>
              <p class="px-2">Start Live</p>
            </div>
          </div>
        </div>
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <ClockIcon class="w-6 h-6 stroke-pink-light"/>
          <div>
            <p>Watch Time</p>
            <div>4 hr</div>
          </div>
        </div>
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <ClockIcon class="w-6 h-6 stroke-pink-light"/>
          <div>
            <p>Views</p>
            <div>1,2 m</div>
          </div>
        </div>
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <ClockIcon class="w-6 h-6 stroke-pink-light"/>
          <div>
            <p>Subscribers</p>
            <div>9848</div>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { ClockIcon } from '@heroicons/vue/24/outline';
    import { PhotoIcon } from '@heroicons/vue/24/solid';
    import { VideoCameraIcon } from '@heroicons/vue/24/outline';
    import { TvIcon } from '@heroicons/vue/24/solid';

    export default defineComponent({
        name: 'ContentInfo',
        components: {
          ClockIcon,
          PhotoIcon,
          VideoCameraIcon,
          TvIcon
        }
    });
</script>