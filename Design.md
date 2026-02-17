# TheTestingAutomationAcademy - Design Document

## Overview
- **Motion Style**: Cinematic scroll-driven choreography with 3D depth layers and magnetic interactions
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: CSS Animations, GSAP ScrollTrigger, Three.js (hero shader), CSS 3D Transforms

## Brand Foundation

### Colors
- Primary (Gold): #FFD700
- Secondary (Dark Blue): #001F3F
- White: #FFFFFF
- Black: #000000
- Gray: #6C757D
- Light Gray: #F8F9FA
- Dark Gray: #343A40
- Text Dark: #212529
- Text Light: #FFFFFF
- Border: #E9ECEF
- Background: #FFFFFF
- Footer Background: #001F3F
- Success: #28A745
- Danger: #DC3545
- Warning: #FFC107
- Info: #17A2B8

### Typography

**Font Families:**
- Display/Headings: "Poppins", sans-serif
- Body: "Open Sans", sans-serif

**Font URLs:**
```
Google Fonts: https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Poppins:300,400,500,600,700
```

**Font Sizes:**
- Hero Title: 48px-64px (responsive)
- H1: 36px
- H2: 30px
- H3: 24px
- H4: 20px
- H5: 18px
- H6: 16px
- Body: 16px
- Small: 14px
- Lead: 18px

**Font Weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semi-Bold: 600
- Bold: 700

**Line Heights:**
- Headings: 1.2-1.3
- Body: 1.6-1.8

### Spacing System
- Section Padding: 80px-120px vertical
- Container Max Width: 1200px
- Container Padding: 15px-30px horizontal
- Grid Gap: 24px-48px
- Component Spacing: 8px, 16px, 24px, 32px, 48px, 64px

---

## Global Motion System

### Animation Timing

**Easing Library:**
```css
--ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-expo-in: cubic-bezier(0.7, 0, 0.84, 0);
--ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-dramatic: cubic-bezier(0.87, 0, 0.13, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-liquid: cubic-bezier(0.23, 1, 0.32, 1);
```

**Duration Scale:**
- Micro: 150ms (hover states)
- Fast: 300ms (interactions)
- Medium: 500ms (transitions)
- Slow: 800ms (entrances)
- Cinematic: 1200ms (hero reveals)

**Stagger Patterns:**
- Cascade: 80ms between elements
- Wave: 120ms with sine offset
- Explosion: 50ms from center outward
- Domino: 150ms sequential

### Scroll Engine Configuration

**Parallax Layers:**
- Layer 1 (Background): 0.2x scroll speed
- Layer 2 (Mid-ground): 0.5x scroll speed
- Layer 3 (Content): 1x scroll speed
- Layer 4 (Foreground): 1.3x scroll speed
- Layer 5 (Floating): 1.5x scroll speed

**Pin Points:**
- Hero section: Pinned for 50vh additional scroll
- Course cards: Horizontal scroll conversion
- Testimonials: Pinned with vertical carousel

**Progress-Driven Animations:**
- Section reveals tied to 20% viewport entry
- Exit animations at 80% viewport exit
- Continuous scroll-linked transforms

### Continuous Effects

**Floating Elements:**
- Amplitude: 15-25px vertical
- Period: 4-6 seconds
- Easing: sine in-out
- Applied to: Decorative shapes, icons, images

**Ambient Motion:**
- Subtle rotation: ±3° oscillation
- Scale breathing: 0.98-1.02 pulse
- Opacity shimmer: 0.9-1.0 on highlights

---

## Section 1: Navigation Bar

### Layout
- Fixed position with glassmorphism effect on scroll
- Height: 80px (expands to 100px on scroll up)
- Z-index: 1000
- Container: max-width 1200px, centered

### Spatial Composition
- Logo: Left-aligned with magnetic hover effect
- Menu: Center with staggered link spacing
- CTA: Right with pulse animation

### Content
- Logo: "<> TheTestingAutomationAcademy" with code bracket icon
- Links: Home, Courses, Blog, Contact, Shipping & Delivery
- CTA: "Enroll Now" button (appears on scroll)

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Logo | Fade + Slide | opacity 0→1, x: -30→0 | 600ms | 0ms | expo-out |
| Nav Links | Stagger Fade | opacity 0→1, y: -20→0 | 400ms | 80ms each | expo-out |
| CTA Button | Scale Pop | scale 0→1, opacity 0→1 | 500ms | 400ms | elastic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 50px scroll | Navbar | Glassmorphism | 0px | 100px | backdrop-blur 0→20px |
| 50px scroll | Navbar | Background | 0px | 100px | rgba(0,31,63,0)→rgba(0,31,63,0.95) |
| Scroll up | Navbar | Height expand | instant | - | height 80→100px |

