<template>
  <div class="page-shell">
    <AppHeader />

    <main class="container directory-page">
      <section class="directory-hero">
        <div>
          <span class="directory-hero__eyebrow">COLLEGE OF COMPUTING STUDIES • ROSTER</span>
          <h1 class="directory-hero__title">
            Official <span class="wordmark-span">Student</span> Directory
          </h1>
          <p class="directory-hero__desc">
            Browse verified student records across all computing degree programs. Filter scholars
            by course, search by name or specialization, or register a new student profile.
          </p>
        </div>

        <div class="directory-hero__actions">
          <AppButton
            :label="showAddForm ? 'Close Form' : '+ Register Student'"
            :color="showAddForm ? 'brown-red' : 'golden-apricot'"
            size="md"
            @click="showAddForm = !showAddForm"
          />
          <AppButton
            label="Back to Home"
            color="pearl-beige"
            size="md"
            to="/"
          />
        </div>
      </section>

      <!-- Summary InfoCards -->
      <section class="directory-metrics">
        <InfoCard
          badge="ACTIVE ENROLLMENT"
          :stat="`${studentList.length} Scholars`"
          icon="🎓"
          title="Verified Student Profiles"
          description="Official academic profiles maintained by the Office of the College Registrar for First Semester AY 2026–2027."
          accent="black-cherry"
        />
        <InfoCard
          badge="ACADEMIC DISTINCTION"
          stat="3 Honors"
          icon="★"
          title="Dean’s & President’s List"
          description="Recognizes Jasmin Rhea Clado, Jobert Jan Quedit, and Jonard Rada for maintaining superior scholastic standing."
          accent="golden-apricot"
        />
        <InfoCard
          badge="DEGREE PROGRAMS"
          stat="4 Programs"
          icon="⌘"
          title="Computing Disciplines"
          description="Encompassing Information Technology, Computer Science, Information Systems, and Multimedia Computing."
          accent="cotton-candy"
        />
      </section>

      <!-- Register New Student Form -->
      <section v-if="showAddForm" class="add-student-box">
        <div class="add-student-box__header">
          <span class="section-tag">STUDENT REGISTRATION</span>
          <h2 class="add-student-box__title">Register a New Student Record</h2>
        </div>

        <form class="add-student-form" @submit.prevent="handleAddStudent">
          <label class="form-field">
            <span>STUDENT FULL NAME</span>
            <input v-model="newStudent.name" type="text" required placeholder="e.g. Camille Reyes" />
          </label>
          <label class="form-field">
            <span>STUDENT ID</span>
            <input v-model="newStudent.studentId" type="text" required placeholder="e.g. 241-05120" />
          </label>
          <label class="form-field">
            <span>DEGREE COURSE</span>
            <select v-model="newStudent.course">
              <option value="Bachelor of Science in Information Technology">
                Bachelor of Science in Information Technology
              </option>
              <option value="Bachelor of Science in Computer Science">
                Bachelor of Science in Computer Science
              </option>
              <option value="Bachelor of Science in Information Systems">
                Bachelor of Science in Information Systems
              </option>
              <option value="Bachelor of Science in Entertainment & Multimedia Computing">
                Bachelor of Science in Entertainment &amp; Multimedia Computing
              </option>
            </select>
          </label>
          <label class="form-field">
            <span>YEAR LEVEL</span>
            <select v-model="newStudent.yearLevel">
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </label>
          <label class="form-field">
            <span>SPECIALIZATION TRACK</span>
            <input
              v-model="newStudent.specialization"
              type="text"
              required
              placeholder="e.g. Cloud & Web Systems"
            />
          </label>

          <div class="add-student-form__submit">
            <AppButton
              label="Save Student Record"
              color="golden-apricot"
              size="md"
              type="submit"
            />
          </div>
        </form>
      </section>

      <!-- Search and Course Filters -->
      <section class="directory-toolbar">
        <div class="search-box">
          <span class="search-box__label">SEARCH DIRECTORY</span>
          <input
            v-model="searchQuery"
            type="search"
            class="search-box__input"
            placeholder="Search by name, ID, course, or specialization..."
          />
        </div>

        <div class="course-filters">
          <AppButton
            v-for="course in courseOptions"
            :key="course"
            :label="course"
            :color="selectedCourse === course ? 'black-cherry' : 'pearl-beige'"
            size="sm"
            @click="selectedCourse = course"
          />
        </div>
      </section>

      <!-- Student Cards Grid -->
      <section class="directory-grid">
        <StudentCard
          v-for="student in displayedStudents"
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
          @inspect="selectedStudent = student"
        />
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
import { computed, reactive, ref } from 'vue'
import AppButton from '../components/AppButton.vue'
import AppFooter from '../components/AppFooter.vue'
import AppHeader from '../components/AppHeader.vue'
import InfoCard from '../components/InfoCard.vue'
import StudentCard from '../components/StudentCard.vue'
import { useStudents, type StudentRecord } from '../composables/useStudents'

const { students: studentList } = useStudents()

const searchQuery = ref('')
const selectedCourse = ref('All Courses')
const showAddForm = ref(false)
const selectedStudent = ref<StudentRecord | null>(null)

