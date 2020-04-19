# *Star Wars Memory Game*
## MilestoneProject2 - Interactive Front End Development

## Table Of Contents
1. [Description](#Description)
2. [UX](#UX)
3. [UserStories](#UserStories)
4. [Wireframes](#Wireframes)
5. [Features](#Features)
6. [FutureFeatures](#FutureFeatures)
7. [Pages](#Pages)
8. [Testing](#Testing)
9. [Deployment](#Deployment)
10. [Technologies](#Technologies)
11. [ViewProject](#ViewProject)
12. [Acknowledgements](#Acknowledgements)

## Description

This Star Wars Memory Game has two main purposes. Firstly, it aims to test a players ability to match all cards within a set number of attempts in order to assess their ability in using "The Force". 
Secondly the game enables younger generations to expand their knowledge of Star Wars characters in an enjoyable way through the use of cartoon versions of each of the characters. 
I felt that the illustrated versions of each character would make the game more appealling to younger and older generation. I believe older generations, whom may have a wider knowledge of Star wars would enjoy the interesting take on the characters.
The game instantly became a hit within my immediate family, all of whom tried to achieve the lowest number of attempts and complete the game.  

## UX

The site has been designed to encapsulate the Star Wars theme and also includes a fun/interactive lightsaber on the desktop version which illuminates on hover. 
Players can easily navigate through their desired levels difficulty on on the main page. However, once in a game will be navigated through the remaining levels until completion. 
Players also have the ability to restart a game or navigate home from any level from a convenient navigation bar on the top of the screen in both mobile and desktop versions. 

## UserStories

* Easily accessible buttons in the main menu to desired difficulty level.
* Players have the ability to navigate through multiple levels.
* Players can navigate through all screens with ease. 
* Players will be able to click on a card that makes it rotate 180 degrees in a smooth 3d like movement.
* The game will detect when two cards have been clicked and will not allow any more cards to be clicked until unmatched cards have been unflipped so the game can resume.
* The game will detect when the player selects two unmatched cards and those cards will flip back over. 
* The game will detect when the player has completed a match and have those cards will not unflip and remain visible. 
* The game will count the amount of attempts made at matching cards, each attempt will equal two clicks. 
* When all pairs have been matched the game will check the amount of attempts and display the players result - win or lose.
* The modal will contain navigation buttons to either proceed to next levels or retry the game. 
* If the player does not win a level they are not prompted to proceed but to retry that level only. 
* If the player wins they are not prompted to retry that level but to proceed only. 
* Game should be child friendly but should also be enjoyed by Star Wars fans of all age groups.


## Wireframes

All wireframes for this website were created using Balsamiq Mock up tool.

1. Main Desktop Screen [here](libraries/wireframes/mainpagedesktop.JPG)
2. Main Mobile Screen [here](libraries/wireframes/mainpagemobile.JPG)
3. Gameplay Desktop Screen [here](libraries/wireframes/gameplaymobile.JPG)
4. Gameplay Mobile Screen [here](libraries/wireframes/gameplaydesktop.JPG)
5. Win Game Desktop Screen [here](libraries/wireframes/gamewinmobile.JPG)
6. Win Game Mobile Screen [here](libraries/wireframes/gamewindesktop.JPG)
7. Lose Game Desktop Screen [here](libraries/wireframes/gamelosemobile.JPG)
8. Lose Game Mobile Screen  [here](libraries/wireframes/gamelosedesktop.JPG)


## Features

* The main page contains dark buttons with highlighted yellow text (star wars themed) on main screen that indicate the three levels of difficulty available to the player.
* The main page has an Interactive well designed CSS Lightsaber on desktop version.
* The game page has 3 divs located at the top of the screen, home, number of attempts and restard.
* The 3 difficulty levels have 8, 12 and 16 cards respectively. 
* The game has smooth 180 degree card flip transformations on click.
* Every two clicks updates the attempts counter box by +1. 
* Smooth unflip transformations when unmatched cards are chosen.
* Interactive gameplay.
* Responsive design on all devices. 
* Navigation buttons in the results modal box take you to next levels or restart any lost games.
* Results modal with logic based on calculated number of attempts vs winning cutoff. 
* Results modal with clips from star wars presented through Gifs. 

## FutureFeatures

In the future I would like to add the following features;
* A Light/Dark Version of the Website - the background image and facedown card images would turn to a light version and Darth Vader image replaced with a "lightside" character (e.g yoda.)
* The cards would not be static in the html and would be called from a central repository of images and randomly appear based on the number of cards per level. 
* The gif clips on the results modals would also vary instead of being static to keep the results becoming predictable. 
* Add sound effects - theme music, character quotes when matched and lightsaber sounds on click events.
* Add an "impossible" or chosen one level - this level would contain more cards and reshuffle any unflipped cards that were not previously matched. (for e.g. click one - yoda, click two - yoda = match, click three - Luke, click four - leia = unflip those two cards, keep yoda flipped but shuffle all other facedown cards) 
* Add instructions for players on the games to allow them to see the goal they have to meet in order to win. (complete in under 6 attempts to win etc.)



## Pages

1. index.html - main menu screen used to select levels and can hover on interactive lightsaber. 
2. padawan.html - Easy level - contains 8 cards and requires a player to complete in 6 attempts or less.
3. jediknight.html - Medium level - contains 12 cards and requires a player to complete in 10 attempts or less.
4. jedimaster.html - Hard level - contains 16 cards and requires a player to complete in 12 attempts or less.

## Testing

Test | Outcome
------------ | -------------
W3C validation for index.html | Failed on list item being inside a div - had updated the divs to be list items to make my HTML more semantic and had forgotten to wrap in the list items in an unordered list tag - updated and Passed as a result.  
W3C validation for padawan.html | Failed on "type=button" not required. Removed and Re-tested and Passed as a result. Also provided guidance to add ALT to images in case of failure so I added text backups. 
W3C validation for jediknight.html | Failed on "type=button" not required. Removed and Re-tested and Passed as a result. Also provided guidance to add ALT to images in case of failure so I added text backups.
W3C validation for jedimaster.html | Failed on "type=button" not required. Removed and Re-tested and Passed as a result. Also provided guidance to add ALT to images in case of failure so I added text backups.
W3C validation for CSS | Passed
Chrome developer tools (debugging and responsiveness testing -including all devices available) | Passed
Samsung A50 | When using game on this type of mobile the bodys image didn't reach the entire end of the phone due to the screensize so I added a black background to the body to stop any whitespace. 
Iphone 7 | Images weren't rendering correctly on this type of mobile after being flipped, after some investigation and debugging, I figured out the solution was to add -webkit-backface-visibility: hidden; to the faceup and facedown card elements. 
Iphone X | Images weren't rendering correctly on this type of mobile after being flipped, after some investigation and debugging, I figured out the solution was to add -webkit-backface-visibility: hidden; to the faceup and facedown card elements.
Friends & Family Testing | The feedback I got from friends and family were to add some sound effects and instructions on how to win to make the game more interactive and fun to play so I have added this as a future feature. 
Responsive Design - Lightsaber | I had planned on allowing the lightsaber be visible on smaller screens but after some extensive testing it appeared better to hide it on smaller screens due to UX becoming cluttered and depending on the device interfered with main screen buttons. 


Browser Test | Outcome
------------ | -------------
 Chrome | Passed
 Edge/IE | Passed
 Firefox | Passed
 Opera | Passed
 Safari | Passed


 On Screen Tests | Outcome
------------ | -------------
 Main screen | Passed
 Main screen level menu buttons | Passed
 HyperLink to other levels | Passed
 Main screen lightsaber animation (desktop only) | Passed
 Main screen lightsaber animation (Mobile) | Failed - not enough space on screens
 Padawan Level Buttons | Passed
 Padawan Level Card Flip/Click Functionality | Passed
 Padawan Level Card Win Modal | Passed
 JediKnight Level Buttons | Passed
 JediKnight Level Card Flip/Click Functionality | Passed
 JediKnight Level Card Win Modal | Passed
 JediMaster Level Buttons | Passed
 JediMaster Level Card Flip/Click Functionality | Passed
 JediMaster Level Card Win Modal | Passed
 Content UI | Passed
 Responsive Display | Passed
 Responsive Design | Passed


## Deployment
[GitHub](https://github.com/) was used to develop the project, store code in repositories and maintain the version control of this project. 
The live demo has been deployed using [GitHubPages](https://pages.github.com/).

The following steps were used to deploy the Star Wars Memory Game to GitHub Page:
1. Log into GitHub
2. Navigate to respositaries section and select **MilestoneProject2StarWarsMemoryGame**.
3. On the top bar search for and click on **Settings** in the top right hand corner.
4. Near the end of the page you will find the **Github Pages** section. 
5. Click on the dropdown located in the source section and select **Master Branch** from the list. 
6. The site has now been deployed on Github Pages.
7. To obtain the live link to your deployed site navigate back through these steps to the **Github Pages** section and your link will be shown there.


## Technologies
The project is built using HTML, CSS and Javascript as its main components.

The following are the other Technologies used throughout the build process:
* [JQuery](https://jquery.com)
    - Used to simplify some elements of Javascript. 
* [Bootstrap](https://www.bootstrapcdn.com/)
* [FontAwesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css)
    - Used for useful icons to provide more intuitive UI.
* [GitHub](https://github.com/)
    - Used to develop, store and share code and site is deployed on [GitHubPages](https://pages.github.com/).
* [Balsamiq](https://balsamiq.com/)
    - Used to create the original wireframes for the project.
* [Photoshop](https://www.adobe.com/ie/products/photoshop.html)
    - Used to crop and resize images used for cards.
* [Dev Tools](https://www.google.com/chrome/)
    - Used continuously when building game for CSS design and debugging any HTML & JS issues.
* [CSS Validator](https://jigsaw.w3.org/css-validator/validator)
    - Used to validate CSS code.
* [HTML Validator](https://validator.w3.org/)
    - Used to validate HTML code.
* [Javascript Validator](https://jshint.com/)
    - Used to validate Javascript code.


## ViewProject

* to do


## Acknowledgements
I got the idea to create a Memory Card Game from [Code Institute](https://www.codeinstitute.net).

## Disclaimer
This project was created for educational purposes only.
All images and content is used solely for the purpose of a milestone project from [Code Institute](https://www.codeinstitute.net) and is not intended to be distributed/sold or used by members of the general public. 
