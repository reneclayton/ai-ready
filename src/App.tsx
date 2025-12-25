import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, Shield, Lock, Activity, Clock, AlertTriangle, Dog } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    // Simulate scan
    setTimeout(() => setIsScanning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-background flex flex-col relative overflow-hidden">
      {/* Background Particles/Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center p-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center gap-8 mb-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/30 transition-all" />
              <Radar className="w-16 h-16 text-primary relative z-10 animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full w-full h-full animate-[spin_4s_linear_infinite]" />
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full" />
              <Dog className="w-16 h-16 text-secondary relative z-10" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
            Is the <span className="text-secondary drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Shadowstalker</span><br />
            Hunting Your Data?
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            Discover your organization's AI security vulnerabilities
            <br />
            <span className="text-primary font-mono bg-primary/10 px-2 py-1 rounded ml-2">in under 2 minutes.</span>
          </p>

          <div className="flex gap-4 justify-center text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1 border border-gray-800 px-3 py-1 rounded-full bg-black/50">
              <Shield className="w-3 h-3" /> OWASP LLM Top 10
            </span>
            <span className="flex items-center gap-1 border border-gray-800 px-3 py-1 rounded-full bg-black/50">
              <Shield className="w-3 h-3" /> NIST AI RMF
            </span>
          </div>
        </motion.div>

        {/* Audit Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="bg-surface border border-gray-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            {/* Top Border Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex items-center justify-center gap-2 mb-8 text-gray-300 tracking-widest text-sm font-semibold uppercase">
              <Shield className="w-4 h-4 text-primary" /> Initialize Audit
            </div>

            <form onSubmit={handleAudit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">Work Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">Company Name</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Corporation"
                  className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-teal-400 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                {isScanning ? (
                  <>
                    <Radar className="w-5 h-5 animate-spin" /> Scanning...
                  </>
                ) : (
                  <>
                    <Activity className="w-5 h-5 group-hover:scale-110 transition-transform" /> START AUDIT
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[10px] text-gray-600 flex items-center justify-center gap-1.5 font-mono">
                <Lock className="w-3 h-3 text-secondary" /> Your data is encrypted. Assessment takes ~90 seconds.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-12 w-full max-w-2xl"
        >
          <div className="bg-surface/50 border border-gray-800/50 p-4 rounded-xl text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary tabular-nums">1,850+</div>
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Audits Run</div>
          </div>
          <div className="bg-surface/50 border border-gray-800/50 p-4 rounded-xl text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-secondary tabular-nums">71%</div>
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">At Risk</div>
          </div>
          <div className="bg-surface/50 border border-gray-800/50 p-4 rounded-xl text-center backdrop-blur-sm">
            <div className="text-2xl font-bold text-secondary tabular-nums">57s</div>
            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Avg Time</div>
          </div>
        </motion.div>
      </main>

      <footer className="py-6 text-center text-gray-600 text-[10px] uppercase font-mono tracking-widest">
        <div className="mb-2">
          Byte<span className="text-primary">Risk</span>Check
        </div>
        <div className="flex justify-center gap-4 opacity-50">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms and Conditions</a>
        </div>
        <div className="mt-2 opacity-30">
          Copyright © 2025 Byte Strategy AI - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
