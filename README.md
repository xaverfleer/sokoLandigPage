# About

This is the landing page for SOKo - Subject Oriented Communications.

# How to start developing

- Make sure, you have npm installed
- Run `$ npm install`
- Run `$ npx netlify dev`

# Browser support

We follow default configuration of [Browserslist](https://www.npmjs.com/package/browserslist). Run `> npx browserslist` to see the list of supported browsers.

# Issues

Issues are tracked on [Github](https://github.com/xaverfleer/sokoLandigPage/issues).

# Formatting

We believe in using default settings where possible.

# Amplitude events

| CSS class | Amplitude name        | What is tracked                 |
| --------- | --------------------- | ------------------------------- |
| cta00     | Anmelden clicked      | Anmelden button is clicked      |
| cta01     | Zu den Videos clicked | Zu den Videos button is clicked |
| cta03     | Zur Startseite        | Zur Startseite                  |
| cta04     | Kurs starten          | Kurs starten                    |
| cta05     | Jetzt buchen          | Jetzt buchen                    |
| cta06     | Kursblock 2           | Kursblock 2                     |
| cta07     | Kursblock 1           | Kursblock 1                     |
| cta08     | Kursblock 3           | Kursblock 3                     |
| cta09     | Kursblock 4           | Kursblock 4                     |
| cta10     | Kursblock 5           | Kursblock 5                     |
|           | Page loaded           | Page load of index.html         |
|           | Kurs page loaded      | Page load of kurs.html          |
|           | Submitted page loaded | Page load of submitted.html     |

# Sitemap

A sitemap helps search engine crawlers finding all websites.
Reference: https://www.sitemaps.org/protocol.html
Our sitemap: /dist/sitemap.xml
When to update: When non-minor changes are made

# Branch naming

Git branch names have the format `<type>/<name>`. Possible values for `<type>` are listed in the following table.

| branch type | meaning                 |
| ----------- | ----------------------- |
| bugfix      | A bugfix                |
| chore       | A chore/task to be done |
| feature     | A new feature           |
| usability   | Usability improvements  |

`<name>` is lower-kebab-cased.

_Example:_ `bugfix/fix-typo`

Exceptions: `master` branch is called `master`.
