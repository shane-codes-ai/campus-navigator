const searchInput = document.getElementById("search");
const infoBox = document.getElementById("info-box");

const blocks = [
  {
    id: "new-block",
    keywords: ["new block"],
    message: "📍 New Block – N‑Block: Commerce & BCom classes, seating ~70 students per class."
  },
  {
    id: "science-block",
    keywords: ["science block", "science", "lab", "labs"],
    message: "🔬 Science Block – houses Physics, Chemistry & Biology labs; it's the oldest academic block on campus." 
  },
  {
    id: "magis-block",
    keywords: ["magis block", "magis", "cs", "computer"],
    message: "🧭 Magis Block – Dept. of Computer Science & Innovation; also hosts a huge canteen (~1,000 capacity) and auditorium. DST‑FIST‑funded networking lab upstairs."
  },
  {
    id: "arrupe-block",
    keywords: ["arrupe block", "arrupe"],
    message: "📘 Arrupe Block – Arts & Psychology classes; also contains a small canteen and an infirmary within."
  },
  {
    id: "boys-hostel",
    keywords: ["boys hostel", "hostel"],
    message: "🏨 Boys Hostel – on-campus crescent‑shaped stone hostel since 1948, capacity ~220 students; has in‑built canteen and common areas."
  }
];

  // 🔥 Add more blocks here as needed


// 🧠 On input in the search bar
searchInput.addEventListener("input", function () {
  const keyword = searchInput.value.toLowerCase().trim();
  let found = false;

  // 🔄 Loop through all blocks
  blocks.forEach(block => {
    const el = document.getElementById(block.id);
    const match = block.keywords.some(word => keyword.includes(word));

    // 👻 Hide all by default
    el?.classList.remove("active-glow");

    if (match) {
      el?.classList.add("active-glow");
      infoBox.innerText = block.message;
      found = true;
    }
  });

  // 🚫 If nothing matched
  if (!found) {
    infoBox.innerText = "";
  }

  // 📜 Scroll if matched
  if (found) {
    setTimeout(() => {
      infoBox.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }
});
