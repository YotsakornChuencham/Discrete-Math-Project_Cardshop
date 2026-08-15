/* =========================================================
   LogicCraft Games
   Discrete Mathematics Applied Project
   app.js
   ========================================================= */

/* =========================================================
   1. PRODUCT DATABASE
   ========================================================= */

const games = [
  {
    id: 1,
    title: "Dark Magician, the Pharaoh's Servant",
    price: 4000,
    category: 'Monster',
    rarity: 'UR',
    frame1: 'Effect',
    attribute: 'Dark',
    CardType: 'Spellcaster',
    tags: ['OnSale', 'InStock'],
    img: 'https://ms.yugipedia.com//c/c1/DarkMagicianthePharaohsServant-LOCH-JP-OP-EA.png'
  },
  {
    id: 2,
    title: 'Blue-Eyes White Dragon',
    price: 450,
    category: 'Monster',
    rarity: 'UR',
    frame1: 'Normal',
    frame2: '',
    attribute: 'Light',
    CardType: 'Dragon',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEjAeaoHM1qW8j58P7Kf_RDdnMTm0OoYZCKljjJ0dZmijPLU-u0PzIhhdiZ_f4DPmZrx1qdcN0HQqBRWnj9nHqZA8AIoXFZJ_xhqbQWucG0twgdHZa0zqDL0JYBxHq0hRvhghO8rZUljd8lArkzzkIM46XH7yrT0WBA_pfXxG1A38bubRQkAX_n_HuKw'
  },
  {
    id: 3,
    title: 'Future Fusion Nova',
    price: 20,
    category: 'Spell',
    rarity: 'R',
    frame1: '',
    frame2: 'Spell',  
    attribute: '',
    CardType: '',
    spellType: 'Continuous Sell',
    tags: ['OnSale', 'InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia-2nhgJRtJKPcB0179eNoxV3wMezfR0-IIPivSnC7dTp2tZcC_1wnSrhEFfk3ww6CaB_EkYy6lpqLEx4N2cL5mhqiiz4hDzq3WEXiHZN3JzG3-h4I0m9oIPve-bvSMQYopgsz-83lePaxRb4iLc2Y2ZtvRzcZ1SVThbOXDqMv-zw0MzULmbHI9waYuHM/s1600/Future%20Fusion%20Nova.jpg'
  },
  {
    id: 4,
    title: 'Elemental HERO Flame Wingman',
    price: 200,
    category: 'Monster',
    rarity: 'SR',
    frame1: 'Fusion',
    frame2: 'Effect',
    attribute: 'Wind',
    CardType: 'Warrior',
    tags: ['PreOrder'],
    img: 'https://blogger.googleusercontent.com/img/a/AVvXsEg-ys-lkkBWu_k1sgRs9-kJPAwwDFE6HNVCYw6yGo3Ao_r0kxkoYU_SX8Q-PT-JV2rwdAi5PLKSmju4wwnz3Psc-O_U5IBJCby-F1SSkA7uifKroqEO4u-wk2z5yr0xPXokpf1-tUftPr3D3Nc9wfUqlKFdJw9Dp60hf--l3iVDESy3ryO4AWroQK0p'
  },
  {
    id: 5,
    title: 'Ghoti of the Deep Beyond',
    price: 400,
    category: 'Monster',
    rarity: 'UR',
    frame1: 'Synchro',
    frame2: 'Effect',
    attribute: 'Water',
    CardType: 'Fish',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7lUY7jWWxeYPpLtAucdZqphHGaTpEoL1IT3n82WT47CFkU7iH4ervHSXb9d873wBS8MtF9y-JeopBGiQMnlaubjNPF0XhSPlwSJtJ_4OMiO3whu7W0p8BBLbrXN-J1dqEZF_Ozfk9L9DJZmvPLWgduiwqf6_kvUWVvgBYXhDGgKlP1D5JX-87-BaR/s1600/Ghoti%20of%20the%20Deep%20Beyond.jpg'
  },
  {
    id: 6,
    title: 'Odd-Eyes Arcray Dragon',
    price: 50,
    category: 'Monster',
    rarity: 'SR',
    frame1: 'Fusion',
    frame2: 'Pendulum',
    attribute: 'Light',
    CardType: 'Dragon',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE_PzYewQDgNvT2KkUqokadUsQHNVeBfDN7g3ZuKt9Gms-pGkrl8FEfzGqrrsHHZwULpv_mpXPZNZmVoyrXQ8jGCuo0lkxfdPSuhyovCazM2KKt-lytqmMv8WEDnd7joCzVGInXsGH6j8K8NocTvSyXvtdXGrcW7pWOF01gki3fWT5hDm1G0fx_THDG0U/s1600/Odd-Eyes%20Arcray%20Dragon.jpg'
  },
  {
    id: 7,
    title: 'Odd-Eyes Arc Pendulum Dragon',
    price: 50,
    category: 'Monster',
    rarity: 'R',
    frame1: 'Normal',
    frame2: 'Pendulum',
    attribute: 'Dark',
    CardType: 'Dragon',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_QAsR2HhEBtZ_-m0XfbpmbSSaSdEniU6WlVCe-ou1IkuOueSBfsSV26nZvKk03wOxxWsYnqB7mS27n1GovaiATQZXTck0pW3w8nG6d4e6i5YmyG3pfZ2utoE6q48BqoKSaAB9vVlVe0jDwyXFkeZOyicdhNPpYuSncN9YUAEuvIIXIU1-IITmcyt7uo4/s1600/Odd-Eyes%20Arc%20Pendulum%20Dragon.jpg'
  },
  {
    id: 8,
    title: 'Odd-Eyes Rebellion Xyz Dragon',
    price: 50,
    category: 'Monster',
    rarity: 'R',
    frame1: 'XYZ',
    frame2: 'Pendulum',
    attribute: 'Dark',
    CardType: 'Dragon',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDICA4amCBH8Urfw1qAGJwgshNpuWjRrQXjTlQHJA1NM7RWVSfKoaGvUzTJOCNkzduOrVQYhmw4oxIN6IjoXpB3mLblXGXYztUJDT-or9Jwb-gViEb-jovCHN7NMNWFFxOpSDY82lLM3u_SFBBqfGyTtrXixIY3sV_TjUehyphenhyphenaNqyROBVewTYEn5buf4BQ/s1600/Odd-Eyes%20Rebellion%20Xyz%20Dragon.jpg'
  },
  {
    id: 9,
    title: 'Odd-Eyes Pendulumgraph Dragon Card',
    price: 50,
    category: 'Monster',
    rarity: 'R',
    frame1: 'Ritual',
    frame2: 'Pendulum',
    attribute: 'Light',
    CardType: 'Dragon',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7e6SiCVQAtWoyqf3HKclRjINqsUWjE0SULJRbpXnIYx-H8IAeVPcvGCHgkMmTR2br3PsUlisDGiy3lLrN77qrPnSgA5eA0_rjLbgQ2vobWnhrU_uoiaFWIS6WCHAvfVo8OTCSyVzxJLQBvZihRWieM3RzxImhqis0wXX-LMY10SYlXY4M1gwTJ_f2wS0/s1600/Odd-Eyes%20Pendulumgraph%20Dragon.jpg'
  },
  {
    id: 10,
    title: 'Odd-Eyes Wing Dragon',
    price: 50,
    category: 'Monster',
    rarity: 'R',
    frame1: 'Synchro',
    frame2: 'Pendulum',
    attribute: 'Dark',
    CardType: 'Dragon',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv8AZtPXbAVDCSUKM5NZGZaThR-YkVbumufmaQ3Zgq5wHmP4NkEkpOHuBIr9g49oTxXxfLSLELoJfEgKNBPKuqmetFeqCfICP76exN9J3WTzmesF7g6ZR0pSBdCULyq0-_0n98lA8CsN-TTclmAJ2qTY4y3Ml97lIKX_6zMY3wSxO8F_0GTEl2XXeT8yw/s1600/Odd-Eyes%20Wing%20Dragon.jpg'
  },
  {
    id: 11,
    title: 'Ragnaraika Stag Sovereign',
    price: 50,
    category: 'Monster',
    rarity: 'UR',
    frame1: 'Link',
    frame2: 'Effect',
    attribute: 'Earth',
    CardType: 'Insect',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeAz2-Ioc78vhPuA4O7RMYmUEwZzjveSDSrf58AyGHzRPXV-mmUoLnvaMDB66gHjt8FJUFHOrmdH-xbMND8qH3Uk0MoBFnlSRiiCP0Bof-zYHoEQ85C2btWZOb3TiPTXbhXmXFMU6WeWdz1VtBVkOd9CW_DhY9B4o7PJ9BQog24kJuGG18G4GLwoLPR6U/s1600/Ragnaraika%20Stag%20Sovereign.jpg'
  },
  {
    id: 12,
    title: 'Ragnaraika Bleached Wisteria',
    price: 50,
    category: 'Trap',
    rarity: 'N',
    frame1: 'Trap',
    frame2: 'Continuous trap',
    attribute: '',
    CardType: '',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtn2Vkbk5W9yAv9y0cvdxg4PVB53sOB_zEPGeRe40yRk4YQavoYIVPaIW-G36vqMy51ZJTDMb9-2xC3H5RmlQfilUdirBnYEmN14qfLEqp9PF7cFTeSyEwBXs51d4Ita56fvgWEv7W28VlmcRSdtAgUqzbjygK5bpJtmXpceIqjWw1Lv3co1C9MeLEQBY/s1600/Ragnaraika%20Bleached%20Wisteria.jpg'
  },
  {
    id: 13,
    title: 'Obelisk the Tormentor',
    price: 50,
    category: 'Monster',
    rarity: 'SR',
    frame1: 'Effect',
    frame2: '',
    attribute: 'Divine',
    CardType: 'Divine-Beast',
    tags: ['InStock'],
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd8CBqEeV2cEuddECPY7Ql3pfCQ8s6FRLwAc7gVgv2Wkk8XwJx41yUx8Kfo-xqJ-yolCAt9PnYgbifPs_wav8dXp03mUAYaN_ZgzERxBQg9ZA10L-SvJwKjjonGch5l3pJ5y8PuTHM0o3PBFlXfCWmbsKK-lEBjybs7udi_aRzPF3ftviHlbhZqL79/s1600/Obelisk%20the%20Tormentor.jpg'
  }
];


/* =========================================================
   2. FILTER STATE
   ========================================================= */

const filterState = {
  rarity: new Set(),
  frame: new Set(),
  attribute: new Set(),
  spellType: new Set()
};

let filterLogic = 'OR';



let appliedFilters = {
  rarity: [],
  frame: [],
  attribute: [],
  spellType: []
};

let appliedLogic = 'OR';


/* =========================================================
   3. SAFE HELPERS
   ========================================================= */

function escapeHTML(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


/* =========================================================
   4. LOCAL STORAGE / CART
   ========================================================= */

function getCartFromStorage() {
  try {
    const data = localStorage.getItem('shopee_cart');

    if (!data) {
      return [];
    }

    const parsed = JSON.parse(data);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map(item => {
        const id = Number(item.id);
        const qty = Math.max(1, Math.floor(Number(item.qty) || 1));

        const game = games.find(g => g.id === id);

        if (!game) {
          return null;
        }

        return {
          ...game,
          qty
        };
      })
      .filter(Boolean);

  } catch (error) {
    console.error('Cannot read cart from LocalStorage:', error);

    localStorage.removeItem('shopee_cart');

    return [];
  }
}


function saveCartToStorage(cartData) {

  const safeCart = cartData
    .map(item => ({
      id: Number(item.id),
      qty: Math.max(1, Math.floor(Number(item.qty) || 1))
    }))
    .filter(item => games.some(game => game.id === item.id));

  localStorage.setItem(
    'shopee_cart',
    JSON.stringify(safeCart)
  );

  updateCartUI();

  if (typeof processCalculation === 'function') {
    processCalculation();
  }
}


/* =========================================================
   5. CART DRAWER
   ========================================================= */

function toggleCart() {

  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');

  if (!drawer || !overlay) {
    return;
  }

  const isOpen = drawer.classList.toggle('open');

  overlay.classList.toggle('active', isOpen);

  drawer.setAttribute('aria-hidden', String(!isOpen));
}


function closeCart() {

  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartOverlay');

  if (!drawer || !overlay) {
    return;
  }

  drawer.classList.remove('open');
  overlay.classList.remove('active');

  drawer.setAttribute('aria-hidden', 'true');
}


/* =========================================================
   6. ADD / REMOVE / QUANTITY
   ========================================================= */

function addToCart(gameId) {

  const cart = getCartFromStorage();

  const game = games.find(
    item => item.id === Number(gameId)
  );

  if (!game) {
    return;
  }

  const existing = cart.find(
    item => item.id === game.id
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      ...game,
      qty: 1
    });
  }

  saveCartToStorage(cart);

  toggleCart();
}


