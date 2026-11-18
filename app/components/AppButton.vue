<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="app-btn"
    :class="[`app-btn--${normalizedColor}`, `app-btn--${size}`]"
    :style="customColorStyle"
  >
    <span v-if="icon" class="app-btn__icon" aria-hidden="true">{{ icon }}</span>
    <span class="app-btn__label">{{ label }}</span>
    <slot />
  </NuxtLink>

  <button
    v-else
    :type="type"
    :disabled="disabled"
    class="app-btn"
    :class="[`app-btn--${normalizedColor}`, `app-btn--${size}`]"
    :style="customColorStyle"
    @click="$emit('click', $event)"
  >
    <span v-if="icon" class="app-btn__icon" aria-hidden="true">{{ icon }}</span>
    <span class="app-btn__label">{{ label }}</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    color?: string
    size?: 'sm' | 'md' | 'lg'
    to?: string
    icon?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    color: 'black-cherry',
    size: 'md',
    to: undefined,
    icon: undefined,
    type: 'button',
    disabled: false,
  }
)

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const presetColors = new Set([
  'black-cherry',
  'pearl-beige',
  'golden-apricot',
  'cotton-candy',
  'brown-red',
  'outline',
])

const normalizedColor = computed(() => {
  const key = props.color.toLowerCase().trim().replace(/\s+/g, '-')
  return presetColors.has(key) ? key : 'custom'
})

const customColorStyle = computed(() => {
  if (normalizedColor.value !== 'custom') return {}
  return {
    '--btn-custom-bg': props.color,
  }
})
</script>

<style scoped>
.app-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  font-family: var(--font-archivo);
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 999px;
  border: 2px solid transparent;
  cursor: pointer;
  transition:
    transform 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.2s cubic-bezier(0.22, 1, 0.36, 1),
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  -webkit-user-select: none;
  user-select: none;
  line-height: 1.1;
  white-space: nowrap;
}

.app-btn:hover:not(:disabled) {
  transform: translateY(-2px);
}

.app-btn:active:not(:disabled) {
  transform: translateY(0);
}

.app-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

/* Sizes */
.app-btn--sm {
  padding: 0.5rem 1rem;
  font-size: 0.72rem;
}

.app-btn--md {
  padding: 0.75rem 1.4rem;
  font-size: 0.8rem;
}

.app-btn--lg {
  padding: 0.95rem 1.85rem;
  font-size: 0.88rem;
}

/* Palette Variants */
.app-btn--black-cherry {
  background-color: var(--color-black-cherry);
  color: var(--color-pearl-beige);
  border-color: var(--color-black-cherry);
  box-shadow: 0 6px 18px rgba(59, 9, 24, 0.22);
}

.app-btn--black-cherry:hover:not(:disabled) {
  background-color: #521024;
  border-color: #521024;
  box-shadow: 0 10px 24px rgba(59, 9, 24, 0.32);
}

.app-btn--golden-apricot {
  background-color: var(--color-golden-apricot);
  color: var(--color-black-cherry);
  border-color: var(--color-golden-apricot);
  box-shadow: 0 6px 18px rgba(229, 152, 67, 0.28);
}

.app-btn--golden-apricot:hover:not(:disabled) {
  background-color: #eea44f;
  border-color: #eea44f;
  box-shadow: 0 10px 24px rgba(229, 152, 67, 0.4);
}

.app-btn--cotton-candy {
  background-color: var(--color-cotton-candy);
  color: var(--color-black-cherry);
  border-color: var(--color-cotton-candy);
  box-shadow: 0 6px 18px rgba(247, 178, 205, 0.34);
}

.app-btn--cotton-candy:hover:not(:disabled) {
  background-color: #ffc2da;
  border-color: #ffc2da;
  box-shadow: 0 10px 24px rgba(247, 178, 205, 0.48);
}

.app-btn--brown-red {
  background-color: var(--color-brown-red);
  color: var(--color-pearl-beige);
  border-color: var(--color-brown-red);
  box-shadow: 0 6px 18px rgba(140, 45, 25, 0.26);
}

.app-btn--brown-red:hover:not(:disabled) {
  background-color: #a3351e;
  border-color: #a3351e;
  box-shadow: 0 10px 24px rgba(140, 45, 25, 0.36);
}

.app-btn--pearl-beige {
  background-color: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  border-color: rgba(59, 9, 24, 0.22);
  box-shadow: 0 4px 14px rgba(59, 9, 24, 0.08);
}

.app-btn--pearl-beige:hover:not(:disabled) {
  background-color: #fffaf2;
  border-color: var(--color-black-cherry);
}

.app-btn--outline {
  background-color: transparent;
  color: var(--color-black-cherry);
  border-color: var(--color-black-cherry);
}

.app-btn--outline:hover:not(:disabled) {
  background-color: var(--color-black-cherry);
  color: var(--color-pearl-beige);
}

.app-btn--custom {
  background-color: var(--btn-custom-bg, var(--color-black-cherry));
  color: var(--color-pearl-beige);
  border-color: var(--btn-custom-bg, var(--color-black-cherry));
}

.app-btn__icon {
  font-size: 1.05em;
  line-height: 1;
}
</style>
