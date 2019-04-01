<template>
  <div class="col-sm-12 tablePanel">
    <div class="card dashboardRow">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"]
}
</script>