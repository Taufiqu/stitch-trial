import React, { useState } from 'react';
import TopNav from '../components/TopNav';

const Prediction: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [riskScore, setRiskScore] = useState(75);

  const handlePredict = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setRiskScore(Math.floor(Math.random() * 40) + 50); // Random score between 50-90
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <TopNav />
      
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-[1280px] bg-white rounded-xl shadow-2xl overflow-hidden border border-border-light">
          
          {/* Header Section */}
          <div className="px-6 py-8 md:px-12 md:py-10 border-b border-border-light flex flex-wrap justify-between items-center gap-6 bg-accent-gray/30">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-main tracking-tight">Cardiovascular Disease Prediction</h1>
              <p className="text-text-muted text-sm sm:text-base md:text-lg font-medium">Enter patient clinical data to calculate risk probability.</p>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="material-symbols-outlined text-primary text-xl">ecg_heart</span>
              <span className="text-primary font-bold text-sm uppercase tracking-wider">AI Powered Model</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="flex-1 p-6 md:p-12 space-y-10">
              
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <h2 className="text-xl font-bold text-text-main">Patient Demographics</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-text-muted text-sm font-semibold">Age (years)</span>
                    <div className="relative">
                      <input className="w-full h-14 px-5 rounded-full bg-gray-50 border border-border-light text-text-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="e.g. 55" type="number"/>
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">yrs</span>
                    </div>
                  </label>
                  <div className="flex flex-col gap-2">
                    <span className="text-text-muted text-sm font-semibold">Gender</span>
                    <div className="flex h-14 bg-gray-50 rounded-full p-1 border border-border-light">
                      <label className="flex-1 relative cursor-pointer">
                        <input className="peer sr-only" name="gender" type="radio" defaultChecked />
                        <div className="w-full h-full flex items-center justify-center rounded-full text-text-muted peer-checked:bg-primary peer-checked:text-white peer-checked:font-bold transition-all">
                            Male
                        </div>
                      </label>
                      <label className="flex-1 relative cursor-pointer">
                        <input className="peer sr-only" name="gender" type="radio"/>
                        <div className="w-full h-full flex items-center justify-center rounded-full text-text-muted peer-checked:bg-primary peer-checked:text-white peer-checked:font-bold transition-all">
                            Female
                        </div>
                      </label>
                    </div>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-text-muted text-sm font-semibold">Height</span>
                    <div className="relative">
                      <input className="w-full h-14 px-5 rounded-full bg-gray-50 border border-border-light text-text-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="e.g. 175" type="number"/>
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">cm</span>
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-text-muted text-sm font-semibold">Weight</span>
                    <div className="relative">
                      <input className="w-full h-14 px-5 rounded-full bg-gray-50 border border-border-light text-text-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="e.g. 80" type="number"/>
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">kg</span>
                    </div>
                  </label>
                </div>
              </section>

              <div className="h-px bg-border-light w-full"></div>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">vital_signs</span>
                  </div>
                  <h2 className="text-xl font-bold text-text-main">Clinical Indicators</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <label className="flex flex-col gap-2">
                    <span className="text-text-muted text-sm font-semibold">Systolic BP (ap_hi)</span>
                    <div className="relative">
                      <input className="w-full h-14 px-5 rounded-full bg-gray-50 border border-border-light text-text-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="e.g. 120" type="number"/>
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">mmHg</span>
                    </div>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-text-muted text-sm font-semibold">Diastolic BP (ap_lo)</span>
                    <div className="relative">
                      <input className="w-full h-14 px-5 rounded-full bg-gray-50 border border-border-light text-text-main focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-400" placeholder="e.g. 80" type="number"/>
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">mmHg</span>
                    </div>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <span className="text-text-muted text-sm font-semibold">Cholesterol Levels</span>
                    <div className="flex flex-col gap-2">
                      <label className="group cursor-pointer">
                        <input className="peer sr-only" name="cholesterol" type="radio" defaultChecked/>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center"></div>
                          <span className="text-text-main text-sm font-medium">Normal</span>
                        </div>
                      </label>
                      <label className="group cursor-pointer">
                        <input className="peer sr-only" name="cholesterol" type="radio"/>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center"></div>
                          <span className="text-text-main text-sm font-medium">Above Normal</span>
                        </div>
                      </label>
                      <label className="group cursor-pointer">
                        <input className="peer sr-only" name="cholesterol" type="radio"/>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center"></div>
                          <span className="text-text-main text-sm font-medium">Well Above Normal</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-text-muted text-sm font-semibold">Glucose Levels</span>
                    <div className="flex flex-col gap-2">
                      <label className="group cursor-pointer">
                        <input className="peer sr-only" name="glucose" type="radio" defaultChecked/>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center"></div>
                          <span className="text-text-main text-sm font-medium">Normal</span>
                        </div>
                      </label>
                       <label className="group cursor-pointer">
                        <input className="peer sr-only" name="glucose" type="radio"/>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center"></div>
                          <span className="text-text-main text-sm font-medium">Above Normal</span>
                        </div>
                      </label>
                       <label className="group cursor-pointer">
                        <input className="peer sr-only" name="glucose" type="radio"/>
                        <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light bg-gray-50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                          <div className="w-5 h-5 rounded-full border-2 border-gray-400 peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center"></div>
                          <span className="text-text-main text-sm font-medium">Well Above Normal</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <div className="h-px bg-border-light w-full"></div>

              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">directions_run</span>
                  </div>
                  <h2 className="text-xl font-bold text-text-main">Lifestyle Factors</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="relative flex items-center justify-between p-4 rounded-xl border border-border-light bg-gray-50 cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">smoking_rooms</span>
                      <span className="text-text-main font-medium">Smoking</span>
                    </div>
                    <input className="w-6 h-6 rounded-md border-gray-300 text-primary focus:ring-primary/50 bg-white" type="checkbox"/>
                  </label>
                  <label className="relative flex items-center justify-between p-4 rounded-xl border border-border-light bg-gray-50 cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">local_bar</span>
                      <span className="text-text-main font-medium">Alcohol</span>
                    </div>
                    <input className="w-6 h-6 rounded-md border-gray-300 text-primary focus:ring-primary/50 bg-white" type="checkbox"/>
                  </label>
                  <label className="relative flex items-center justify-between p-4 rounded-xl border border-border-light bg-gray-50 cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-gray-400">fitness_center</span>
                      <span className="text-text-main font-medium">Active</span>
                    </div>
                    <input defaultChecked className="w-6 h-6 rounded-md border-gray-300 text-primary focus:ring-primary/50 bg-white" type="checkbox"/>
                  </label>
                </div>
              </section>

              <div className="pt-4">
                <button 
                  onClick={handlePredict}
                  disabled={loading}
                  className="w-full h-16 rounded-full bg-primary hover:bg-primary-hover text-white text-xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(0,86,210,0.39)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                       <span className="material-symbols-outlined animate-spin">sync</span>
                       Calculating...
                    </>
                  ) : (
                    <>
                       <span className="material-symbols-outlined">analytics</span>
                       Predict Risk
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Results Sidebar */}
            <div className="w-full lg:w-[400px] bg-gray-50 border-t lg:border-t-0 lg:border-l border-border-light p-8 flex flex-col gap-8">
              <div className="bg-white rounded-2xl p-6 border border-border-light shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-primary">monitor_heart</span>
                </div>
                <h3 className="text-text-muted text-sm font-bold uppercase tracking-widest mb-4">Probability Result</h3>
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle className="text-gray-100" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                      <circle 
                        className="text-primary transition-all duration-1000 ease-out" 
                        cx="96" cy="96" fill="transparent" r="88" 
                        stroke="currentColor" 
                        strokeDasharray="552" 
                        strokeDashoffset={552 - (552 * riskScore) / 100} 
                        strokeWidth="12"
                      ></circle>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-5xl font-black text-text-main">{riskScore}<span className="text-2xl text-primary">%</span></span>
                      <span className="text-sm font-semibold text-text-muted mt-1">High Risk</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                    <p className="text-sm text-text-main leading-relaxed">
                        The model indicates a <strong>high probability</strong> based on current vitals. Please consult a specialist for further testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <h4 className="text-text-main font-bold text-lg">Health Tips</h4>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border-light shadow-sm hover:border-primary/30 transition-colors">
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-blue-500">water_drop</span>
                  </div>
                  <div>
                    <p className="text-text-main font-semibold text-sm">Stay Hydrated</p>
                    <p className="text-text-muted text-xs mt-1">Drinking water helps maintain blood viscosity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border-light shadow-sm hover:border-primary/30 transition-colors">
                  <div className="bg-orange-500/10 p-2 rounded-lg">
                    <span className="material-symbols-outlined text-orange-500">restaurant</span>
                  </div>
                  <div>
                    <p className="text-text-main font-semibold text-sm">Monitor Diet</p>
                    <p className="text-text-muted text-xs mt-1">Reduce sodium intake to help manage blood pressure.</p>
                  </div>
                </div>
                
                <div className="mt-auto h-32 w-full rounded-xl overflow-hidden relative group">
                  <img 
                    alt="Abstract medical data" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity filter grayscale group-hover:grayscale-0" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH_rA_A3fuIPQskU9Pn9izwsZJ77F4x85QcDBaRYkCEVj2pI9ex1PoaFOGhFMMtNZFEuZDJ111EOotNT5O5Pe-ANbfScFxYp20c9Fk3kphDVNQ-2ztEmdKwQ1olGFwIh1CQCdiyItTBBxvP7uYPut1rDesvt5lcWkTRv-Sepc3ENXxf7wS7cR1HYdjoTHzbTcTzU9X2HribKNPx4cZzibkmpbX41ecd2yS4pTQh1U8yu1bVAcxMW_Wmq2c5LKQ8sVbQL6RlccQBLlj"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-medium">Data sourced from Cardiovascular Disease dataset</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;