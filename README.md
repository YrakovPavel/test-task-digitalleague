# test-task-digitalleague
Веб-интерфейс, состоящий из двух основных блоков: интерактивной карты и панели списка объектов с элементами управления. Интерфейс поддерживает динамическое отображение маркеров, их визуальную дифференциацию по цветам, построение линий между связанными объектами, фильтрацию видимости и полный сброс состояния. 

Демо-стенд сайта: https://yrakovpavel.github.io/test-task-digitalleague/

## Рекомендуемые настройки IDE

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Рекомендуемые настройки браузера

- Браузеры на основе Chromium (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Поддержка типов для импорта `.vue` в TypeScript

TypeScript по умолчанию не может обрабатывать информацию о типах для импорта `.vue`, поэтому мы заменяем CLI `tsc` на `vue-tsc` для проверки типов. В редакторах нам нужен [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar), чтобы служба языка TypeScript знала о типах `.vue`.

## Настройка конфигурации

См. [Справочник по настройке Vite](https://vite.dev/config/).

## Настройка проекта
Клонировать репозиторий
```sh
git clone https://github.com/YrakovPavel/test-task-digitalleague.git
```

Перейти в папку проекта
```sh
cd test-task-digitalleague
```

Установить зависимости
```sh
npm install
```
Для работы потребуется [ключ Api Яндекс Карты](https://yandex.ru/maps-api/products/js-api). У полученного ключа нужно настроить ограничение по HTTP Referer (для локального сервера это будет localhost). Полученный ключ следует вставить в поле "apikey: API_KEY" в файле main.ts. 

**Внимание:** для начала работы ключа может потребоваться некоторое время.

### Сборка и горячая перезагрузка для разработки

```sh
npm run dev
```

### Проверка типов, компиляция и минимизация для использования в производственной среде

```sh
npm run build
```
