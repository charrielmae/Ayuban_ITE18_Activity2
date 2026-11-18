<template>
  <div class="page-shell">
    <AppHeader />

    <main>
      <!-- Hero Banner -->
      <section class="hero">
        <div class="container hero__grid">
          <div class="hero__content">
            <div class="hero__eyebrow">
              <span class="hero__dot" />
              <span>COLLEGE OF COMPUTING STUDIES • AY 2026–2027</span>
            </div>

            <h1 class="hero__title">
              Empowering Future Innovators Through
              <span class="hero__wordmark-accent">Academic Excellence.</span>
            </h1>

            <p class="hero__lead">
              Welcome to <strong>Harvard University</strong>, the official student information portal
              for computing scholars. Browse verified student profiles, academic standing,
              specializations, and institutional announcements.
            </p>

            <div class="hero__cta-row">
              <AppButton
                label="Explore Directory"
                color="golden-apricot"
                size="lg"
                to="/students"
              />
              <AppButton
                label="Academic Policies"
                color="cotton-candy"
                size="lg"
                to="/about"
              />
              <AppButton
                label="Featured Scholars"
                color="brown-red"
                size="lg"
                @click="scrollToRoster"
              />
            </div>

            <div class="hero__stats-strip">
              <div class="hero__stat">
                <span class="hero__stat-num">04</span>
                <span class="hero__stat-label">DEGREE PROGRAMS</span>
              </div>
              <div class="hero__stat">
                <span class="hero__stat-num">06</span>
                <span class="hero__stat-label">ENROLLED SCHOLARS</span>
              </div>
              <div class="hero__stat">
                <span class="hero__stat-num">03</span>
                <span class="hero__stat-label">HONOR SCHOLARS</span>
              </div>
              <div class="hero__stat">
                <span class="hero__stat-num">100%</span>
                <span class="hero__stat-label">ACTIVE ENROLLMENT</span>
              </div>
            </div>
          </div>

          <!-- Academic Term Spotlight Card -->
          <aside class="hero__spotlight" aria-label="Academic Term Highlights">
            <div class="spotlight-card">
              <div class="spotlight-card__header">
                <span class="spotlight-card__tag">REGISTRAR BULLETIN</span>
                <span class="spotlight-card__pill">1ST SEMESTER</span>
              </div>

              <div class="spotlight-card__brand-preview">
                <span class="spotlight-card__label">INSTITUTIONAL PORTAL</span>
                <p class="spotlight-card__wordmark">Harvard University</p>
              </div>

              <div class="spotlight-card__items">
                <div class="spotlight-item">
                  <span class="spotlight-card__label">DEAN'S &amp; PRESIDENT'S LIST</span>
                  <p class="spotlight-item__title">First Semester Academic Honors Posted</p>
                  <span class="spotlight-item__meta">RECOGNIZING OUTSTANDING SCHOLASTIC &amp; PROJECT EXCELLENCE</span>
                </div>

                <div class="spotlight-item">
                  <span class="spotlight-card__label">SCHOLARSHIP RENEWAL</span>
                  <p class="spotlight-item__title">Merit &amp; DOST Grant Validation Open</p>
                  <span class="spotlight-item__meta">SUBMIT VERIFIED STUDY LOAD • 28 UNITS</span>
                </div>
              </div>

              <div class="spotlight-card__footer">
                <AppButton
                  label="View All Guidelines"
                  color="black-cherry"
                  size="sm"
                  to="/about"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Campus & Academic Highlights using InfoCard -->
      <section class="section container">
        <div class="section__header">
          <div>
            <span class="section__eyebrow">CAMPUS ANNOUNCEMENTS &amp; SERVICES</span>
            <h2 class="section__title">Academic Portal Information</h2>
          </div>
          <AppButton
            label="Read Full Handbook"
            color="black-cherry"
            size="sm"
            to="/about"
          />
        </div>

        <div class="info-grid">
          <InfoCard
            badge="ENROLLMENT & ADVISING"
            stat="28 Units"
            icon="❖"
            title="Semester Load & Registration"
            description="Third-year computing students are enrolled in a full regular load of 28 academic units for the semester."
            accent="black-cherry"
          >
            <AppButton label="View Directory" color="black-cherry" size="sm" to="/students" />
          </InfoCard>

          <InfoCard
            badge="ACADEMIC HONORS"
            stat="3 Awardees"
            icon="★"
            title="President’s & Dean’s List"
            description="Honoring exemplary computing scholars who demonstrate outstanding academic distinction, leadership, and technical innovation."
            accent="golden-apricot"
          >
            <AppButton label="Academic Awardees" color="golden-apricot" size="sm" to="/about" />
          </InfoCard>

          <InfoCard
            badge="RESEARCH & LABS"
            stat="6 Tracks"
            icon="✦"
            title="Specialized Computing Tracks"
            description="Students specialize in Frontend Architecture, Cloud Systems, Enterprise UX, Cybersecurity, Interactive Media, and AI Software Engineering."
            accent="cotton-candy"
          >
            <AppButton label="Explore Tracks" color="cotton-candy" size="sm" to="/students" />
          </InfoCard>
        </div>
      </section>

      <!-- Featured Student Roster using StudentCard -->
      <section id="student-roster" class="section container">
        <div class="section__header">
          <div>
            <span class="section__eyebrow">VERIFIED STUDENT RECORDS</span>
            <h2 class="section__title">Featured Student Roster</h2>
          </div>

          <div class="filter-pills" role="group" aria-label="Filter Students by Standing">
            <AppButton
              v-for="option in standingOptions"
              :key="option"
              :label="option"
              :color="selectedStanding === option ? 'black-cherry' : 'pearl-beige'"
              size="sm"
              @click="selectedStanding = option"
            />
          </div>
        </div>

        <div class="student-grid">
          <StudentCard
            v-for="student in filteredStudents"
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
            :button-label="student.buttonLabel"
            @inspect="openStudentModal(student)"
          />
        </div>
      </section>
    </main>

    <!-- Student Portfolio Modal -->
    <div
      v-if="activeStudent"
      class="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Student Portfolio Details"
      @click.self="activeStudent = null"
    >
      <div class="modal-card">
        <div class="modal-card__top">
          <span class="modal-card__id">STUDENT PORTFOLIO • {{ activeStudent.studentId }}</span>
          <AppButton
            label="Close ✕"
            color="brown-red"
            size="sm"
            @click="activeStudent = null"
          />
        </div>

        <h3 class="modal-card__name">{{ activeStudent.name }}</h3>
        <p class="modal-card__meta">
          {{ activeStudent.course }} • {{ activeStudent.yearLevel }} • {{ activeStudent.status }}
        </p>

        <p class="modal-card__bio">{{ activeStudent.bio }}</p>

        <div class="modal-card__columns">
          <div>
            <h4 class="modal-card__subhead">MAJOR ACHIEVEMENTS</h4>
            <ul class="modal-card__list">
              <li v-for="item in activeStudent.achievements" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div>
            <h4 class="modal-card__subhead">FEATURED PROJECTS</h4>
            <ul class="modal-card__list">
              <li v-for="proj in activeStudent.projects" :key="proj">{{ proj }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppButton from '../components/AppButton.vue'
import AppFooter from '../components/AppFooter.vue'
import AppHeader from '../components/AppHeader.vue'
import InfoCard from '../components/InfoCard.vue'
import StudentCard from '../components/StudentCard.vue'
import { useStudents, type StudentRecord } from '../composables/useStudents'

const { students } = useStudents()

const standingOptions = ['All Students', 'Honor Students', 'Regular Students']
const selectedStanding = ref('All Students')

const filteredStudents = computed(() => {
  if (selectedStanding.value === 'Honor Students') {
    return students.value.filter((s) => s.isHonor)
  }
  if (selectedStanding.value === 'Regular Students') {
    return students.value.filter((s) => !s.isHonor)
  }
  return students.value
})

const activeStudent = ref<StudentRecord | null>(null)

function openStudentModal(student: StudentRecord) {
  activeStudent.value = student
}

function scrollToRoster() {
  document.getElementById('student-roster')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  background:
    radial-gradient(circle at 88% 18%, rgba(247, 178, 205, 0.2), transparent 42%),
    radial-gradient(circle at 12% 80%, rgba(229, 152, 67, 0.18), transparent 45%),
    var(--color-black-cherry);
  color: var(--color-pearl-beige);
  padding: 4.2rem 0 4.8rem;
  border-bottom: 4px solid var(--color-brown-red);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 3rem;
  align-items: center;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-archivo);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--color-golden-apricot);
  background: rgba(245, 239, 230, 0.08);
  padding: 0.42rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(229, 152, 67, 0.35);
  margin-bottom: 1.35rem;
}

