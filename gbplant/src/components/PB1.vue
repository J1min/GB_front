<template>
  <div>
    <input type="text" id="jack" v-model="checkedNames" /> <br>
    <span>value: {{ checkedNames }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return { checkedNames: "" };
  },
};
</script>
