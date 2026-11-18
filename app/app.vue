<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<script setup lang="ts">
// Root application shell - renders multi-page routes in app/pages/
</script>

<style>
:root {
  /* Color Palette */
  --color-black-cherry: #3b0918;   /* Primary Color: Black Cherry */
  --color-pearl-beige: #f5efe6;    /* Secondary Color: Pearl Beige */
  --color-golden-apricot: #e59843; /* Complementary Color: Golden Apricot */
  --color-cotton-candy: #f7b2cd;   /* Complementary Color: Cotton Candy */
  --color-brown-red: #8c2d19;      /* Complementary Color: Brown Red */

  /* Typography */
  --font-wordmark: 'Boomania', 'Bookmania', 'Fraunces', 'Bookman Old Style', Georgia, serif;
  --font-heading: 'Open Sauce One', 'Open Sauce Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-archivo: 'Archivo Black', Impact, sans-serif;
  --font-body: 'Open Sauce One', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

.page-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-shell > main {
  flex: 1;
}

.container {
  width: min(1220px, 100% - 2.5rem);
  margin-inline: auto;
}
</style>
