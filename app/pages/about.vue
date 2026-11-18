<template>
  <div class="page-shell">
    <AppHeader />

    <main class="container about-page">
      <section class="about-hero">
        <span class="about-hero__eyebrow">ABOUT THE INSTITUTION • ACADEMIC POLICIES</span>
        <h1 class="about-hero__title">
          About <span class="wordmark-highlight">Harvard University</span> &amp; Academic Standards
        </h1>
        <p class="about-hero__desc">
          Harvard University serves as the central student information portal for the College of
          Computing Studies—highlighting academic policies, scholarship criteria, and our top
          performing undergraduate scholars.
        </p>

        <div class="about-hero__buttons">
          <AppButton label="Back to Home" color="golden-apricot" size="md" to="/" />
          <AppButton label="Student Directory" color="cotton-candy" size="md" to="/students" />
        </div>
      </section>

      <!-- Academic Policies & Institutional InfoCards -->
      <section class="about-section">
        <div class="about-section__head">
          <span class="about-section__tag">INSTITUTIONAL PILLARS</span>
          <h2 class="about-section__title">Mission, Honors &amp; Student Support</h2>
        </div>

        <div class="pillars-grid">
          <InfoCard
            badge="MISSION & VISION"
            stat="Est. 2026"
            icon="🏛"
            title="Computing Excellence & Leadership"
            description="We cultivate ethical software engineers, systems architects, and creative technologists equipped to lead digital transformation across industries."
            accent="black-cherry"
          />

          <InfoCard
            badge="SCHOLASTIC STANDING"
            stat="28 Units"
            icon="🎓"
            title="Academic Honors & Distinction"
            description="Students completing a full regular load of 28 units with exemplary project portfolios and scholastic standing earn semesterly President’s and Dean’s List honors."
            accent="golden-apricot"
          />

          <InfoCard
            badge="SCHOLARSHIP GRANTS"
            stat="100% Tuition"
            icon="★"
            title="Merit & Research Fellowships"
            description="Qualified scholars receive tuition grants, research stipends, and conference funding through institutional merit awards and government fellowships."
            accent="cotton-candy"
          />
        </div>
      </section>

      <!-- Academic Awardees Roster -->
      <section class="about-section">
        <div class="about-section__head">
          <h2 class="about-section__title">Academic Awardees</h2>
        </div>

        <div class="honors-grid">
          <StudentCard
            v-for="student in topThreeStudents"
            :key="student.studentId"
            :name="student.name"
            :student-id="student.studentId"
            :course="student.course"
            :year-level="student.yearLevel"
            :status="student.status"
            :email="student.email"
            :specialization="student.specialization"
            :units="student.units"
            :avatar-initials="student.avatarInitials"
            :accent-color="student.accentColor"
            :button-color="student.buttonColor"
            button-label="View Portfolio"
            @inspect="selectedStudent = student"
          />
        </div>
      </section>
    </main>

    <!-- Student Portfolio Modal -->
    <div
      v-if="selectedStudent"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Student Portfolio Details"
      @click.self="selectedStudent = null"
    >
      <div class="modal-card">
        <div class="modal-card__top">
          <span class="modal-card__id">STUDENT PORTFOLIO • {{ selectedStudent.studentId }}</span>
          <AppButton
            label="Close ✕"
            color="brown-red"
            size="sm"
            @click="selectedStudent = null"
          />
        </div>

        <h3 class="modal-card__name">{{ selectedStudent.name }}</h3>
        <p class="modal-card__meta">
          {{ selectedStudent.course }} • {{ selectedStudent.yearLevel }} • {{ selectedStudent.status }}
        </p>

        <p class="modal-card__bio">{{ selectedStudent.bio }}</p>

        <div class="modal-card__columns">
          <div>
            <h4 class="modal-card__subhead">MAJOR ACHIEVEMENTS</h4>
            <ul class="modal-card__list">
              <li v-for="item in selectedStudent.achievements" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div>
            <h4 class="modal-card__subhead">FEATURED PROJECTS</h4>
            <ul class="modal-card__list">
              <li v-for="proj in selectedStudent.projects" :key="proj">{{ proj }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppButton from '../components/AppButton.vue'
import AppFooter from '../components/AppFooter.vue'
import AppHeader from '../components/AppHeader.vue'
import InfoCard from '../components/InfoCard.vue'
import StudentCard from '../components/StudentCard.vue'
import { useStudents, type StudentRecord } from '../composables/useStudents'

const { honorStudents: topThreeStudents } = useStudents()
const selectedStudent = ref<StudentRecord | null>(null)
</script>

<style scoped>
.about-page {
  padding-top: 3rem;
}

.about-hero {
  background: var(--color-black-cherry);
  color: var(--color-pearl-beige);
  border-radius: 1.75rem;
  padding: 2.75rem;
  border: 3px solid var(--color-cotton-candy);
  box-shadow: 0 20px 45px rgba(59, 9, 24, 0.16);
  margin-bottom: 3rem;
}

.about-hero__eyebrow {
  display: inline-block;
  font-family: var(--font-archivo);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--color-golden-apricot);
  margin-bottom: 0.5rem;
}

.about-hero__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: clamp(1.95rem, 3.2vw, 2.8rem);
  line-height: 1.15;
  margin: 0 0 0.85rem;
}

.wordmark-highlight {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  color: var(--color-cotton-candy);
}

.about-hero__desc {
  font-family: var(--font-body);
  font-size: 0.98rem;
  line-height: 1.68;
  color: rgba(245, 239, 230, 0.86);
  max-width: 64ch;
  margin: 0 0 1.65rem;
}

.about-hero__buttons {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.about-section {
  margin-bottom: 3.5rem;
}

.about-section__head {
  margin-bottom: 1.65rem;
}

.about-section__tag {
  display: block;
  font-family: var(--font-archivo);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--color-brown-red);
  margin-bottom: 0.35rem;
}

.about-section__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: clamp(1.65rem, 2.5vw, 2.2rem);
  color: var(--color-black-cherry);
  margin: 0;
}

.pillars-grid,
.honors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(36, 4, 14, 0.72);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  display: grid;
  place-items: center;
  padding: 1.5rem;
  z-index: 100;
}

.modal-card {
  background: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  max-width: 600px;
  width: 100%;
  border-radius: 1.5rem;
  padding: 2rem;
  border: 3px solid var(--color-golden-apricot);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
}

.modal-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.modal-card__id {
  font-family: var(--font-archivo);
  font-size: 0.72rem;
  color: var(--color-brown-red);
}

.modal-card__name {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 2rem;
  margin: 0 0 0.25rem;
}

.modal-card__meta {
  font-family: var(--font-archivo);
  font-size: 0.78rem;
  color: var(--color-brown-red);
  margin: 0 0 1.15rem;
}

.modal-card__bio {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.65;
  margin: 0 0 1.5rem;
}

.modal-card__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  background: #fffcf7;
  padding: 1.2rem;
  border-radius: 1rem;
}

.modal-card__subhead {
  font-family: var(--font-archivo);
  font-size: 0.68rem;
  color: var(--color-brown-red);
  margin: 0 0 0.5rem;
}

.modal-card__list {
  margin: 0;
  padding-left: 1.1rem;
  font-family: var(--font-body);
  font-size: 0.85rem;
  line-height: 1.6;
}

@media (max-width: 980px) {
  .pillars-grid,
  .honors-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .pillars-grid,
  .honors-grid,
  .modal-card__columns {
    grid-template-columns: 1fr;
  }
}
</style>
