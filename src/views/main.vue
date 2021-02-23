<template>
  <div class="main">
    <jnr-main></jnr-main>
  </div>
</template>

<script>
import jnrMain from "@/layout/jnrMain.vue";
export default {
  name: "viewMain",
  components: {
    jnrMain,
  },
  data() {
    return {
      height: "500px",
    };
  },
  mounted() {},
};
</script>