#### Interaction Effects
- **Logo Hover**: Magnetic pull toward cursor (CSS transform on :hover)
- **Link Hover**: Underline grows from center, text shifts y: -2px
- **Dropdown**: 3D flip reveal with perspective(1000px)

### Advanced Effects

#### 3D Elements
- Dropdown menu: rotateX(-15deg) → rotateX(0deg) on open
- Perspective origin: top center

---

## Section 2: Hero Section

### Layout
**Revolutionary Spatial Design:**
- Full viewport height (100vh) with scroll-triggered content reveal
- Diagonal split composition: Content left (55%), Image right (45%)
- Diagonal divider: 15° angle clip-path creating dynamic tension
- Content floats on separate z-layer with parallax depth

### Spatial Composition
```
┌─────────────────────────────────────────────────────────┐
│  [NAVBAR - Fixed]                                        │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────────╱────────────────────────┐      │
│  │                      ╱                         │      │
│  │   CONTENT           ╱      IMAGE              │      │
│  │   - Title          ╱       - Hero             │      │
│  │   - Subtitle      ╱        - Image            │      │
│  │   - CTAs         ╱         - Floating        │      │
│  │   - Features    ╱          - Elements         │      │
│  │                ╱                              │      │
│  └────────────────────────────────────────────────┘      │
│         [Diagonal Divider - 15° angle]                   │
└─────────────────────────────────────────────────────────┘
```

- Content area: Left 55% with 60px padding
- Image area: Right 45% with overflow visible
- Diagonal clip-path: polygon(0 0, 60% 0, 45% 100%, 0 100%)
- Z-layering: Content (z: 10), Image (z: 5), Background shapes (z: 1)

### Content
- Badge: "LIVE Classes" with pulse dot
- Title: "Learn the Art of Software Testing & Upskill Yourself."
- Subtitle: "Join our LIVE classes to become job-ready with in-demand Manual and Automation testing skills."
- CTA Primary: "Explore Courses" (gold button with shine effect)
- CTA Secondary: "View Demo Class" (outline button)
- Features: LIVE Classes, Real Projects, Job Ready Skills, Expert Mentors

### Images
**Hero Main Image:**
- Resolution: 800x600 pixels
- Aspect Ratio: 4:3
- Transparent Background: No
- Visual Style: Modern photography with code overlay
- Subject: Computer monitor displaying colorful code (PHP/HTML)
- Color Palette: Dark background with vibrant syntax highlighting (pink, green, yellow, blue)
- Generation Prompt: "A close-up photograph of a computer monitor displaying colorful code (PHP/HTML) in a dark-themed code editor. The code includes tags, variables, and comments in bright colors like pink, green, yellow, and blue. The monitor is slightly angled, and the background is dark and out of focus, emphasizing the screen. The lighting is soft and even, highlighting the text on the screen."

**Hero Decorative Elements:**
- Floating code brackets: `< />` in gold with glow
- Circular gradient orbs: Gold/blue with blur
- Grid pattern overlay: Subtle, animated

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Background Shapes | Scale + Fade | scale 0.5→1, opacity 0→0.3 | 1200ms | 0ms | expo-out |
| Badge | Slide + Fade | x: -50→0, opacity 0→1 | 500ms | 200ms | expo-out |
| Title Line 1 | Split Word Reveal | y: 60→0, opacity 0→1, rotateX: 45→0 | 700ms | 300ms | expo-out |
| Title Line 2 (Gold) | Color Wipe | clip-path reveal left→right | 600ms | 600ms | dramatic |
| Subtitle | Fade Up | y: 30→0, opacity 0→1 | 500ms | 800ms | smooth |
| CTA Primary | Scale Pop | scale 0.8→1, opacity 0→1 | 400ms | 1000ms | elastic |
| CTA Secondary | Slide In | x: -30→0, opacity 0→1 | 400ms | 1100ms | expo-out |
| Feature Items | Stagger Fade | y: 20→0, opacity 0→1 | 300ms | 100ms each | smooth |
| Hero Image | 3D Entrance | x: 100→0, rotateY: 25→0, opacity 0→1 | 1000ms | 400ms | expo-out |
| Floating Elements | Float In | y: 50→0, opacity 0→1 | 800ms | 800ms | elastic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| 0-50vh | Content | Parallax Up | 0vh | 50vh | y: 0→-80px |
| 0-50vh | Hero Image | Parallax Slow | 0vh | 50vh | y: 0→-40px |
| 0-50vh | Background Shapes | Scale + Fade | 0vh | 50vh | scale 1→1.3, opacity 0.3→0 |
| 0-30vh | Floating Elements | Scatter | 0vh | 30vh | x/y random dispersal |
| 50vh | Section | Pin Release | 50vh | - | content scrolls away |

