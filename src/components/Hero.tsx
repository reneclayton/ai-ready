import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
    onStartAssessment: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartAssessment }) => {
    return (
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary text-sm font-semibold mb-6 border border-blue-100">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            AI Readiness Assessment 2.0
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight text-gray-900">
                            Is Your Business <br />
                            <span className="text-transparent bg-clip-text bg-gradient-primary">
                                Ready for AI?
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-secondary mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Evaluate your organization's AI maturity across 7 key dimensions.
                            Get a personalized roadmap, professional PDF report, and actionable insights in less than 5 minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-12">
                            <button
                                onClick={onStartAssessment}
                                className="btn-primary flex items-center gap-2 group text-lg px-8 py-4"
                            >
                                Generate Your Scorecard
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-8 py-4 rounded-full font-semibold text-secondary hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200">
                                View Sample Report
                            </button>
                        </div>

                        <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-secondary font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Free Assessment</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Instant PDF Download</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>No Credit Card</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Semantic Representation */}
                    <div className="flex-1 w-full max-w-[600px] relative">
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">AI Maturity Score</h3>
                                    <p className="text-sm text-gray-500">Overall Readiness</p>
                                </div>
                                <div className="text-3xl font-bold text-primary">85/100</div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { label: 'Strategy', score: 92, color: 'bg-blue-500' },
                                    { label: 'Data', score: 65, color: 'bg-teal-400' },
                                    { label: 'Infrastructure', score: 88, color: 'bg-indigo-500' },
                                    { label: 'Security', score: 78, color: 'bg-purple-500' },
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm font-medium mb-1">
                                            <span>{item.label}</span>
                                            <span>{item.score}%</span>
                                        </div>
                                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.score}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-xs text-secondary font-medium">Joined by 500+ companies</span>
                            </div>
                        </div>

                        {/* Abstract blobs behind card */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl -z-10 rounded-2xl"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
