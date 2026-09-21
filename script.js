const availableProductImages = new Set([
  'IMG-20260217-WA0093.jpg',
  'IMG-20260217-WA0094.jpg',
  'IMG-20260217-WA0095.jpg',
  'IMG-20260217-WA0096.jpg',
  'IMG-20260217-WA0097.jpg',
  'IMG-20260217-WA0098.jpg',
  'IMG-20260217-WA0099.jpg',
  'IMG-20260217-WA0100.jpg',
  'IMG-20260217-WA0101.jpg',
  'IMG-20260217-WA0102.jpg',
  'IMG-20260217-WA0103.jpg',
  'IMG-20260217-WA0104.jpg',
  'IMG-20260217-WA0105.jpg',
  'IMG-20260217-WA0106.jpg',
  'IMG-20260217-WA0107.jpg',
  'IMG-20260217-WA0108.jpg',
  'IMG-20260217-WA0109.jpg',
  'IMG-20260217-WA0110.jpg',
  'IMG-20260217-WA0111.jpg',
  'IMG-20260217-WA0112.jpg',
  'IMG-20260217-WA0113.jpg',
  'IMG-20260217-WA0114.jpg',
  'IMG-20260217-WA0115.jpg',
  'IMG-20260217-WA0116.jpg',
  'IMG-20260217-WA0117.jpg',
  'IMG-20260217-WA0118.jpg',
  'IMG-20260217-WA0119.jpg',
  'IMG-20260217-WA0120.jpg',
  'IMG-20260217-WA0121.jpg',
  'IMG-20260217-WA0122.jpg',
  'IMG-20260217-WA0123.jpg',
  'IMG-20260217-WA0124.jpg',
  'IMG-20260217-WA0125.jpg',
  'IMG-20260217-WA0126.jpg',
  'IMG-20260217-WA0127.jpg',
  'IMG-20260217-WA0131.jpg',
  'IMG-20260217-WA0136.jpg',
  'IMG-20260217-WA0137.jpg',
  'IMG-20260217-WA0138.jpg',
  'IMG-20260217-WA0140.jpg',
  'IMG-20260217-WA0142.jpg',
  'IMG-20260217-WA0143.jpg',
  'IMG-20260217-WA0144.jpg',
  'IMG-20260217-WA0145.jpg',
  'IMG-20260217-WA0146.jpg',
  'IMG-20260217-WA0147.jpg',
  'IMG-20260217-WA0148.jpg',
  'IMG-20260217-WA0149.jpg',
  'IMG-20260217-WA0150.jpg',
  'IMG-20260217-WA0151.jpg',
  'IMG-20260217-WA0152.jpg',
  'IMG-20260217-WA0153.jpg',
  'IMG-20260217-WA0154.jpg',
  'IMG-20260217-WA0155.jpg',
  'IMG-20260217-WA0156.jpg',
  'IMG-20260217-WA0157.jpg',
  'IMG-20260217-WA0158.jpg',
  'IMG-20260217-WA0159.jpg',
  'IMG-20260217-WA0160.jpg',
  'IMG-20260217-WA0161.jpg',
  'IMG-20260217-WA0162.jpg',
  'IMG-20260217-WA0163.jpg',
  'IMG-20260217-WA0164.jpg',
  'IMG-20260217-WA0165.jpg',
  'IMG-20260217-WA0166.jpg',
  'IMG-20260217-WA0167.jpg',
  'IMG-20260217-WA0168.jpg',
  'IMG-20260217-WA0169.jpg',
  'IMG-20260217-WA0170.jpg',
  'IMG-20260217-WA0171.jpg',
  'IMG-20260217-WA0172.jpg',
  'IMG-20260217-WA0173.jpg',
  'IMG-20260217-WA0174.jpg',
  'IMG-20260217-WA0175.jpg',
  'IMG-20260217-WA0176.jpg',
  'IMG-20260217-WA0177.jpg',
  'IMG-20260217-WA0178.jpg',
  'IMG-20260217-WA0179.jpg',
  'IMG-20260217-WA0180.jpg',
  'IMG-20260217-WA0181.jpg',
  'IMG-20260217-WA0182.jpg',
  'IMG-20260217-WA0183.jpg',
  'IMG-20260217-WA0184.jpg',
  'IMG-20260217-WA0185.jpg'
]);

