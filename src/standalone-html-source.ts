export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AGRIAURA TRADING | Premium Indian Fruit Export Specialist</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #faf8f5;
      color: #2d2522;
    }
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
  </style>
</head>
<body class="bg-[#faf8f5] text-[#2d2522] selection:bg-[#62755e]/20 flex flex-col justify-between min-h-screen">

  <!-- HEADER -->
  <header class="bg-white border-b border-[#e9e4de] pt-6 pb-6">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="flex items-center space-x-5 py-2">
        <div class="w-24 h-24 flex-shrink-0 flex items-center justify-center">
          <!-- Real Logo image from the workspace -->
          <img 
            src="logo.png" 
            alt="Agriaura Trading Logo" 
            class="w-full h-full object-contain" 
            onerror="this.src='./src/assets/images/logo.png'; this.onerror=null;"
          />
        </div>
        <div class="text-left">
          <h2 class="font-extrabold text-2xl tracking-widest text-[#2d2522] leading-none">AGRIAURA</h2>
          <span class="text-[10px] tracking-widest text-[#62755e] uppercase font-semibold block mt-1">EXPORT TRADING</span>
          <span class="text-[9px] italic text-[#c39b5a] mt-0.5 font-medium block">Your Premier Fruit Partner</span>
        </div>
      </div>
      
      <!-- SIMPLE NAV LINKS -->
      <nav class="flex items-center space-x-8">
        <a href="#home" class="text-xs font-semibold uppercase tracking-wider text-[#2D2522] hover:text-[#62755e] transition">Home</a>
        <a href="#about" class="text-xs font-semibold uppercase tracking-wider text-[#2D2522] hover:text-[#62755e] transition">About Us</a>
        <a href="#contact" class="text-xs font-semibold uppercase tracking-wider text-[#2D2522] hover:text-[#62755e] transition">Contact</a>
      </nav>
    </div>
  </header>

  <!-- CONTENT -->
  <main class="flex-grow">
    
    <!-- HERO -->
    <section id="home" class="relative h-[480px] sm:h-[540px] flex items-center justify-center text-center overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=1200');"></div>
      <div class="absolute inset-0 bg-black/60"></div>
      <div class="relative z-10 max-w-4xl px-6 space-y-6">
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-serif italic font-bold text-white leading-tight">Fresh Grapes and Bananas Export</h2>
        <p class="text-base sm:text-xl text-white/95 tracking-wide max-w-2xl mx-auto font-light">From Navi Mumbai to your doorstep with care</p>
        <div class="pt-2">
          <a href="#contact" class="px-8 py-3.5 bg-[#62755e] hover:bg-[#52634e] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition duration-200 inline-block">Contact Us</a>
        </div>
        <div class="pt-4 flex flex-col items-center justify-center space-y-1">
          <span class="text-amber-500 text-lg">★★★★★</span>
          <span class="text-[10px] text-white/80 tracking-widest uppercase font-semibold">TRUSTED BY MANY</span>
        </div>
      </div>
    </section>

    <!-- PRODUCT PORTFOLIO -->
    <section class="py-20 px-6 max-w-7xl mx-auto space-y-12">
      <div class="text-center max-w-xl mx-auto">
        <span class="text-[10px] uppercase font-mono tracking-widest font-bold text-[#c39b5a] block mb-2">Our Premium Product Range</span>
        <h3 class="font-serif font-bold text-3xl">Indian Fruits Choice Grades</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-white rounded-xl border border-[#e9e4de] overflow-hidden flex flex-col justify-between shadow-xs">
          <img src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600" class="w-full aspect-video object-cover" />
          <div class="p-6 text-left space-y-3">
            <h4 class="font-serif font-bold text-lg">Premium Thompson Seedless Grapes</h4>
            <p class="text-xs text-[#6e625d] font-light">Sourced directly from cooperatives in Nashik and Sangli. Flawless 16mm-22mm berry size, custom packed inside container reefers with sulfur protectors.</p>
          </div>
        </div>
        <div class="bg-white rounded-xl border border-[#e9e4de] overflow-hidden flex flex-col justify-between shadow-xs">
          <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600" class="w-full aspect-video object-cover" />
          <div class="p-6 text-left space-y-3">
            <h4 class="font-serif font-bold text-lg">Premium Fresh Bananas</h4>
            <p class="text-xs text-[#6e625d] font-light">Firm premium export banana grades, choice standard selection, packed inside vacuum sealed telescopic cardboard boxes for robust maritime transport.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="bg-white border-t border-b border-[#e9e4de] py-20 px-6">
      <div class="max-w-4xl mx-auto space-y-12">
        <div class="text-left space-y-4">
          <span class="text-[10px] uppercase font-mono tracking-widest font-bold text-[#62755e] block">About Our Journey</span>
          <h3 class="font-serif font-semibold text-3xl italic">About Agriaura Trading</h3>
        </div>
        <p class="text-sm text-[#6e625d] font-light text-left leading-relaxed">
          Operating with logistics alignments in the central port grid of <strong>Nerul, Navi Mumbai</strong>, AGRIAURA TRADING bridges GlobalGAP-compliant grower cooperatives with quality-critical international importers. We manage sorting protocols, sanitization schedules, pre-cooling operations, and customs clearing dispatch handling to ensure fresh produce lands in destination markets with maximal crispness and optimal shelf life margins.
        </p>
        
        <!-- DIRECTORS -->
        <div class="bg-[#faf8f5] p-8 rounded-2xl border border-[#e9e4de] space-y-6">
          <h4 class="font-serif font-bold text-xl text-left">Our Active Directors</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div class="space-y-1 bg-white p-6 rounded-lg border border-[#e9e4de]">
              <h5 class="font-serif font-bold text-lg">Vilas Joshi</h5>
              <span class="text-[9px] font-mono text-[#c39b5a] uppercase font-bold tracking-widest">Managing Director</span>
              <p class="text-xs text-[#6e625d] pt-2 font-light">Supervising global seaport logistics, JNPT clearance channels, and commercial custom contracts.</p>
            </div>
            <div class="space-y-1 bg-white p-6 rounded-lg border border-[#e9e4de]">
              <h5 class="font-serif font-bold text-lg">Rohit Garude</h5>
              <span class="text-[9px] font-mono text-[#c39b5a] uppercase font-bold tracking-widest">Director of Operations</span>
              <p class="text-xs text-[#6e625d] pt-2 font-light">Directing cold chain integrity, pesticide screening audits, and grower cooperative relationships at Nashik fields.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="py-20 px-6 max-w-4xl mx-auto space-y-8 text-left">
      <div class="space-y-3">
        <span class="text-[10px] uppercase font-mono tracking-widest font-bold text-[#62755e] block">Direct Sea Desk</span>
        <h3 class="font-serif font-bold text-3xl">Request B2B Quote</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div class="md:col-span-12 lg:col-span-5 bg-white border border-[#e9e4de] p-8 rounded-xl space-y-6">
          <h4 class="font-serif font-semibold text-lg">B2B Team Contacts</h4>
          
          <div class="space-y-1">
            <span class="text-[9px] text-[#c39b5a] tracking-widest uppercase font-bold block">DIRECT CUSTOMER LINE</span>
            <a href="tel:+919653690014" class="text-base font-bold text-[#2d2522] hover:text-[#62755e] transition block">+91 96536 90014</a>
          </div>
          
          <div class="space-y-1">
            <span class="text-[9px] text-[#c39b5a] tracking-widest uppercase font-bold block">COMMUNICATIONS MAIL</span>
            <a href="mailto:agriauratrading@gmail.com" class="text-sm font-semibold text-[#2d2522] hover:text-[#62755e] transition block">agriauratrading@gmail.com</a>
          </div>

          <div class="text-xs text-[#6e625d] leading-relaxed border-t border-[#e9e4de] pt-4">
            <strong>Operating Head:</strong> Nerul, Navi Mumbai, Maharashtra, India - Nhava Sheva Sea Gate clearance.
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="bg-[#2d2522] text-[#fdfbf9] py-8 text-center border-t border-[#1a1210] text-xs">
    <p>&copy; AGRIAURA TRADING. All Rights Reserved. Sourcing direct from Indian grower cooperatives with continuous logistics preservation.</p>
  </footer>

</body>
</html>`;
