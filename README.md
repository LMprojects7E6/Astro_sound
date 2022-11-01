# Astro_sound

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/LMprojects7E6/astro-sound/tree/main">
    <img src="https://user-images.githubusercontent.com/113899063/199276136-6ce59d5b-8a74-4ac0-a769-f3f41a4e3b15.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">AstroSound</h3>

  <p align="center">
    AstroSound is an academic project made for Assembler Master in Technology
    <br />
    <a href="https://github.com/LMprojects7E6/astro-sound/tree/main"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://astro-sound.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/LMprojects7E6/astro-sound/issues">Report Bug</a>
    ·
    <a href="https://github.com/LMprojects7E6/astro-sound/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="https://user-images.githubusercontent.com/113899063/199277261-abee0b0d-1e8a-41ad-8837-33229200890c.png" alt='dashboard'>

As the final project for Assembler's Master in Technology our team decided to create AstroSound. In this project we were challeged to create a full backend/frontend app, we could have as an inspiration and having similar functionalities as the app Spotify.
AstroSound is a music app similar to Spotify, where a user can login/register, create playlists, add songs to those playlists and listening to songs, there is also an Admin page to add new songs.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* [![JQuery][JQuery.com]][JQuery-url]
* [![HTML][Html.com]][Html-url]
* [![CSS][CSS]][CSS-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Axios][Axios]][Axios-url]
* [![React Router][ReactRouter.jsx]][React-Router-url]
* [![JavaScript][JavaScript.js]][JavaScript-url]
* [![Bcrypt][Bcrypt.js]][Bcrypt-url]
* [![Cors][Cors.js]][Cors-url]
* [![Dotenv][Dotenv.env]][Dotenv-url]
* [![Express][Express.js]][Express-url]
* [![Helmet][Helmet.js]][Helmet-url]
* [![Mongoose][Mongoose.js]][Mongoose-url]
* [![Validator][Validator.js]][Validator-url]
* [![Nodemon][Nodemon]][Nodemon-url]
* [![Web Vitals][WebVitals.js]][Webvitals-url]
* [![Flowbite][Flowbite.css]][Flowbite-url]
* [![Firebase][Firebase.com]][Firebase-url]
* [![Cloudinary][Cloudinary.com]][Cloudinary-url]
* [![Jsonwebtoken][Jsonwebtoken.js]][Jsonwebtoken-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Update your npm to the latest version

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_To install all dependencies run the following commands._

* cd
  ```sh
  cd astro-sound/client
  ```

* npm
  ```sh
  npm install
  ```

* cd
  ```sh
  cd astro-sound/server
  ```

* npm
  ```sh
  npm install
  ```

### RUN
To run this application you will need a firebase account and have all its configurations done with your data.

* Client Script
  ```sh
  npm run start
  ```

* Server Script
  ```sh
  npm run server
  ```

  Your browser should automatically open the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Astrosound provides a login/register page which our user can interact with.

### LOGIN
<img src="https://user-images.githubusercontent.com/113899063/199282173-55eac2a5-9f47-4b69-9b3a-2ece414b8a25.png" alt='login'>


### REGISTER
<img src="https://user-images.githubusercontent.com/113899063/199282173-55eac2a5-9f47-4b69-9b3a-2ece414b8a25.png" alt='register'>

Using either option if all data is verified and correct the user will go to the app's main page.


In the user's main page we have a side menu, the main dashboard and the user profile.

### HOME
<img src="https://user-images.githubusercontent.com/113899063/199283238-3de8bbff-30c7-4e6a-8bac-2e47a50d1d61.png" alt='home'>

The side menu has all options the user can click to access the diferent sections of the app.
Home is the default page were our user can view our beautifull slogans, if the user already has any playlists or as liked any songs they can be seen here.

Search will take our user to explore our library of amazing songs.
### SEARCH
<img src="https://user-images.githubusercontent.com/113899063/199283965-434c6840-b474-43e4-929b-dade66ab1d9c.png" alt='search'>

Any searched songs can be added to any playlists the user may have created or they can be liked to add that song to Liked Songs playlist.
### ADD SONG TO PLAYLIST
<img src="https://user-images.githubusercontent.com/113899063/199274388-ed08e38b-fac3-4485-9b34-07c18ce27154.JPG" alt='addSong'>

### CREATE PLAYLIST
<img src="https://user-images.githubusercontent.com/113899063/199274391-f801c81e-6de1-40ff-8928-10d29f812faf.JPG" alt='createPlaylist'>

With songs added to our personal playlist we can view them and listen to their songs.
### VIEW PLAYLIST
<img src="https://user-images.githubusercontent.com/113899063/199274390-bbb78bbc-b14e-4fb9-96c1-a7ce9d2fa72d.JPG" alt='viewPlaylist'>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

We worked in sprints applying Kanban framework with a daily meeting.
1 sprint = 1 week
- [x] Sprint 0.
- Created a visual design and HTML-based style guide.
- [x] Sprint 1.
- Set up servers and database structure.
- Created of endpoints.
- Configured Tailwind for basic styling elements in the Home and My Library page.
- Implemented Login and Register page.
- Created JWT and access to Home/Dashboard.
- [x] Sprint 2.
- Implemented User playlist - style and functionality. User can create, edit and delete playlist, add and delete songs to playlist.  
- Allowed users to search the songs.
- Created Admin Dashboard: Admin access with admin account and access the menu to upload new songs.
- Allowed users to edit the profile.
- [x] Sprint 3.
- Implement music player.
- Created Forget password style and functionality.
- Added statistic page.
- Deployed the app

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACTS -->
## Contacts

- Ivan Escribano - Tech Lead / Full-stack developer [GitHub](https://github.com/ivan-escribano)
- Matias Patrignani - Front-end developer [GitHub](https://github.com/MatiasPatrignani)
- Reduan Senoun - Front-end developer [GitHub](https://github.com/reduansj)
- Volha Afanasenka - Back-end developer [GitHub](https://github.com/averoli)
- Miguel Dominguez - Back-end developer [GitHub](https://github.com/Dejahar)



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/LMprojects7E6/astro-sound.svg?style=for-the-badge
[contributors-url]: https://github.com/LMprojects7E6/astro-sound/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LMprojects7E6/astro-sound.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew

[CSS]: https://img.shields.io/badge/CSS-000000?style=for-the-badge&logo=CSS&logoColor=white
[CSS-url]: https://developer.mozilla.org/docs/Web/CSS
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Html.com]: https://img.shields.io/badge/Html-35495E?style=for-the-badge&logo=Html5&logoColor=4FC08D
[Html-url]: https://www.manualweb.net/html5/introduccion-html5/
[Tailwind]: https://img.shields.io/badge/Tailwind-20232A?style=for-the-badge&logo=tailwindcss&logoColor=blue
[Tailwind-url]: https://tailwindcss.com/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Axios]: https://img.shields.io/badge/Axios-0769AD?style=for-the-badge&logo=axios&logoColor=purple
[Axios-url]:https://axios-http.com/es/docs/intro
[ReactRouter.jsx]:https://img.shields.io/badge/ReactRouter-0769AD?style=for-the-badge&logo=reactrouter&logoColor=red
[React-Router-url]:https://reactrouter.com/en/main
[JavaScript.js]:https://img.shields.io/badge/JavaScript-0769AD?style=for-the-badge&logo=javascript&logoColor=Yellow
[JavaScript-url]:https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[Bcrypt.js]:https://img.shields.io/badge/Bcrypt-0769AD?style=for-the-badge&logo=bcrypt&logoColor=red
[Bcrypt-url]:https://www.npmjs.com/package/bcrypt
[Cors.js]:https://img.shields.io/badge/Cors-0769AD?style=for-the-badge&logo=cors&logoColor=red
[Cors-url]:https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
[Dotenv.env]:https://img.shields.io/badge/Dotenv-0769AD?style=for-the-badge&logo=dotenv&logoColor=Yellow
[Dotenv-url]:https://www.npmjs.com/package/dotenv
[Express.js]:https://img.shields.io/badge/Express-0769AD?style=for-the-badge&logo=express&logoColor=black
[Express-url]:https://expressjs.com/es/
[Helmet.js]:https://img.shields.io/badge/Helmet-0769AD?style=for-the-badge&logo=helmet&logoColor=black
[Helmet-url]:https://helmetjs.github.io/
[Mongoose.js]: https://img.shields.io/badge/Mongoose-35495E?style=for-the-badge&logo=mongoose&logoColor=4FC08D
[Mongoose-url]:https://mongoosejs.com/
[Validator.js]:https://img.shields.io/badge/Validator-20232A?style=for-the-badge&logo=validator&logoColor=61DAFB
[Validator-url]:https://www.npmjs.com/package/validator
[Nodemon]:https://img.shields.io/badge/Nodemon-20232A?style=for-the-badge&logo=nodemon&logoColor=green
[Nodemon-url]:https://www.npmjs.com/package/nodemon
[WebVitals.js]:https://img.shields.io/badge/WebVitals-20232A?style=for-the-badge&logo=webvitals&logoColor=Blue
[Webvitals-url]:https://web.dev/vitals/
[Flowbite.css]:https://img.shields.io/badge/Flowbite-0769AD?style=for-the-badge&logo=flowbite&logoColor=Blue
[Flowbite-url]:https://flowbite.com/
[Firebase.com]:https://img.shields.io/badge/Firebase-0769AD?style=for-the-badge&logo=Firebase&logoColor=red
[Firebase-url]:https://firebase.google.com/
[Cloudinary.com]:https://img.shields.io/badge/Cloudinary-0769AD?style=for-the-badge&logo=cloudinary&logoColor=Blue
[Cloudinary-url]:https://cloudinary.com/home-102622
[Jsonwebtoken.js]: https://img.shields.io/badge/Jsonwebtoken-20232A?style=for-the-badge&logo=Jsonwebtoken&logoColor=61DAFB
[Jsonwebtoken-url]:https://www.npmjs.com/package/jsonwebtoken
