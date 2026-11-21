# Blessed Gebremichael Catholic Secondary School — website

The website of Blessed Gebremichael Catholic Secondary School (ብፁዕ ገ/ሚካኤል ካቶሊክ አጠቃላይ 2ኛ ደረጃ ት/ቤት), a Catholic secondary school for Grades 9 to 12 in Bahir Dar, Ethiopia.

**Live site:** https://YOUR-ORG.github.io/ ← replace once GitHub Pages is on

## About this project

_Write this part yourself: why the school needed a website, who approved it, what you did, and what you learned. Three or four sentences._

Built by [your name] with the permission of the school. The first draft was made with an AI assistant (Claude); the content, photos and exam results come from the school, and every fact was checked with the principal (see `CONFIRM.md`).

## Pages

| Page | File | What it covers |
| --- | --- | --- |
| Home | `index.html` | Welcome, the school at a glance, results, news |
| About | `about.html` | Who we are, mission and values, our namesake, Bahir Dar |
| Academics | `academics.html` | Curriculum, streams, senior courses, grading, the national exam, the school year |
| Results | `results.html` | 2017 E.C. Grade 12 national exam results |
| School Profile | `profile.html` | One printable page for university admissions officers |
| Admissions | `admissions.html` | How to apply, documents, questions families ask |
| Student life | `student-life.html` | Med Club, BGSciTech, Speech and Debate, Charity Club |
| Campus | `campus.html` | Classrooms, the new expansion building, the inauguration |
| News | `news.html` | School news, dated in both calendars |
| Contact | `contact.html` | Telephone, email, post |
| About this website | `credits.html` | Who built the site, how, sources, version history |

## How it is built

Plain HTML, one stylesheet (`css/styles.css`) and one small script (`js/main.js`, the phone menu and the print button). No framework and no build step: edit a file, commit, and GitHub Pages publishes it within a minute or two.

```
index.html … contact.html   one file per page
css/styles.css              all styles (colours are set once at the top)
js/main.js                  menu on phones, print button on the profile page
assets/img/                 photos (.webp) and the school seal
```

Fonts come from Google Fonts: Alegreya, Alegreya Sans and Noto Serif Ethiopic.

`humans.txt` lists the people behind the site, and every page links to it. The footer of every page says who built the site and links to `credits.html`.

## Updating the site

- **Text:** open the page's `.html` file on GitHub, click the pencil, edit, then commit with a short message saying what changed.
- **Photos:** convert to `.webp` under about 300 KB (for example with squoosh.app), upload to `assets/img/`, and describe the photo in the `alt="…"` text.
- **News:** copy one `<li class="news-item">…</li>` block in `news.html`, change the date, title, text and photo. Add the newest item at the top, and update the two items on `index.html`.
- **Dates:** give the Ethiopian date first, then the Gregorian date, as the existing items do.
- **Version history:** each time you publish a change, add a row at the top of the table on `credits.html`.
- The header and footer are repeated in every page file. If you change a menu link or the phone number, change it in all eleven files.

## Test mode

`robots.txt` currently tells search engines not to index the site, so the github.io address does not appear on Google while you test. When the real domain is set up, replace it with a version that allows indexing and add a sitemap.

## Before the site goes public

Go through `CONFIRM.md` with the principal. The mission, vision and values on the About page are draft wording until the principal approves them.

## Rights

Photos, the school seal and the school's name belong to Blessed Gebremichael Catholic Secondary School. National exam figures are cited on the pages where they appear.
