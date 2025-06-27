import { useState } from 'react';
import './App.css';
import Flashcard from "./components/Flashcards";
import flashcards from "./data/data.js";
const App = () => {
  const [cards, setCards] = useState(flashcards);
  const [flipped, setFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numCards] = useState(flashcards.length)
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const currentCard = cards[currentIndex]

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
    }
  };
  
  const shuffleCards = () => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setCards(shuffled);
    setCurrentIndex(0);
    setFlipped(false);
    setFeedback(null);
    setGuess("");
  };


  const handleGuessSubmit = () => {
    const normalize = (str) =>
      str.toLowerCase().replace(/[^a-z0-9\s]/gi, '').trim(); // remove punctuation, lowercase, trim

    const guessWords = normalize(guess).split(/\s+/); // split into words
    const answerText = normalize(currentCard.answer);

    // Check if at least one significant word from guess is in the answer
    const isCorrect =
      guessWords.length > 0 &&
      guessWords.some((word) => answerText.includes(word));

    setFeedback(isCorrect ? "correct" : "incorrect");

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setStreak(0);
    }
  };

  const markAsMastered = () => {
    const newCards = cards.filter((_, index) => index !== currentIndex);
    const mastered = [...masteredCards, cards[currentIndex]];

    let newIndex = currentIndex;
    if (currentIndex >= newCards.length) {
      newIndex = newCards.length - 1; // move back if last card was removed
    }

    setMasteredCards(mastered);
    setCards(newCards);
    setCurrentIndex(newIndex);
    setFlipped(false);
    setFeedback(null);
    setGuess("");
  };

  const restart = () => {
    setCards(flashcards);             // Reset to original cards
    setCurrentIndex(0);
    setFlipped(false);
    setGuess("");
    setFeedback(null);
    setStreak(0);
    setLongestStreak(0);
    setMasteredCards([]);
  };


  const isFirst = currentIndex === 0;
  const isLast = currentIndex === flashcards.length - 1;


  return (
    <>
      <div className="App">
        <h1>NetWise</h1>
        <h3 style={{fontStyle: 'italic'}}>Build stronger networking fundamentals by testing your knowledge on the OSI Model.</h3>
        <p>Number of cards: {numCards}</p>
        <p><strong>Current Streak:</strong> {streak}, <strong>Longest Streak:</strong> {longestStreak}</p>
      </div>

      {cards.length === 0 && (
        <div className="overlay">
          🎉 You've mastered all the cards!
          <br />
          <button onClick={restart} style={{ marginTop: '10px' }}>Restart</button>
        </div>
      )}

      {cards.length > 0 && (
        <Flashcard 
          card={cards[currentIndex]} 
          flipped={flipped} 
          setFlipped={setFlipped} 
          guess={guess}
          setGuess={setGuess}
          feedback={feedback}
          handleGuessSubmit={handleGuessSubmit}
          className={cards.length === 0 ? "blurred" : ""}
        />
      )}

      <div className="card-btns">
        <button onClick={prevCard} disabled={cards.length === 0 || isFirst} style={{ opacity: cards.length === 0 || isFirst ? 0.5 : 1 }}>
          Previous
        </button>
        <button onClick={nextCard} disabled={cards.length === 0 || isLast} style={{ opacity: cards.length === 0 || isLast ? 0.5 : 1 }}>
          Next
        </button>
        <button onClick={shuffleCards} disabled={cards.length === 0} style={{ opacity: cards.length === 0 ? 0.5 : 1 }}>
          Shuffle Cards
        </button>
        <button type="button" onClick={markAsMastered} disabled={cards.length === 0} style={{ opacity: cards.length === 0 ? 0.5 : 1 }}>
          Mastered Cards
        </button>
      </div>
    </>
  )
}

export default App