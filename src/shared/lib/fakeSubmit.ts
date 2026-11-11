/** Имитация отправки на сервер. Замените на реальный fetch/axios. */
export const fakeSubmit = (_data: unknown) => new Promise<void>((resolve) => setTimeout(resolve, 700))