#### Continuous Animations
- **Floating Code Brackets**: y: ±20px, 4s duration, infinite
- **Gold Orbs**: Slow drift x: ±30px, y: ±15px, 8s duration
- **Grid Pattern**: Subtle scale pulse 1→1.02→1, 6s duration
- **Badge Dot**: Pulse scale 1→1.3→1, 2s duration

#### Interaction Effects
- **CTA Primary**: Shine sweep on hover (pseudo-element translateX)
- **CTA Secondary**: Border draw animation on hover
- **Hero Image**: Subtle tilt toward cursor on hover (CSS :hover transform)
- **Feature Icons**: Bounce on hover

### Advanced Effects

#### 3D Elements
- Hero image container: perspective(1000px), rotateY(-5deg) idle
- On hover: rotateY(0deg), smooth transition
- Floating elements: translateZ(50px) for depth

#### Shader Effects (Hero Background)
```glsl
// Animated gradient mesh background
uniform float time;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  float noise = sin(uv.x * 3.0 + time * 0.5) * cos(uv.y * 3.0 + time * 0.3);
  vec3 blue = vec3(0.0, 0.12, 0.25);
  vec3 gold = vec3(1.0, 0.84, 0.0);
  vec3 color = mix(blue, gold, noise * 0.15 + 0.1);
  gl_FragColor = vec4(color, 1.0);
}
```

---

## Section 3: Job Ready Section

### Layout
**Horizontal Scroll Conversion:**
- Section transforms into horizontal scroll experience
- Cards scroll horizontally while section is pinned
- Vertical scroll progress drives horizontal card movement

### Spatial Composition
- Pinned container: 100vh height
- Horizontal track: 300vw width (3 screens of content)
- Cards: 80vw width each, centered
- Progress indicator: Bottom center

### Content
- Title: "Become Job Ready with Top-Rated Skills"
- Subtitle: "Our courses are designed to help you master the skills that top companies are looking for"
- Partner Logos: 6 company logos in grayscale
- CTA: "Explore Our Hiring Partners"

### Images
**Partner Logos:**
- 6 company logos (Google, Microsoft, Amazon, etc.)
- Grayscale filter, color on hover
- Size: 120x60px each

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Title | Word Split | y: 40→0, opacity 0→1 per word | 500ms | 50ms stagger | expo-out |
| Partner Logos | Stagger Scale | scale 0.8→1, opacity 0→1 | 400ms | 80ms each | elastic |

#### Scroll Effects (Horizontal Scroll)
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section enter | Container | Pin | top of viewport | +300vh | position: fixed |
| 0-100% progress | Card Track | Horizontal Move | 0% | 100% | x: 0→-200vw |
| Per card | Active Card | Scale Up | center-20% | center+20% | scale 0.9→1→0.9 |
| Per card | Active Card | Opacity | center-20% | center+20% | opacity 0.5→1→0.5 |

#### Interaction Effects
- **Logo Hover**: Grayscale→Color, scale 1.1, lift y: -5px

---

## Section 4: Instructor Section

### Layout
**Asymmetric Overlap Design:**
- Image breaks grid, extending 10% into adjacent section
- Content overlaps image with glassmorphism card
- Diagonal text alignment for heading

### Spatial Composition
- Image: 45% width, positioned left, overflow: visible
- Content card: 55% width, overlaps image by 10%
- Card: White background with subtle shadow, 40px padding
- Decorative: Gold accent line connecting image to content

