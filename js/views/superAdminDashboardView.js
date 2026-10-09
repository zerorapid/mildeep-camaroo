// Super Admin Central Dashboard View
import { ERP_DATA } from '../data/mockData.js';
import { Toast } from '../components/toast.js';

export const SuperAdminDashboardView = {
  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Directly render the unified Super Admin Dashboard Under Construction view
    this.renderSystemOverview(container);
  },

  renderSystemOverview(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-5">
        <!-- Under Construction Card -->
        <div class="bg-white rounded-2xl border border-[#DFE1E6] p-8 md:p-12 text-center shadow-xs">
          <div class="w-20 h-20 mx-auto rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center text-[#0284C7] mb-5 shadow-xs">
            <svg class="w-10 h-10 animate-spin" style="animation-duration: 8s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#B45309] text-xs font-bold mb-3 uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping"></span>
            Under Construction
          </div>

          <h2 class="text-2xl font-black text-[#172B4D] tracking-tight mb-2">Super Admin Dashboard is Under Construction</h2>
          <p class="text-xs md:text-sm text-[#5E6C84] max-w-xl mx-auto leading-relaxed mb-6">
            The central executive dashboard, real-time IoT facility metrics, and global seafood export telemetry analytics are currently being developed. You can manage system entities using the sections below:
          </p>

          <div class="flex items-center justify-center flex-wrap gap-3">
            <a href="#/general/configuration/clients" class="px-4 py-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              <span>Manage Clients</span>
            </a>
            <a href="#/general/configuration/menus" class="px-4 py-2 bg-white hover:bg-[#F8FAFC] border border-[#DFE1E6] hover:border-[#0284C7] text-[#172B4D] hover:text-[#0284C7] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              <span>Manage Menus</span>
            </a>
            <a href="#/general/configuration/submenus" class="px-4 py-2 bg-white hover:bg-[#F8FAFC] border border-[#DFE1E6] hover:border-[#0284C7] text-[#172B4D] hover:text-[#0284C7] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              <span>Manage Submenus</span>
            </a>
            <a href="#/master/master-data/masters" class="px-4 py-2 bg-white hover:bg-[#F8FAFC] border border-[#DFE1E6] hover:border-[#0284C7] text-[#172B4D] hover:text-[#0284C7] text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              <span>Master Registries</span>
            </a>
          </div>
        </div>

        <!-- Upcoming Features Preview Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center font-bold mb-2.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <div class="font-bold text-xs text-[#172B4D]">Live Telemetry & BI</div>
            <p class="text-[11px] text-[#5E6C84] mt-1">Real-time cold chain temperature streaming, plant capacity metrics, and multi-unit production yields.</p>
            <div class="mt-2.5 pt-2 border-t border-[#EBECF0]">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F5F7] text-[#5E6C84]">Coming Soon</span>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold mb-2.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div class="font-bold text-xs text-[#172B4D]">Cross-Entity Financials</div>
            <p class="text-[11px] text-[#5E6C84] mt-1">Consolidated multi-currency revenue tracking, export realisations, and raw material procurement expenses.</p>
            <div class="mt-2.5 pt-2 border-t border-[#EBECF0]">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F5F7] text-[#5E6C84]">Coming Soon</span>
            </div>
          </div>

          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs">
            <div class="w-8 h-8 rounded-lg bg-[#FAF5FF] text-[#7E22CE] flex items-center justify-center font-bold mb-2.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            </div>
            <div class="font-bold text-xs text-[#172B4D]">Security & RBAC Matrix</div>
            <p class="text-[11px] text-[#5E6C84] mt-1">Granular authorization audit logging, multi-factor SSO sessions, and tenant partition controls.</p>
            <div class="mt-2.5 pt-2 border-t border-[#EBECF0]">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F5F7] text-[#5E6C84]">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
