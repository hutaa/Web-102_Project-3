import React, {useState} from "react";

const Flashcards = ({ card, flipped, setFlipped, guess, setGuess, feedback, handleGuessSubmit }) => {

    const getFeedbackStyle = () => {
        if (feedback === "correct") return { border: "2px solid green" };
        if (feedback === "incorrect") return { border: "2px solid red" };
        return {};
    };

    
    // return (
    //     <div className={`card ${card.category}`}>
    //         <div className={`card-content ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
    //             <div className={`card-front ${card.category}`}>
    //             {card.image && <img src={card.image} alt="card front" />}
    //             <p>{card.question}</p>
    //             </div>
    //             <div className={`card-back ${card.category}`}>
    //             <p>{card.answer}</p>
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <>
            <div className={`card ${flipped ? "flipped" : ""}`}>
                <div className="card-content">
                    <div className={`card-front ${card.category}`} onClick={() => setFlipped(true)}>
                        {card.image && <img src={card.image} alt="card front" />}
                        <p>{card.question}</p>
                    </div>
                    <div className={`card-back ${card.category}`} onClick={() => setFlipped(false)}>
                        <p>{card.answer}</p>
                    </div>
                </div>
            </div>
            <div className="guess-section">
                <label htmlFor="guess-input"><strong>Guess the answer here:</strong></label>
                <input
                    id="guess-input"
                    type="text"
                    placeholder="Your guess..."
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    style={getFeedbackStyle()}
                />
                <button id = "submit-btn"onClick={handleGuessSubmit}>Submit Guess</button>
                {feedback && (
                    <p style={{ marginTop: "10px" }}>
                        {feedback === "correct" ? "✅ Correct!" : "❌ Try again."}
                    </p>
                )}
            </div>
        </>
    );
}

export default Flashcards;
