<template>
  <article class="student-card" :class="`student-card--${accentColor}`">
    <div class="student-card__ribbon">
      <span class="student-card__id">ID • {{ studentId }}</span>
      <span class="student-card__status" :class="`status--${statusVariant}`">
        {{ status }}
      </span>
    </div>

    <div class="student-card__header">
      <div class="student-card__avatar" aria-hidden="true">
        <span>{{ computedInitials }}</span>
      </div>

      <div class="student-card__identity">
        <span class="student-card__course-pill">{{ course }}</span>
        <h3 class="student-card__name">{{ name }}</h3>
        <p class="student-card__email">{{ email }}</p>
      </div>
    </div>

    <div class="student-card__specialization">
      <span class="student-card__spec-label">TRACK / SPECIALIZATION</span>
      <p class="student-card__spec-value">{{ specialization }}</p>
    </div>

    <div class="student-card__stats" aria-label="Academic Statistics">
      <div class="student-card__stat-box">
        <span class="student-card__stat-label">YEAR LEVEL</span>
        <span class="student-card__stat-value">{{ yearLevel }}</span>
      </div>
      <div class="student-card__stat-box">
        <span class="student-card__stat-label">UNITS</span>
        <span class="student-card__stat-value">{{ units }}</span>
      </div>
    </div>

    <div class="student-card__actions">
      <AppButton
        :label="buttonLabel"
        :color="buttonColor"
        size="sm"
        icon="↗"
        @click="handleInspect"
      />
      <AppButton
        :label="endorsed ? '★ Endorsed' : 'Endorse'"
        :color="endorsed ? 'cotton-candy' : 'pearl-beige'"
        size="sm"
        @click="toggleEndorse(studentId)"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStudents } from '../composables/useStudents'
import AppButton from './AppButton.vue'

export interface StudentCardProps {
  name: string
  studentId: string
  course: string
  yearLevel: string
  status?: string
  email?: string
  specialization?: string
  units?: number | string
  avatarInitials?: string
  accentColor?: 'black-cherry' | 'golden-apricot' | 'cotton-candy' | 'brown-red'
  buttonColor?: string
  buttonLabel?: string
}

const props = withDefaults(defineProps<StudentCardProps>(), {
  status: "Dean's Lister",
  email: 'student@harvard.edu',
  specialization: 'Full-Stack Web & Component Systems',
  units: 28,
  avatarInitials: '',
  accentColor: 'black-cherry',
  buttonColor: 'black-cherry',
  buttonLabel: 'View Portfolio',
})

const emit = defineEmits<{
  (e: 'inspect', student: StudentCardProps): void
}>()

const { isEndorsed, toggleEndorse } = useStudents()
const endorsed = computed(() => isEndorsed(props.studentId))

const computedInitials = computed(() => {
  if (props.avatarInitials) return props.avatarInitials
  return props.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
})

const statusVariant = computed(() => {
  const s = props.status.toLowerCase()
  if (s.includes('dean') || s.includes('president') || s.includes('scholar')) {
    return 'apricot'
  }
  if (s.includes('regular') || s.includes('active')) {
    return 'candy'
  }
  return 'cherry'
})

function handleInspect() {
  emit('inspect', props)
}
</script>

<style scoped>
.student-card {
  background-color: #fffcf7;
  border: 2px solid rgba(59, 9, 24, 0.16);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  box-shadow: 0 14px 34px rgba(59, 9, 24, 0.08);
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease;
  position: relative;
  overflow: hidden;
}

.student-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 44px rgba(59, 9, 24, 0.15);
  border-color: var(--color-black-cherry);
}

.student-card__ribbon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(59, 9, 24, 0.1);
}

.student-card__id {
  font-family: var(--font-archivo);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--color-brown-red);
}

.student-card__status {
  font-family: var(--font-archivo);
  font-size: 0.65rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
}

.status--apricot {
  background-color: var(--color-golden-apricot);
  color: var(--color-black-cherry);
}

.status--candy {
  background-color: var(--color-cotton-candy);
  color: var(--color-black-cherry);
}

.status--cherry {
  background-color: var(--color-black-cherry);
  color: var(--color-pearl-beige);
}

.student-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.student-card__avatar {
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 1.1rem;
  background-color: var(--color-black-cherry);
  color: var(--color-pearl-beige);
  display: grid;
  place-items: center;
  font-family: var(--font-wordmark);
  font-weight: 700;
  font-style: italic;
  font-size: 1.45rem;
  flex-shrink: 0;
  border: 2px solid var(--color-golden-apricot);
  box-shadow: 0 6px 16px rgba(59, 9, 24, 0.18);
}

.student-card--golden-apricot .student-card__avatar {
  background-color: var(--color-golden-apricot);
  color: var(--color-black-cherry);
  border-color: var(--color-black-cherry);
}

.student-card--cotton-candy .student-card__avatar {
  background-color: var(--color-cotton-candy);
  color: var(--color-black-cherry);
  border-color: var(--color-black-cherry);
}

.student-card--brown-red .student-card__avatar {
  background-color: var(--color-brown-red);
  color: var(--color-pearl-beige);
  border-color: var(--color-golden-apricot);
}

.student-card__identity {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.student-card__course-pill {
  font-family: var(--font-archivo);
  font-size: 0.66rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-brown-red);
}

.student-card__name {
  font-family: var(--font-heading);
  font-weight: 300;
  font-size: 1.38rem;
  line-height: 1.2;
  color: var(--color-black-cherry);
  margin: 0;
}

.student-card__email {
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: #6b3f4d;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.student-card__specialization {
  background-color: var(--color-pearl-beige);
  border-radius: 0.9rem;
  padding: 0.75rem 0.95rem;
  border-left: 4px solid var(--color-black-cherry);
}

.student-card--golden-apricot .student-card__specialization {
  border-left-color: var(--color-golden-apricot);
}

.student-card--cotton-candy .student-card__specialization {
  border-left-color: var(--color-cotton-candy);
}

.student-card--brown-red .student-card__specialization {
  border-left-color: var(--color-brown-red);
}

.student-card__spec-label {
  display: block;
  font-family: var(--font-archivo);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: var(--color-brown-red);
  margin-bottom: 0.2rem;
}

.student-card__spec-value {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-black-cherry);
  margin: 0;
}

.student-card__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.6rem;
}

.student-card__stat-box {
  background-color: #faf4eb;
  border: 1px solid rgba(59, 9, 24, 0.12);
  border-radius: 0.8rem;
  padding: 0.6rem 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.student-card__stat-label {
  font-family: var(--font-archivo);
  font-size: 0.58rem;
  letter-spacing: 0.08em;
  color: #6b3f4d;
}

.student-card__stat-value {
  font-family: var(--font-archivo);
  font-size: 0.95rem;
  color: var(--color-black-cherry);
}

.student-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  margin-top: auto;
  padding-top: 0.4rem;
}
</style>
