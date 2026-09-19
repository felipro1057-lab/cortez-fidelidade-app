const STORAGE_KEY = 'cortez_fidelity_customers_v1';
const ADMIN_PIN = '1234';
const MAX_STAMPS = 10;

const initialCustomers = [
  {
    id: '1',
    name: 'João Silva',
    phone: '88999998888',
    address: 'Rua das Flores, 123 - Centro',
    gasStamps: 7,
    waterStamps: 9,
    history: [
      { type: 'gas', action: 'add', count: 1, date: '10/05/2024 - 14:30' },
      { type: 'water', action: 'add', count: 2, date: '12/05/2024 - 09:15' }
    ]
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    phone: '88988887777',
    address: 'Av. Principal, 456 - Bairro Novo',
    gasStamps: 10,
    waterStamps: 3,
    history: [
      { type: 'gas', action: 'add', count: 10, date: '01/05/2024 - 11:00' }
    ]
  }
];

const state = {
  view: 'login',
  customers: loadCustomers(),
  currentCustomer: null,
  selectedAdminCustomer: null,
  searchTerm: ''
};

const els = {
  loginView: document.getElementById('loginView'),
  clientView: document.getElementById('clientView'),
  adminView: document.getElementById('adminView'),
  logoutBtn: document.getElementById('logoutBtn'),
  clientLoginForm: document.getElementById('clientLoginForm'),
  phoneInput: document.getElementById('phoneInput'),
  adminLoginForm: document.getElementById('adminLoginForm'),
  adminPinInput: document.getElementById('adminPinInput'),
  pinError: document.getElementById('pinError'),
  clientName: document.getElementById('clientName'),
  clientAddress: document.getElementById('clientAddress'),
  gasStamps: document.getElementById('gasStamps'),
  waterStamps: document.getElementById('waterStamps'),
  gasProgressText: document.getElementById('gasProgressText'),
  gasRewardBadge: document.getElementById('gasRewardBadge'),
  waterProgressText: document.getElementById('waterProgressText'),
  waterRewardBadge: document.getElementById('waterRewardBadge'),
  historyList: document.getElementById('historyList'),
  whatsappLink: document.getElementById('whatsappLink'),
  searchCustomerInput: document.getElementById('searchCustomerInput'),
  customerList: document.getElementById('customerList'),
  adminCustomerPanel: document.getElementById('adminCustomerPanel'),
  selectedCustomerName: document.getElementById('selectedCustomerName'),
  selectedCustomerPhone: document.getElementById('selectedCustomerPhone'),
  selectedGasValue: document.getElementById('selectedGasValue'),
  selectedWaterValue: document.getElementById('selectedWaterValue'),
  deleteCustomerBtn: document.getElementById('deleteCustomerBtn'),
  createCustomerForm: document.getElementById('createCustomerForm'),
  newCustomerName: document.getElementById('newCustomerName'),
  newCustomerPhone: document.getElementById('newCustomerPhone'),
  newCustomerAddress: document.getElementById('newCustomerAddress'),
  statClients: document.getElementById('statClients'),
  statGas: document.getElementById('statGas'),
  statWater: document.getElementById('statWater'),
  statPrizes: document.getElementById('statPrizes')
};

initialize();

function initialize() {
  bindEvents();
  render();
}

function bindEvents() {
  els.clientLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleClientLogin();
  });

  els.adminLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleAdminLogin();
  });

  els.logoutBtn.addEventListener('click', () => {
    state.currentCustomer = null;
    state.selectedAdminCustomer = null;
    setView('login');
  });

  els.searchCustomerInput.addEventListener('input', (event) => {
    state.searchTerm = event.target.value.trim();
    renderCustomerList();
  });

  document.querySelectorAll('[data-type]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.type;
      const amount = Number(button.dataset.amount || 0);
      handleUpdateStamps(type, amount);
    });
  });

  els.deleteCustomerBtn.addEventListener('click', () => {
    if (!state.selectedAdminCustomer) return;

    const confirmed = window.confirm(
      `Deseja excluir o cliente ${state.selectedAdminCustomer.name}?`
    );

    if (!confirmed) return;

    state.customers = state.customers.filter(
      (customer) => customer.id !== state.selectedAdminCustomer.id
    );

    persistCustomers();
    state.selectedAdminCustomer = null;
    render();
  });

  els.createCustomerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCreateCustomer();
  });
}