### Content
- Label: "CEO & Founder"
- Title: "Meet your Instructor"
- Name: "Rahul Sharma"
- Bio: "I teach Manual Testing, API Testing (Manual & Automation), Automation Testing (with Java). With over 10 years of industry experience, I've helped hundreds of students transform their careers."
- CTA: "Learn More About Me"

### Images
**Instructor Image:**
- Resolution: 600x800 pixels
- Aspect Ratio: 3:4
- Transparent Background: No
- Visual Style: Professional portrait
- Subject: Male instructor, professional attire
- Color Palette: Neutral background, natural skin tones
- Generation Prompt: "Professional portrait photograph of a male software testing instructor in his 30s, wearing a smart casual shirt, confident friendly expression, neutral studio background, soft professional lighting, high quality headshot"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Image | Slide + Reveal | x: -100→0, clip-path circle expand | 800ms | 0ms | expo-out |
| Gold Accent Line | Draw | stroke-dashoffset 100%→0% | 600ms | 400ms | smooth |
| Content Card | Slide + Fade | x: 80→0, opacity 0→1 | 700ms | 300ms | expo-out |
| Label | Fade + Scale | opacity 0→1, scale 0.9→1 | 400ms | 600ms | elastic |
| Title | Split Characters | y: 30→0, opacity 0→1 per char | 400ms | 30ms stagger | expo-out |
| Bio | Fade Up | y: 20→0, opacity 0→1 | 500ms | 900ms | smooth |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section scroll | Image | Parallax Slow | 0% | 100% | y: 0→-50px |
| Section scroll | Content Card | Parallax Fast | 0% | 100% | y: 0→-80px |
| Section scroll | Gold Line | Glow Pulse | 0% | 100% | box-shadow intensity |

#### Interaction Effects
- **Image Hover**: Subtle zoom scale 1.05, shadow increase
- **Content Card Hover**: Lift y: -5px, shadow expand

---

## Section 5: Course Tracks Section

### Layout
**Hexagonal Grid Pattern:**
- Cards arranged in offset honeycomb pattern
- Every other row offset by 50% card width
- Cards have subtle rotation for dynamic feel

### Spatial Composition
- Container: max-width 1200px
- Card grid: 3 columns with offset rows
- Card size: ~380px width
- Gap: 24px horizontal, 40px vertical (accounting for offset)
- Offset: Even rows shifted right by 190px (50% card width)

### Content
- Card 1: "Automation Engineer/SDET Track" - 4-5 months
- Card 2: "Job Ready Software Tester Track" - 2.5 months
- Card 3: "API Automation Expert Track" - 2-3 months

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Card 1 | 3D Flip In | rotateY: 90→0, opacity 0→1 | 700ms | 0ms | expo-out |
| Card 2 | 3D Flip In | rotateY: 90→0, opacity 0→1 | 700ms | 150ms | expo-out |
| Card 3 | 3D Flip In | rotateY: 90→0, opacity 0→1 | 700ms | 300ms | expo-out |
| Card Content | Stagger Fade | y: 20→0, opacity 0→1 | 400ms | 100ms each | smooth |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section scroll | All Cards | Subtle Float | 0% | 100% | y: 0→-30px |

#### Interaction Effects
- **Card Hover**: Lift y: -15px, scale 1.03, shadow expand
- **Card Hover**: Border glow gold appears
- **Duration Badge**: Pulse animation on hover

### Advanced Effects

#### 3D Elements
- Cards have perspective(800px)
- Idle state: rotateX(2deg), subtle
- Hover: rotateX(0deg), lift effect

---

## Section 6: Why Learn Section

### Layout
**Orbital Icon Arrangement:**
- Icons arranged in arc pattern around central content
- Connecting lines animate between icons
- Central content is focal point

### Spatial Composition
- Central title: Centered, max-width 600px
- Icons: 3 icons in arc, 120° apart
- Connecting SVG lines: Animated stroke
- Background: Subtle radial gradient

### Content
- Title: "Why Learn with TheTestingAutomationAcademy?"
- Subtitle: "Want to learn with LIVE classes, project-based training with real LIVE projects? We've got you covered!"
- Features:
  1. LIVE Classes - "We conduct LIVE classes to help you become job ready with direct interaction and guidance."
  2. Project-Based Training - "Project-based training helps you learn fast and solve every doubt with hands-on experience."
  3. LIVE Projects - "We work with LIVE projects that are active in the current market to give you real experience."

