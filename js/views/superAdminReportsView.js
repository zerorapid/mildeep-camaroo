// Super Admin Reports View: Audit Trail, Permissions Matrix, Security Logs
import { ERP_DATA } from '../data/mockData.js';
import { TabBar } from '../components/tabBar.js';
import { Toast } from '../components/toast.js';

export const SuperAdminReportsView = {
  activeSearchTerm: '',

  render(containerId, activeTab = 'audit-trail', activeHash = '#/super-reports/audit-logs/audit-trail') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="space-y-4">
        <!-- Top Tab Bar -->
        <div id="super-reports-tab-bar-container"></div>

        <!-- Tab Content -->
        <div id="super-reports-tab-content"></div>
      </div>
    `;

    TabBar.render('super-reports-tab-bar-container', activeHash);
    const contentEl = document.getElementById('super-reports-tab-content');

    if (activeTab === 'access-matrix') {
      this.renderAccessMatrix(contentEl);
    } else if (activeTab === 'security-sessions') {
      this.renderSecuritySessions(contentEl);
    } else {
      this.renderAuditTrail(contentEl);
    }
  },

  renderAuditTrail(container) {
    if (!container) return;

    const logs = ERP_DATA.userAuditLogs || [];

    container.innerHTML = `
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 space-y-4 shadow-xs">
        <div class="flex items-center justify-between pb-3 border-b border-[#EBECF0] flex-wrap gap-2">
          <div>
            <h2 class="text-sm font-bold text-[#172B4D]">User & Configuration Audit Trail</h2>
            <p class="text-xs text-[#5E6C84] mt-0.5">Immutable regulatory log of user interactions, permission updates, and transaction clearances</p>
          </div>
          <div class="flex items-center gap-2">
            <input 
              type="text" 
              id="audit-trail-search" 
              placeholder="Search logs..." 
              class="text-xs px-3 py-1.5 border border-[#DFE1E6] rounded-lg focus:border-[#0284C7] focus:outline-none"
            />
            <button id="export-audit-btn" class="px-3 py-1.5 border border-[#DFE1E6] rounded-lg text-xs font-semibold text-[#172B4D] hover:bg-[#F8FAFC] flex items-center gap-1.5 cursor-pointer">
              <svg class="w-3.5 h-3.5 text-[#5E6C84]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left" id="audit-trail-table">
            <thead class="bg-[#F8FAFC] border-y border-[#EBECF0] text-[#5E6C84] font-bold uppercase text-[10px]">
              <tr>
                <th class="py-2.5 px-3">Log ID</th>
                <th class="py-2.5 px-3">Timestamp</th>
                <th class="py-2.5 px-3">User & Department</th>
                <th class="py-2.5 px-3">Role</th>
                <th class="py-2.5 px-3">Module</th>
                <th class="py-2.5 px-3">Action Description</th>
                <th class="py-2.5 px-3">IP Address</th>
                <th class="py-2.5 px-3">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EBECF0]">
              ${logs.map(log => `
                <tr class="hover:bg-[#F8FAFC]">
                  <td class="py-2.5 px-3 font-bold text-[#0284C7]">${log.id}</td>
                  <td class="py-2.5 px-3 text-[#5E6C84] whitespace-nowrap">${log.timestamp}</td>
                  <td class="py-2.5 px-3 font-semibold text-[#172B4D]">${log.user}</td>
                  <td class="py-2.5 px-3 text-[#42526E]">${log.role}</td>
                  <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F0F9FF] text-[#0369A1]">${log.module}</span></td>
                  <td class="py-2.5 px-3 text-[#172B4D] font-medium">${log.action}</td>
                  <td class="py-2.5 px-3 text-[#5E6C84] font-mono text-[11px]">${log.ip}</td>
                  <td class="py-2.5 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">${log.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    const exportBtn = document.getElementById('export-audit-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        Toast.show('Audit trail logs successfully exported to CSV.', 'success', 'Export Complete');
      });
    }
  },

  renderAccessMatrix(container) {
    if (!container) return;

    const perms = ERP_DATA.rolePermissionsTemplate || [];

    container.innerHTML = `
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 space-y-4 shadow-xs">
        <div class="flex items-center justify-between pb-3 border-b border-[#EBECF0]">
          <div>
            <h2 class="text-sm font-bold text-[#172B4D]">Module Access & Permissions Matrix</h2>
            <p class="text-xs text-[#5E6C84] mt-0.5">Role-Based Access Control (RBAC) permission configuration across all enterprise modules</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold text-[#5E6C84]">Scope:</span>
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#F0F9FF] text-[#0369A1] border border-[#BAE6FD]">System Administrator (Full Control)</span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead class="bg-[#F8FAFC] border-y border-[#EBECF0] text-[#5E6C84] font-bold uppercase text-[10px]">
              <tr>
                <th class="py-2.5 px-3">Category</th>
                <th class="py-2.5 px-3">Module Name</th>
                <th class="py-2.5 px-3 text-center">Read</th>
                <th class="py-2.5 px-3 text-center">Create</th>
                <th class="py-2.5 px-3 text-center">Edit</th>
                <th class="py-2.5 px-3 text-center">Delete</th>
                <th class="py-2.5 px-3 text-center">Export</th>
                <th class="py-2.5 px-3 text-center">Approve</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#EBECF0]">
              ${perms.slice(0, 12).map(p => `
                <tr class="hover:bg-[#F8FAFC]">
                  <td class="py-2.5 px-3 font-semibold text-[#0369A1]">${p.category}</td>
                  <td class="py-2.5 px-3 font-medium text-[#172B4D]">${p.module}</td>
                  <td class="py-2.5 px-3 text-center"><input type="checkbox" checked disabled class="rounded border-[#CBD5E1] text-[#0284C7] focus:ring-0" /></td>
                  <td class="py-2.5 px-3 text-center"><input type="checkbox" ${p.create ? 'checked' : ''} disabled class="rounded border-[#CBD5E1] text-[#0284C7] focus:ring-0" /></td>
                  <td class="py-2.5 px-3 text-center"><input type="checkbox" ${p.edit ? 'checked' : ''} disabled class="rounded border-[#CBD5E1] text-[#0284C7] focus:ring-0" /></td>
                  <td class="py-2.5 px-3 text-center"><input type="checkbox" ${p.delete ? 'checked' : ''} disabled class="rounded border-[#CBD5E1] text-[#0284C7] focus:ring-0" /></td>
                  <td class="py-2.5 px-3 text-center"><input type="checkbox" ${p.export ? 'checked' : ''} disabled class="rounded border-[#CBD5E1] text-[#0284C7] focus:ring-0" /></td>
                  <td class="py-2.5 px-3 text-center"><input type="checkbox" ${p.approve ? 'checked' : ''} disabled class="rounded border-[#CBD5E1] text-[#0284C7] focus:ring-0" /></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderSecuritySessions(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="bg-white rounded-xl border border-[#DFE1E6] p-4 space-y-4 shadow-xs">
        <div class="flex items-center justify-between pb-3 border-b border-[#EBECF0]">
          <div>
            <h2 class="text-sm font-bold text-[#172B4D]">Active User Sessions & Security Logs</h2>
            <p class="text-xs text-[#5E6C84] mt-0.5">Real-time enterprise active connections, browser sessions, and token expiry</p>
          </div>
          <button class="px-3 py-1.5 border border-[#EF4444] text-[#EF4444] rounded-lg text-xs font-semibold hover:bg-[#FEF2F2] cursor-pointer">
            Terminate Stale Sessions
          </button>
        </div>

        <div class="space-y-3">
          <div class="flex items-center justify-between p-3 rounded-xl border border-[#EBECF0] hover:border-[#0284C7] transition-all bg-[#F8FAFC]">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center font-bold">SA</div>
              <div>
                <div class="font-bold text-xs text-[#172B4D]">Super Admin (You) • superadmin@devifisheries.com</div>
                <div class="text-[11px] text-[#5E6C84]">Chrome on Windows 11 • IP: 192.168.1.10 • Active Now</div>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF8EE] text-[#15803D]">Current Session</span>
          </div>

          <div class="flex items-center justify-between p-3 rounded-xl border border-[#EBECF0] hover:border-[#0284C7] transition-all bg-white">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-[#F4F5F7] text-[#42526E] flex items-center justify-center font-bold">AD</div>
              <div>
                <div class="font-bold text-xs text-[#172B4D]">Admin • admin@devifisheries.com</div>
                <div class="text-[11px] text-[#5E6C84]">Edge on Windows 11 • IP: 192.168.1.45 • Signed in 42 mins ago</div>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F5F7] text-[#5E6C84]">Active</span>
          </div>

          <div class="flex items-center justify-between p-3 rounded-xl border border-[#EBECF0] hover:border-[#0284C7] transition-all bg-white">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-[#F4F5F7] text-[#42526E] flex items-center justify-center font-bold">QC</div>
              <div>
                <div class="font-bold text-xs text-[#172B4D]">Dr. Rajesh K. Varma • qc.manager@devifisheries.com</div>
                <div class="text-[11px] text-[#5E6C84]">Safari on iPad (Plant #1 Lab) • IP: 192.168.2.45 • Signed in 1 hour ago</div>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F4F5F7] text-[#5E6C84]">Active</span>
          </div>
        </div>
      </div>
    `;
  }
};