function removeFromCart(gameId) {

  let cart = getCartFromStorage();

  cart = cart.filter(
    item => item.id !== Number(gameId)
  );

  saveCartToStorage(cart);
}


function changeCartQty(gameId, amount) {

  const cart = getCartFromStorage();

  const item = cart.find(
    product => product.id === Number(gameId)
  );

  if (!item) {
    return;
  }

  item.qty += Number(amount);

  if (item.qty <= 0) {

    const updatedCart = cart.filter(
      product => product.id !== Number(gameId)
    );

    saveCartToStorage(updatedCart);

    return;
  }

  saveCartToStorage(cart);
}


/* =========================================================
   7. CART UI
   ========================================================= */

function updateCartUI() {

  const cart = getCartFromStorage();

  const cartBadge =
    document.getElementById('cartBadge');

  const cartItemsContainer =
    document.getElementById('cartItems');

  const cartTotalPrice =
    document.getElementById('cartTotalPrice');


  /* Total Quantity */

  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  if (cartBadge) {

    cartBadge.innerText = totalQty;

    cartBadge.classList.toggle(
      'hidden',
      totalQty === 0
    );
  }


  /* Total Price */

  const totalAmount = cart.reduce(
    (sum, item) =>
      sum + (item.price * item.qty),
    0
  );


  if (cartTotalPrice) {

    cartTotalPrice.innerText =
      totalAmount.toLocaleString('th-TH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }) + ' ฿';
  }


  /* Cart Items */

  if (!cartItemsContainer) {
    return;
  }


  if (cart.length === 0) {

    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>ไม่มีสินค้าในตะกร้า</p>
      </div>
    `;

    return;
  }


  cartItemsContainer.innerHTML = cart.map(item => `

    <div class="cart-item">

      <img
        src="${escapeHTML(item.img)}"
        alt="${escapeHTML(item.title)}"
        loading="lazy"
      >

      <div class="cart-item-info">

        <div class="cart-item-title">
          ${escapeHTML(item.title)}
        </div>

        <div class="cart-item-price">
          ${item.price.toLocaleString('th-TH')} ฿
        </div>

        <div class="cart-qty">

          <button
            type="button"
            onclick="changeCartQty(${item.id}, -1)"
            aria-label="ลดจำนวนสินค้า"
          >
            −
          </button>

          <span>${item.qty}</span>

          <button
            type="button"
            onclick="changeCartQty(${item.id}, 1)"
            aria-label="เพิ่มจำนวนสินค้า"
          >
            +
          </button>

        </div>

      </div>

      <button
        type="button"
        class="remove-cart-btn"
        onclick="removeFromCart(${item.id})"
        aria-label="ลบสินค้า"
      >
        🗑
      </button>

    </div>

  `).join('');
}


/* =========================================================
   8. FILTER DRAWER
   ========================================================= */

function toggleFilterDrawer() {

  const drawer =
    document.getElementById('filterDrawer');

  const overlay =
    document.getElementById('filterOverlay');

  if (!drawer || !overlay) {
    return;
  }

  const isOpen =
    drawer.classList.toggle('open');

  overlay.classList.toggle(
    'active',
    isOpen
  );

  drawer.setAttribute(
    'aria-hidden',
    String(!isOpen)
  );
}


function closeFilterDrawer() {

  const drawer =
    document.getElementById('filterDrawer');

  const overlay =
    document.getElementById('filterOverlay');

  if (!drawer || !overlay) {
    return;
  }

  drawer.classList.remove('open');

  overlay.classList.remove('active');

  drawer.setAttribute(
    'aria-hidden',
    'true'
  );
}


/* =========================================================
   9. ACCORDION
   ========================================================= */

function toggleMathAccordion() {

  const content =
    document.getElementById(
      'mathAccordionContent'
    );

  const arrow =
    document.getElementById(
      'accordionArrow'
    );

  if (!content) {
    return;
  }

  const isOpen =
    content.classList.toggle('show');

  if (arrow) {
    arrow.innerText =
      isOpen ? '▲' : '▼';
  }
}


/* =========================================================
   10. FILTER CHIP MANAGEMENT
   ========================================================= */

function getFilterGroup(groupName) {

  if (!filterState[groupName]) {
    return null;
  }

  return filterState[groupName];
}


function toggleFilterValue(groupName, value) {

  const group =
    getFilterGroup(groupName);

  if (!group) {
    return;
  }


  /* ALL */

  if (value === '') {

    group.clear();

    updateFilterChipUI();

    return;
  }


  if (group.has(value)) {

    group.delete(value);

  } else {

    group.add(value);
  }


  updateFilterChipUI();
}


function updateFilterChipUI() {

  document
    .querySelectorAll('.filter-btn-chip')
    .forEach(button => {

      const group =
        button.dataset.group;

      const value =
        button.dataset.value;

      const selected =
        value === ''
          ? filterState[group]?.size === 0
          : filterState[group]?.has(value);

      button.classList.toggle(
        'active',
        Boolean(selected)
      );

    });


  const logicButton =
    document.getElementById(
      'logicToggleBtn'
    );

  if (logicButton) {

    logicButton.innerText =
      filterLogic;

    logicButton.classList.toggle(
      'and-mode',
      filterLogic === 'AND'
    );
  }
}


/* =========================================================
   11. OR / AND TOGGLE
   ========================================================= */

function toggleSetLogic() {

  filterLogic =
    filterLogic === 'OR'
      ? 'AND'
      : 'OR';

  updateFilterChipUI();
}


/* =========================================================
   12. SET OPERATION
   ========================================================= */

function setMathOperation(operation) {

  const allowed = [
    'INTERSECTION',
    'UNION',
    'DIFFERENCE'
  ];

  if (!allowed.includes(operation)) {
    return;
  }

  setOperation = operation;

  updateFilterChipUI();
}


/* =========================================================
   13. FILTER MATCHING
   ========================================================= */

function gameMatchesGroup(
  game,
  groupName,
  selectedValues
) {

  if (!selectedValues.length) {
    return true;
  }

  /*
   * หลายค่าในกลุ่มเดียวกัน = OR
   *
   * เช่น
   * R + SR
   * = R OR SR
   */

  if (groupName === 'rarity') {
    return selectedValues.includes(game.rarity);
  }


  /*
   * FRAME
   *
   * รองรับทั้ง:
   * frame1
   * frame2
   * frame
   *
   * เพื่อรองรับข้อมูลเก่าด้วย
   */

if (groupName === 'frame') {
  const frames = [
    game.frame1,
    game.frame2,
    game.frame
  ].filter(Boolean);

  if (filterLogic === 'AND') {
    return selectedValues.every(
      value => frames.includes(value)
    );
  }

  return selectedValues.some(
    value => frames.includes(value)
  );
}


  /*
   * ATTRIBUTE
   */

  if (groupName === 'attribute') {
    return selectedValues.includes(
      game.attribute
    );
  }


  /*
   * SPELL / TRAP
   *
   * รองรับข้อมูลที่เก็บไว้ใน:
   * spellType
   * CardType
   */

  if (groupName === 'spellType') {

    const spellType =
      game.spellType ||
      game.CardType ||
      '';

    return selectedValues.includes(
      spellType
    );
  }


  return true;
}



/* =========================================================
   14. SET THEORY ENGINE
   ========================================================= */

function evaluateSetFilter(game) {

  const groups = [
    'rarity',
    'frame',
    'attribute',
    'spellType'
  ];


  /*
   * เอาเฉพาะ Filter Group
   * ที่มีการเลือกค่า
   */

  const activeGroups =
    groups.filter(group =>
      appliedFilters[group].length > 0
    );


  /*
   * ไม่มี Filter
   * = แสดงทุกการ์ด
   */

  if (activeGroups.length === 0) {
    return true;
  }


  /*
   * ตรวจสอบแต่ละกลุ่ม
   */

  const results =
    activeGroups.map(group =>
      gameMatchesGroup(
        game,
        group,
        appliedFilters[group]
      )
    );


  /*
   * OR
   *
   * ตรงอย่างน้อย 1 กลุ่ม
   */

  if (appliedLogic === 'OR') {
    return results.some(Boolean);
  }


  /*
   * AND
   *
   * ต้องตรงทุกกลุ่ม
   */

  return results.every(Boolean);
}


/* =========================================================
   15. APPLY FILTER
   ========================================================= */

function applyYuGiOhFilter() {

  appliedFilters = {
    rarity: [...filterState.rarity],
    frame: [...filterState.frame],
    attribute: [...filterState.attribute],
    spellType: [...filterState.spellType]
  };

  appliedLogic =
    filterLogic;

  applyAllFilters();

  closeFilterDrawer();
}



/* =========================================================
   16. RESET FILTER
   ========================================================= */

function resetYuGiOhFilter() {

  Object.keys(filterState)
    .forEach(group => {
      filterState[group].clear();
    });


  appliedFilters = {
    rarity: [],
    frame: [],
    attribute: [],
    spellType: []
  };


  filterLogic = 'OR';
  appliedLogic = 'OR';


  updateFilterChipUI();

  applyAllFilters();
}



/* =========================================================
   17. SEARCH + FILTER
   ========================================================= */

function applyAllFilters() {

  const searchInput =
    document.getElementById(
      'searchInput'
    );

  const query =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : '';


  const filtered =
    games.filter(game => {

      const matchesSearch =
        game.title
          .toLowerCase()
          .includes(query);


      const matchesSet =
        evaluateSetFilter(game);


      return (
        matchesSearch &&
        matchesSet
      );
    });


  renderGameCards(
    'gameGrid',
    filtered
  );
}


/* =========================================================
   18. RENDER PRODUCT CARDS
   ========================================================= */

function renderGameCards(
  containerId,
  gameList
) {

  const container =
    document.getElementById(
      containerId
    );

  if (!container) {
    return;
  }


  if (gameList.length === 0) {

    container.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>ไม่พบรายการ</h3>
        <p>ไม่พบสินค้าที่ตรงกับเงื่อนไข Filter</p>
      </div>
    `;

    return;
  }


  container.innerHTML =
    gameList.map(game => `

      <article class="card">

        <div>

          <img
            src="${escapeHTML(game.img)}"
            alt="${escapeHTML(game.title)}"
            loading="lazy"
            decoding="async"
          >

          <div class="card-rarity">
            ${escapeHTML(game.rarity)}
          </div>

          <h3 class="card-title">
            ${escapeHTML(game.title)}
          </h3>

          <p class="card-category">
            หมวดหมู่: ${escapeHTML(game.category)}
          </p>

  <div class="card-meta">
  ${
    game.frame1 && String(game.frame1).trim() ? `<span>${escapeHTML(game.frame1)}</span>`
      : ''
  }

  ${
    game.frame2 && String(game.frame2).trim() ? `<span>${escapeHTML(game.frame2)}</span>`
      : ''
  }

  ${
    game.attribute && String(game.attribute).trim()
      ? `<span>${escapeHTML(game.attribute)}</span>`
      : ''
  }

  ${
    game.CardType && String(game.CardType).trim()
      ? `<span>${escapeHTML(game.CardType)}</span>`
      : ''
  }

  ${
    game.spellType && String(game.spellType).trim()
      ? `<span>${escapeHTML(game.spellType)}</span>`
      : ''
  }
</div>

          <div class="tag-list">

            ${game.tags
              .map(tag => `
                <span class="badge">
                  ${escapeHTML(tag)}
                </span>
              `)
              .join('')}

          </div>

        </div>


        <div class="card-bottom">

          <span class="card-price">
            ${game.price.toLocaleString('th-TH')} ฿
          </span>

          <button
            class="btn"
            type="button"
            onclick="addToCart(${game.id})"
          >
            🛒 ใส่ตะกร้า
          </button>

        </div>

      </article>

    `).join('');
}


/* =========================================================
   19. SET THEORY PAGE INIT
   ========================================================= */

function initSetPage() {

  const gameGrid =
    document.getElementById(
      'gameGrid'
    );

  if (!gameGrid) {
    return;
  }


  const searchInput =
    document.getElementById(
      'searchInput'
    );


  /*
    Filter Chips
  */

  document
    .querySelectorAll(
      '.filter-btn-chip'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          toggleFilterValue(
            button.dataset.group,
            button.dataset.value
          );

        }
      );

    });


  /*
    Set Operation
  */

  document
    .querySelectorAll(
      '.set-operation-btn'
    )
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          setMathOperation(
            button.dataset.operation
          );

        }
      );

    });


  /*
    Search
  */

  if (searchInput) {

    searchInput.addEventListener(
      'input',
      applyAllFilters
    );

  }


  updateFilterChipUI();

  applyAllFilters();
}


