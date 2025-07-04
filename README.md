# Web Development Project 3 - *NetWise*

Submitted by: **Atuh Fon**

This web app: **NetWise is a beginner-friendly flashcard web app designed to help students master the OSI (Open Systems Interconnection) model—one of the most important frameworks in computer networking. Users can study and test their understanding of the seven OSI layers, common protocols, and real-world examples. Cards are randomized to improve recall, and users can type in answers with smart matching, track their current and longest streaks, shuffle the deck, mark cards as mastered, and restart once all cards are completed.**

Time spent: **2.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [x] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [x] After the user has mastered all the cards, a div element appears with a message and a Restart button that allows them to go through the flashcards again if they wish.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='NetWise.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with:
- [EzGIF](https://ezgif.com/) for Windows

## Notes

Describe any challenges encountered while building the app.

1. **State Management Complexity**  
   Managing multiple pieces of state (e.g., `flipped`, `guess`, `feedback`, `streak`, `masteredCards`) required precise coordination to ensure consistent behavior across components.

2. **Handling User Input Flexibility**  
   Implementing logic to accept *partially correct* answers—such as ignoring punctuation, capitalization, or allowing partial keyword matches—was challenging and involved creating normalization functions for fair comparisons.

3. **Shuffling Without Resetting Progress**  
   Ensuring that the shuffle function randomized the cards properly without losing track of mastered cards or disrupting the current state required careful cloning and reinitialization logic.

4. **UI Behavior After Mastering All Cards**  
   Preventing errors and preserving a good user experience when all cards were mastered required adding conditional rendering, a blurred UI state, and a "Restart" feature.

5. **Visual Feedback and Button States**  
   Ensuring buttons (e.g., "Next", "Previous", "Mastered") were correctly disabled or visually dimmed at the right time introduced edge cases that needed to be handled in the UI logic.

## License

    Copyright [2025] [Atuh Fon]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