const products = [
  {
    name: 'Truck Tail Light Assemblies',
    brand: '',
    category: 'Lighting',
    tag: 'Available',
    image: 'IMG-20260217-WA0101.jpg'
  },
  {
    name: 'Pneumatic Control Valve',
    brand: '',
    category: 'Air System',
    tag: 'Popular',
    image: 'IMG-20260217-WA0102.jpg'
  },
  {
    name: 'Truck Starter Motor',
    brand: '',
    category: 'Electrical',
    tag: 'Hot Deal',
    image: 'IMG-20260217-WA0103.jpg'
  },
  {
    name: 'Truck Starter Motor',
    brand: '',
    category: 'Electrical',
    tag: 'In Stock',
    image: 'IMG-20260217-WA0104.jpg'
  },
  {
    name: 'Truck Clutch Kit',
    brand: '',
    category: 'Transmission',
    tag: 'Available',
    image: 'IMG-20260217-WA0105.jpg'
  },
  {
    name: 'Four Way Valve',
    brand: '',
    category: 'Steering',
    tag: 'Popular',
    image: 'IMG-20260217-WA0106.jpg'
  },
  {
    name: 'Truck Air Brake Valve',
    brand: '',
    category: 'Braking',
    tag: 'In Stock',
    image: 'IMG-20260217-WA0107.jpg'
  },
  {
    name: 'Truck Suspension Air Bag',
    brand: '',
    category: 'Suspension',
    tag: 'Available',
    image: 'IMG-20260217-WA0108.jpg'
  },
  {
    name: 'King Pin Kit',
    brand: '',
    category: 'Steering',
    tag: 'Popular',
    image: 'IMG-20260217-WA0109.jpg'
  },
  {
    name: 'CAT Engine Oil Filter',
    brand: '',
    category: 'Filters',
    tag: 'Available',
    image: 'IMG-20260217-WA0110.jpg'
  },
  {
    name: 'Cylinder Liner Kit',
    brand: '',
    category: 'Engine',
    tag: 'Popular',
    image: 'IMG-20260217-WA0111.jpg'
  },
  {
    name: 'Truck Tie Rod Ends',
    brand: '',
    category: 'Steering',
    tag: 'In Stock',
    image: 'IMG-20260217-WA0112.jpg'
  }
].filter((product) => availableProductImages.has(product.image));

const additionalPhotos = Array.from({ length: 93 }, (_, index) => index + 93)
  .filter((number) => ![128, 132].includes(number))
  .filter((number) => number < 101 || number > 112)
  .map((number) => `IMG-20260217-WA${String(number).padStart(4, '0')}.jpg`);

const additionalPartNames = {
  93: 'Truck Turbocharger',
  94: 'Truck Turbocharger',
  95: 'Transmission Gear Shaft and Gear Set',
  96: 'WABCO Air System Protector',
  97: 'WABCO Air System Protector',
  98: 'Truck Body and Exhaust Parts Set',
  99: 'Truck Transmission Repair Parts Set',
  100: 'Truck Wiper Motor Assembly',
  113: 'Truck Engine Overhaul Kit',
  114: 'Tata Genuine Filter Set',
  115: 'Truck Mesh Air Intake Filter',
  116: 'Pneumatic Control Valves',
  117: 'Truck Window Regulator Assembly',
  118: 'Truck Door Lock and Latch Parts',
  119: 'Truck Air Filter',
  120: 'Truck King Pins',
  121: 'Diesel Fuel Injection Pump',
  122: 'Truck Fuel Filters',
  123: 'Truck Door Handles and Locks',
  124: 'Shacman Engine Oil Pump',
  125: 'Truck Fan Belt',
  126: 'FAW 280 Air Compressor',
  127: 'Combined Double Bearing',
  129: 'Chinese Commercial Vehicle Parts',
  130: 'Weichai Truck Parts',
  131: 'Truck Air Filter Range',
  133: 'FAW Truck Parts',
  134: 'Tata Truck Parts',
  135: 'Commercial Truck Parts',
  136: 'Truck Torque Rod',
  137: 'Truck Alternator',
  138: 'King Pin Repair Kit',
  139: 'Weichai Truck Parts',
  140: 'Foton Truck Parts',
  141: 'WABCO Air Dryer',
  142: 'Sinotruk Air System Component',
  143: 'Truck Clutch Pressure Plate',
  144: 'Truck Suspension Torque Rods',
  145: 'Flexible Exhaust Connector',
  146: 'Truck Spring Brake Chamber',
  147: 'Truck Leaf Springs',
  148: 'Truck Shock Absorber',
  149: 'Truck Gearbox Assembly',
  150: 'Truck Transmission Gears',
  151: 'Truck Gear Set',
  152: 'Engine Piston and Ring Kit',
  153: 'Truck Cooling and Exhaust Parts',
  154: 'Truck Fuel Filters',
  155: 'Truck Steering and Brake Parts',
  156: 'Engine Gasket Set',
  157: 'Truck Ball Joints',
  158: 'Truck Instrument Cluster',
  159: 'Truck Air Brake Filter and Valve Set',
  160: 'Weichai Timing Cover',
  161: 'HYA Pneumatic Parts Set',
  162: 'Truck Pneumatic Valve Set',
  163: 'WABCO Air Protection Assembly',
  164: 'Diesel Tank Cap  & "C:\Program Files\Git\cmd\git.exe" push -u origin main',
  165: 'Truck Front Axle and Brake Assembly',
  166: 'Truck Cab',
  167: 'Truck Mirror and Body Hardware',
  168: 'Truck Control Cables',
  169: 'Truck Propeller Shaft',
  170: 'Truck Transmission Assembly',
  171: 'Engine Gasket Set',
  172: 'WABCO Air Brake Unit',
  173: 'Truck Engine Block Assembly',
  174: 'Truck Air Brake Chambers',
  175: 'Diesel Engine Assembly',
  176: '20-Ton Hydraulic Jack',
  177: 'Truck Door',
  178: 'Universal Joint',
  179: 'Pneumatic Valve Block',
  180: 'Truck Control Cables',
  181: 'Universal Joint Set',
  182: 'Truck Mounting Bolts',
  183: 'Truck Belt Tensioner',
  184: 'Truck Spring Hanger Shackle',
  185: 'Diesel Fuel Injection Pump Set'
};