const courseOptions = [
  'All Courses',
  'Bachelor of Science in Information Technology',
  'Bachelor of Science in Computer Science',
  'Bachelor of Science in Information Systems',
  'Bachelor of Science in Entertainment & Multimedia Computing',
]

const displayedStudents = computed(() => {
  return studentList.value.filter((student) => {
    const matchesCourse =
      selectedCourse.value === 'All Courses' || student.course === selectedCourse.value
    const q = searchQuery.value.trim().toLowerCase()
    const matchesSearch =
      !q ||
      student.name.toLowerCase().includes(q) ||
      student.studentId.toLowerCase().includes(q) ||
      student.course.toLowerCase().includes(q) ||
      (student.specialization?.toLowerCase().includes(q) ?? false)

    return matchesCourse && matchesSearch
  })
})

const newStudent = reactive({
  name: '',
  studentId: '241-05120',
  course: 'Bachelor of Science in Information Technology',
  yearLevel: '3rd Year',
  specialization: 'Full-Stack Web Systems',
})

function handleAddStudent() {
  if (!newStudent.name.trim()) return
  const initials = newStudent.name
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

  const record: StudentRecord = {
    name: newStudent.name.trim(),
    studentId: newStudent.studentId.trim() || `241-00${studentList.value.length + 100}`,
    course: newStudent.course,
    yearLevel: newStudent.yearLevel,
    status: "Dean's Lister",
    email: `${newStudent.name.trim().toLowerCase().replace(/\s+/g, '.')}@harvard.edu`,
    specialization: newStudent.specialization.trim() || 'Full-Stack Web Systems',
    units: 28,
    avatarInitials: initials,
    accentColor: 'golden-apricot',
    buttonColor: 'golden-apricot',
    buttonLabel: 'View Portfolio',
    isHonor: true,
    bio: 'Undergraduate computing scholar actively engaged in software engineering research and student leadership.',
    achievements: ['Dean’s Merit Awardee', 'Best Capstone Prototype Nominee'],
    projects: ['Harvard Campus Portal System', 'Interactive Student Directory'],
  }
  studentList.value.unshift(record)
  newStudent.name = ''
  showAddForm.value = false
}
</script>

<style scoped>
.directory-page {
  padding-top: 3rem;
}

.directory-hero {
  background-color: var(--color-black-cherry);
  color: var(--color-pearl-beige);
  border-radius: 1.75rem;
  padding: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  border: 3px solid var(--color-golden-apricot);
  box-shadow: 0 20px 45px rgba(59, 9, 24, 0.16);
  margin-bottom: 2.5rem;
}

.directory-hero__eyebrow {
  display: inline-block;
  font-family: var(--font-archivo);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--color-cotton-candy);
  margin-bottom: 0.5rem;
}

.directory-hero__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: clamp(1.9rem, 3.2vw, 2.75rem);
  margin: 0 0 0.75rem;
  line-height: 1.15;
}

.wordmark-span {
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  color: var(--color-golden-apricot);
}

.directory-hero__desc {
  font-family: var(--font-body);
  font-size: 0.96rem;
  line-height: 1.65;
  color: rgba(245, 239, 230, 0.85);
  max-width: 60ch;
  margin: 0;
}

.directory-hero__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.directory-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.add-student-box {
  background: #fffcf7;
  border: 2px solid var(--color-black-cherry);
  border-radius: 1.5rem;
  padding: 2rem;
  margin-bottom: 2.5rem;
}

.section-tag {
  font-family: var(--font-archivo);
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  color: var(--color-brown-red);
}

.add-student-box__title {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 1.6rem;
  margin: 0.25rem 0 1.25rem;
  color: var(--color-black-cherry);
}

.add-student-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  align-items: end;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-field span {
  font-family: var(--font-archivo);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  color: var(--color-black-cherry);
}

.form-field input,
.form-field select {
  padding: 0.7rem 0.9rem;
  border-radius: 0.75rem;
  border: 1.5px solid rgba(59, 9, 24, 0.22);
  background: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  font-family: var(--font-body);
  font-size: 0.9rem;
}

.add-student-form__submit {
  grid-column: span 3;
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.directory-toolbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  background: #fffcf7;
  padding: 1.35rem 1.5rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(59, 9, 24, 0.14);
}

.search-box {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  flex: 1;
  min-width: 240px;
}

.search-box__label {
  font-family: var(--font-archivo);
  font-size: 0.64rem;
  letter-spacing: 0.08em;
  color: var(--color-brown-red);
}

.search-box__input {
  padding: 0.7rem 1rem;
  border-radius: 0.75rem;
  border: 1.5px solid rgba(59, 9, 24, 0.2);
  background: var(--color-pearl-beige);
  color: var(--color-black-cherry);
  font-family: var(--font-body);
  font-size: 0.9rem;
}

.course-filters {
  display: flex;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.directory-grid {
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

@media (max-width: 980px) {
  .directory-metrics,
  .directory-grid,
  .add-student-form {
    grid-template-columns: repeat(2, 1fr);
  }
  .add-student-form__submit {
    grid-column: span 2;
  }
}

@media (max-width: 640px) {
  .directory-metrics,
  .directory-grid,
  .add-student-form,
  .modal-card__columns {
    grid-template-columns: 1fr;
  }
  .add-student-form__submit {
    grid-column: span 1;
  }
}
</style>
