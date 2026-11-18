<template>
  <footer class="app-footer">
    <div class="app-footer__glow" aria-hidden="true" />

    <div class="container app-footer__grid">
      <div class="app-footer__brand-col">
        <div class="app-footer__brand">
          <div class="app-footer__crest" aria-hidden="true">HU</div>
          <span class="app-footer__wordmark">Harvard University</span>
        </div>
        <p class="app-footer__desc">
          Official Student Information Portal of the College of Computing Studies. Dedicated to
          academic excellence, student leadership, and accessible campus records.
        </p>

        <div class="app-footer__palette" aria-label="Theme Color Palette">
          <span class="app-footer__palette-label">COLOR PALETTE</span>
          <div class="app-footer__swatches">
            <div class="swatch-pill">
              <span class="swatch-pill__dot swatch-pill__dot--cherry" />
              <span class="swatch-pill__name">Black Cherry</span>
            </div>
            <div class="swatch-pill">
              <span class="swatch-pill__dot swatch-pill__dot--beige" />
              <span class="swatch-pill__name">Pearl Beige</span>
            </div>
            <div class="swatch-pill">
              <span class="swatch-pill__dot swatch-pill__dot--apricot" />
              <span class="swatch-pill__name">Golden Apricot</span>
            </div>
            <div class="swatch-pill">
              <span class="swatch-pill__dot swatch-pill__dot--candy" />
              <span class="swatch-pill__name">Cotton Candy</span>
            </div>
            <div class="swatch-pill">
              <span class="swatch-pill__dot swatch-pill__dot--brownred" />
              <span class="swatch-pill__name">Brown Red</span>
            </div>
          </div>
        </div>
      </div>

      <div class="app-footer__col">
        <h3 class="app-footer__heading">Portal Navigation</h3>
        <ul class="app-footer__list">
          <li><NuxtLink to="/" class="app-footer__link">Home Overview</NuxtLink></li>
          <li><NuxtLink to="/students" class="app-footer__link">Student Directory</NuxtLink></li>
          <li><NuxtLink to="/about" class="app-footer__link">About &amp; Policies</NuxtLink></li>
        </ul>
      </div>

      <div class="app-footer__col">
        <h3 class="app-footer__heading">Academic Programs</h3>
        <ul class="app-footer__list app-footer__list--text">
          <li>Bachelor of Science in Information Technology</li>
          <li>Bachelor of Science in Computer Science</li>
          <li>Bachelor of Science in Information Systems</li>
          <li>Bachelor of Science in Entertainment &amp; Multimedia Computing</li>
        </ul>
      </div>

      <div class="app-footer__col">
        <h3 class="app-footer__heading">Office of the Registrar</h3>
        <p class="app-footer__mini-text">
          Need assistance with academic records, enrollment verification, or scholarship status?
        </p>
        <div class="app-footer__cta">
          <AppButton
            label="Academic Guidelines"
            color="cotton-candy"
            size="sm"
            to="/about"
          />
        </div>
      </div>
    </div>

    <div class="app-footer__bottom">
      <div class="container app-footer__bottom-inner">
        <span class="app-footer__copyright">
          © {{ new Date().getFullYear() }} HARVARD UNIVERSITY • COLLEGE OF COMPUTING STUDIES
        </span>
        <span class="app-footer__term">
          ACADEMIC YEAR 2026–2027 • FIRST SEMESTER
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue'
// AppFooter.vue - Website footer component reused across all pages
</script>

<style scoped>
.app-footer {
  position: relative;
  overflow: hidden;
  background-color: var(--color-black-cherry);
  background-image:
    linear-gradient(
      180deg,
      rgba(59, 9, 24, 0.86) 0%,
      rgba(59, 9, 24, 0.58) 48%,
      rgba(36, 4, 14, 0.88) 100%
    ),
    radial-gradient(
      circle at 18% 25%,
      rgba(229, 152, 67, 0.18) 0%,
      transparent 48%
    ),
    radial-gradient(
      circle at 84% 70%,
      rgba(247, 178, 205, 0.16) 0%,
      transparent 50%
    ),
    url('/images/footer-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-pearl-beige);
  border-top: 3px solid var(--color-golden-apricot);
  box-shadow: 0 -12px 36px rgba(59, 9, 24, 0.22);
  margin-top: 5rem;
}

.app-footer__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at top center,
    rgba(247, 178, 205, 0.12),
    transparent 65%
  );
  pointer-events: none;
}