### Images
**Feature Icons:**
- LIVE Classes: Video camera icon
- Project-Based: Folder/code icon
- LIVE Projects: Briefcase icon
- Style: Line icons, 64px, gold color

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Title | Fade Up | y: 40→0, opacity 0→1 | 600ms | 0ms | expo-out |
| Subtitle | Fade Up | y: 30→0, opacity 0→1 | 500ms | 200ms | smooth |
| Icon 1 | Pop + Rotate | scale 0→1, rotate: -180→0 | 500ms | 400ms | elastic |
| Icon 2 | Pop + Rotate | scale 0→1, rotate: -180→0 | 500ms | 550ms | elastic |
| Icon 3 | Pop + Rotate | scale 0→1, rotate: -180→0 | 500ms | 700ms | elastic |
| Connecting Lines | Draw | stroke-dashoffset 100%→0% | 800ms | 600ms | smooth |
| Feature Text | Stagger Fade | y: 20→0, opacity 0→1 | 400ms | 100ms each | smooth |

#### Continuous Animations
- **Icons**: Gentle float y: ±10px, 3s duration, offset timing
- **Connecting Lines**: Subtle pulse glow

#### Interaction Effects
- **Icon Hover**: Scale 1.2, rotate 10deg, glow effect

---

## Section 7: Courses Section

### Layout
**Masonry Cascade with Stagger:**
- Cards in masonry-style layout
- Each column has different scroll parallax speed
- Cards have 3D tilt on hover

### Spatial Composition
- Container: max-width 1200px
- Grid: 3 columns masonry
- Column 1: Normal scroll speed
- Column 2: 0.9x scroll speed (slower)
- Column 3: 1.1x scroll speed (faster)
- Card gap: 24px

### Content
- Title: "Our Courses"
- Subtitle: "Learn in-demand testing skills through our comprehensive courses designed to make you job-ready with real-world projects."
- CTA: "Explore All Courses"
- Course Cards (6 courses):
  1. Manual Testing Masterclass - ₹3,999
  2. API Testing with Postman - ₹4,999
  3. Automation Testing with Java - ₹9,999
  4. Performance Testing with JMeter - ₹16,999
  5. Mobile App Testing - ₹12,999
  6. DevOps for Testers - ₹21,999

### Images
**Course Card Images:**
- Resolution: 400x300 pixels
- Aspect Ratio: 4:3
- Transparent Background: No
- Visual Style: Technology/stock photography
- Subject: Code editors, testing tools, laptops
- Color Palette: Dark themes with colorful code

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Title | Fade Up | y: 40→0, opacity 0→1 | 600ms | 0ms | expo-out |
| Subtitle | Fade Up | y: 30→0, opacity 0→1 | 500ms | 150ms | smooth |
| Course Cards | Stagger Rise | y: 60→0, opacity 0→1, rotateX: 15→0 | 600ms | 100ms each | expo-out |
| CTA Button | Scale Pop | scale 0.9→1, opacity 0→1 | 400ms | 800ms | elastic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section scroll | Column 2 | Parallax Slow | 0% | 100% | y: 0→-40px |
| Section scroll | Column 3 | Parallax Fast | 0% | 100% | y: 0→40px |

#### Interaction Effects
- **Card Hover**: 3D tilt toward cursor (CSS :hover only)
- **Card Hover**: Image zoom scale 1.1
- **Card Hover**: Shadow expand, lift y: -10px
- **Price Tag**: Glow pulse on hover

### Advanced Effects

#### 3D Elements
- Cards: perspective(1000px)
- Hover: rotateX(5deg) rotateY(5deg) based on hover position
- Smooth transition: 300ms

---

## Section 8: Why Choose Section

### Layout
**Split Screen with Animated Divider:**
- Left: Large feature highlight with image
- Right: Grid of smaller features
- Animated SVG divider between sections

### Spatial Composition
- Left panel: 50% width, sticky on scroll
- Right panel: 50% width, scrollable features
- Divider: Animated wave SVG
- Feature grid: 2x3 on right

