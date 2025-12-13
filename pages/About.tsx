import React from 'react';
import TopNav from '../components/TopNav';

const About: React.FC = () => {
  return (
    <div className="bg-background-light font-display min-h-screen flex flex-col">
       <TopNav />

      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">info</span>
              Project Overview
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-main">
              About the Project
            </h1>
            <p className="text-lg text-text-muted max-w-xl">
              Visualizing Heart Health Data for Better Insights. A comprehensive dashboard designed to empower medical professionals.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-border-light hover:border-primary transition-colors text-sm font-bold group text-text-muted hover:text-primary">
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">code</span>
              <span>View Repository</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white transition-colors text-sm font-bold shadow-[0_0_20px_rgba(0,86,210,0.3)]">
              <span className="material-symbols-outlined">description</span>
              <span>Documentation</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <section className="bg-white rounded-xl p-8 border border-border-light relative overflow-hidden group shadow-sm">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-primary">monitor_heart</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-text-main">
                <span className="size-8 rounded-full bg-blue-500/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">target</span>
                </span>
                Project Purpose
              </h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                This dashboard is meticulously designed to analyze critical risk factors contributing to heart disease. By visualizing complex medical data through intuitive interfaces, we aim to provide healthcare professionals and researchers with actionable insights into patient health trends.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Our goal enables earlier detection, better resource allocation, and ultimately, improved patient outcomes through data-driven decision making.
              </p>
            </section>

            <section className="bg-white rounded-xl p-8 border border-border-light shadow-sm">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-text-main">
                <span className="size-8 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-lg">code_blocks</span>
                </span>
                Technologies Utilized
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-4xl mb-3 text-cyan-600 group-hover:scale-110 transition-transform">apps</span>
                  <span className="font-bold text-sm text-text-main">React</span>
                  <span className="text-xs text-text-muted mt-1">Core Framework</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-4xl mb-3 text-sky-600 group-hover:scale-110 transition-transform">css</span>
                  <span className="font-bold text-sm text-text-main">Tailwind CSS</span>
                  <span className="text-xs text-text-muted mt-1">Styling Engine</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-4xl mb-3 text-orange-500 group-hover:scale-110 transition-transform">bar_chart_4_bars</span>
                  <span className="font-bold text-sm text-text-main">Recharts</span>
                  <span className="text-xs text-text-muted mt-1">Data Viz</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-4xl mb-3 text-yellow-500 group-hover:scale-110 transition-transform">javascript</span>
                  <span className="font-bold text-sm text-text-main">ES6+</span>
                  <span className="text-xs text-text-muted mt-1">Logic Layer</span>
                </div>
                <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-50 border border-gray-100 hover:border-primary/50 transition-all cursor-default group">
                  <span className="material-symbols-outlined text-4xl mb-3 text-pink-500 group-hover:scale-110 transition-transform">deployed_code</span>
                  <span className="font-bold text-sm text-text-main">Vite</span>
                  <span className="text-xs text-text-muted mt-1">Build Tool</span>
                </div>
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 flex flex-col h-full">
            <section className="flex-1 bg-primary rounded-xl overflow-hidden border border-blue-700 flex flex-col shadow-lg">
              <div className="h-64 bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCD95AqAiC_-yCUW7ZrOBaAyOKZQtuSpIKAbucplMil9naPVO8TnrfDAFUgh3D5siK9X7my9qptG5EBy7I--e9NJ9RXDmqd52hRsrO5CgXBSBKlOuIbC8J7vvzBFYfWoGIZ4yvh43smKxz_uCCEAqbvdpCsM1uh2BMtHJqARqwr8IP_82NF56gSqbGxawI7d7hFVTXM-9Lmjl4f7RdkcOBLepS9zsaVy5dDl5YoQXE09TCPiaR_stRt7bs_g7YysZmharzgw3K8XJL')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366] to-transparent"></div>
                <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">UCI Repository</span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">The Dataset</h3>
                    <p className="text-blue-200 text-sm font-medium">Cleveland Heart Disease Database</p>
                  </div>
                  <div className="size-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">database</span>
                  </div>
                </div>
                <p className="text-blue-50 leading-relaxed mb-8 flex-1">
                  This comprehensive dataset includes medical attributes from 303 patients, covering key indicators such as age, sex, chest pain type, resting blood pressure, and cholesterol levels. It serves as a benchmark for predictive analysis in cardiology.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">303</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Patients</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">13</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Attributes</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">1988</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Year</div>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">76%</div>
                    <div className="text-xs text-blue-200 uppercase tracking-wide">Accuracy</div>
                  </div>
                </div>
                <button className="w-full py-4 rounded-full bg-white hover:bg-gray-50 text-primary font-bold flex items-center justify-center gap-2 transition-all shadow-md">
                  <span>Explore Source Data</span>
                  <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </button>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-16 border-t border-border-light pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-text-muted">© 2024 CardioDash Analytics. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-text-muted hover:text-primary transition-colors">Medical Disclaimer</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default About;