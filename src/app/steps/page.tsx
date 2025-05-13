"use client";
import "./index.css";

const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑"
]

export default function Steps() {

    const step: number = 1

    return (
        <>
            <div className="steps">
                <div className="numbers">
                    <div className={`${step >= 1 ? "active" : ""}`}>1</div>
                    <div className={`${step >= 2 ? "active" : ""}`}>2</div>
                    <div className={`${step >= 3 ? "active" : ""}`}>3</div>
                </div>
                <p className="message">Step {step}: {messages[step - 1]}</p>

                <div className="buttons">
                    <button style={{ background: "#7950f2", color: "#fff" }}>previous</button>
                    <button style={{ background: "#7950f2", color: "#fff" }}>next</button>
                </div>
            </div>
        </>
    )
}