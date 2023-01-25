<template>
  <div class="flex flex-col">
    <div class="pb-4">
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">home</span>
        <p class="px-2">Home</p>
      </div>
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">explore</span>
        <p class="px-2">Explore</p>
      </div>
    </div>

    <hr>

    <div class="pb-4 pt-4">
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">toll</span>
        <p class="px-2">NFT</p>
      </div>
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">live_tv</span>
        <p class="px-2">Live</p>
      </div>
    </div>

    <hr>

    <div class="pb-8 pt-4">
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">chat</span>
        <p class="px-2">Messages</p>
      </div>
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">bookmark</span>
        <p class="px-2">Bookmarks</p>
      </div>
    </div>

    <hr>

    <div class="pb-8 pt-4">
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">subscriptions</span>
        <p class="px-2">Subscriptions</p>
      </div>
    </div>

    <hr>

    <div class="py-2 pt-4">
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">contact_support</span>
        <p class="px-2">Help & Support</p>
      </div>
      <div class="flex flex-row items-center text-white">
        <span class="material-symbols-outlined">school</span>
        <p class="px-2">Creatone Academy</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'SidebarNav'
});
</script>

<style></style>