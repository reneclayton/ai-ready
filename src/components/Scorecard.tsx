import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import DimensionCard from './DimensionCard';
import Results from './Results';

// Data Configuration
const DIMENSIONS = [
    {
        id: 1,
        title: "Business Strategy",
        desc: "Alignment of AI initiatives with core business goals.",
        questions: [
            "Has your leadership defined clear business objectives for using AI?",
            "Do you have a dedicated budget for AI pilot projects?"
        ]
    },
    {
        id: 2,
        title: "Data Maturity",
        desc: "Quality, accessibility, and governance of your data.",
        questions: [
            "Is your data centralized and easily accessible via APIs?",
            "Do you have data governance policies in place?"
        ]
    },
    {
        id: 3,
        title: "Technology Infrastructure",
        desc: "Hardware and software readiness to support AI workloads.",
        questions: [
            "Do you use cloud platforms (AWS, Azure, GCP) capable of AI scaling?",
            "Is your current tech stack modular and integration-ready?"
        ]
    },
    {
        id: 4,
        title: "Talent & Skills",
        desc: "Internal capability to build and manage AI solutions.",
        questions: [
            "Do you have in-house data scientists or AI engineers?",
            "Are you running training programs for non-technical staff?"
        ]
    },
    {
        id: 5,
        title: "Security & Ethics",
        desc: "Frameworks for responsible and secure AI deployment.",
        questions: [
            "Have you conducted an AI risk assessment?",
            "Are there protocols for checking AI bias and fairness?"
        ]
    },
    {
        id: 6,
        title: "Adoption & Culture",
        desc: "Organizational willingness to embrace new technologies.",
        questions: [
            "Is there a culture of experimentation and learning?",
            "Are employees incentivized to use new tools?"
        ]
    },
    {
        id: 7,
        title: "Execution Velocity",
        desc: "Ability to rapidly prototype and deploy solutions.",
        questions: [
            "How long does it take to move from idea to prototype?",
            "Do you have an agile methodology for AI projects?"
        ]
    },
];

const Scorecard: React.FC = () => {
    const [activeDimension, setActiveDimension] = useState(0);
    const [answers, setAnswers] = useState<Record<number, Record<number, number>>>({}); // DimIndex -> QIndex -> Score
    const [isFinished, setIsFinished] = useState(false);

    // Helper to handle answer selection
    const handleAnswer = (score: number) => {
        setAnswers(prev => ({
            ...prev,
            [activeDimension]: {
                ...(prev[activeDimension] || {}),
                [currentQuestionIdx]: score
            }
        }));

        // Auto advance after short delay
        if (currentQuestionIdx < DIMENSIONS[activeDimension].questions.length - 1) {
            // Next question in same dimension
            // Simple mock flow for this demo: we just store it. 
            // In a real app we'd track question index more granularly.
        }
    };

    const getDimensionScore = (dimIndex: number) => {
        const dimAnswers = answers[dimIndex];
        if (!dimAnswers) return 0;
        const values = Object.values(dimAnswers);
        if (values.length === 0) return 0;
        return (values.reduce((a, b) => a + b, 0) / values.length) * 20; // Scale 1-5 to 100 roughly
    };

    const calculateFinalResults = () => {
        const scores: Record<string, number> = {};
        let total = 0;
        DIMENSIONS.forEach((d, i) => {
            const s = Math.random() * 30 + 60; // Mock calculation for demo purposes if answers empty
            scores[d.title] = s;
            total += s;
        });
        return { scores, total: total / DIMENSIONS.length };
    };

    if (isFinished) {
        const { scores, total } = calculateFinalResults();
        return <Results scores={scores} totalScore={total} onReset={() => setIsFinished(false)} />;
    }

    return (
        <div className="pt-24 pb-20 container mx-auto px-4 max-w-6xl min-h-screen">
            <button onClick={() => window.location.reload()} className="flex items-center gap-2 text-secondary hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
            </button>

            <div className="grid lg:grid-cols-12 gap-12">
                {/* Left: Navigation/Progress */}
                <div className="lg:col-span-4 space-y-4">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary w-fit">Progress</h2>
                        <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                            <div
                                className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                                style={{ width: `${((activeDimension) / DIMENSIONS.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    {DIMENSIONS.map((dim, idx) => (
                        <DimensionCard
                            key={dim.id}
                            index={idx}
                            title={dim.title}
                            description={dim.desc}
                            isSelected={activeDimension === idx}
                            isCompleted={activeDimension > idx}
                            onClick={() => setActiveDimension(idx)}
                        />
                    ))}
                </div>

                {/* Right: Active Question Area */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDimension}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 h-full flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-bold">
                                    Dimension {activeDimension + 1}/{DIMENSIONS.length}
                                </span>
                                <h2 className="text-2xl font-bold text-gray-900">{DIMENSIONS[activeDimension].title}</h2>
                            </div>

                            <div className="flex-grow space-y-12">
                                {DIMENSIONS[activeDimension].questions.map((q, qIdx) => (
                                    <div key={qIdx} className="space-y-4">
                                        <h3 className="text-xl font-medium text-gray-800">{q}</h3>
                                        <div className="grid grid-cols-5 gap-2 md:gap-4">
                                            {[1, 2, 3, 4, 5].map((val) => (
                                                <button
                                                    key={val}
                                                    className="group flex flex-col items-center gap-2"
                                                // Handle click to just simulate progress for now
                                                >
                                                    <div className="w-full aspect-square rounded-xl border-2 border-gray-100 hover:border-primary hover:bg-blue-50 flex items-center justify-center text-lg font-bold text-secondary hover:text-primary transition-all">
                                                        {val}
                                                    </div>
                                                    <span className="text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                                                        {val === 1 ? 'Poor' : val === 5 ? 'Excellent' : ''}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 flex justify-end">
                                {activeDimension < DIMENSIONS.length - 1 ? (
                                    <button
                                        onClick={() => setActiveDimension(prev => prev + 1)}
                                        className="btn-primary flex items-center gap-2"
                                    >
                                        Next Dimension <ArrowRight className="w-5 h-5" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => setIsFinished(true)}
                                        className="btn-primary flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600"
                                    >
                                        Complete Assessment <Check className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Scorecard;
