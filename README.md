# *Star Wars Memory Game*
## MilestoneProject2 - Interactive FrontEnd Development

## Table Of Contents
1. [Description](#Description)
2. [UX](#UX)
3. [UserStories](#UserStories)
4. [Wireframes](#Wireframes)
5. [Features](#Features)
6. [FutureFeatures](#FutureFeatures)
7. [Fonts](#Fonts)
8. [Pages](#Pages)
9. [Testing](#Testing)
10. [Deployment](#Deployment)
11. [Technologies](#Technologies)
12. [ViewProject](#ViewProject)
13. [Acknowledgements](#Acknowledgements)

## Description

This game has two main purposes. The first is to test a players ability to match all cards under a set amount of attempts in order to assess their ability in using "The Force" 
The second purpose is to allow younger generations to get to know and enjoy Star Wars by using cartoon versions of characters and including them in this memory brain game(but that does not mean it cannot be enjoyed by adults) 

## UX

The site has been designed to encapsulate star wars designs but also includes a fun/interactive lightsaber on the desktop version which lights up on hover. 
Players can easily navigate through multiple levels of the game by clicking a link on the Main page but also once in a game will be navigated through until completion. 
Players also have the ability to restart a game or navigate home from any level from a convenient navigation bar on the top of the screen in both mobile and desktop versions. 

## UserStories

*Easily accssible buttons on the main menu.
*Players have the ability to navigate through multiple levels.
*Players can navigate through all screens with ease. 
*Players should be able to click on a card that makes it rotate 180 degrees.
*The game will recognise when two unmatched cards have been clicked and will not allow any more cards to be clicked until cards have been unflipped.
*The game will recognise when the player selects two unmatched cards and those cards will flip back over. 
*The game will recognise when the player has completed a match and have those cards will not unflip and remain visible. 
*The game will count the amount of attempts made at matching cards, each attempt will equal two clicks. 
*When all pairs have been matched the game will check the amount of attempts and display the players result - win or lose.
*The modal will contain navigation buttons to either proceeed to next levels or retry the game. 
*If the player does not win a level they are not prompted to proceeed but to retry that level only. 
*If the player wins they are not prompted to retry that level but to proceed only. 
*Game should be child friendly but not childish as should be enjoyed by all ages.


## Wireframes

All wireframes for this website were created using Balsamiq Mock up tool.

1. [MainPageWireFrame](libraries/desktopmockup.png)
2. [PadawanWireFrame](libraries/mobilemockup.png)
3. [JediKnightWireFrame](libraries/desktopmockup.png)
4. [JediMasterWireFrame](libraries/mobilemockup.png)


## Features

* Dark buttons with highlighted text on main screen.
* Interactive well designed CSS Lightsaber on desktop version.
* Smooth flip transformations on click.
* Smooth unflip transformations when unmatched cards clicked.
* Interactive gameplay.
* Attempts counter for competitive players. 
* Results modal based on calculated number of attempts vs winning cutoff. 
* Results modal with clips from star wars through Gifs. 

## FutureFeatures

In the future I would like to add the following features;
* A Light/Dark Version of the Website - the background images and card images would turn to a light version and Darth Vadar image replaced with a lightside character)
* The cards would not be static in the html and would be called from a central repositary of images and randomly appear based on the number of cards per level. 
* The gif clips on the results modals would also be vary instead of being static to keep the results becoming boring. 
* Add sound effects - theme music, character quotes when matched and lightsaber sounds on click events.
* Add an "impossible" or chosen one level - this level would contain more cards and reshuffle any unflipped cards that were not previously matched. (for e.g. click one - yoda, click two - yoda = match, click three - Luke, click four - leia = unflip those two cards, keep yoda flipped but shuffle all other facedown cards) 
* Add instructions for players on the games to allow them to see the goal they have to meet in order to win. (complete in under 6 attempts to win etc.)

## Fonts

* GoogleFonts.


## Pages

1. index.html - main menu screen used to select levels and can hover on interactive lightsaber. 
2. padawan.html - Easy level - contains 8 cards and requires a player to complete in 6 attempts or less.
3. jediknight.html - Medium level - contains 12 cards and requires a player to complete in 10 attempts or less.
4. jedimaster.html - Hard level - contains 16 cards and requires a player to complete in 12 attempts or less.

## Testing

Test | Outcome
------------ | -------------
W3C validation for index.html | Failed on <li> being inside div - had updated the divs to be list items and forgot to wrap in a <ul> tag - updated and Passed as a result.  
W3C validation for padawan.html | Failed on "type=button" not required. Removed and Re-tested and Passed as a result. Also provided guidance to add ALT to images in case of failure so I added text backups. 
W3C validation for jediknight.html | Failed on "type=button" not required. Removed and Re-tested and Passed as a result. Also provided guidance to add ALT to images in case of failure so I added text backups.
W3C validation for jedimaster.html | Failed on "type=button" not required. Removed and Re-tested and Passed as a result. Also provided guidance to add ALT to images in case of failure so I added text backups.
W3C validation for CSS | Passed
Chrome developer tools (debugging and responsiveness testing) | Passed
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
 Main screen lightsaber animation (Mobile) | Failed
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

* to do. 

## Technologies
* HTML
* CSS
* Javascript
* JQuery
* Bootstrap
* Google Fonts
* FontAwesome
* Git
* GitHub
* Balsamiq


## ViewProject

* to do

## Acknowledgements

* I got the idea to create an interactive frontend memory game from [Code Institute](https://www.codeinstitute.net)
