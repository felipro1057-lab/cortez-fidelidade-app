* {
  box-sizing: border-box;
}

:root {
  --bg: #edf3fb;
  --panel: #ffffff;
  --text: #1e293b;
  --muted: #64748b;
  --border: #dbe4f0;
  --blue: #2563eb;
  --blue-dark: #1d4ed8;
  --blue-soft: #dfeaff;
  --amber: #f59e0b;
  --amber-dark: #d97706;
  --amber-soft: #fff4db;
  --cyan: #06b6d4;
  --cyan-soft: #dff9ff;
  --green: #10b981;
  --green-soft: #dcfce7;
  --red: #ef4444;
  --red-soft: #fee2e2;
  --shadow: 0 20px 45px rgba(15, 23, 42, 0.08);
}

html,
body {
  margin: 0;
  min-height: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: linear-gradient(180deg, #eff6ff 0%, #edf3fb 100%);
  color: var(--text);
}

body {
  display: flex;
  justify-content: center;
  padding: 24px;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
  transition: 0.2s ease;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.app-shell {
  width: min(100%, 480px);
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.topbar {
  background: linear-gradient(90deg, #1d4ed8 0%, #2563eb 48%, #f59e0b 100%);
  color: white;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 22px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15);
}

.brand-wrap h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1;
  letter-spacing: -0.08em;
  font-weight: 800;
}

.brand-wrap p {
  margin: 4px 0 0;
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.85;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.ghost-btn,
.toolbar-btn,
.panel-action {
  border: none;
  border-radius: 12px;
  font-weight: 700;
  padding: 10px 14px;
}

.ghost-btn {
  background: rgba(255, 255, 255, 0.18);
  color: white;
}

.toolbar-btn,
.panel-action {
  background: rgba(255,255,255,0.18);
  color: #0f172a;
}

.hidden {
  display: none !important;
}

.main-panel {
  position: relative;
  flex: 1;
  padding: 20px;
  background: linear-gradient(180deg, #f8fbff 0%, #edf3fb 100%);
}

.view {
  display: none;
  gap: 18px;
}

.view.active {
  display: flex;
  flex-direction: column;
}

.hero-card {
  background: linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,158,11,0.18));
  border: 1px solid rgba(37,99,235,0.12);
  border-radius: 20px;
  padding: 18px 18px 20px;
}

.eyebrow {
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(37,99,235,0.12);
  color: var(--blue-dark);
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero-card h2 {
  margin: 12px 0 8px;
  font-size: clamp(1.7rem, 2vw, 2.2rem);
  line-height: 1.1;
}

.hero-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
}

.stats-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}

.mini-stat {
  background: white;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px 12px;
  text-align: center;
}

.mini-stat span {
  display: block;
  font-size: 0.7rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
}

.mini-stat strong {
  display: block;
  margin-top: 8px;
  font-size: 1.4rem;
  line-height: 1;
}

.accent-gas strong {
  color: #c2410c;
}

.accent-water strong {
  color: #0369a1;
}

.panel-box,
.card {
  background: var(--panel);
  border: 1px solid var(--border);
  box-shadow: 0 12px 22px rgba(15, 23, 42, 0.03);
  border-radius: 20px;
}

.panel-box {
  padding: 18px;
}

.customer-box {
  background: #f8fbff;
}

.admin-box {
  background: #fffaf0;
  border-color: rgba(245,158,11,0.25);
}

.panel-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.panel-title.compact {
  margin-bottom: 12px;
}

.panel-title h3,
.customer-details-header h3,
.admin-banner h3 {
  margin: 0;
  font-size: 1.1rem;
}

.icon {
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  font-size: 1rem;
}

.icon.blue {
  background: var(--blue-soft);
}

.icon.amber {
  background: var(--amber-soft);
  color: var(--amber-dark);
}

.icon.grey {
  background: #e2e8f0;
}

.stack-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.76rem;
  color: var(--muted);
  font-weight: 700;
}

input {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: white;
  padding: 14px 14px;
  font-size: 0.98rem;
  color: var(--text);
  outline: none;
}

input:focus {
  border-color: rgba(37,99,235,0.6);
  box-shadow: 0 0 0 4px rgba(37,99,235,0.08);
}

.primary-btn,
.secondary-btn,
.whatsapp-btn,
.add-btn,
.redeem-btn,
.danger-btn,
.panel-action {
  border: none;
  border-radius: 14px;
  padding: 14px 16px;
  font-weight: 800;
  font-size: 0.95rem;
}

.primary-btn {
  background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
  color: white;
  box-shadow: 0 12px 22px rgba(37,99,235,0.18);
}

.secondary-btn {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  box-shadow: 0 12px 22px rgba(245,158,11,0.18);
}

.wide-btn {
  width: 100%;
}

.error-message {
  color: var(--red);
  margin: 0;
  font-size: 0.78rem;
  font-weight: 700;
}

.welcome-card {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  border-radius: 22px;
  padding: 18px 18px 16px;
  box-shadow: 0 18px 28px rgba(15,23,42,0.12);
}

.welcome-card p {
  margin: 0;
  color: rgba(255,255,255,0.72);
  font-size: 0.78rem;
}

.welcome-card h2 {
  margin: 6px 0 10px;
  font-size: clamp(1.5rem, 5vw, 2rem);
}

.address-row {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.8);
}

.address-row p {
  margin: 0;
  font-size: 0.8rem;
}