.app-footer__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.1fr;
  gap: 2.2rem;
  padding-top: 3.75rem;
  padding-bottom: 3.25rem;
}

.app-footer__brand-col,
.app-footer__col {
  background: rgba(38, 4, 15, 0.46);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(245, 239, 230, 0.14);
  border-radius: 1.25rem;
  padding: 1.4rem 1.5rem;
  box-shadow: 0 10px 28px rgba(20, 2, 8, 0.28);
}

.app-footer__brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.app-footer__crest {
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.65rem;
  background: linear-gradient(135deg, var(--color-golden-apricot), var(--color-cotton-candy));
  color: var(--color-black-cherry);
  display: grid;
  place-items: center;
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 1.05rem;
  border: 1.5px solid var(--color-pearl-beige);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
}

.app-footer__wordmark {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 1.55rem;
  color: var(--color-pearl-beige);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
}

.app-footer__desc {
  font-family: var(--font-body);
  font-size: 0.88rem;
  line-height: 1.65;
  color: rgba(245, 239, 230, 0.9);
  margin: 0 0 1.15rem;
  max-width: 36ch;
}

.app-footer__palette {
  border-top: 1px solid rgba(245, 239, 230, 0.16);
  padding-top: 0.9rem;
}

.app-footer__palette-label {
  display: block;
  font-family: var(--font-archivo);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--color-golden-apricot);
  margin-bottom: 0.55rem;
}

.app-footer__swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.swatch-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(245, 239, 230, 0.1);
  border: 1px solid rgba(245, 239, 230, 0.22);
  border-radius: 999px;
  padding: 0.28rem 0.62rem;
}

.swatch-pill__dot {
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  border: 1.5px solid rgba(245, 239, 230, 0.75);
  flex-shrink: 0;
}

.swatch-pill__dot--cherry {
  background-color: var(--color-black-cherry);
}

.swatch-pill__dot--beige {
  background-color: var(--color-pearl-beige);
}

.swatch-pill__dot--apricot {
  background-color: var(--color-golden-apricot);
}

.swatch-pill__dot--candy {
  background-color: var(--color-cotton-candy);
}

.swatch-pill__dot--brownred {
  background-color: var(--color-brown-red);
}

.swatch-pill__name {
  font-family: var(--font-archivo);
  font-size: 0.62rem;
  letter-spacing: 0.04em;
  color: var(--color-pearl-beige);
}

.app-footer__heading {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 1.15rem;
  color: var(--color-golden-apricot);
  margin: 0 0 1rem;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.app-footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.app-footer__link {
  font-family: var(--font-archivo);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-pearl-beige);
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.app-footer__link:hover {
  color: var(--color-cotton-candy);
  transform: translateX(3px);
}

.app-footer__list--text li {
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.45;
  color: rgba(245, 239, 230, 0.88);
}

.app-footer__mini-text {
  font-family: var(--font-body);
  font-size: 0.84rem;
  line-height: 1.55;
  color: rgba(245, 239, 230, 0.88);
  margin: 0 0 1.1rem;
}

.app-footer__bottom {
  position: relative;
  z-index: 1;
  background-color: rgba(28, 3, 11, 0.78);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(247, 178, 205, 0.22);
  padding: 1.15rem 0;
}

.app-footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.app-footer__copyright,
.app-footer__term {
  font-family: var(--font-archivo);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  color: rgba(245, 239, 230, 0.82);
}

.app-footer__term {
  color: var(--color-golden-apricot);
}

@media (max-width: 980px) {
  .app-footer__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .app-footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