.hero__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-cotton-candy);
}

.hero__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: clamp(2.25rem, 4vw, 3.55rem);
  line-height: 1.12;
  margin: 0 0 1.25rem;
  color: var(--color-pearl-beige);
}

.hero__wordmark-accent {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  color: var(--color-cotton-candy);
  display: inline-block;
}

.hero__lead {
  font-family: var(--font-body);
  font-size: 1.04rem;
  line-height: 1.7;
  color: rgba(245, 239, 230, 0.88);
  margin: 0 0 2rem;
  max-width: 58ch;
}

.hero__cta-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.hero__stats-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-top: 1.75rem;
  border-top: 1px solid rgba(245, 239, 230, 0.16);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero__stat-num {
  font-family: var(--font-archivo);
  font-size: 1.65rem;
  color: var(--color-golden-apricot);
}

.hero__stat-label {
  font-family: var(--font-archivo);
  font-size: 0.62rem;
  letter-spacing: 0.08em;
  color: rgba(245, 239, 230, 0.78);
}

/* Spotlight Card */
.spotlight-card {
  background-color: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  border-radius: 1.6rem;
  padding: 1.75rem;
  border: 3px solid var(--color-golden-apricot);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.35);
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.spotlight-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(59, 9, 24, 0.14);
  padding-bottom: 0.75rem;
}

