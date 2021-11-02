# nextcloud

## Project description

Данный проект реализует панель администратора для магазинов без продавцов, позволяющая следить за покупателями на основе файла api.json . В файле api.json есть **events** и **trunstile-events**. В **events** хранятся события взятие товара с полки и возвращение его на полку. В **trunstile-events** хранятся события входа покупателя в магазин и его выхода. На основе вышеперечисленных данных можно _просмотреть сессию_ (вход покупателя в магазин), а также _добавить ему товаров_ или _вернуть на полку_. Также можно _удалить выбранный event_ и _добавить новый event в сессию_.

#### Выбор сессии

![Select session](https://sun9-88.userapi.com/impf/O_fW0ntSOrUw3AnOT9sAhCAOQRnliRPfnLiqSQ/-Sy2ae4yPhU.jpg?size=1352x240&quality=96&sign=5fc392210ea1e6cce72897fdb10b3ceb&type=album)

#### Действия с событиями выбранной сессии

![list-event](https://sun9-78.userapi.com/impf/RiJ7Ggf2jkT6pz3AcfewvwRHKwEiiZY5f69FYw/BRUza9uYPnU.jpg?size=548x347&quality=96&sign=5882f9f556b7f19f6557413975c2f870&type=album)

#### Модальное окно для добавления события

Реализована минимальная валидация:

- не отправляет, если не введено имя продукта
- не отправляет, если не выбран тип события
- не отправляет, если не введено кол-во продукта
- не отправляет, если введено кол-во продукта равное 0
- не отправляет, если введено кол-во продукта не цифра

![modal](https://sun9-38.userapi.com/impf/KHSN1NvQabDyut9nTh142VN__Htw1BKDA1Sqxg/8YABKlzs19w.jpg?size=501x486&quality=96&sign=032d169f7be8dd1d8e2cedf4245eac80&type=album)

В данном проекте используется локальный api.
Для реализации поекта, помимо vue.js, использовались следующие иснтрументы:

- axios
- bootstrap
- json-server

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run start
```



