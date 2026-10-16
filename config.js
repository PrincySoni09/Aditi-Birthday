/* ====== EDIT THIS FILE: name, passcode, photos, captions, letter ====== */
const C = {
  name: "Aditi",
  passcode: "2010",
  hint: "Hint: the year a star was born 🌟 (4 digits)",

  // photos used on the single screens
  mainPhoto: "photos/A.jpg",      // lock screen
  s2Photo: "photos/E.jpg",        // "I have made something for you"
  s3Photo: "photos/D.jpg",        // "Are you really excited?"
  letterPhoto: "photos/C.jpg",    // letter screen
  finalPhoto: "photos/p4.jpg",    // after blowing the candles
  emoji: { frame: "🎂", s2: "🧸", s3: "🥳", letter: "🎈" },

  // MEMORIES wall (swipe): add or remove as many as you like
  photos: [
    { src: "photos/G.jpg", cap: "Besties Forever 💛" },
    { src: "photos/p2.jpg", cap: "Glow Queen ✨" },
    { src: "photos/E.jpg", cap: "Festive Queen 🪔" },
    { src: "photos/p4.jpg", cap: "Sunset Vibes 🌅" },
    { src: "photos/B.jpg", cap: "Moonlit Moments 🌙" },
    { src: "photos/A.jpg", cap: "Colours of You 🌈" },
    { src: "photos/F.jpg", cap: "Partners in Crime 👯" },
    { src: "photos/p5.jpg", cap: "Pretty in Patterns 🌸" },
    { src: "photos/C.jpg", cap: "Hair Flip Queen 💃" },
    { src: "photos/D.jpg", cap: "That Smile 😁" },
    { src: "photos/N2.jpg", cap: "Pretty in Pink 🌸" },
    { src: "photos/p3.jpg", cap: "Always Together 🫶" },
    { src: "photos/p6.jpg", cap: "Sunshine in Yellow 🌼" },
    { src: "photos/N1.jpg", cap: "Little White Dress 🤍" },
    { src: "photos/p1.jpg", cap: "Birthday Girl 🎂" }
  ],

  // THROWBACK screen: tap a card to flip between THEN and NOW
  throwback: [
    { then: "photos/c1.jpg", now: "photos/p1.jpg", capThen: "Cutest smile ever 🧸", capNow: "Same smile, now 👑" },
    { then: "photos/c2.jpg", now: "photos/p5.jpg", capThen: "Born to pose 😆", capNow: "Still posing, but classier 💅" },
    { then: "photos/c3.jpg", now: "photos/p2.jpg", capThen: "That shy little look 🥹", capNow: "Now a total queen ✨" }
  ],

  // 5 REASONS cards (3rd item = photo shown when the card is opened)
  reasons: [
    ["Her Smile 😊","Lights up even the dullest day","photos/p6.jpg"],
    ["Her Heart 💛","Pure, kind, and always there for her people","photos/B.jpg"],
    ["Her Vibe ✨","Calm, classy and effortlessly cool","photos/N2.jpg"],
    ["Her Style 👗","Every outfit, every time. Slays!","photos/N1.jpg"],
    ["Her Friendship 🫶","Rare, real and totally irreplaceable","photos/F.jpg"]
  ],

  letterTitle: "Happy birthday, Aditi! My sunshine, my partner-in-crime, my forever friend 🌻",
  letter: "Aditi, you walk into a room and somehow make it brighter without even trying. Thank you for every laugh, every random chat, every time you listened without judging and every time you made a heavy day feel lighter. I'm so grateful that life gave me a friend like you. I hope this year gives you everything your heart has been asking for, the kind of happiness that makes you smile for no reason, and the courage to chase every dream you have. Never forget how special you are. Now go cut that cake, you've earned it! 🥳💖",
  wish: "May every single wish you make come true 💫"
};