function loadCustomers() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return initialCustomers;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : initialCustomers;
  } catch (error) {
    return initialCustomers;
  }
}

function persistCustomers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.customers));
}

function setView(viewName) {
  state.view = viewName;
  render();
}

function render() {
  updateViewVisibility();
  updateCustomerView();
  updateAdminView();
  updateMetrics();
}

function updateViewVisibility() {
  const showLogout = state.view !== 'login';
  els.logoutBtn.classList.toggle('hidden', !showLogout);

  els.loginView.classList.toggle('active', state.view === 'login');
  els.clientView.classList.toggle('active', state.view === 'client');
  els.adminView.classList.toggle('active', state.view === 'admin');
}

function handleClientLogin() {
  const rawPhone = els.phoneInput.value.trim();
  const cleanPhone = normalizePhone(rawPhone);

  if (!cleanPhone) {
    alert('Informe um telefone válido.');
    return;
  }

  const found = state.customers.find(
    (customer) => normalizePhone(customer.phone) === cleanPhone
  );

  if (!found) {
    alert('Telefone não encontrado no cadastro. Entre em contato com a Cortez Gás para se cadastrar!');
    return;
  }

  state.currentCustomer = found;
  setView('client');
}

function handleAdminLogin() {
  const pin = els.adminPinInput.value.trim();

  if (pin === ADMIN_PIN) {
    els.pinError.classList.add('hidden');
    els.adminPinInput.value = '';
    setView('admin');
    return;
  }

  els.pinError.classList.remove('hidden');
}

function handleCreateCustomer() {
  const name = els.newCustomerName.value.trim();
  const phone = normalizePhone(els.newCustomerPhone.value);
  const address = els.newCustomerAddress.value.trim();

  if (!name || !phone) {
    alert('Informe nome e WhatsApp do cliente.');
    return;
  }

  if (state.customers.some((customer) => normalizePhone(customer.phone) === phone)) {
    alert('Este número já está cadastrado no sistema!');
    return;
  }

  const newCustomer = {
    id: String(Date.now()),
    name,
    phone,
    address,
    gasStamps: 0,
    waterStamps: 0,
    history: []
  };

  state.customers = [...state.customers, newCustomer];
  persistCustomers();

  state.selectedAdminCustomer = newCustomer;
  els.newCustomerName.value = '';
  els.newCustomerPhone.value = '';
  els.newCustomerAddress.value = '';

  alert('Cliente cadastrado com sucesso!');
  render();
}

function handleUpdateStamps(type, amount) {
  const target = state.selectedAdminCustomer;
  if (!target) return;

  const nextCustomers = state.customers.map((customer) => {
    if (customer.id !== target.id) return customer;

    const nextCustomer = {
      ...customer,
      gasStamps: customer.gasStamps,
      waterStamps: customer.waterStamps,
      history: [...customer.history]
    };

    if (type === 'gas') {
      nextCustomer.gasStamps = clamp(customer.gasStamps + amount, 0, MAX_STAMPS);
    }

    if (type === 'water') {
      nextCustomer.waterStamps = clamp(customer.waterStamps + amount, 0, MAX_STAMPS);
    }

    const now = new Date();
    const dateStr = `${now.toLocaleDateString('pt-BR')} - ${now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    })}`;

    nextCustomer.history.unshift({
      type,
      action: amount > 0 ? 'add' : 'redeem',
      count: Math.abs(amount),
      date: dateStr
    });

    return nextCustomer;
  });

  state.customers = nextCustomers;
  state.selectedAdminCustomer = state.customers.find(
    (customer) => customer.id === target.id
  ) || null;

  if (state.currentCustomer && state.currentCustomer.id === target.id) {
    state.currentCustomer = state.selectedAdminCustomer;
  }

  persistCustomers();
  render();
}

