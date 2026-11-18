import { computed, ref } from 'vue'

export interface StudentRecord {
  name: string
  studentId: string
  course: string
  yearLevel: string
  status: string
  email: string
  specialization: string
  units: number
  avatarInitials: string
  accentColor: 'black-cherry' | 'golden-apricot' | 'cotton-candy' | 'brown-red'
  buttonColor: string
  buttonLabel: string
  isHonor: boolean
  bio: string
  achievements: string[]
  projects: string[]
}

const initialStudents: StudentRecord[] = [
  {
    name: 'Ashley Queen Dagani',
    studentId: '241-00114',
    course: 'Bachelor of Science in Information Technology',
    yearLevel: '3rd Year',
    status: 'Regular Student',
    email: 'a.dagani@harvard.edu',
    specialization: 'Frontend Architecture & Design Systems',
    units: 28,
    avatarInitials: 'AD',
    accentColor: 'black-cherry',
    buttonColor: 'black-cherry',
    buttonLabel: 'View Portfolio',
    isHonor: false,
    bio: 'UI specialist focused on responsive web applications, accessible design systems, and modern frontend engineering.',
    achievements: [
      '1st Place — Inter-University UI/UX Designathon 2026',
      'Best Frontend Architecture Award — College Tech Expo',
      'Lead Student Designer — Campus Digital Transformation Initiative',
    ],
    projects: [
      'Harvard University Student Portal UI Kit',
      'Smart Campus Registrar Kiosk System',
      'Accessible Design Token Library for Web Apps',
    ],
  },
  {
    name: 'Jasmin Rhea Clado',
    studentId: '241-08542',
    course: 'Bachelor of Science in Computer Science',
    yearLevel: '3rd Year',
    status: "President's Lister",
    email: 'j.clado@harvard.edu',
    specialization: 'Distributed Systems & Cloud Native',
    units: 28,
    avatarInitials: 'JC',
    accentColor: 'golden-apricot',
    buttonColor: 'golden-apricot',
    buttonLabel: 'View Portfolio',
    isHonor: true,
    bio: 'Honor scholar researching cloud-native student portals, real-time state synchronization, and scalable backend services.',
    achievements: [
      'President’s Medal for Academic Excellence',
      'Grand Champion — National Cloud Computing Hackathon',
      'Published Undergraduate Research on Distributed Edge Caching',
    ],
    projects: [
      'Cloud-Native Academic Transcript Engine',
      'Real-Time Laboratory Seat & Resource Tracker',
      'Microservices API Gateway for Campus Services',
    ],
  },
  {
    name: 'Juliana Angel Bojawe',
    studentId: '241-04021',
    course: 'Bachelor of Science in Information Systems',
    yearLevel: '3rd Year',
    status: 'Regular Student',
    email: 'j.bojawe@harvard.edu',
    specialization: 'Enterprise UX & Data Visualization',
    units: 28,
    avatarInitials: 'JB',
    accentColor: 'cotton-candy',
    buttonColor: 'cotton-candy',
    buttonLabel: 'View Portfolio',
    isHonor: false,
    bio: 'Passionate about turning complex academic workflows into intuitive, human-centered interactive analytics dashboards.',
    achievements: [
      'Best Data Visualization Project — Information Systems Summit',
      'Creative Tech Innovation Awardee 2026',
      'Vice President — Student Information Systems Society',
    ],
    projects: [
      'University Enrollment Analytics Dashboard',
      'Peer Mentorship & Study Group Matcher',
      'Automated Departmental Resource Planner',
    ],
  },
  {
    name: 'Jobert Jan Quedit',
    studentId: '241-04887',
    course: 'Bachelor of Science in Information Technology',
    yearLevel: '3rd Year',
    status: "Dean's Lister",
    email: 'j.quedit@harvard.edu',
    specialization: 'Cybersecurity & Identity Assurance',
    units: 28,
    avatarInitials: 'JQ',
    accentColor: 'brown-red',
    buttonColor: 'brown-red',
    buttonLabel: 'View Portfolio',
    isHonor: true,
    bio: 'Honor student specializing in zero-trust campus authentication, digital credentials, and secure API integrations.',
    achievements: [
      '1st Place — Collegiate Capture The Flag (CTF) Cyber Defense Cup',
      'University Dean’s Merit Scholar for Information Security',
      'Certified Student Security Auditor — Campus Network Team',
    ],
    projects: [
      'NFC Smart Campus ID Verifier',
      'Zero-Trust Student Portal Authentication Guard',
      'Automated Vulnerability Scanner for Student Web Apps',
    ],
  },
  {
    name: 'Jonard Rada',
    studentId: '241-09874',
    course: 'Bachelor of Science in Computer Science',
    yearLevel: '3rd Year',
    status: "Dean's Lister",
    email: 'j.rada@harvard.edu',
    specialization: 'AI-Assisted Software Engineering',
    units: 28,
    avatarInitials: 'JR',
    accentColor: 'golden-apricot',
    buttonColor: 'black-cherry',
    buttonLabel: 'View Portfolio',
    isHonor: true,
    bio: 'Honor scholar focusing on intelligent academic advising systems and full-stack software engineering.',
    achievements: [
      'Best AI Capstone Prototype — Computing Research Colloquium',
      'University Dean’s List Scholar & Senior Research Fellow',
      'Top 3 Finalist — National Collegiate Software Engineering Olympiad',
    ],
    projects: [
      'AI-Powered Smart Curriculum & Advising Assistant',
      'Interactive Prerequisite Graph Visualizer',
      'Automated Code Quality & Component Analyzer',
    ],
  },
  {
    name: 'Hazel Mae Buba',
    studentId: '241-00774',
    course: 'Bachelor of Science in Entertainment & Multimedia Computing',
    yearLevel: '3rd Year',
    status: 'Regular Student',
    email: 'h.buba@harvard.edu',
    specialization: 'Interactive Media & Motion UI',
    units: 28,
    avatarInitials: 'HB',
    accentColor: 'cotton-candy',
    buttonColor: 'brown-red',
    buttonLabel: 'View Portfolio',
    isHonor: false,
    bio: 'Combines digital media artistry with interactive web technologies to craft expressive campus web experiences.',
    achievements: [
      'Best Interactive Media Showcase — Digital Arts Festival 2026',
      'People’s Choice Award — University Motion UI Exhibition',
      'Creative Director — Multimedia Computing Guild',
    ],
    projects: [
      '3D Interactive Harvard Campus Heritage Tour',
      'Immersive Student Digital Art & Media Gallery',
      'Motion-Driven Web Storytelling Platform',
    ],
  },
]

const sharedStudents = ref<StudentRecord[]>([...initialStudents])
const endorsedStudentIds = ref<string[]>([])
let storageInitialized = false

export const useStudents = () => {
  if (typeof window !== 'undefined' && !storageInitialized) {
    storageInitialized = true
    try {
      const saved = window.localStorage.getItem('crimson-roster-endorsed')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          endorsedStudentIds.value = parsed
        }
      }
    } catch {
      // Ignore storage errors
    }
  }

  const honorStudents = computed(() => sharedStudents.value.filter((s) => s.isHonor))

  function isEndorsed(studentId: string): boolean {
    return endorsedStudentIds.value.includes(studentId)
  }

  function toggleEndorse(studentId: string) {
    if (endorsedStudentIds.value.includes(studentId)) {
      endorsedStudentIds.value = endorsedStudentIds.value.filter((id) => id !== studentId)
    } else {
      endorsedStudentIds.value = [...endorsedStudentIds.value, studentId]
    }

    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(
          'crimson-roster-endorsed',
          JSON.stringify(endorsedStudentIds.value)
        )
      } catch {
        // Ignore storage errors
      }
    }
  }

  return {
    students: sharedStudents,
    honorStudents,
    isEndorsed,
    toggleEndorse,
  }
}
