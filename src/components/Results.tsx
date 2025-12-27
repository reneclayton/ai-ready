import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, CheckCircle, ArrowRight } from 'lucide-react';

interface ResultsProps {
    scores: Record<string, number>;
    totalScore: number;
    onReset: () => void;
}

const Results: React.FC<ResultsProps> = ({ scores, totalScore, onReset }) => {
    const getGrade = (score: number) => {
        if (score >= 90) return { label: 'AI Pioneer', color: 'text-purple-600', bg: 'bg-purple-100' };
        if (score >= 75) return { label: 'Strategist', color: 'text-blue-600', bg: 'bg-blue-100' };
        if (score >= 50) return { label: 'Explorer', color: 'text-teal-600', bg: 'bg-teal-100' };
        return { label: 'Observer', color: 'text-orange-600', bg: 'bg-orange-100' };
    };

    const grade = getGrade(totalScore);

    return (
        <div className="container mx-auto px-4 max-w-5xl py-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
                <div className="bg-gradient-primary p-1 text-center"></div>

                <div className="p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Your AI Readiness Profile</h2>
                        <p className="text-secondary max-w-2xl mx-auto">
                            Based on your inputs, we've analyzed your organization's maturity across 7 key dimensions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        {/* Score Circle */}
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="relative w-64 h-64 flex items-center justify-center">
                                {/* Simple SVG Gauge Background */}
                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                                    <circle
                                        cx="50" cy="50" r="45" fill="none" stroke="url(#gradient)" strokeWidth="8"
                                        strokeDasharray={`${totalScore * 2.83} 283`}
                                        strokeLinecap="round"
                                        transform="rotate(-90 50 50)"
                                        className="transition-all duration-1000 ease-out"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#0846AA" />
                                            <stop offset="100%" stopColor="#11BED4" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-6xl font-bold text-gray-900">{Math.round(totalScore)}</span>
                                    <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold mt-2">Total Score</span>
                                </div>
                            </div>

                            <div className={`mt-6 px-6 py-2 rounded-full ${grade.bg} ${grade.color} font-bold text-lg inline-flex items-center gap-2`}>
                                {grade.label} Level
                            </div>
                        </div>

                        {/* Breakdown */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold">Dimension Breakdown</h3>
                            {Object.entries(scores).map(([category, score], idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-sm font-medium mb-2">
                                        <span className="text-gray-700">{category}</span>
                                        <span className="text-gray-900">{Math.round(score)}%</span>
                                    </div>
                                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${score}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Plan Preview */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-blue-50">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle className="text-accent" />
                            Recommended First Steps
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Immediate Focus', text: 'Formalize your AI governance committee to oversee pilot projects.' },
                                { title: 'Strategic Shift', text: 'Reallocate 10% of IT budget specifically for AI infrastructure modernization.' },
                                { title: 'Talent Gap', text: 'Initiate a "Train the Trainer" program for key department heads.' }
                            ].map((step, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-xs font-bold text-primary uppercase tracking-wide mb-2">{step.title}</div>
                                    <p className="text-sm text-secondary leading-relaxed">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="btn-primary flex items-center justify-center gap-2">
                            <Download className="w-5 h-5" />
                            Download Full PDF Report
                        </button>
                        <button className="px-6 py-3 rounded-full font-semibold text-secondary hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                            <Share2 className="w-5 h-5" />
                            Share Results
                        </button>
                        <button
                            onClick={onReset}
                            className="px-6 py-3 rounded-full font-semibold text-secondary hover:text-primary transition-all ml-auto sm:ml-0"
                        >
                            Retake Assessment
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Results;
