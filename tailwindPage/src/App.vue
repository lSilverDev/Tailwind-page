<template>
  <div class="hidden md:flex h-scree">
    <Sidebar/>
    <Content/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Content from "./components/Content/Content.vue";

export default defineComponent({
  name: 'App',
  components:{
    Sidebar,
    Content
  }
});
</script>

<style scoped>
@import "./assets/main.css";
</style>