### Content
- Title: "Why Choose TheTestingAutomationAcademy"
- Subtitle: "We offer a unique learning experience designed to transform beginners into job-ready testing professionals."
- Features:
  1. Learn from Industry Expert
  2. Real-World Projects
  3. Live Interactive Classes
  4. Job-Ready Training
  5. Personalized Attention
  6. Placement Assistance

### Images
**Feature Icons:**
- 6 line icons, 48px, gold color
- User icon, project icon, video icon, etc.

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Left Panel | Slide In | x: -100→0, opacity 0→1 | 700ms | 0ms | expo-out |
| Divider | Draw | stroke-dashoffset animate | 1000ms | 300ms | smooth |
| Right Features | Stagger Pop | scale 0.8→1, opacity 0→1 | 400ms | 80ms each | elastic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section scroll | Left Panel | Sticky | top | bottom | position: sticky |
| Section scroll | Divider | Wave Motion | 0% | 100% | path morphing |

#### Interaction Effects
- **Feature Hover**: Icon spin 360deg, color shift
- **Feature Hover**: Background highlight

---

## Section 9: Testimonials Section

### Layout
**3D Carousel with Depth:**
- Cards arranged in 3D carousel
- Active card front and center
- Side cards recede with perspective
- Navigation arrows with magnetic effect

### Spatial Composition
- Carousel container: 100% width, 500px height
- Active card: Center, scale 1, z-index 10
- Side cards: scale 0.8, rotateY(±30deg), z-index 5
- Perspective: 1200px

### Content
- Title: "What Our Students Say"
- Subtitle: "Hear from our successful students who transformed their careers with TheTestingAutomationAcademy courses."
- Testimonials:
  1. Aisha Patel - SDET at Microsoft
  2. David Kim - QA Engineer at Google
  3. Sarah Johnson - Test Lead at Amazon
  4. Mike Robertson - Automation Engineer at Facebook
- CTA: "View All Success Stories"

### Images
**Testimonial Card Images:**
- Resolution: 400x250 pixels
- Aspect Ratio: 16:10
- Transparent Background: No
- Visual Style: Technology/workspace photography
- Subject: Code on screens, workspace setups
- Color Palette: Dark with colorful code highlights

**Student Avatars:**
- Circular profile images, 60px
- Professional headshots

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Title | Fade Up | y: 40→0, opacity 0→1 | 600ms | 0ms | expo-out |
| Carousel | 3D Reveal | rotateY: 90→0, opacity 0→1 | 800ms | 300ms | expo-out |
| CTA | Scale Pop | scale 0.9→1, opacity 0→1 | 400ms | 800ms | elastic |

#### Carousel Transitions
| Action | Animation | Values | Duration | Easing |
|--------|-----------|--------|----------|--------|
| Next | 3D Rotate | rotateY: 0→-30 (current), -30→0 (next) | 500ms | expo-out |
| Prev | 3D Rotate | rotateY: 0→30 (current), 30→0 (prev) | 500ms | expo-out |

#### Interaction Effects
- **Arrow Hover**: Magnetic pull, scale 1.2
- **Card Hover**: Lift, shadow expand
- **Play Button**: Pulse animation

### Advanced Effects

#### 3D Elements
- Carousel: perspective(1200px)
- Cards: preserve-3d
- Transitions: rotateY with scale adjustment

---

## Section 10: CTA Section

### Layout
**Diagonal Split with Floating Elements:**
- Dark blue background with diagonal gold accent
- Content left, floating decorative elements right
- Parallax depth on decorative elements

