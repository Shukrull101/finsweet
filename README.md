# Finsweet

React + TypeScript + Tailwind v4 + React Router (data router) + Zod + React Hook Form. Архитектура FSD.

    npm install
    npm run dev

- Фото: положи в `src/shared/assets` и подключи в `src/shared/assets/index.ts` (сейчас там заглушки).
- Subscribe / Header / Footer — `src/widgets/layout`. Скрыть Subscribe на странице: `handle: { noSubscribe: true }` в `src/app/router.tsx`.
- Поп-ап открывается из Header (контекст `features/contact-popup`).
- Отправка форм — `shared/lib/fakeSubmit.ts`, замени на реальный запрос.
