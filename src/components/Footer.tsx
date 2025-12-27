import React from 'react';
import { Twitter, Linkedin, Facebook, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                B
                            </div>
                            <span className="text-lg font-bold text-primary">BYTE STRATEGY</span>
                        </div>
                        <p className="text-secondary max-w-sm">
                            Empowering organizations to navigate the AI revolution.
                            We provide the frameworks, assessments, and strategies you need to thrive in the modern era.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Scorecard</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Reports</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © 2024 Byte Strategy Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-gray-400">
                        <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
