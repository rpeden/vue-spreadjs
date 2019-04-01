<template>
  <div class="col-lg-4 col-md-6 col-sm-12 mt-1">
    <div class="card dashboardPanel">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>