.spotlight-card__tag {
  font-family: var(--font-archivo);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  color: var(--color-brown-red);
}

.spotlight-card__pill {
  font-family: var(--font-archivo);
  font-size: 0.65rem;
  background-color: var(--color-black-cherry);
  color: var(--color-pearl-beige);
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
}

.spotlight-card__label {
  display: block;
  font-family: var(--font-archivo);
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  color: var(--color-brown-red);
  margin-bottom: 0.25rem;
}

.spotlight-card__wordmark {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 2.2rem;
  line-height: 1.05;
  color: var(--color-black-cherry);
  margin: 0;
}

.spotlight-card__items {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.spotlight-item {
  background: #fffcf7;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(59, 9, 24, 0.12);
}

.spotlight-item__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 1.15rem;
  margin: 0 0 0.35rem;
  color: var(--color-black-cherry);
}

.spotlight-item__meta {
  font-family: var(--font-archivo);
  font-size: 0.64rem;
  letter-spacing: 0.05em;
  color: #6b3f4d;
}

.spotlight-card__footer {
  display: flex;
  justify-content: flex-end;
}

/* Sections */
.section {
  padding-top: 4.2rem;
}

.section__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.section__eyebrow {
  display: block;
  font-family: var(--font-archivo);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--color-brown-red);
  margin-bottom: 0.4rem;
}

.section__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: clamp(1.75rem, 2.6vw, 2.35rem);
  color: var(--color-black-cherry);
  margin: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.filter-pills {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.student-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.65rem;
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

@media (max-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }
  .info-grid,
  .student-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .info-grid,
  .student-grid,
  .hero__stats-strip,
  .modal-card__columns {
    grid-template-columns: 1fr;
  }
}
</style>