function updateCustomerView() {
  if (state.view !== 'client' || !state.currentCustomer) return;

  const customer = state.currentCustomer;

  els.clientName.textContent = customer.name;
  els.clientAddress.textContent = customer.address || 'Endereço não cadastrado';

  renderStampGrid('gas', customer.gasStamps, els.gasStamps);
  renderStampGrid('water', customer.waterStamps, els.waterStamps);

  els.gasProgressText.textContent = `${customer.gasStamps}/${MAX_STAMPS} Selos acumulados`;
  els.waterProgressText.textContent = `${customer.waterStamps}/${MAX_STAMPS} Selos acumulados`;

  const gasReady = customer.gasStamps >= MAX_STAMPS;
  const waterReady = customer.waterStamps >= MAX_STAMPS;
  els.gasRewardBadge.classList.toggle('hidden', !gasReady);
  els.waterRewardBadge.classList.toggle('hidden', !waterReady);

  const historyItems = customer.history.slice(0, 5);
  if (!historyItems.length) {
    els.historyList.innerHTML = '<p class="history-title">Nenhuma movimentação ainda.</p>';
    return;
  }

  els.historyList.innerHTML = historyItems
    .map((item) => {
      const label = item.action === 'add' ? '➕ Selo adicionado' : '🎁 Prêmio resgatado';
      const typeName = item.type === 'gas' ? 'Gás' : 'Água';
      return `
        <div class="history-item">
          <span class="history-title">${label} (${typeName})</span>
          <span class="history-date">${item.date}</span>
        </div>
      `;
    })
    .join('');

  const message = `Olá Cortez Gás! Sou ${customer.name} e gostaria de fazer um pedido.`;
  els.whatsappLink.href = `https://wa.me/5588999999999?text=${encodeURIComponent(message)}`;
}

function renderStampGrid(type, count, targetEl) {
  const cells = [];

  for (let index = 0; index < MAX_STAMPS; index += 1) {
    const active = index < count;
    const icon = type === 'gas' ? '🔥' : '💧';
    const label = active ? icon : index + 1;

    cells.push(`
      <div class="stamp-box ${active ? 'active' : 'empty'}">
        ${label}
      </div>
    `);
  }

  targetEl.innerHTML = cells.join('');
}

function updateAdminView() {
  if (state.view !== 'admin') return;

  const selected = state.selectedAdminCustomer;
  renderCustomerList();

  if (!selected) {
    els.adminCustomerPanel.classList.add('hidden');
    return;
  }

  els.adminCustomerPanel.classList.remove('hidden');
  els.selectedCustomerName.textContent = selected.name;
  els.selectedCustomerPhone.textContent = formatPhone(selected.phone);
  els.selectedGasValue.textContent = `${selected.gasStamps}/${MAX_STAMPS}`;
  els.selectedWaterValue.textContent = `${selected.waterStamps}/${MAX_STAMPS}`;
}

function renderCustomerList() {
  const term = state.searchTerm.toLowerCase();

  const filtered = state.customers.filter((customer) => {
    const name = customer.name.toLowerCase();
    const phone = customer.phone.toLowerCase();
    return !term || name.includes(term) || phone.includes(term);
  });

  if (!filtered.length) {
    els.customerList.innerHTML = '<p class="history-title">Nenhum cliente encontrado.</p>';
    return;
  }

  els.customerList.innerHTML = filtered
    .map((customer) => {
      const isActive = state.selectedAdminCustomer && state.selectedAdminCustomer.id === customer.id;
      return `
        <button type="button" class="customer-item ${isActive ? 'active' : ''}" data-customer-id="${customer.id}">
          <div class="customer-main">
            <strong>${customer.name}</strong>
            <span>${formatPhone(customer.phone)}</span>
          </div>
          <div class="customer-status">
            Gás: ${customer.gasStamps}/10<br />
            Água: ${customer.waterStamps}/10
          </div>
        </button>
      `;
    })
    .join('');

  els.customerList.querySelectorAll('[data-customer-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.customerId;
      state.selectedAdminCustomer = state.customers.find((customer) => customer.id === id) || null;
      render();
    });
  });
}

function updateMetrics() {
  const totalClients = state.customers.length;
  const totalGas = state.customers.reduce((sum, customer) => sum + customer.gasStamps, 0);
  const totalWater = state.customers.reduce((sum, customer) => sum + customer.waterStamps, 0);
  const prizeCount = state.customers.filter(
    (customer) => customer.gasStamps >= MAX_STAMPS || customer.waterStamps >= MAX_STAMPS
  ).length;

  els.statClients.textContent = String(totalClients);
  els.statGas.textContent = String(totalGas);
  els.statWater.textContent = String(totalWater);
  els.statPrizes.textContent = String(prizeCount);
}

function normalizePhone(value) {
  return String(value || '').replace(/\D/g, '');
}

function formatPhone(phone) {
  const digits = normalizePhone(phone);
  if (digits.length !== 11) return digits || 'Sem telefone';
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

window.addEventListener('DOMContentLoaded', () => {
  render();
});







































































































































































































