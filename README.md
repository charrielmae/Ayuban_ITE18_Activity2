# Ayuban — ITE 18 Activity 2: Student Information Website

A modular, component-based **Student Information Website** built with **Nuxt 4** and **Vue 3** demonstrating component encapsulation, multi-page reuse, and prop-driven customization.

## Reusable Components (`app/components/`)

1. **`AppHeader.vue`** — Website navigation bar shared across all pages (`/` Overview, `/students` Directory, `/about` Component Guide).
2. **`AppFooter.vue`** — Website footer shared across all pages with palette swatches, route links, and component inventory.
3. **`StudentCard.vue`** — Displays student profile information (`name`, `studentId`, `course`, `yearLevel`, `gpa`, `status`, `specialization`, `units`, and button props) passed via props.
4. **`InfoCard.vue`** — Displays a `title` and `description` along with optional `badge`, `stat`, `icon`, and `accent` props.
5. **`AppButton.vue`** — Reusable button customized via `label`, `color` (`black-cherry`, `pearl-beige`, `golden-apricot`, `cotton-candy`, `brown-red`), `size`, and `to` props.

## Color Palette

| Role | Color Name | Hex |
| :--- | :--- | :--- |
| **Primary Color** | Black Cherry | `#3B0918` |
| **Secondary Color** | Pearl Beige | `#F5EFE6` |
| **Complementary Color** | Golden Apricot | `#E59843` |
| **Complementary Color** | Cotton Candy | `#F7B2CD` |
| **Complementary Color** | Brown Red | `#8C2D19` |

## Typography

- **Word Mark**: Boomania Bold Italic (`Bookmania` / `Fraunces` Bold Italic fallback)
- **Headings**: Open Sauce Light (`300` weight)
- **Body, Label, Stats**: Archivo Black

## Getting Started

```bash
npm install
npm run dev
```
