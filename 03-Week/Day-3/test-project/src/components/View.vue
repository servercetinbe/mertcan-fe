<script setup lang="ts">
defineProps<{
  element: string;
  ariaLabel?: string;
  isDisabled?: boolean;
  id?: string; 
}>();
</script>

<template>
  
  <component :is="element" 
             :aria-label="ariaLabel" 
             :id="id"  
             :disabled="isDisabled">
    <slot></slot>
    Hello World
  </component>
</template>
