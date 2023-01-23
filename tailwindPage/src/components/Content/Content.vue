<template>
  <main class="flex flex-col">
      <ContentHeader/>
      <ContentInfo/>
      <ContentAccount/>
      <ContentFooter/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContentHeader from "./ContentHeader.vue";
import ContentInfo from "./ContentInfo.vue";
import ContentAccount from "./ContentAccount.vue";
import ContentFooter from "./ContentFooter.vue";

export default defineComponent({
  name: 'Content',
  components: {
    ContentHeader,
    ContentInfo,
    ContentAccount,
    ContentFooter
  }
});
</script>
