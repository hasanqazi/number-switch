# number-switch

1. Introduction
This technical document outlines the mechanics of a voice recognition game developed using p5.js and ml5.js libraries. The game's objective is to recognize spoken numbers accurately in the context of the game environment. The game will display random numbers on the screen, and the player's task is to speak the number out loud. The game will then utilize voice recognition capabilities to determine if the player's spoken number matches the one displayed on the screen.

2. Game Environment
The game environment is created using the p5.js library, which provides a simple and interactive canvas for web-based games and creative coding. The game canvas will display a randomly generated number in a visually appealing format. The player interacts with the game by speaking the number they see on the screen.

3. Voice Recognition
The voice recognition functionality is implemented using the ml5.js library, which provides pre-trained machine learning models for various tasks, including speech recognition. Specifically, the SpeechRecognition feature of ml5.js is employed to recognize the player's spoken numbers.

4. User Interface
The game's user interface (UI) should be intuitive and visually appealing. It should include the following elements:

Canvas: The main area where the numbers are displayed, and the player interacts with the game.

Instructions: Clear and concise instructions to guide the player on how to play the game, including how to interact with the voice recognition system.

Feedback: Real-time feedback to inform the player whether their spoken number matches the displayed number.

Score: Display the player's score to track their
