/* ====== EDIT THIS FILE: name, passcode, photos, captions, letter ====== */
const C = {
  name: "Aditi",
  passcode: "2010",
  hint: "Hint: the year a star was born 🌟 (4 digits)",

  // photos used on the single screens
  mainPhoto: "A.jpg",      // lock screen
  s2Photo: "E.jpg",        // "I have made something for you"
  s3Photo: "D.jpg",        // "Are you really excited?"
  letterPhoto: "C.jpg",    // letter screen
  finalPhoto: "p4.jpg",    // after blowing the candles
  emoji: { frame: "🎂", s2: "🧸", s3: "🥳", letter: "🎈" },

  // MEMORIES wall (swipe): add or remove as many as you like
  photos: [
    { src: "G.jpg", cap: "Besties Forever 💛" },
    { src: "p2.jpg", cap: "Glow Queen ✨" },
    { src: "E.jpg", cap: "Festive Queen 🪔" },
    { src: "p4.jpg", cap: "Sunset Vibes 🌅" },
    { src: "B.jpg", cap: "Moonlit Moments 🌙" },
    { src: "A.jpg", cap: "Colours of You 🌈" },
    { src: "F.jpg", cap: "Partners in Crime 👯" },
    { src: "p5.jpg", cap: "Pretty in Patterns 🌸" },
    { src: "C.jpg", cap: "Hair Flip Queen 💃" },
    { src: "D.jpg", cap: "That Smile 😁" },
    { src: "N2.jpg", cap: "Pretty in Pink 🌸" },
    { src: "p3.jpg", cap: "Always Together 🫶" },
    { src: "p6.jpg", cap: "Sunshine in Yellow 🌼" },
    { src: "N1.jpg", cap: "Little White Dress 🤍" },
    { src: "p1.jpg", cap: "Birthday Girl 🎂" }
  ],

  // THROWBACK screen: tap a card to flip between THEN and NOW
  throwback: [
    { then: "c1.jpg", now: "p1.jpg", capThen: "Cutest smile ever 🧸", capNow: "Same smile, now 👑" },
    { then: "c2.jpg", now: "p5.jpg", capThen: "Born to pose 😆", capNow: "Still posing, but classier 💅" },
    { then: "c3.jpg", now: "p2.jpg", capThen: "That shy little look 🥹", capNow: "Now a total queen ✨" }
  ],

  // 5 REASONS cards (3rd item = photo shown when the card is opened)
  reasons: [
    ["Her Smile 😊","Lights up even the dullest day","p6.jpg"],
    ["Her Heart 💛","Pure, kind, and always there for her people","B.jpg"],
    ["Her Vibe ✨","Calm, classy and effortlessly cool","N2.jpg"],
    ["Her Style 👗","Every outfit, every time. Slays!","N1.jpg"],
    ["Her Friendship 🫶","Rare, real and totally irreplaceable","F.jpg"]
  ],

  letterTitle: "Happy birthday, Aditi! My sunshine, my partner-in-crime, my forever friend 🌻",
  letter: "Aditi, you walk into a room and somehow make it brighter without even trying. Thank you for every laugh, every random chat, every time you listened without judging and every time you made a heavy day feel lighter. I'm so grateful that life gave me a friend like you. I hope this year gives you everything your heart has been asking for, the kind of happiness that makes you smile for no reason, and the courage to chase every dream you have. Never forget how special you are. Now go cut that cake, you've earned it! 🥳💖",
  wish: "May every single wish you make come true 💫"
};