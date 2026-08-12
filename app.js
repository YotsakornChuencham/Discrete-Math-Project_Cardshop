// Database สินค้า
const games = [
  { id: 1, title: 'Cyber Logic 2077', price: 1200, category: 'RPG', tags: ['OnSale', 'InStock'], img: 'https://picsum.photos/300/200?random=1' },
  { id: 2, title: 'Set Theory Tactics', price: 450, category: 'Strategy', tags: ['InStock'], img: 'https://picsum.photos/300/200?random=2' },
  { id: 3, title: 'Boolean Brawler', price: 300, category: 'Action', tags: ['OnSale', 'InStock'], img: 'https://picsum.photos/300/200?random=3' },
  { id: 4, title: 'Algorithm Quest', price: 850, category: 'RPG', tags: ['PreOrder'], img: 'https://picsum.photos/300/200?random=4' },
  { id: 5, title: 'Discrete Odyssey', price: 400, category: 'Action', tags: ['InStock'], img: 'https://picsum.photos/300/200?random=5' },
  { id: 6, title: 'Matrix Runner', price: 250, category: 'Strategy', tags: ['OnSale', 'InStock'], img: 'https://picsum.photos/300/200?random=6' }
];

// ----------------------------------------------------
// 1. LocalStorage & Cart Management System
// ----------------------------------------------------
function getCartFromStorage() {
  const data = localStorage.getItem('shopee_cart');
  return data ? JSON.parse(data) : [];
}

function saveCartToStorage(cartData) {
  localStorage.setItem('shopee_cart', JSON.stringify(cartData));
  updateCartUI();
  // หากอยู่ในหน้า checkout ให้รีเฟรชการคำนวณราคาด้วย
  if (typeof processCalculation === 'function') {
    processCalculation();
  }
}

function toggleCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

function addToCart(gameId) {
  let cart = getCartFromStorage();
  const game = games.find(g => g.id === gameId);
  if (!game) return;

  const existing = cart.find(item => item.id === gameId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...game, qty: 1 });
  }

  saveCartToStorage(cart);
  toggleCart();
}

function removeFromCart(gameId) {
  let cart = getCartFromStorage();
  cart = cart.filter(item => item.id !== gameId);
  saveCartToStorage(cart);
}

