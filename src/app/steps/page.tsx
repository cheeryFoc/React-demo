"use client";
import { ReactNode, useState } from "react";
import "./index.css";

const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑"
]

export default function Comflete() {
    return (
        <div>
            <Steps />
            <StepMessage step={1}>
                <p>Pass in content</p>
                <p>✌️</p>
            </StepMessage>
            <StepMessage step={2}>
                <p>Read children prop</p>
                <p>😎</p>
            </StepMessage>
            {/* <Steps /> */}
        </div>
    );
}

function Steps() {

    const [step, setStep] = useState(1)
    const [isOpen, setIsOpen] = useState(true)
    const handlePrevious = () => {
        if (step > 1) setStep(step - 1)
    }
    const handleNext = () => {
        if (step < 3) setStep(step + 1)
    }

    return (
        <>
            <div>
                <button className="close" onClick={() => setIsOpen((is) => !is)}>
                    &times;
                </button>
                {isOpen && (
                    <div className="steps">
                        <div className="numbers">
                            <div className={step >= 1 ? "active" : ""}>1</div>
                            <div className={step >= 2 ? "active" : ""}>2</div>
                            <div className={step >= 3 ? "active" : ""}>3</div>
                        </div>

                        <StepMessage step={step}>
                            {messages[step - 1]}
                            <div className="buttons">
                                <Button
                                    bgColor="#e7e7e7"
                                    textColor="#333"
                                    onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                                >
                                    Learn how
                                </Button>
                            </div>
                        </StepMessage>

                        <div className="buttons">
                            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
                                <span>👈</span> Previous
                            </Button>

                            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                                Next <span>👉</span>
                                <span>🤓</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

interface StepMessageProps {
    step: number;
    children: ReactNode;
}

function StepMessage({ step, children }: StepMessageProps) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}

interface ButtonProps {
    textColor: string;
    bgColor: string;
    onClick: () => void;
    children: ReactNode;
}

function Button({ textColor, bgColor, onClick, children }: ButtonProps) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}