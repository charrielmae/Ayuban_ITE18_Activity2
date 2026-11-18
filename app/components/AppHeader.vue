<template>
  <header class="app-header">
    <div class="container app-header__main">
      <NuxtLink to="/" class="app-header__brand" aria-label="Harvard University Home">
        <div class="app-header__crest" aria-hidden="true">
          <span>HU</span>
        </div>
        <div class="app-header__brand-text">
          <span class="app-header__wordmark">Harvard University</span>
          <span class="app-header__subtitle">STUDENT INFORMATION PORTAL</span>
        </div>
      </NuxtLink>

      <nav class="app-header__nav" aria-label="Primary Navigation">
        <NuxtLink
          to="/"
          class="app-header__link"
          exact-active-class="app-header__link--active"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/students"
          class="app-header__link"
          active-class="app-header__link--active"
        >
          Student Directory
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="app-header__link"
          active-class="app-header__link--active"
        >
          About
        </NuxtLink>
      </nav>

      <div class="app-header__actions">
        <AppButton
          label="View Students"
          color="golden-apricot"
          size="sm"
          to="/students"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue'
// AppHeader.vue - Website navigation component reused across all pages
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--color-black-cherry);
  background-image:
    linear-gradient(
      90deg,
      rgba(59, 9, 24, 0.86) 0%,
      rgba(59, 9, 24, 0.56) 50%,
      rgba(36, 4, 14, 0.86) 100%
    ),
    radial-gradient(
      circle at 20% 50%,
      rgba(229, 152, 67, 0.16) 0%,
      transparent 55%
    ),
    radial-gradient(
      circle at 80% 50%,
      rgba(247, 178, 205, 0.16) 0%,
      transparent 55%
    ),
    url('/images/footer-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-pearl-beige);
  border-bottom: 3px solid var(--color-golden-apricot);
  box-shadow: 0 10px 30px rgba(59, 9, 24, 0.28);
}

.app-header__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-wrap: wrap;
}

.app-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;
  color: inherit;
}

.app-header__crest {
  width: 2.85rem;
  height: 2.85rem;
  border-radius: 0.85rem;
  background: linear-gradient(135deg, var(--color-golden-apricot), var(--color-cotton-candy));
  color: var(--color-black-cherry);
  display: grid;
  place-items: center;
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 1.25rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  border: 2px solid var(--color-pearl-beige);
}

.app-header__brand-text {
  display: flex;
  flex-direction: column;
}

.app-header__wordmark {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 1.75rem;
  line-height: 1.05;
  color: var(--color-pearl-beige);
  letter-spacing: -0.01em;
}

.app-header__subtitle {
  font-family: var(--font-archivo);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  color: var(--color-cotton-candy);
  margin-top: 0.15rem;
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(36, 4, 14, 0.58);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  padding: 0.35rem;
  border-radius: 999px;
  border: 1px solid rgba(245, 239, 230, 0.22);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.22);
}

.app-header__link {
  font-family: var(--font-archivo);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-pearl-beige);
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  transition: all 0.2s ease;
}

.app-header__link:hover {
  color: var(--color-golden-apricot);
  background: rgba(245, 239, 230, 0.08);
}

.app-header__link--active {
  background-color: var(--color-pearl-beige);
  color: var(--color-black-cherry) !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .app-header__main {
    justify-content: center;
    text-align: center;
  }
}
</style>
