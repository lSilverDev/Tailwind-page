<template>
  <div class="flex h-screen bg-black-dark">
  <Sidebar/>
    <main class="flex flex-col">
      <div class="flex w-4/5 flex-row">
        <div>
          <span class="material-symbols-outlined">
            menu
          </span>
        </div>
        <div>
          <img class="rounded-3xl" src="https://pbs.twimg.com/media/EbQ1oAHXsAIoHUy?format=jpg&name=small" alt="">
        </div>
      </div>
      <div class="flex flex-row">
        <div>
          upload or create video
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default defineComponent({
  name: 'App',
  components:{
    Sidebar,
  }
});
</script>

<style scoped>
@import "./assets/main.css";
</style>