/* =========================================================
   20. BOOLEAN LOGIC PAGE
   ========================================================= */

function initBooleanPage() {

  const pVal =
    document.getElementById('p_val');

  const qVal =
    document.getElementById('q_val');

  const rVal =
    document.getElementById('r_val');


  if (!pVal || !qVal || !rVal) {
    return;
  }


  function evaluateBooleanLogic() {

    const P =
      pVal.checked;

    const Q =
      qVal.checked;

    const R =
      rVal.checked;


    /*
      Formula:

      (P ∧ Q) ∨ R
    */

    const overallLogic =
      (P && Q) || R;


    const statusBox =
      document.getElementById(
        'truthValueResult'
      );


    if (statusBox) {

      statusBox.innerText =
        overallLogic
          ? 'TRUE (แสดงผล)'
          : 'FALSE (ไม่พบข้อมูล)';

      statusBox.classList.toggle(
        'truth-true',
        overallLogic
      );

      statusBox.classList.toggle(
        'truth-false',
        !overallLogic
      );
    }


    /*
      IMPORTANT

      Filter ตาม Proposition จริง:

      P = InStock
      Q = OnSale
      R = Price < 500

      Result:

      (P ∧ Q) ∨ R
    */

    const filtered =
      games.filter(game => {

        const gameP =
          game.tags.includes(
            'InStock'
          );

        const gameQ =
          game.tags.includes(
            'OnSale'
          );

        const gameR =
          game.price < 500;


        return (
          (P && Q
            ? gameP && gameQ
            : false)
          || (R
            ? gameR
            : false)
        );
      });


    renderGameCards(
      'booleanResults',
      filtered
    );
  }


  pVal.addEventListener(
    'change',
    evaluateBooleanLogic
  );

  qVal.addEventListener(
    'change',
    evaluateBooleanLogic
  );

  rVal.addEventListener(
    'change',
    evaluateBooleanLogic
  );


  evaluateBooleanLogic();
}