### Spatial Composition
- Background: Dark blue (#001F3F) with diagonal gold stripe
- Diagonal angle: 15deg
- Content: Left-aligned, max-width 600px
- Floating elements: Code brackets, geometric shapes

### Content
- Title: "Ready to Become Job-Ready QA?"
- Subtitle: "Join our LIVE classes today and transform your career with in-demand testing skills. Get access to project-based training and direct mentorship."
- CTA Primary: "Enroll Today"
- CTA Secondary: "View Courses"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Background | Wipe Reveal | clip-path diagonal expand | 800ms | 0ms | expo-out |
| Gold Stripe | Slide | x: -100%→0 | 600ms | 200ms | expo-out |
| Title | Fade Up | y: 40→0, opacity 0→1 | 600ms | 400ms | expo-out |
| Subtitle | Fade Up | y: 30→0, opacity 0→1 | 500ms | 550ms | smooth |
| CTAs | Stagger Pop | scale 0.9→1, opacity 0→1 | 400ms | 100ms each | elastic |
| Floating Elements | Float In | y: 50→0, opacity 0→1 | 600ms | 700ms | elastic |

#### Continuous Animations
- **Floating Elements**: y: ±20px, 4s duration, infinite
- **Gold Stripe**: Subtle shimmer effect

#### Interaction Effects
- **CTA Primary**: Shine sweep on hover
- **CTA Secondary**: Border glow on hover

---

## Section 11: Footer

### Layout
**Layered Footer with Reveal:**
- Multi-column layout with animated divider
- Newsletter section with interactive form
- Social icons with hover effects

### Spatial Composition
- Background: Dark blue (#001F3F)
- Top border: Animated gold gradient line
- Grid: 4 columns (Brand, Quick Links, Support, Newsletter)
- Bottom bar: Copyright and legal links

### Content
- Brand: Logo + tagline + social icons
- Quick Links: Home, Courses, Contact, Blog
- Support: FAQ, Privacy Policy, Terms, Refund, No Refund, Shipping, Testimonials
- Newsletter: Title, description, email input, subscribe button
- Bottom: ©2025, Privacy, Terms, Shipping, Sitemap

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Gold Border | Draw | scaleX 0→1 | 600ms | 0ms | expo-out |
| Column 1 | Fade Up | y: 40→0, opacity 0→1 | 500ms | 100ms | expo-out |
| Column 2 | Fade Up | y: 40→0, opacity 0→1 | 500ms | 200ms | expo-out |
| Column 3 | Fade Up | y: 40→0, opacity 0→1 | 500ms | 300ms | expo-out |
| Column 4 | Fade Up | y: 40→0, opacity 0→1 | 500ms | 400ms | expo-out |
| Social Icons | Stagger Pop | scale 0→1 | 300ms | 50ms each | elastic |

#### Interaction Effects
- **Link Hover**: Color gold, x: 5px shift
- **Social Icon Hover**: Scale 1.2, color gold, rotate 10deg
- **Subscribe Button**: Shine effect on hover

---

## Technical Implementation Notes

### Required Libraries
- **GSAP + ScrollTrigger**: Complex scroll animations, pinning
- **CSS Animations**: Simple hover states, continuous effects
- **Intersection Observer**: Triggering entrance animations
- **Three.js**: Hero shader background (optional enhancement)

### Performance Optimizations

**Critical Rules:**
- Use `transform3d()` for GPU acceleration
- Apply `will-change` before animation, remove after
- Use CSS `:hover` for mouse effects, NOT mousemove tracking
- Throttle scroll events to 16ms minimum
- Use `contain: layout style paint` for animated sections
- Implement `prefers-reduced-motion` fallbacks

**Animation Budget:**
- Max 3 simultaneous complex animations per viewport
- Max 10 simultaneous simple animations
- Use `content-visibility: auto` for off-screen sections

### Reduced Motion Fallback
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Progressive enhancement for older browsers
- Feature detection for 3D transforms and scroll-timeline

---

## Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: 992px - 1199px
- Large: ≥ 1200px

### Animation Adjustments

**Mobile:**
- Reduce parallax intensity by 50%
- Disable 3D carousel, use simple swipe
- Simplify shader to static gradient
- Reduce stagger delays

**Tablet:**
- Maintain most animations
- Adjust horizontal scroll to vertical
- Reduce particle counts

### Layout Changes
- Hero: Stack vertically on mobile
- Course grid: 1 column mobile, 2 tablet, 3 desktop
- Footer: Stack columns on mobile

---

## Animation Value Reference

### Movement Magnitudes
- Entrance slides: 40-80px
- Scale effects: 0.9x - 1.1x
- Rotations: 5° - 15° (subtle), 30° - 90° (dramatic)
- Parallax range: 30px - 100px depth

### Timing Reference
- Micro interactions: 150-200ms
- Standard transitions: 300-500ms
- Entrance animations: 600-800ms
- Complex sequences: 1000-1500ms

### Easing Reference
- Entrances: `cubic-bezier(0.16, 1, 0.3, 1)`
- Exits: `cubic-bezier(0.7, 0, 0.84, 0)`
- Bouncy: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- Smooth: `cubic-bezier(0.4, 0, 0.2, 1)`
