import { createApp, inject } from 'vue';
import TheTopProgressBar from './TheTopProgressBar.vue';
// Используйте эту константу в качестве ключа provide/inject
export const PROGRESS_KEY = Symbol('PROGRESS_KEY');

//ID Прогресса
export const PROGRESS_ID = Symbol('PROGRESS_ID');
// Функция для удобного внедрения с Composition API
export function useProgress() {
  return inject(PROGRESS_KEY);
}


/**
 * @param container
 * @param router
 * @returns {{fail: *, install(*): void, start(...[*]): void, finish(...[*]): void}}
 */
export function createProgress({ container, router } = {}) {
  const addDefaultContainer = () => document.body.appendChild(document.createElement('div'));
  const progressInstance = createApp(TheTopProgressBar, router).mount(container ?? addDefaultContainer());

  const progress = {
    start(...args) {
      progressInstance.start(...args);
    },
    finish(...args) {
      progressInstance.finish(...args);
    },
    fail: progressInstance.fail,
    install(app) {
      app.provide(PROGRESS_KEY, progress);
    },
  };
  if (router) {
    router.beforeEach((to, from, next) => {
      progress.start(PROGRESS_ID, next());
    });
    router.afterEach((to, from) => {
      progress.finish(PROGRESS_ID);
    });
    router.onError((error) => {
      progress.fail(error);
    });
  }
  return progress;
}
