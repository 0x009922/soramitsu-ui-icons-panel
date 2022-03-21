<script setup lang="ts">
import type { Component } from "vue";

const icons: Record<string, Component> = Object.fromEntries(
  Object.entries(
    import.meta.globEager("../node_modules/@soramitsu-ui/icons/icomoon/*")
  ).map(([path, component]) => {
    const [, iconName] = path.match(/icomoon\/(.+)\.svg$/)!;
    return [iconName, component];
  })
);
</script>

<template>
  <div class="container mx-auto p-6 space-y-6">
    <h1>Soramitsu UI Icons</h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
      <div
        v-for="(component, name) in icons"
        :key="name"
        class="flex flex-col items-center space-y-2"
      >
        <component :is="component" />

        <span class="text-sm text-center">
          {{ name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: sans-serif;
}
</style>
