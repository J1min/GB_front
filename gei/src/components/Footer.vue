<template>
  <footer>
    <div class="foot">
      {{ comName }}
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      comName: "© 우리집",
    };
  },
};
</script>
<style>
.foot {
  vertical-align: bottom;
}
</style>
