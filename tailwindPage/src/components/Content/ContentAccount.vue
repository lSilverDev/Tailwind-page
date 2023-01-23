<template>
      <div class="flex flex-row p-8">
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <div class="flex flex-row">
            <FireIcon class="w-6 h-6 stroke-pink-light"/>
            <p class="px-2">New Subscribers</p>
          </div>
          <div>
            <p>Fotos</p>
          </div>
          <div class="flex flex-row">
            <p>20</p>
            <p class="px-2">Last 90 days</p>
          </div>
        </div>
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <div class="flex flex-row">
            <ChatBubbleLeftEllipsisIcon class="w-6 h-6 stroke-pink-light"/>
            <p class="px-2">New comments</p>
          </div>
          <div class="flex flex-row">
            <div class="flex flex-col">
              <div>img</div>
            </div>
            <div class="flex flex-col px-2">
              <div class="flex flex-row">
                <p>Name</p>
              </div>
              <div class="flex flex-row">
                <p>Comment</p>
              </div>
            </div>
            
          </div>
        </div>
        <div class="rounded-lg p-8 border-2 border-white border-solid">
          <div class="flex flex-col">
            <p>Account Verification</p>
            <p>You have already passed all the conditions for Verification of the account.</p>
            <div class="py-2">
              <button class="rounded-lg border-1 bg-pink-light p-1 px-6">Let's go'</button>
            </div>
          </div>
          <div class="flex flex-col">
            <p>Selo</p>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FireIcon } from '@heroicons/vue/24/outline';
import { ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
    name: 'ContentAccount',
    components: {
      FireIcon,
      ChatBubbleLeftEllipsisIcon
    }
});
</script>