/* =========================================================
   21. DISCOUNT LOGIC
   ========================================================= */

function calculateDiscount(
  cartTotal,
  isMember,
  couponCode
) {

  let discountRatio = 0;

  let reason =
    'ไม่อยู่ในเงื่อนไขส่วนลด';


  /*
    Condition 1

    VIP + >= 1000
    = 20%
  */

  if (
    isMember &&
    cartTotal >= 1000
  ) {

    discountRatio = 0.20;

    reason =
      'สมาชิก VIP สั่งซื้อตั้งแต่ 1,000 บาทขึ้นไป (ลด 20%)';
  }


  /*
    Condition 2

    VIP OR >= 500
    = 10%
  */

  else if (
    isMember ||
    cartTotal >= 500
  ) {

    discountRatio = 0.10;

    reason =
      'เป็นสมาชิก VIP หรือยอดซื้อครบ 500 บาท (ลด 10%)';
  }


  /*
    Condition 3

    Coupon
    = 5%
  */

  else if (
    couponCode
      .trim()
      .toUpperCase() ===
    'DISCRETE2026'
  ) {

    discountRatio = 0.05;

    reason =
      'ใช้โค้ดส่วนลดพิเศษ DISCRETE2026 (ลด 5%)';
  }


  const discountAmount =
    cartTotal * discountRatio;


  return {

    netTotal:
      cartTotal -
      discountAmount,

    discountPercent:
      discountRatio * 100,

    reason

  };
}


/* =========================================================
   22. KEYBOARD ACCESSIBILITY
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    if (event.key !== 'Escape') {
      return;
    }

    closeCart();

    closeFilterDrawer();

  }
);


/* =========================================================
   23. GLOBAL INITIALIZATION
   ========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    updateCartUI();

    initSetPage();

    initBooleanPage();

  }
);