products.push(...additionalPhotos
  .filter((image) => availableProductImages.has(image))
  .map((image, index) => ({
    name: additionalPartNames[Number(image.match(/WA(\d+)\.jpg$/)[1])] || `Part ${index + 13}`,
    brand: '',
    category: 'Truck parts',
    tag: 'Available',
    image
  })));

const productGrid = document.getElementById('productGrid');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const resultsCount = document.getElementById('resultsCount');
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxImageWrap = document.getElementById('lightboxImageWrap');
const zoomLevel = document.getElementById('zoomLevel');
let currentZoom = 1;

function updateZoom() {
  lightboxImage.style.transform = `scale(${currentZoom})`;
  zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
}

function setZoom(value) {
  currentZoom = Math.min(3, Math.max(1, value));
  updateZoom();
}

function openLightbox(image) {
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  currentZoom = 1;
  updateZoom();
  imageLightbox.hidden = false;
  document.body.classList.add('lightbox-open');
  imageLightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  imageLightbox.hidden = true;
  document.body.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
}

function renderProducts(filteredProducts) {
  productGrid.innerHTML = '';

  if (!filteredProducts.length) {
    const query = searchInput.value.trim();
    const requestCard = document.createElement('article');
    requestCard.className = 'product-card search-request-card';
    requestCard.innerHTML = `
      <div class="product-body">
        <p class="product-brand">Part not listed</p>
        <h3 class="product-name"></h3>
        <p class="about-copy">Send us the part name and we will check availability for your truck.</p>
        <a class="product-link" target="_blank" rel="noreferrer">Request this part</a>
      </div>
    `;
    requestCard.querySelector('.product-name').textContent = query
      ? `Looking for: ${query}`
      : 'Tell us which truck part you need';
    requestCard.querySelector('.product-link').href = `https://wa.me/254725274338?text=${encodeURIComponent(
      `Hello, I am looking for this truck part: ${query || 'Please help me find a part'}`
    )}`;
    productGrid.appendChild(requestCard);
  }

  filteredProducts.forEach((product) => {
    const card = document.createElement('article');
    card.className = 'product-card';

    const imagePath = product.image;

    const brandMarkup = product.brand ? `<p class="product-brand">${product.brand}</p>` : '';

    card.innerHTML = `
      <figure>
        <button class="product-image-button" type="button" aria-label="View larger photo of ${product.name}">
          <img src="${imagePath}" alt="${product.name}" />
        </button>
      </figure>
      <div class="product-body">
        ${brandMarkup}
        <h3 class="product-name">${product.name}</h3>
        <div class="product-meta">
          <span class="product-tag">${product.tag}</span>
          <a class="product-link" href="https://wa.me/254725274338?text=${encodeURIComponent('Hello, I need this item: ' + product.name)}" target="_blank" rel="noreferrer">Order</a>
        </div>
      </div>
    `;

    card.querySelector('.product-image-button').addEventListener('click', (event) => {
      openLightbox(event.currentTarget.querySelector('img'));
    });
    productGrid.appendChild(card);
  });

}

function searchProducts(query) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    renderProducts(products);
    return;
  }

  const filtered = products.filter((product) => {
    const searchableText = [
      product.name,
      product.brand,
      product.category,
      product.tag
    ].join(' ').toLowerCase();

    return searchableText.includes(normalized);
  });

  renderProducts(filtered);
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  searchProducts(searchInput.value);
});

searchInput.addEventListener('input', (event) => {
  searchProducts(event.target.value);
});

imageLightbox.addEventListener('click', (event) => {
  if (event.target.closest('[data-lightbox-close]')) {
    closeLightbox();
  }
});

imageLightbox.querySelector('[data-zoom-in]').addEventListener('click', () => {
  setZoom(currentZoom + 0.25);
});

imageLightbox.querySelector('[data-zoom-out]').addEventListener('click', () => {
  setZoom(currentZoom - 0.25);
});

lightboxImageWrap.addEventListener('wheel', (event) => {
  event.preventDefault();
  setZoom(currentZoom + (event.deltaY < 0 ? 0.15 : -0.15));
}, { passive: false });

lightboxImage.addEventListener('dblclick', () => {
  setZoom(currentZoom === 1 ? 2 : 1);
});

document.addEventListener('keydown', (event) => {
  if (imageLightbox.hidden) return;

  if (event.key === 'Escape') {
    closeLightbox();
  }

  if (event.key === '+' || event.key === '=') {
    setZoom(currentZoom + 0.25);
  }

  if (event.key === '-') {
    setZoom(currentZoom - 0.25);
  }
});

renderProducts(products);
