"use client";
import React, { useState, useEffect } from 'react';
import { Users, Eye, Radio, Activity } from 'lucide-react';

export default function AdminPage() {
  const [stats, setStats] = useState({ 
    totalVisits: 0, 
    uniqueVisitors: 0, 
    pageviews: 0, 
    activeNow: 1, 
    sessions: [] as any[] 
  });

  // यह फंक्शन सीधे तेरी वेबसाइट के बैकएंड से असली रीयल-टाइम डेटा खींचेगा
  const fetchStats = async () => {
    try {
      const res = await fetch('/api/analytics/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (e) { 
      console.log("Analytics fetch error", e); 
    }
  };

  useEffect(() => {
    fetchStats();
    const interval = setInterval(fetchStats, 3000); // हर 3 सेकंड में डेटा ऑटो-रिफ्रेश होगा
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#060813] text-white p-6 font-mono">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* एडमिन हेडर */}
        <div className="flex justify-between items-center border-b border-cyan-500/30 pb-4">
          <h1 className="text-xl font-black text-cyan-400 flex items-center gap-2">🛡️ NOWXMULTIPLE MASTER ADMIN PANEL</h1>
          <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/40 animate-pulse">LIVE TRACKING</span>
        </div>

        {/* 📊 लाइव काउंटर्स (KPI Metrics) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0f1422] border border-cyan-500/20 p-4 rounded-xl">
            <div className="text-[11px] text-gray-400 flex items-center gap-1"><Eye size={14}/> TOTAL VISITS</div>
            <div className="text-2xl font-black text-cyan-400 mt-2">{stats.totalVisits || 0}</div>
          </div>
          <div className="bg-[#0f1422] border border-cyan-500/20 p-4 rounded-xl">
            <div className="text-[11px] text-gray-400 flex items-center gap-1"><Users size={14}/> UNIQUE USERS</div>
            <div className="text-2xl font-black text-purple-400 mt-2">{stats.uniqueVisitors || 0}</div>
          </div>
          <div className="bg-[#0f1422] border border-cyan-500/20 p-4 rounded-xl">
            <div className="text-[11px] text-gray-400 flex items-center gap-1"><Radio size={14}/> ACTIVE NOW</div>
            <div className="text-2xl font-black text-emerald-400 mt-2">{stats.activeNow || 1}</div>
          </div>
          <div className="bg-[#0f1422] border border-cyan-500/20 p-4 rounded-xl">
            <div className="text-[11px] text-gray-400 flex items-center gap-1"><Activity size={14}/> PAGEVIEWS</div>
            <div className="text-2xl font-black text-amber-400 mt-2">{stats.pageviews || 0}</div>
          </div>
        </div>

        {/* 📑 लाइव विज़िटर एक्टिविटी लॉग्स टेबल */}
        <div className="bg-[#0f1422] border border-white/10 rounded-xl p-4">
          <h2 className="text-sm font-bold mb-3 text-gray-300">👥 LIVE VISITOR LOGS (WEBSITE TRAFFIC)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="pb-2">COUNTRY</th>
                  <th className="pb-2">DEVICE & OS</th>
                  <th className="pb-2">ACTION / PRESSED BUTTON</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stats.sessions && stats.sessions.length > 0 ? (
                  stats.sessions.slice(0, 15).map((sess: any, idx: number) => (
                    <tr key={idx} className="hover:bg-white/5">
                      <td className="py-2">{sess.flag || '🌐'} {sess.country || 'Unknown'} <code className="text-gray-500">({sess.ipMasked || '***.***'})</code></td>
                      <td className="py-2 text-cyan-300">{sess.device || 'Mobile'} <span className="text-gray-400">({sess.os || 'Unknown'})</span></td>
                      <td className="py-2"><span className="bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/20">{sess.action || 'Opened IDE'}</span></td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan={3} className="py-4 text-center text-gray-500">No active visitors logged yet. Open your main website link to generate data!</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
