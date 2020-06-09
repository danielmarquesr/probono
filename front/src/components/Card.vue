<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss" scoped>
.card {
  display: block;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #d8dee2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
}
</style>
