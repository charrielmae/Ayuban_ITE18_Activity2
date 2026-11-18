<template>
  <article class="info-card" :class="`info-card--${accent}`">
    <div class="info-card__top">
      <span v-if="badge" class="info-card__badge">{{ badge }}</span>
      <span v-if="icon" class="info-card__icon" aria-hidden="true">{{ icon }}</span>
    </div>

    <div v-if="stat" class="info-card__stat">{{ stat }}</div>

    <h3 class="info-card__title">{{ title }}</h3>
    <p class="info-card__description">{{ description }}</p>

    <div v-if="$slots.default" class="info-card__footer">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    badge?: string
    stat?: string
    icon?: string
    accent?: 'black-cherry' | 'golden-apricot' | 'cotton-candy' | 'brown-red'
  }>(),
  {
    badge: undefined,
    stat: undefined,
    icon: undefined,
    accent: 'black-cherry',
  }
)
</script>

<style scoped>
.info-card {
  position: relative;
  background-color: #fffcf7;
  border: 2px solid rgba(59, 9, 24, 0.14);
  border-radius: 1.35rem;
  padding: 1.65rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  box-shadow: 0 12px 30px rgba(59, 9, 24, 0.06);
  transition:
    transform 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.24s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.24s ease;
  overflow: hidden;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background-color: var(--color-black-cherry);
}

.info-card--golden-apricot::before {
  background-color: var(--color-golden-apricot);
}

.info-card--cotton-candy::before {
  background-color: var(--color-cotton-candy);
}

.info-card--brown-red::before {
  background-color: var(--color-brown-red);
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 36px rgba(59, 9, 24, 0.12);
  border-color: rgba(59, 9, 24, 0.32);
}

.info-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.info-card__badge {
  font-family: var(--font-archivo);
  font-size: 0.66rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background-color: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  border: 1px solid rgba(59, 9, 24, 0.18);
}

.info-card--golden-apricot .info-card__badge {
  background-color: rgba(229, 152, 67, 0.22);
  color: var(--color-black-cherry);
}

.info-card--cotton-candy .info-card__badge {
  background-color: rgba(247, 178, 205, 0.38);
  color: var(--color-black-cherry);
}

.info-card--brown-red .info-card__badge {
  background-color: rgba(140, 45, 25, 0.16);
  color: var(--color-brown-red);
}

.info-card__icon {
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.65rem;
  background-color: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-family: var(--font-archivo);
}

.info-card__stat {
  font-family: var(--font-archivo);
  font-size: 2.1rem;
  line-height: 1.05;
  color: var(--color-black-cherry);
  letter-spacing: -0.02em;
  margin-top: 0.15rem;
}

.info-card--brown-red .info-card__stat {
  color: var(--color-brown-red);
}

.info-card__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 1.32rem;
  line-height: 1.25;
  color: var(--color-black-cherry);
  margin: 0;
}

.info-card__description {
  font-family: var(--font-body);
  font-size: 0.92rem;
  line-height: 1.62;
  color: #4d2834;
  margin: 0;
  flex-grow: 1;
}

.info-card__footer {
  margin-top: 0.6rem;
  padding-top: 0.85rem;
  border-top: 1px dashed rgba(59, 9, 24, 0.16);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
</style>
