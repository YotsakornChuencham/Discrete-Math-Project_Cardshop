// Database สินค้าตัวอย่าง
const games = [
  { id: 1, title: 'Cyber Logic 2077', price: 1200, category: 'RPG', tags: ['OnSale', 'InStock'], img: 'https://dummyimage.com/600x400/000/fff' },
  { id: 2, title: 'Set Theory Tactics', price: 450, category: 'Strategy', tags: ['InStock'], img: 'https://dummyimage.com/600x400/000/fff' },
  { id: 3, title: 'Boolean Brawler', price: 300, category: 'Action', tags: ['OnSale', 'InStock'], img: 'https://dummyimage.com/600x400/000/fff' },
  { id: 4, title: 'Algorithm Quest', price: 850, category: 'RPG', tags: ['PreOrder'], img: 'https://dummyimage.com/600x400/000/fff' },
  { id: 5, title: 'Discrete Odyssey', price: 400, category: 'Action', tags: ['InStock'], img: 'https://dummyimage.com/600x400/000/fff' },
  { id: 6, title: 'Matrix Runner', price: 250, category: 'Strategy', tags: ['OnSale', 'InStock'], img: 'https://dummyimage.com/600x400/000/fff' }
];

// ฟังก์ชันสร้างการ์ด HTML สำหรับแสดงสินค้า
function renderGameCards(containerId, gameList) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (gameList.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">ไม่พบรายการสินค้าที่ตรงตามเงื่อนไข</p>';
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
        <button class="btn" style="padding: 0.4rem 0.8rem; font-size: 0.85rem;">ซื้อ</button>
      </div>
    </div>
  `).join('');
}

// ----------------------------------------------------
// หน้าที่ 1: Set Theory Filter Logic
// ----------------------------------------------------
function initSetPage() {
  const catSelect = document.getElementById('catSelect');
  const tagSelect = document.getElementById('tagSelect');
  const opSelect = document.getElementById('opSelect');

  if (!catSelect || !tagSelect || !opSelect) return;

  function applySetFilter() {
    const selectedCat = catSelect.value;
    const selectedTag = tagSelect.value;
    const operation = opSelect.value;

    const filtered = games.filter(game => {
      const inSetA = selectedCat === '' || game.category === selectedCat;
      const inSetB = selectedTag === '' || game.tags.includes(selectedTag);

      // ใช้หลักตรรกะของ Set Theory
      if (operation === 'INTERSECTION') {
        return inSetA && inSetB; // A ∩ B
      } else if (operation === 'UNION') {
        return inSetA || inSetB; // A ∪ B
      } else if (operation === 'DIFFERENCE') {
        return inSetA && !inSetB; // A \ B
      }
      return true;
    });

    renderGameCards('gameGrid', filtered);
  }

  catSelect.addEventListener('change', applySetFilter);
  tagSelect.addEventListener('change', applySetFilter);
  opSelect.addEventListener('change', applySetFilter);

  applySetFilter(); // โหลดครั้งแรก
}

// ----------------------------------------------------
// หน้าที่ 2: Boolean Logic Evaluator
// ----------------------------------------------------
function initBooleanPage() {
  const pVal = document.getElementById('p_val');
  const qVal = document.getElementById('q_val');
  const rVal = document.getElementById('r_val');

  if (!pVal || !qVal || !rVal) return;

  function evaluateBooleanLogic() {
    const P = pVal.checked; // InStock
    const Q = qVal.checked; // OnSale
    const R = rVal.checked; // Price < 500

    // คำนวณค่าความจริงรวม
    const overallLogic = (P && Q) || R;
    
    const statusBox = document.getElementById('truthValueResult');
    if(statusBox) {
      statusBox.innerText = overallLogic ? "TRUE (แสดงผล)" : "FALSE (ไม่พบข้อมูล)";
      statusBox.style.color = overallLogic ? "var(--success-color)" : "#ef4444";
    }

    const filtered = games.filter(game => {
      const gameP = game.tags.includes('InStock');
      const gameQ = game.tags.includes('OnSale');
      const gameR = game.price < 500;

      // กรองสินค้าที่สอดคล้องตาม Boolean Expression ที่เลือก
      return ((!P || gameP) && (!Q || gameQ) && (!R || gameR));
    });

    renderGameCards('booleanResults', filtered);
  }

  pVal.addEventListener('change', evaluateBooleanLogic);
  qVal.addEventListener('change', evaluateBooleanLogic);
  rVal.addEventListener('change', evaluateBooleanLogic);

  evaluateBooleanLogic(); // โหลดครั้งแรก
}

// ----------------------------------------------------
// หน้าที่ 3: If-Else Discount Calculation
// ----------------------------------------------------
function calculateDiscount(cartTotal, isMember, couponCode) {
  let discountRatio = 0;
  let reason = "";

  // เงื่อนไขแบบขั้นบันได (If-Else Ladder)
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
  const netTotal = cartTotal - discountAmount;

  return {
    netTotal: netTotal,
    discountPercent: discountRatio * 100,
    reason: reason
  };
}

// Global Init Dispatcher
document.addEventListener('DOMContentLoaded', () => {
  initSetPage();
  initBooleanPage();
});