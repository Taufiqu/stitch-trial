import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Sidebar from '../components/Sidebar';
import { NavLink } from 'react-router-dom';

const dataAge = [
  { name: '30-35', value: 2500 },
  { name: '36-40', value: 4100 },
  { name: '41-45', value: 8300 },
  { name: '46-50', value: 15200 }, // Highest
  { name: '51-55', value: 12800 },
  { name: '56-60', value: 18500 },
  { name: '60+', value: 6200 },
];

const dataGender = [
  { name: 'Female', value: 45500, color: '#0056D2' },
  { name: 'Male', value: 24500, color: '#E2E8F0' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light">
      <Sidebar />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light relative">
        {/* Top Navbar for Dashboard */}
        <nav className="w-full bg-card-white border-b border-border-light px-8 h-16 flex items-center justify-between shrink-0 shadow-sm z-20">
          <div className="flex items-center gap-8">
            <button className="lg:hidden text-text-muted hover:text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="flex items-center gap-1">
              <NavLink to="/" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full transition-colors shadow-md shadow-blue-200">Analytics</NavLink>
              <NavLink to="/prediction" className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary hover:bg-accent-gray rounded-full transition-colors">Prediction</NavLink>
              <NavLink to="/about" className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary hover:bg-accent-gray rounded-full transition-colors">About</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="material-symbols-outlined text-text-muted text-[18px]">search</span>
              </span>
              <input 
                className="bg-accent-gray border border-border-light text-text-main text-sm rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 w-64 placeholder-text-muted/70 transition-all" 
                placeholder="Search patients..." 
                type="text" 
              />
            </div>
          </div>
        </nav>

        {/* Dashboard Header */}
        <header className="w-full px-8 py-6 flex flex-wrap justify-between items-center gap-4 shrink-0 bg-background-light z-10">
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-black tracking-tight text-text-main">Dashboard Overview</h2>
            <p className="text-text-muted text-sm">Real-time cardiovascular disease dataset insights</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="size-10 rounded-full bg-white border border-border-light flex items-center justify-center hover:bg-accent-gray transition-colors text-text-muted hover:text-primary relative shadow-sm">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-danger rounded-full animate-pulse"></span>
            </button>
            <NavLink to="/prediction" className="h-10 px-6 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors flex items-center gap-2 shadow-lg shadow-blue-200">
              <span className="material-symbols-outlined text-[20px]">add</span>
                Add Patient Record
            </NavLink>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            
            {/* Filter Row */}
            <div className="flex flex-wrap gap-3">
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-card-white border border-border-light pl-4 pr-3 hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                <p className="text-text-main text-xs font-medium">Time Range: Last 30 Days</p>
                <span className="material-symbols-outlined text-text-muted text-[18px]">keyboard_arrow_down</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-card-white border border-border-light pl-4 pr-3 hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                <p className="text-text-main text-xs font-medium">Gender: All</p>
                <span className="material-symbols-outlined text-text-muted text-[18px]">keyboard_arrow_down</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-x-2 rounded-full bg-card-white border border-border-light pl-4 pr-3 hover:border-primary/50 hover:text-primary transition-colors shadow-sm">
                <p className="text-text-main text-xs font-medium">Sort By: Risk Level</p>
                <span className="material-symbols-outlined text-text-muted text-[18px]">keyboard_arrow_down</span>
              </button>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-xs text-text-muted">Last updated: Just now</span>
                <span className="material-symbols-outlined text-primary text-[16px] animate-spin">sync</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-3 rounded-xl p-5 bg-card-white border border-border-light hover:border-primary/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div className="size-10 rounded-full bg-accent-gray flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">folder_shared</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+2.1%</span>
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium mb-1">Total Records</p>
                  <p className="text-text-main text-2xl font-bold tracking-tight">70,000</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl p-5 bg-card-white border border-border-light hover:border-primary/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div className="size-10 rounded-full bg-accent-gray flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">monitor_weight</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+0.4%</span>
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium mb-1">Average BMI</p>
                  <p className="text-text-main text-2xl font-bold tracking-tight">27.5</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl p-5 bg-primary border border-primary hover:bg-primary-hover transition-all group relative overflow-hidden shadow-lg shadow-blue-200">
                <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-bl-full -mr-4 -mt-4"></div>
                <div className="flex justify-between items-start relative z-10">
                  <div className="size-10 rounded-full bg-white flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-primary font-bold">ecg_heart</span>
                  </div>
                  <span className="bg-white/20 text-white text-xs font-bold px-2 py-1 rounded-full">+1.2%</span>
                </div>
                <div className="relative z-10">
                  <p className="text-blue-100 text-xs font-medium mb-1">Cardio Detected</p>
                  <p className="text-white text-2xl font-bold tracking-tight">49.8%</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 rounded-xl p-5 bg-card-white border border-border-light hover:border-primary/30 transition-all group shadow-sm hover:shadow-md">
                <div className="flex justify-between items-start">
                  <div className="size-10 rounded-full bg-accent-gray flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">person</span>
                  </div>
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">-0.1%</span>
                </div>
                <div>
                  <p className="text-text-muted text-xs font-medium mb-1">Average Age</p>
                  <p className="text-text-main text-2xl font-bold tracking-tight">53.2 <span className="text-sm font-normal text-text-muted">Years</span></p>
                </div>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Age Distribution */}
              <div className="lg:col-span-2 bg-card-white border border-border-light rounded-2xl p-6 flex flex-col shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-text-main text-lg font-bold">Age Distribution</h3>
                    <p className="text-text-muted text-xs">Patient count by age range (Years)</p>
                  </div>
                  <button className="text-text-muted hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="h-[250px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dataAge} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 12, fill: '#64748B' }} 
                        dy={10}
                      />
                      <Tooltip 
                        cursor={{ fill: 'transparent' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-text-main text-white text-xs font-bold px-2 py-1 rounded shadow-lg">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Bar 
                        dataKey="value" 
                        radius={[8, 8, 0, 0]}
                        barSize={40}
                      >
                         {dataAge.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === '46-50' ? '#0056D2' : '#F1F5F9'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Gender Split */}
              <div className="bg-card-white border border-border-light rounded-2xl p-6 flex flex-col shadow-sm">
                <div className="mb-6">
                  <h3 className="text-text-main text-lg font-bold">Gender Split</h3>
                  <p className="text-text-muted text-xs">Cardio cases by gender</p>
                </div>
                <div className="flex-1 flex items-center justify-center relative">
                    <div className="relative size-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={dataGender}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={85}
                            startAngle={90}
                            endAngle={450}
                            dataKey="value"
                            stroke="none"
                          >
                             {dataGender.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-text-muted text-xs font-medium">Female</span>
                        <span className="text-text-main text-2xl font-bold">65%</span>
                        <span className="text-primary text-xs mt-1 font-medium">High Risk</span>
                      </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent-gray transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-primary"></div>
                      <span className="text-text-main text-sm font-medium">Female (45.5k)</span>
                    </div>
                    <span className="text-text-main text-sm font-bold">65%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-accent-gray transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-slate-200"></div>
                      <span className="text-text-muted text-sm font-medium">Male (24.5k)</span>
                    </div>
                    <span className="text-text-muted text-sm font-bold">35%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Risk Factors */}
              <div className="bg-card-white border border-border-light rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-text-main text-lg font-bold">Risk Factors</h3>
                    <p className="text-text-muted text-xs">High Cholesterol & Glucose Levels</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">bloodtype</span>
                        <span className="text-text-main text-sm font-medium">Cholesterol Level &gt; 200</span>
                      </div>
                      <span className="text-text-main font-bold">24.5%</span>
                    </div>
                    <div className="w-full h-3 bg-accent-gray rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[24.5%] rounded-full shadow-sm"></div>
                    </div>
                    <div className="flex justify-between text-xs text-text-muted">
                      <span>Normal</span>
                      <span>High Risk</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#3db8e7]">water_drop</span>
                        <span className="text-text-main text-sm font-medium">Glucose Level &gt; 100</span>
                      </div>
                      <span className="text-text-main font-bold">18.2%</span>
                    </div>
                    <div className="w-full h-3 bg-accent-gray rounded-full overflow-hidden">
                      <div className="h-full bg-[#3db8e7] w-[18.2%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-text-muted">
                      <span>Normal</span>
                      <span>Pre-diabetic</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* BMI Correlation */}
              <div className="bg-card-white border border-border-light rounded-2xl p-6 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-text-main text-lg font-bold">BMI & Cardio Correlation</h3>
                    <p className="text-text-muted text-xs">Risk density by BMI category</p>
                  </div>
                </div>
                <div className="flex h-[200px] gap-2 items-end">
                  <div className="flex flex-col justify-between h-full pr-2 text-xs text-text-muted text-right min-w-[40px]">
                    <span>Risk</span>
                    <span>Low</span>
                  </div>
                  <div className="flex-1 h-full grid grid-cols-4 gap-2">
                    <div className="flex flex-col gap-2 h-full justify-end">
                      <div className="bg-slate-100 h-[20%] w-full rounded hover:bg-primary/20 transition-colors"></div>
                      <p className="text-center text-xs text-text-muted font-medium mt-1">&lt;18.5</p>
                    </div>
                    <div className="flex flex-col gap-2 h-full justify-end">
                      <div className="bg-slate-200 h-[35%] w-full rounded hover:bg-primary/20 transition-colors"></div>
                      <p className="text-center text-xs text-text-muted font-medium mt-1">18.5-25</p>
                    </div>
                    <div className="flex flex-col gap-2 h-full justify-end">
                      <div className="bg-gradient-to-t from-slate-200 to-primary/60 h-[65%] w-full rounded hover:brightness-110 transition-all"></div>
                      <p className="text-center text-xs text-text-muted font-medium mt-1">25-30</p>
                    </div>
                    <div className="flex flex-col gap-2 h-full justify-end">
                      <div className="bg-gradient-to-t from-slate-200 via-primary to-primary h-[85%] w-full rounded hover:shadow-lg hover:shadow-blue-200 transition-all relative">
                         <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-text-main px-2 py-0.5 rounded text-[10px] text-white font-bold">Highest</div>
                      </div>
                      <p className="text-center text-xs text-text-main font-bold mt-1">&gt;30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;