.card {
  padding: 18px;
}

.loyalty-card {
  color: white;
  position: relative;
  overflow: hidden;
}

.loyalty-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent 36%);
  pointer-events: none;
}

.gas-card {
  background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
}

.water-card {
  background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
}

.tag {
  display: inline-flex;
  background: rgba(255,255,255,0.2);
  color: white;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.card-header h3 {
  margin: 10px 0 0;
  font-size: 1.8rem;
  line-height: 1.1;
}

.card-icon {
  font-size: 2rem;
  opacity: 0.85;
}

.card-copy {
  position: relative;
  z-index: 1;
  margin: 14px 0 18px;
  color: rgba(255,255,255,0.88);
  font-size: 0.8rem;
}

.stamps-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  position: relative;
  z-index: 1;
}

.stamp-box {
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 1.05rem;
  transition: 0.2s ease;
}

.stamp-box.active {
  background: rgba(255,255,255,0.96);
  color: #0f172a;
  box-shadow: 0 8px 18px rgba(15,23,42,0.12);
}

.gas-card .stamp-box.active {
  color: #c2410c;
}

.water-card .stamp-box.active {
  color: #0369a1;
}

.stamp-box.empty {
  background: rgba(15,23,42,0.16);
  color: rgba(255,255,255,0.45);
  border: 1px solid rgba(255,255,255,0.08);
}

.stamp-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 16px;
  position: relative;
  z-index: 1;
  font-size: 0.75rem;
  font-weight: 700;
}

.reward-badge {
  background: rgba(255,255,255,0.94);
  padding: 8px 10px;
  border-radius: 999px;
  color: inherit;
  font-size: 0.64rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.gas-card .reward-badge {
  color: #c2410c;
}

.water-card .reward-badge {
  color: #0369a1;
}

.whatsapp-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  box-shadow: 0 14px 24px rgba(16,185,129,0.2);
}

.history-card {
  background: #f8fafc;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.history-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 11px 12px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text);
}

.history-title {
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.5;
}

.history-date {
  font-size: 0.67rem;
  color: var(--muted);
}

.admin-banner {
  background: linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.02));
  border: 1px solid rgba(245,158,11,0.15);
  border-radius: 18px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.stat-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
}

.stat-card span {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  font-weight: 700;
}

.stat-card strong {
  display: block;
  margin-top: 8px;
  font-size: 1.6rem;
  line-height: 1;
}

.stat-card.gas strong {
  color: #c2410c;
}

.stat-card.water strong {
  color: #0369a1;
}

.stat-card.prize strong {
  color: #0f766e;
}

.admin-section {
  background: #f8fafc;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 16px;
}

.section-label {
  display: block;
  margin-bottom: 10px;
  font-size: 0.72rem;
  color: var(--muted);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

#searchCustomerInput {
  width: 100%;
  margin-bottom: 12px;
}

.customer-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 250px;
  overflow: auto;
}

.customer-item {
  width: 100%;
  background: white;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  text-align: left;
}

.customer-item.active {
  background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
  border-color: transparent;
  color: white;
}

.customer-main p,
.customer-main strong {
  margin: 0;
}

.customer-main strong {
  font-size: 0.92rem;
}

.customer-main span {
  display: block;
  font-size: 0.64rem;
  margin-top: 4px;
  opacity: 0.8;
}

.customer-status {
  font-size: 0.68rem;
  text-align: right;
  line-height: 1.5;
}

.customer-control {
  padding: 18px;
}

.customer-details-header {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  align-items: flex-start;
  padding-bottom: 14px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;
}

.customer-details-header p {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 0.8rem;
}

.mini-tag {
  display: inline-block;
  color: var(--amber-dark);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.danger-btn {
  background: var(--red-soft);
  color: var(--red);
  font-size: 0.74rem;
}

.control-section {
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  padding-top: 16px;
  margin-top: 14px;
}

.control-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.stamp-name {
  font-size: 0.8rem;
  font-weight: 800;
}

.gas-name {
  color: #c2410c;
}

.water-name {
  color: #0369a1;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.add-btn {
  font-size: 0.74rem;
  padding: 11px 10px;
  font-weight: 800;
}

.gas-btn {
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  color: #1f2937;
}

.water-btn {
  background: linear-gradient(135deg, #67e8f9 0%, #06b6d4 100%);
  color: #082f49;
}

.redeem-btn {
  background: rgba(239,68,68,0.08);
  color: #b91c1c;
  border: 1px solid rgba(239,68,68,0.12);
  font-size: 0.73rem;
}

.register-card {
  background: #f8fafc;
}

.compact-form {
  gap: 10px;
}

.toolbar-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.panel-action {
  background: #e2e8f0;
  color: #0f172a;
}

.panel-action.danger {
  background: #fee2e2;
  color: #991b1b;
}

.footer {
  text-align: center;
  color: #64748b;
  font-size: 0.7rem;
  background: #f8fafc;
  padding: 14px 16px;
  border-top: 1px solid var(--border);
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%) translateY(20px);
  background: rgba(15, 23, 42, 0.95);
  color: white;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  opacity: 0;
  pointer-events: none;
  transition: 0.25s ease;
  z-index: 50;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

@media (max-width: 420px) {
  body {
    padding: 0;
  }

  .app-shell {
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
  }

  .main-panel {
    padding: 18px 14px 22px;
  }
}