function updateCartUI() {
  const cart = getCartFromStorage();
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalPrice = document.getElementById('cartTotalPrice');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartBadge) cartBadge.innerText = totalQty;

  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (cartTotalPrice) cartTotalPrice.innerText = totalAmount.toFixed(2) + ' ฿';

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 2rem 0;">ไม่มีสินค้าในตะกร้า</p>';
      return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.title}">
        <div style="flex:1;">
          <div style="font-weight:600; font-size:0.9rem;">${item.title}</div>
          <div style="color:var(--success-color); font-size:0.85rem;">${item.price} ฿ x ${item.qty}</div>
        </div>
        <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ef4444; cursor:pointer; font-size:1.1rem;">🗑️</button>
      </div>
    `).join('');
  }
}

// ----------------------------------------------------
// 2. Hamburger Filter Menu Controls
// ----------------------------------------------------
function toggleFilterDrawer() {
  const drawer = document.getElementById('filterDrawer');
  const overlay = document.getElementById('filterOverlay');
  if (drawer && overlay) {
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

// ----------------------------------------------------
// 3. Accordion Toggle
// ----------------------------------------------------
function toggleMathAccordion() {
  const content = document.getElementById('mathAccordionContent');
  const arrow = document.getElementById('accordionArrow');
  if (content) {
    content.classList.toggle('show');
    if (arrow) arrow.innerText = content.classList.contains('show') ? '▲' : '▼';
  }
}

// ----------------------------------------------------
// 4. Render Game Cards
// ----------------------------------------------------
function renderGameCards(containerId, gameList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (gameList.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem 0;">ไม่พบรายการสินค้าที่ตรงตามเงื่อนไข</p>';
    return;
  }

  container.innerHTML = gameList.map(game => `
    <div class="card">
      <div>
        <img src="${game.img}" alt="${game.title}">
        <h3 class="card-title">${game.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.85rem;">หมวดหมู่: ${game.category}</p>
        <div class="tag-list">
          ${game.tags.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
      </div>
      <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
        <span class="card-price">${game.price} ฿</span>
        <button class="btn" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;" onclick="addToCart(${game.id})">🛒 ใส่ตะกร้า</button>
      </div>
    </div>
  `).join('');
}

// ----------------------------------------------------
// 5. Logic หน้าที่ 1: Set Theory + Search + Hamburger Filter
// ----------------------------------------------------
function initSetPage() {
  const searchInput = document.getElementById('searchInput');
  const catSelect = document.getElementById('catSelect');
  const tagSelect = document.getElementById('tagSelect');
  const opSelect = document.getElementById('opSelect');

  if (!catSelect || !tagSelect || !opSelect) return;

  function applySetFilter() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedCat = catSelect.value;
    const selectedTag = tagSelect.value;
    const operation = opSelect.value;

    const filtered = games.filter(game => {
      // 1. ค้นหาตามชื่อเกม (Search Input)
      const matchesSearch = game.title.toLowerCase().includes(query);

      // 2. กรองตาม Set Theory (Category Set A, Tag Set B)
      const inSetA = selectedCat === '' || game.category === selectedCat;
      const inSetB = selectedTag === '' || game.tags.includes(selectedTag);

      let matchesSet = true;
      if (operation === 'INTERSECTION') matchesSet = inSetA && inSetB;
      else if (operation === 'UNION') matchesSet = inSetA || inSetB;
      else if (operation === 'DIFFERENCE') matchesSet = inSetA && !inSetB;

      return matchesSearch && matchesSet;
    });

    renderGameCards('gameGrid', filtered);
  }

  if (searchInput) searchInput.addEventListener('input', applySetFilter);
  catSelect.addEventListener('change', applySetFilter);
  tagSelect.addEventListener('change', applySetFilter);
  opSelect.addEventListener('change', applySetFilter);

  applySetFilter();
}

// ----------------------------------------------------
// 6. Logic หน้าที่ 2: Boolean Logic Filter
// ----------------------------------------------------
function initBooleanPage() {
  const pVal = document.getElementById('p_val');
  const qVal = document.getElementById('q_val');
  const rVal = document.getElementById('r_val');

  if (!pVal || !qVal || !rVal) return;

  function evaluateBooleanLogic() {
    const P = pVal.checked;
    const Q = qVal.checked;
    const R = rVal.checked;

    const overallLogic = (P && Q) || R;
    const statusBox = document.getElementById('truthValueResult');
    if (statusBox) {
      statusBox.innerText = overallLogic ? "TRUE (แสดงผล)" : "FALSE (ไม่พบข้อมูล)";
      statusBox.style.color = overallLogic ? "var(--success-color)" : "#ef4444";
    }

    const filtered = games.filter(game => {
      const gameP = game.tags.includes('InStock');
      const gameQ = game.tags.includes('OnSale');
      const gameR = game.price < 500;
      return ((!P || gameP) && (!Q || gameQ) && (!R || gameR));
    });

    renderGameCards('booleanResults', filtered);
  }

  pVal.addEventListener('change', evaluateBooleanLogic);
  qVal.addEventListener('change', evaluateBooleanLogic);
  rVal.addEventListener('change', evaluateBooleanLogic);

  evaluateBooleanLogic();
}

// ----------------------------------------------------
// 7. Logic หน้าที่ 3: If-Else Discount Calculation (ดึงยอดรวมจาก Cart จริง)
// ----------------------------------------------------
function calculateDiscount(cartTotal, isMember, couponCode) {
  let discountRatio = 0;
  let reason = "";

  if (isMember && cartTotal >= 1000) {
    discountRatio = 0.20;
    reason = "สมาชิก VIP สั่งซื้อตั้งแต่ 1,000 บาทขึ้นไป (ลด 20%)";
  } else if (isMember || cartTotal >= 500) {
    discountRatio = 0.10;
    reason = "เป็นสมาชิก VIP หรือยอดซื้อครบ 500 บาท (ลด 10%)";
  } else if (couponCode.trim().toUpperCase() === 'DISCRETE2026') {
    discountRatio = 0.05;
    reason = "ใช้โค้ดส่วนลดพิเศษ DISCRETE2026 (ลด 5%)";
  } else {
    discountRatio = 0.0;
    reason = "ไม่อยู่ในเงื่อนไขส่วนลด";
  }

  const discountAmount = cartTotal * discountRatio;
  return {
    netTotal: cartTotal - discountAmount,
    discountPercent: discountRatio * 100,
    reason: reason
  };
}

// Global Init Dispatcher
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI(); // โหลดข้อมูลตะกร้าจาก localStorage เสมอ
  initSetPage();
  initBooleanPage();
});