# News Explorer

## Overview

This repo contains frontend part of News Explorer project. The application is used for searching news via [News API](https://newsapi.org/). Users can browse news articles from the last week by keyword. Also they have possibility to make an account, sign in and save the most interested articles to their profiles. 

## Technologies and features

* React JS
* Node.js
* Express.js
* MongoDB
* Logging using Winston middleware
* Request validation using Joi library
* Attack protection using Express rate limit library

## Screenshots

Main page

![Main page](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/the%20whole%20page.png)

Header for authorized user

![Authorized header](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/authorized%20header.png)

Sign in modal window

![Sign in](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/sign%20in.png)

Sign up modal window

![Sign up](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/sign%20up.png)

Registration/authorization forms validation

![Validation](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/validation.png)

Search results. Application shows 3 first results, after click on 'Show more' button page loads 3 more cards.

![Search results](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/search%20results.png)

When unauthorized user hover the save card button they see log in suggestion

![Unauthorized save button](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/unauthorized%20to%20save.png)

Saved articles page. Keywords in the header are placed according the amount of saved articles with this keyword: the most popular is the first, the second on the next place etc. If there are more than 3 unique keywords displayed the first two and amount of others. 

![Saved articles](https://github.com/TatianaBialik/news-explorer-frontend/blob/main/screenshots/saved.png)

## Links

* [API repo](https://github.com/TatianaBialik/news-explorer-api)
* [Deployed on GCP demo version](https://www.my-news-explorer.students.nomoredomainssbs.ru/)
