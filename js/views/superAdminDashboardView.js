// Super Admin Central Dashboard View
import { ERP_DATA } from '../data/mockData.js';
import { TabBar } from '../components/tabBar.js';
import { Toast } from '../components/toast.js';

export const SuperAdminDashboardView = {
  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Directly render the unified Super Admin Dashboard without tab menus
    this.renderSystemOverview(container);
  },

  renderSystemOverview(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-5">
        <!-- Welcome Hero Banner -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0369A1] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#334155] shadow-sm">
          <div>
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/10 text-[#38BDF8] text-[11px] font-bold mb-2 tracking-wide uppercase">
              <span class="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
              Super Admin Control Center
            </div>
            <h1 class="text-xl md:text-2xl font-black text-white tracking-tight">System & Multi-Tenant Control Hub</h1>
            <p class="text-xs text-[#94A3B8] mt-1 max-w-2xl leading-relaxed">
              Global administration panel for managing corporate entities, enterprise user permissions, microservice master registries, and multi-facility seafood export compliance.
            </p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <a href="#/general/client/clients" class="px-3.5 py-2 bg-white text-[#0F172A] hover:bg-[#F8FAFC] font-bold text-xs rounded-xl transition-all shadow-xs flex items-center gap-2">
              <svg class="w-4 h-4 text-[#0284C7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              <span>Add Tenant</span>
            </a>
            <a href="#/general/client/user" class="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all border border-white/20 flex items-center gap-2">
              <svg class="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/></svg>
              <span>Invite User</span>
            </a>
          </div>
        </div>

        <!-- 4 KPI Metric Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <!-- Card 1 -->
          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs hover:border-[#0284C7] transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#5E6C84] uppercase tracking-wider">Multi-Company Tenants</span>
              <div class="w-8 h-8 rounded-lg bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center font-bold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
            </div>
            <div class="text-2xl font-black text-[#172B4D] mt-2 tracking-tight">3 Companies</div>
            <div class="flex items-center gap-1.5 text-xs text-[#16A34A] font-semibold mt-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#16A34A]"></span>
              <span>All 3 Tenants Active & Licensed</span>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs hover:border-[#0284C7] transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#5E6C84] uppercase tracking-wider">System Users</span>
              <div class="w-8 h-8 rounded-lg bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center font-bold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
            </div>
            <div class="text-2xl font-black text-[#172B4D] mt-2 tracking-tight">48 Users</div>
            <div class="flex items-center gap-1.5 text-xs text-[#5E6C84] mt-1 font-medium">
              <span>12 Admins, 36 Operators across 6 Plants</span>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs hover:border-[#0284C7] transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#5E6C84] uppercase tracking-wider">Active ERP Modules</span>
              <div class="w-8 h-8 rounded-lg bg-[#FAF5FF] text-[#7E22CE] flex items-center justify-center font-bold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
              </div>
            </div>
            <div class="text-2xl font-black text-[#172B4D] mt-2 tracking-tight">18 Submodules</div>
            <div class="flex items-center gap-1.5 text-xs text-[#16A34A] font-semibold mt-1">
              <span>Purchase, QC, Coldstore, Production, Sales</span>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="bg-white p-4 rounded-xl border border-[#DFE1E6] shadow-xs hover:border-[#0284C7] transition-all group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#5E6C84] uppercase tracking-wider">System Health & API</span>
              <div class="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
            </div>
            <div class="text-2xl font-black text-[#059669] mt-2 tracking-tight">99.98% Uptime</div>
            <div class="flex items-center gap-1.5 text-xs text-[#059669] font-semibold mt-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#059669]"></span>
              <span>All IoT Sensors & Services Online</span>
            </div>
          </div>
        </div>

        <!-- Tenant Companies Registry & Quick Switcher -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
          <div class="flex items-center justify-between pb-3 border-b border-[#EBECF0] mb-3">
            <div>
              <h2 class="text-sm font-bold text-[#172B4D]">Registered Corporate Tenants</h2>
              <p class="text-xs text-[#5E6C84] mt-0.5">Enterprise seafood entities operating under the unified Camaroo ERP infrastructure</p>
            </div>
            <a href="#/general/client/clients" class="text-xs font-bold text-[#0369A1] hover:underline flex items-center gap-1">
              <span>Manage Companies</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <!-- Company 1 -->
            <div class="p-3.5 rounded-xl border border-[#0284C7] bg-[#F0F9FF] flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#0284C7] text-white">Default Entity</span>
                  <span class="text-[11px] font-semibold text-[#0369A1]">CMP-001</span>
                </div>
                <div class="font-bold text-xs text-[#172B4D]">Devi Fisheries Limited</div>
                <div class="text-[11px] text-[#5E6C84] mt-0.5">Visakhapatnam Processing Hub</div>
                <div class="mt-2 space-y-1 text-[11px] text-[#42526E]">
                  <div><span class="font-semibold text-[#172B4D]">EIA:</span> EIA/AP/0458</div>
                  <div><span class="font-semibold text-[#172B4D]">FDA:</span> FDA-REG-10928374</div>
                  <div><span class="font-semibold text-[#172B4D]">Plants:</span> 4 Operational Units</div>
                </div>
              </div>
              <div class="mt-3 pt-2 border-t border-[#BAE6FD] flex items-center justify-between text-xs">
                <span class="text-[#16A34A] font-bold text-[11px]">Active • Enterprise Tier</span>
                <a href="#/general/client/clients" class="font-bold text-[#0369A1] hover:underline">Config →</a>
              </div>
            </div>

            <!-- Company 2 -->
            <div class="p-3.5 rounded-xl border border-[#DFE1E6] bg-white hover:border-[#0284C7] transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F4F5F7] text-[#5E6C84]">Subsidiary</span>
                  <span class="text-[11px] font-semibold text-[#5E6C84]">CMP-002</span>
                </div>
                <div class="font-bold text-xs text-[#172B4D]">Devi Sea Foods Americas</div>
                <div class="text-[11px] text-[#5E6C84] mt-0.5">North American Distribution & Logistics</div>
                <div class="mt-2 space-y-1 text-[11px] text-[#42526E]">
                  <div><span class="font-semibold text-[#172B4D]">FDA:</span> FDA-USA-5582910</div>
                  <div><span class="font-semibold text-[#172B4D]">Currency:</span> USD ($)</div>
                  <div><span class="font-semibold text-[#172B4D]">Coldstores:</span> New Jersey & Long Beach</div>
                </div>
              </div>
              <div class="mt-3 pt-2 border-t border-[#EBECF0] flex items-center justify-between text-xs">
                <span class="text-[#16A34A] font-bold text-[11px]">Active • Global Hub</span>
                <a href="#/general/client/clients" class="font-bold text-[#0369A1] hover:underline">Config →</a>
              </div>
            </div>

            <!-- Company 3 -->
            <div class="p-3.5 rounded-xl border border-[#DFE1E6] bg-white hover:border-[#0284C7] transition-all flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F4F5F7] text-[#5E6C84]">Joint Venture</span>
                  <span class="text-[11px] font-semibold text-[#5E6C84]">CMP-003</span>
                </div>
                <div class="font-bold text-xs text-[#172B4D]">Coastal Marine Exports</div>
                <div class="text-[11px] text-[#5E6C84] mt-0.5">Kakinada Deep Sea & Aquaculture Division</div>
                <div class="mt-2 space-y-1 text-[11px] text-[#42526E]">
                  <div><span class="font-semibold text-[#172B4D]">EIA:</span> EIA/AP/0819</div>
                  <div><span class="font-semibold text-[#172B4D]">BAP:</span> BAP-P-9921-4STAR</div>
                  <div><span class="font-semibold text-[#172B4D]">Hatcheries:</span> 3 Coastal Farms</div>
                </div>
              </div>
              <div class="mt-3 pt-2 border-t border-[#EBECF0] flex items-center justify-between text-xs">
                <span class="text-[#16A34A] font-bold text-[11px]">Active • Processing Plant</span>
                <a href="#/general/client/clients" class="font-bold text-[#0369A1] hover:underline">Config →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Infrastructure Status & System Resources -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <!-- Infrastructure Status -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#EBECF0]">
              <div class="font-bold text-sm text-[#172B4D]">Microservice Cluster Status</div>
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#15803D] animate-ping"></span>
                Operational
              </span>
            </div>
            <div class="space-y-2.5 text-xs">
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#EBECF0]">
                <div>
                  <div class="font-bold text-[#172B4D]">Authentication & SSO Engine</div>
                  <div class="text-[11px] text-[#5E6C84]">OAuth2 / JWT Token Authority</div>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Online • 14ms</span>
              </div>
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#EBECF0]">
                <div>
                  <div class="font-bold text-[#172B4D]">PostgreSQL Core DB Cluster</div>
                  <div class="text-[11px] text-[#5E6C84]">Primary Read/Write Replication</div>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Healthy • 8ms</span>
              </div>
              <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#EBECF0]">
                <div>
                  <div class="font-bold text-[#172B4D]">IoT Coldstore Telemetry Ingest</div>
                  <div class="text-[11px] text-[#5E6C84]">MQTT Broker (128 Sensors active)</div>
                </div>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Connected • 100%</span>
              </div>
            </div>
          </div>

          <!-- System Resources -->
          <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#EBECF0]">
              <div class="font-bold text-sm text-[#172B4D]">Server Resource Utilization</div>
              <span class="text-[10px] text-[#5E6C84] font-medium">Cluster Node AP-SOUTH-1</span>
            </div>
            <div class="space-y-3 text-xs">
              <div>
                <div class="flex justify-between font-semibold text-[#172B4D] mb-1">
                  <span>CPU Load (8 Core vCPU)</span>
                  <span class="font-bold text-[#0284C7]">24%</span>
                </div>
                <div class="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#0284C7] h-full rounded-full" style="width: 24%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between font-semibold text-[#172B4D] mb-1">
                  <span>Memory Allocation (32 GB RAM)</span>
                  <span class="font-bold text-[#16A34A]">46% (14.7 GB Used)</span>
                </div>
                <div class="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#16A34A] h-full rounded-full" style="width: 46%"></div>
                </div>
              </div>
              <div>
                <div class="flex justify-between font-semibold text-[#172B4D] mb-1">
                  <span>SSD NVMe Storage (1 TB Provisioned)</span>
                  <span class="font-bold text-[#7E22CE]">72.4 GB Used (7.2%)</span>
                </div>
                <div class="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                  <div class="bg-[#7E22CE] h-full rounded-full" style="width: 7.2%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Super Admin Audit Activity -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs">
          <div class="flex items-center justify-between pb-3 border-b border-[#EBECF0] mb-3">
            <div>
              <h2 class="text-sm font-bold text-[#172B4D]">Recent Security & Audit Logs</h2>
              <p class="text-xs text-[#5E6C84] mt-0.5">Live tracking of administrative configuration changes, RBAC updates, and logins</p>
            </div>
            <a href="#/super-reports/audit-logs/audit-trail" class="text-xs font-bold text-[#0369A1] hover:underline flex items-center gap-1">
              <span>View Full Audit Trail</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div class="divide-y divide-[#EBECF0]">
            ${(ERP_DATA.userAuditLogs || []).slice(0, 4).map(log => `
              <div class="py-2.5 flex items-center justify-between flex-wrap gap-2 text-xs">
                <div class="flex items-center gap-3">
                  <div class="w-7 h-7 rounded-lg bg-[#F0F9FF] text-[#0369A1] flex items-center justify-center font-bold shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <div class="font-bold text-[#172B4D]">${log.action}</div>
                    <div class="text-[11px] text-[#5E6C84] mt-0.5">${log.user} • ${log.role} • ${log.module} • IP: ${log.ip}</div>
                  </div>
                </div>
                <div class="text-right">
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">${log.status}</span>
                  <div class="text-[10px] text-[#94A3B8] mt-1">${log.timestamp}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  renderTenantStatus(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-[#EBECF0]">
          <div>
            <h2 class="text-sm font-bold text-[#172B4D]">Corporate Tenants & Licensing Status</h2>
            <p class="text-xs text-[#5E6C84] mt-0.5">Overview of active subscriptions, storage quotas, and connected plant facilities</p>
          </div>
          <button class="btn-primary text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            <span>Provision New Tenant</span>
          </button>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead class="bg-[#F8FAFC] border-y border-[#EBECF0] text-[#5E6C84] font-bold uppercase text-[10px]">
              <tr>
                <th class="py-2.5 px-3">Company Code</th>
                <th class="py-2.5 px-3">Company Name</th>
                <th class="py-2.5 px-3">Facility Hub</th>
                <th class="py-2.5 px-3">Tier</th>
                <th class="py-2.5 px-3">Storage / DB</th>
                <th class="py-2.5 px-3">Active Users</th>
                <th class="py-2.5 px-3">Status</th>
                <th class="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EBECF0]">
              <tr class="hover:bg-[#F8FAFC]">
                <td class="py-2.5 px-3 font-bold text-[#0284C7]">CMP-001</td>
                <td class="py-2.5 px-3 font-semibold text-[#172B4D]">Devi Fisheries Limited</td>
                <td class="py-2.5 px-3 text-[#5E6C84]">Visakhapatnam Hub (4 Plants)</td>
                <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0369A1]">Enterprise Pro</span></td>
                <td class="py-2.5 px-3 text-[#42526E]">42.8 GB / 100 GB</td>
                <td class="py-2.5 px-3 font-bold text-[#172B4D]">28 Users</td>
                <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Active</span></td>
                <td class="py-2.5 px-3 text-right">
                  <a href="#/general/client/clients" class="text-xs font-bold text-[#0284C7] hover:underline">Manage</a>
                </td>
              </tr>
              <tr class="hover:bg-[#F8FAFC]">
                <td class="py-2.5 px-3 font-bold text-[#0284C7]">CMP-002</td>
                <td class="py-2.5 px-3 font-semibold text-[#172B4D]">Devi Sea Foods Americas</td>
                <td class="py-2.5 px-3 text-[#5E6C84]">North America (2 Coldstores)</td>
                <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E0F2FE] text-[#0369A1]">Enterprise Global</span></td>
                <td class="py-2.5 px-3 text-[#42526E]">18.4 GB / 50 GB</td>
                <td class="py-2.5 px-3 font-bold text-[#172B4D]">12 Users</td>
                <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Active</span></td>
                <td class="py-2.5 px-3 text-right">
                  <a href="#/general/client/clients" class="text-xs font-bold text-[#0284C7] hover:underline">Manage</a>
                </td>
              </tr>
              <tr class="hover:bg-[#F8FAFC]">
                <td class="py-2.5 px-3 font-bold text-[#0284C7]">CMP-003</td>
                <td class="py-2.5 px-3 font-semibold text-[#172B4D]">Coastal Marine Exports</td>
                <td class="py-2.5 px-3 text-[#5E6C84]">Kakinada Processing & Farms</td>
                <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F5F7] text-[#42526E]">Standard Dedicated</span></td>
                <td class="py-2.5 px-3 text-[#42526E]">11.2 GB / 25 GB</td>
                <td class="py-2.5 px-3 font-bold text-[#172B4D]">8 Users</td>
                <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Active</span></td>
                <td class="py-2.5 px-3 text-right">
                  <a href="#/general/client/clients" class="text-xs font-bold text-[#0284C7] hover:underline">Manage</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderSystemHealth(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Infrastructure Status -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs space-y-3">
          <div class="font-bold text-sm text-[#172B4D] pb-2 border-b border-[#EBECF0]">Microservice Cluster Status</div>
          <div class="space-y-2.5 text-xs">
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#EBECF0]">
              <div>
                <div class="font-bold text-[#172B4D]">Authentication & SSO Engine</div>
                <div class="text-[11px] text-[#5E6C84]">OAuth2 / JWT Token Authority</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Online • 14ms</span>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#EBECF0]">
              <div>
                <div class="font-bold text-[#172B4D]">PostgreSQL Core DB Cluster</div>
                <div class="text-[11px] text-[#5E6C84]">Primary Read/Write Replication</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Healthy • 8ms</span>
            </div>
            <div class="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFC] border border-[#EBECF0]">
              <div>
                <div class="font-bold text-[#172B4D]">IoT Coldstore Telemetry Ingest</div>
                <div class="text-[11px] text-[#5E6C84]">MQTT Broker (128 Sensors active)</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Connected • 100%</span>
            </div>
          </div>
        </div>

        <!-- System Resources -->
        <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 shadow-xs space-y-3">
          <div class="font-bold text-sm text-[#172B4D] pb-2 border-b border-[#EBECF0]">Server Resource Utilization</div>
          <div class="space-y-3 text-xs">
            <div>
              <div class="flex justify-between font-semibold text-[#172B4D] mb-1">
                <span>CPU Load (8 Core vCPU)</span>
                <span>24%</span>
              </div>
              <div class="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                <div class="bg-[#0284C7] h-full rounded-full" style="width: 24%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-semibold text-[#172B4D] mb-1">
                <span>Memory Allocation (32 GB RAM)</span>
                <span>46% (14.7 GB Used)</span>
              </div>
              <div class="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                <div class="bg-[#16A34A] h-full rounded-full" style="width: 46%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between font-semibold text-[#172B4D] mb-1">
                <span>SSD NVMe Storage (1 TB Provisioned)</span>
                <span>72.4 GB Used (7.2%)</span>
              </div>
              <div class="w-full bg-[#EBECF0] h-2 rounded-full overflow-hidden">
                <div class="bg-[#7E22CE] h-full rounded-full" style="width: 7.2%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
