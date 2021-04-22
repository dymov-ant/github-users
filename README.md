### Github Users

Приложение позволяет искать пользователей Github.com через [github api](https://docs.github.com/en/rest/overview/resources-in-the-rest-api).

Для запуска приложения выполните:
1. Клонировать проект: `git clone https://github.com/dymov-ant/github-users.git`
2. Установить зависимости проекта: `npm install` или `yarn install`
3. Выполнить скрипт `npm start` или `yarn start`
4. Приложение будет доступно по адресу: `http://localhost:3000`

[Github api](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) имеет ограничение на количество запросов в час:
- для неавторизованных пользователей - 60 запросов;
- при использовании [Personal access tokens](https://github.com/settings/tokens) - 5000 запросов.

Следовательно, для тестирования приложения стоит [сгенерировать](https://github.com/settings/tokens/new) токен доступа и присвоить его константе `GITHUB_TOKEN` в файле `github-users/src/utilits/constants.ts`

![](http://i.piccy.info/i9/120397e21866be0e6ebfa281d2744358/1619116333/10411/1426064/Snymok_ekrana_2021_04_22_234101.jpg)

