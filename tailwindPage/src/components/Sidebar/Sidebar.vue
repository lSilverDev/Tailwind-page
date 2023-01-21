<template>
    <aside class="w-80 p-8 ">
      <SidebarHeader/>
      <SidebarProfile/>
      <SidebarNav/>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarHeader from './SidebarHeader.vue';
import SidebarNav from './SidebarNav.vue';
import SidebarProfile from './SidebarProfile.vue';

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarHeader,
    SidebarProfile,
    SidebarNav
  }
});
</script>

<style></style>