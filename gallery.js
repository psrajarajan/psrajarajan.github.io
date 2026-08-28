// Helper function to map numbers to Excel-like alphabetical codes (1 -> A, 26 -> Z, 27 -> AA, 57 -> BE)
function getLetterCode(num) {
  let temp = num;
  let letter = "";
  while (temp > 0) {
    let modulo = (temp - 1) % 26;
    letter = String.fromCharCode(65 + modulo) + letter;
    temp = Math.floor((temp - modulo) / 26);
  }
  return letter;
}

// ==========================================
// 1. GEOGEBRA CAROUSEL DYNAMIC GENERATION
// ==========================================
const geogebraContainer = document.getElementById('geogebra-scroll-container');
const totalGeoGebra = 36;

const geogebraData = [
  { title: "Gaphing of Linear Function", subtitle: "" },
  { title: "One Triangle-Five Centers", subtitle: "" },
  { title: "Pythagoras Theorem Proof", subtitle: "" },
  { title: "Quadrilateral Circumscribing Circle", subtitle: "" },
  { title: "Graphing of Quadratic Function", subtitle: "" },
  { title: "Ratio of Line Segments", subtitle: "" },
  { title: "Trigonometric Ratios-Sine,Cosine,Tangent", subtitle: "" },
  { title: "Thales' Theorem-Excercise", subtitle: "" },
  { title: "Cooridnate Geometry", subtitle: "Reflex Property" },
  { title: "All Functions in one place", subtitle: "Linear/Quadratic/Cubic" }
];

for (let i = 1; i <= totalGeoGebra; i++) {
  let title = "";
  let subtitle = "";
  
  if (i <= geogebraData.length) {
    title = geogebraData[i - 1].title;
    subtitle = geogebraData[i - 1].subtitle;
  } else {
    const letter = String.fromCharCode(65 + (i - 11)); // 11 -> A, 36 -> Z
    title = `Multiple ${letter}’s`;
    subtitle = "Created using Geogebra";
  }

  const cardHTML = `
    <div class="flex-none w-64 bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover-lift snap-start m-1 flex flex-col justify-between">
      <a href="geogebra/${i}.png" target="_blank" title="Click to view full size">
        <div class="h-52 bg-slate-900 relative overflow-hidden group flex items-center justify-center p-3">
          <img src="geogebra/${i}.png" alt="${title}" class="w-full h-full object-contain transition duration-300 group-hover:scale-105" loading="lazy" onerror="this.src='https://placehold.co/320x200/0f172a/ffffff?text=GeoGebra+Lab+${i}'">
          <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="bg-white text-gray-900 rounded-full px-3 py-1.5 text-xs font-bold shadow-md"><i class="fas fa-search-plus mr-1"></i> View Full Size</span>
          </div>
        </div>
      </a>
      <div class="p-5 text-center flex-grow flex flex-col justify-center">
        <h4 class="font-extrabold text-gray-800 text-sm tracking-tight text-center leading-tight">${title}</h4>
        ${subtitle ? `<p class="text-xs text-gray-500 mt-1.5 text-center leading-snug">${subtitle}</p>` : ''}
      </div>
    </div>
  `;
  geogebraContainer.innerHTML += cardHTML;
}

// ==========================================
// 2. FMSLOGO CAROUSEL DYNAMIC GENERATION
// ==========================================
const scrollContainer = document.getElementById('logo-scroll-container');
const totalScreenshots = 57;

const fmslogoCustomData = {
  27: { line1: "9 Maths Concept", line2: "Behind A" },
  28: { line1: "Project Challenge", line2: "How to draw?" },
  29: { line1: "5 Pointed Star", line2: "" },
  30: { line1: "Step Rangoli", line2: "" },
  31: { line1: "Trapezium Rangoli", line2: "" },
  32: { line1: "Special Star", line2: "" },
  33: { line1: "Hexagon Rangoli", line2: "" },
  34: { line1: "Triangle Rangoli", line2: "" },
  35: { line1: "Octagon Rangoli", line2: "" },
  36: { line1: "Square Root Spiral", line2: "" },
  37: { line1: "Pythagoras Rangoli", line2: "" },
  38: { line1: "Arc Rangoli", line2: "" },
  39: { line1: "Kite Rangoli", line2: "" },
  40: { line1: "Digital Root", line2: "Maths Table" },
  41: { line1: "Digiral Root", line2: "Concept & Application" },
  42: { line1: "Learn Geometry", line2: "5-Ponted Star" },
  43: { line1: "Learn Geometry", line2: "Trapezium" },
  44: { line1: "Learn Geometry", line2: "Kite" },
  45: { line1: "Learn Geometry", line2: "Arc" },
  46: { line1: "Tamil Alphabet", line2: "a" },
  47: { line1: "Tamil Alphabet", line2: "aa" },
  48: { line1: "Tamil Alphabet", line2: "i" },
  49: { line1: "Tamil Alphabet", line2: "ii" },
  50: { line1: "Tamil Alphabet", line2: "u" },
  51: { line1: "Tamil Alphabet", line2: "uu" },
  52: { line1: "Tamil Alphabet", line2: "e" },
  53: { line1: "Tamil Alphabet", line2: "ae" },
  54: { line1: "Tamil Alphabet", line2: "ai" },
  55: { line1: "Tamil Alphabet", line2: "o" },
  56: { line1: "Tamil Alphabet", line2: "oo" },
  57: { line1: "Tamil Alphabet", line2: "au" }
};

for (let i = 1; i <= totalScreenshots; i++) {
  const letterCode = getLetterCode(i);
  const codeTitle = `24${letterCode}'s`;
  
  let title = codeTitle;
  let subtitle = "Drawn with offset angle";
  
  if (i >= 27 && fmslogoCustomData[i]) {
    title = `${codeTitle}: ${fmslogoCustomData[i].line1}`;
    subtitle = fmslogoCustomData[i].line2;
  }

  const cardHTML = `
    <div class="flex-none w-52 bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover-lift snap-start m-1 flex flex-col justify-between">
      <a href="fmslogo/${i}.png" target="_blank" title="Click to view full size design">
        <div class="h-40 bg-teal-950 relative overflow-hidden group flex items-center justify-center p-1">
          <img src="fmslogo/${i}.png" alt="FMSLogo Design ${title}" class="w-full h-full object-contain transition duration-300 group-hover:scale-105" loading="lazy" onerror="this.src='https://placehold.co/320x200/0d9488/ffffff?text=FMSLogo+Design+${i}'">
          <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="bg-white text-gray-900 rounded-full px-2.5 py-1 text-[10px] font-bold shadow-md"><i class="fas fa-search-plus mr-1"></i> View Full Size</span>
          </div>
        </div>
      </a>
      <div class="pt-2 pb-2 px-2 text-center flex-grow flex flex-col justify-center">
        <h4 class="font-extrabold text-gray-800 text-[11px] tracking-tight text-center leading-tight">${title}</h4>
        ${subtitle ? `<p class="text-[10px] text-gray-500 mt-1 text-center leading-none">${subtitle}</p>` : ''}
      </div>
    </div>
  `;
  scrollContainer.innerHTML += cardHTML;
}

// ==========================================
// 3. CAROUSEL SCROLL NAVIGATION HELPERS
// ==========================================
function scrollGallery(scrollOffset) {
  scrollContainer.scrollBy({
    left: scrollOffset,
    behavior: 'smooth'
  });
}

function scrollGeoGebra(scrollOffset) {
  geogebraContainer.scrollBy({
    left: scrollOffset,
    behavior: 'smooth'
  });
}