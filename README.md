## Correr en dev

1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno (API Keys etc).
3.  Crear una copia del ```.env.local.template``` y renombrarlo a ```.env.local``` y cambiar las variables de entorno (API key).
3. Instalar dependencias ```npm install```
4. Inicializar el proyecto con ```npm run dev```.
5. Limpiar el local, session storage para asegurar un uso correcto de la aplicacion (en principio no deberia ser necesario).


```
├─ src
│  ├─ app
│  │  ├─ (auth)
│  │  │  ├─ layout.tsx
│  │  │  ├─ sign-in
│  │  │  │  └─ [[...sign-in]]
│  │  │  │     └─ page.tsx
│  │  │  └─ sign-up
│  │  │     └─ [[...sign-up]]
│  │  │        └─ page.tsx
│  │  ├─ (home)
│  │  │  ├─ (routes)
│  │  │  │  ├─ contacto
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ course-preview
│  │  │  │  │  └─ [courseId]
│  │  │  │  │     ├─ _components
│  │  │  │  │     │  ├─ ButtonsSection.tsx
│  │  │  │  │     │  ├─ CourseDetails.tsx
│  │  │  │  │     │  ├─ EnrollmentSection.tsx
│  │  │  │  │     │  └─ VideoPlayer.tsx
│  │  │  │  │     ├─ not-found.tsx
│  │  │  │  │     └─ page.tsx
│  │  │  │  ├─ dashboard
│  │  │  │  │  ├─ _components
│  │  │  │  │  │  └─ CourseList.tsx
│  │  │  │  │  ├─ loading.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ inscrito
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ layout.tsx
│  │  │  │  ├─ newsletter
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ plan-premium
│  │  │  │  │  └─ page.tsx
│  │  │  │  ├─ privacidad-generico
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ terminos-y-condiciones
│  │  │  │     └─ page.tsx
│  │  │  └─ _components
│  │  │     ├─ (Contact)
│  │  │     │  └─ ContactForm.tsx
│  │  │     ├─ (Dashboard-components)
│  │  │     │  └─ Categories.tsx
│  │  │     ├─ (Newsletter)
│  │  │     │  └─ EmailForm.tsx
│  │  │     ├─ (Side-BarNav)
│  │  │     │  ├─ Aside.tsx
│  │  │     │  ├─ FooterAside.tsx
│  │  │     │  ├─ MainEstructure.tsx
│  │  │     │  ├─ NavBar.tsx
│  │  │     │  └─ SearchBar.tsx
│  │  │     └─ index.ts
│  │  ├─ (pages)
│  │  │  ├─ codejourney-empresas
│  │  │  │  └─ page.tsx
│  │  │  ├─ layout.tsx
│  │  │  ├─ preguntas-y-respuestas
│  │  │  │  └─ page.tsx
│  │  │  └─ programas-estudio
│  │  │     ├─ _components
│  │  │     │  ├─ Categories.tsx
│  │  │     │  └─ Courses.tsx
│  │  │     └─ page.tsx
│  │  ├─ (watch-course)
│  │  │  ├─ (routes)
│  │  │  │  └─ view-course
│  │  │  │     └─ [courseId]
│  │  │  │        ├─ _components
│  │  │  │        │  ├─ ChapterNavigation.tsx
│  │  │  │        │  └─ VideoPlayer.tsx
│  │  │  │        └─ page.tsx
│  │  │  └─ layout.tsx
│  │  ├─ _microservices
│  │  │  └─ index.tsx
│  │  ├─ api
│  │  │  ├─ checkout
│  │  │  │  └─ route.ts
│  │  │  ├─ message
│  │  │  │  └─ route.ts
│  │  │  ├─ sendContact
│  │  │  │  └─ route.ts
│  │  │  └─ sendNewsletter
│  │  │     └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ (section-landing-pages)
│  │  │  ├─ first-section
│  │  │  │  └─ FirstSection.tsx
│  │  │  └─ second-section
│  │  │     └─ SecondSection.tsx
│  │  ├─ Chat
│  │  │  ├─ Chat.tsx
│  │  │  ├─ ChatHeader.tsx
│  │  │  ├─ ChatInput.tsx
│  │  │  ├─ ChatMessages.tsx
│  │  │  ├─ MarkdownLite.tsx
│  │  │  └─ Providers.tsx
│  │  ├─ carousel.tsx
│  │  ├─ cursos.tsx
│  │  ├─ email-template.tsx
│  │  ├─ footer
│  │  │  └─ Footer.tsx
│  │  ├─ index.ts
│  │  ├─ integrantes.tsx
│  │  ├─ not-found
│  │  │  └─ PageNotFound.tsx
│  │  ├─ top-menu
│  │  │  ├─ TopMenu.tsx
│  │  │  ├─ logo.tsx
│  │  │  ├─ manage-account-button.tsx
│  │  │  ├─ navigation-bar.tsx
│  │  │  └─ righ-side-buttons.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ select.tsx
│  │     ├─ sheet.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toast.tsx
│  │     ├─ toaster.tsx
│  │     ├─ typewriter-effect.tsx
│  │     └─ use-toast.ts
```
