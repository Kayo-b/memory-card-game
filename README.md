# memory-card-game

Simple memory game using React for its implementation.

#### Features
 - 14 different card-elements rendered by the same component;
 - Score kept by main parent component;
 - Dialog component that renders intro, game over and victory messages when cued.


#### Technical notes

This was my first project using functional components in React, I tried to create the game only using the knowledge I got from my previous React project and the recently leared `useEffect` Hooks (which I only really used for the Dialog component). To explain it shortly, in the parent component, each card has a `data` stated value that gets set by a `childToParent` function that is passed as a props to the child card component and gets returned as a `onClick` function to the parent component. If clicked, this returning function contains the `data` state parameter from the child with the information of being `Selected`, that state is then passed to the respective `data` state from the parent compoenent and if the same card is selected/clicked again the randomizer function is triggered and the score is reseted. The dialog text comming from the terminator head was made using setTimeout rerendering the Dialog component one letter at a time.


kayo-b.github.io/memory-card-game/

![preview](./src/demo_rec2.gif.gif)

#### Credits

- ![Midjourney](https://midjourney.com): for generating the art.
- ![Gameshop](www.games-workshop.com): for the Warhammer 40k inspiration.
- All the artists which art was used by the AI's learning algorithm.