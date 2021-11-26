
![Tech Blog](./assets/tech-blog-image.png)
<h1 align="center"> Model-View-Controller (MVC)
<br>Tech Blog 👋</h1>
<p align="center">
  <a href="#">
  <img alt="expressjs" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" target="_blank" />
  <a href="#">
  <img alt="javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascriptlogoColor=black" target="_blank" />
  <a href="#">
  <img alt="git" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" target="_blank" />
  <a href="#">
  <img alt="mysql" src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" target="_blank" />
  <a href="#">
  <img alt="npm" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" target="_blank" />
  <a href="#">
  <img alt="npm" src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" target="_blank" />
  <a href="#">
  <img alt="handlebars" src="https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black" target="_blank" />
  <a href="#">
  <img alt="css3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" target="_blank" />
  <br>
  <a href="https://www.buymeacoffee.com/adampham123">
  <img alt="donate buy me a coffee" src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?style=flat-square" target="_blank" />
  <a href="#">
  <img alt="watchers" src="https://img.shields.io/github/watchers/ThiHoangPham/tech-blog?color=%2346b946&style=flat-square" target="_blank" />
  <a href="#">
  <img alt="rep size" src="https://img.shields.io/github/repo-size/ThiHoangPham/tech-blog?style=flat-square" target="_blank" />
  <a href="https://github.com/ThiHoangPham/tech-blog/blob/main/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?style=flat-square" target="_blank" />
  </a>
  <a href="#">
  <img alt="fork" src="https://img.shields.io/github/forks/ThiHoangPham/tech-blog.svg?style=flat-square" target="_blank" />
  <a href="#">
  <img alt="repo star" src="https://img.shields.io/github/stars/ThiHoangPham/tech-blog?color=%23ff00bf&style=flat-square" target="_blank" />
  </a>
  <a href="#">
  <img alt="made with vs code" src="https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg?style=flat-square" target="_blank" />
  </a>
  <a href="#">
  <img alt="top language" src="https://img.shields.io/github/languages/top/ThiHoangPham/tech-blog?color=%23ff4000&style=flat-square" target="_blank" />
  </a>
  <a href="https://github.com/ThiHoangPham">
  <img alt="github repo thihoangpham" src="https://img.shields.io/github/followers/ThiHoangPham?style=social" target="_blank" />
  </a>
</p>
<hr>

## Description:
 A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site completely from scratch and deploy on Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story:
```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Acceptance Criteria
```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```
## Table of Contents:
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video](#walkthrough-video)
- [Installation](#installation)
- [Usage](#usage)
- [Contributor](#contributor)
- [Contribution](#contribution)
- [Contact Information](#contact-information)

## Live Demo Heroku: 
<a href="https://note-taker-express-js-adam.herokuapp.com/">
  <img alt="live demo heroku" src="https://img.shields.io/badge/Demo-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" target="_blank" />
  </a>

## Installation:
`npm install`

## Usage:
Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

`source db/schema.sql`

`quit`

`npm run seed`

`npm start`

## Contributor:
<a href="https://github.com/ThiHoangPham">
  <img alt="Twitter: AdamThaiHoang1" src="https://contrib.rocks/image?repo=ThiHoangPham/e-commerce-back-end" target="_blank" />
  </a>

## Contribution:
Please email to me if you have any contribution, I am more than happy with that. Thank you!

## Contact Information:

Github: [Thai Hoang(Adam), Pham](https://github.com/ThiHoangPham)

Email: thaihoangpham2008@gmail.com

<p align ="right"><a href="#">↥ back to top</a></p>

- - -

© 2021 Thai Hoang(Adam), Pham: Tech Blog