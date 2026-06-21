/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Copy, 
  Check, 
  ShieldCheck, 
  FileCheck, 
  Users, 
  Star,
  ChevronRight,
  TrendingUp,
  Package,
  FileSpreadsheet,
  X,
  Compass,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { STANDALONE_HTML } from './standalone-html-source';

export default function App() {
  // Simple ultra-fast navigation tab selection ("home", "about", "contact")
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'contact'>('home');
  
  // Exporter Drawer Status
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    company: '',
    email: '',
    phone: '',
    produce: 'Grapes',
    message: ''
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Construct prefilled WhatsApp context parameters
    const whatsappText = `Hello Agriaura Trading Team. I am writing from *${quoteForm.company || 'B2B Client'}* (${quoteForm.email}). We want to request a quote for *${quoteForm.produce}*. Phone: *${quoteForm.phone}*. Message: ${quoteForm.message || 'Please send us a price proposal.'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/919653690014?text=${encodeURIComponent(whatsappText)}`, '_blank');
      setQuoteForm({
        company: '',
        email: '',
        phone: '',
        produce: 'Grapes',
        message: ''
      });
      setFormSubmitted(false);
    }, 1000);
  };

  const handleCopyHTML = () => {
    navigator.clipboard.writeText(STANDALONE_HTML);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handleDownloadHTML = () => {
    const blob = new Blob([STANDALONE_HTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2d2522] font-sans antialiased flex flex-col justify-between selection:bg-[#62755e]/20 selection:text-[#2d2522]">
      
      {/* HEADER SECTION (EXACTLY matching screenshot colors & tab style) */}
      <header className="bg-white border-b border-[#e9e4de] pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo & Slogan Area - Spaced heavily at the top as requested */}
          <div className="flex items-center space-x-5 py-2">
            {/* Real Logo image from assets */}
            <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center">
              <img 
                src="logo.png" 
                alt="Agriaura Trading Logo" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
            
            <div className="flex flex-col text-left">
              <h2 className="font-display font-extrabold text-2xl tracking-widest text-[#2d2522] leading-none uppercase">AGRIAURA</h2>
              <span className="font-display font-semibold text-[10px] tracking-widest text-[#62755e] uppercase mt-1">EXPORT TRADING</span>
              <span className="text-[9px] italic text-[#c39b5a] mt-0.5 font-medium">Your Premier Fruit Partner</span>
            </div>
          </div>

          {/* Simple classic menu nav links matching image tab system */}
          <nav className="flex items-center space-x-6 sm:space-x-10">
            <button 
              onClick={() => setActiveTab('home')}
              className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b-2 cursor-pointer transition ${activeTab === 'home' ? 'border-[#62755e] text-[#2d2522]' : 'border-transparent text-[#2d2522]/60 hover:text-[#2d2522]'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('about')}
              className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b-2 cursor-pointer transition ${activeTab === 'about' ? 'border-[#62755e] text-[#2d2522]' : 'border-transparent text-[#2d2522]/60 hover:text-[#2d2522]'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`text-xs font-semibold uppercase tracking-wider pb-1.5 border-b-2 cursor-pointer transition ${activeTab === 'contact' ? 'border-[#62755e] text-[#2d2522]' : 'border-transparent text-[#2d2522]/60 hover:text-[#2d2522]'}`}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* CORE PAGES RENDERER (ULTRA SIMPLE AND FAST) */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {/* ==================== HOME TAB ==================== */}
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {/* HERO HERO SECTION (EXACTLY MATCHING THE VISUAL FROM THE USER IMAGES) */}
              <section className="relative h-[480px] sm:h-[540px] flex items-center justify-center text-center overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=1200')`,
                  }}
                />
                {/* Tint Overlay exact contrast rendering */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Central Text Over Image */}
                <div className="relative z-10 max-w-4xl px-6 space-y-6">
                  
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic font-bold text-white leading-tight drop-shadow-md">
                    Fresh Grapes and Bananas Export
                  </h2>
                  
                  <p className="text-base sm:text-xl text-white/95 font-sans tracking-wide max-w-2xl mx-auto drop-shadow-sm font-light">
                    From Navi Mumbai to your doorstep with care
                  </p>

                  {/* Olive green CTA button matching request image */}
                  <div className="pt-2">
                    <button 
                      onClick={() => setActiveTab('contact')}
                      className="px-8 py-3.5 bg-[#62755e] hover:bg-[#52634e] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg transition duration-200 hover:scale-105 inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <span>Contact Us</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Rating element */}
                  <div className="pt-4 flex flex-col items-center justify-center space-y-1">
                    <div className="flex space-x-1 text-[#c39b5a]">
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <span className="text-[10px] text-white/80 tracking-widest font-mono uppercase font-semibold">
                      TRUSTED BY MANY
                    </span>
                  </div>

                </div>
              </section>

              {/* HIGH-END SIMPLIFIED EXPORT SELECTION GRADES */}
              <section className="py-20 px-6 max-w-7xl mx-auto space-y-12">
                <div className="text-center max-w-xl mx-auto">
                  <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#c39b5a] block mb-2">Our Premium Product Range</span>
                  <h3 className="font-serif font-bold text-3xl text-[#2d2522]">Indian Fruits Choice Grades</h3>
                  <p className="text-[#6E625D] text-xs font-light mt-2 leading-relaxed">
                    We supply consistent, GlobalGAP compliant agricultural outputs directly to international seaports.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  
                  {/* FRUIT GRADE 1 */}
                  <div className="bg-white rounded-xl border border-[#e9e4de] overflow-hidden flex flex-col justify-between hover:border-[#c39b5a] transition duration-300 shadow-xs">
                    <div className="aspect-video bg-[#2c1d1a] relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&q=80&w=600" 
                        alt="Export Grade Grapes" 
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-3 left-3 bg-[#62755e] text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded shadow">
                        APEDA REGISTERED
                      </div>
                    </div>
                    <div className="p-6 space-y-3 text-left">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-serif font-bold text-lg text-[#2d2522]">Premium Thompson Seedless Grapes</h4>
                        <span className="text-[10px] font-mono text-[#c39b5a] uppercase font-bold">16mm - 22mm</span>
                      </div>
                      <p className="text-xs text-[#6E625D] font-light leading-relaxed">
                        Sourced from authorized farm cooperatives in Nashik and Sangli. Crisp texture, standard sweet flavor rating. Packed inside 5kg or 9kg cartons with sulfur pads.
                      </p>
                      <div className="border-t border-[#f4f0ea] pt-3 flex justify-between items-center text-[10px] font-mono text-[#6E625D]">
                        <span>Availability: <strong className="text-amber-800">January - April</strong></span>
                        <span>16° - 18° Brix index</span>
                      </div>
                    </div>
                  </div>

                  {/* FRUIT GRADE 2 */}
                  <div className="bg-white rounded-xl border border-[#e9e4de] overflow-hidden flex flex-col justify-between hover:border-[#c39b5a] transition duration-300 shadow-xs">
                    <div className="aspect-video bg-[#2c1d1a] relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=600" 
                        alt="Export Grade Bananas" 
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-3 left-3 bg-[#62755e] text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded shadow">
                        YEAR-ROUND
                      </div>
                    </div>
                    <div className="p-6 space-y-3 text-left">
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-serif font-bold text-lg text-[#2d2522]">Premium Fresh Bananas</h4>
                        <span className="text-[10px] font-mono text-[#c39b5a] uppercase font-bold">Export Choice Grade</span>
                      </div>
                      <p className="text-xs text-[#6E625D] font-light leading-relaxed">
                        Firm, pristine skin quality, free of bruises. Sourced from choice grower fields, vacuum packed with premium telescopic ventilation boxes protecting transit shelf-life.
                      </p>
                      <div className="border-t border-[#f4f0ea] pt-3 flex justify-between items-center text-[10px] font-mono text-[#6E625D]">
                        <span>Availability: <strong className="text-amber-800">Continuous 12m</strong></span>
                        <span>High Grade Selection</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Simple Cargo Pack Spec Table */}
                <div className="max-w-4xl mx-auto mt-12 bg-white border border-[#e9e4de] rounded-xl p-6 sm:p-8 space-y-4">
                  <h4 className="font-serif font-bold text-lg text-[#2d2522]">FCL Standard Logistics Capacity</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-[#6E625D] font-mono">
                      <thead className="bg-[#FAF9F6] text-[#2d2522] uppercase text-[10px] tracking-widest border-b border-[#e9e4de]">
                        <tr>
                          <th scope="col" className="px-4 py-3">Produce</th>
                          <th scope="col" className="px-4 py-3">Standard Packaging</th>
                          <th scope="col" className="px-4 py-3">Capacity limit Per 40ft Reefer</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#e9e4de]">
                        <tr className="hover:bg-[#fdfbf9]">
                          <td className="px-4 py-3 font-semibold text-[#2d2522]">Table Grapes</td>
                          <td className="px-4 py-3">5kg, 8.2kg, 9kg cartons (pouch/punnet packing)</td>
                          <td className="px-4 py-3">Approx. 2,000 to 2,500 cartons load limits</td>
                        </tr>
                        <tr className="hover:bg-[#fdfbf9]">
                          <td className="px-4 py-3 font-semibold text-[#2d2522]">Premium Bananas</td>
                          <td className="px-4 py-3">13.5kg, 18.5kg cartons (vacuum sleeve packed)</td>
                          <td className="px-4 py-3">Approx. 1,000 to 1,200 cartons load limits</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* HIGH-END SIMPLIFIED CREDENTIALS SECTOR */}
              <section className="bg-white border-t border-[#e9e4de] py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-12">
                  <div className="text-center max-w-xl mx-auto">
                    <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#c39b5a] block mb-2">Verified B2B Credentials</span>
                    <h3 className="font-serif font-bold text-2xl text-[#2d2522]">Certified Export Standards</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    <div className="bg-[#faf8f5] p-6 rounded-xl border border-[#e9e4de] space-y-2 text-left">
                      <span className="text-[10px] font-mono font-bold text-[#c39b5a] uppercase">FSSAI Authority</span>
                      <h4 className="text-base font-serif font-bold text-[#2d2522]">Food Safety License</h4>
                      <p className="text-[10.5px] text-[#6E625D] font-mono bg-white p-2 rounded border border-[#e9e4de]">
                        21525016000144
                      </p>
                    </div>

                    <div className="bg-white border border-[#e9e4de] p-6 rounded-xl flex flex-col justify-between shadow-xs text-left">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold text-[#c39b5a] uppercase block">APEDA Ministry</span>
                        <h4 className="text-lg font-serif font-bold text-[#2d2522]">Agricultural Govt RCMC</h4>
                        <p className="text-[11px] text-[#6E625D] font-mono bg-[#FAF9F6] p-2 rounded border border-[#e9e4de] select-all">
                          RCMC/18934/20-26
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border border-[#e9e4de] p-6 rounded-xl flex flex-col justify-between shadow-xs text-left">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold text-[#c39b5a] uppercase block">GST Registration</span>
                        <h4 className="text-lg font-serif font-bold text-[#2d2522]">Government GSTIN</h4>
                        <p className="text-[11px] text-[#6E625D] font-mono bg-[#FAF9F6] p-2 rounded border border-[#e9e4de] select-all">
                          27ABBCA9034H1ZP
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border border-[#e9e4de] p-6 rounded-xl flex flex-col justify-between shadow-xs text-left">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold text-[#c39b5a] uppercase block">DGFT Ministry</span>
                        <h4 className="text-lg font-serif font-bold text-[#2d2522]">Import Export Code</h4>
                        <p className="text-[11px] text-[#6E625D] font-mono bg-[#FAF9F6] p-2 rounded border border-[#e9e4de] select-all">
                          ABBCA9034H
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

          </motion.div>
        )}

        {/* ==================== ABOUT TAB ==================== */}
        {activeTab === 'about' && (
          <div className="py-16 px-6 max-w-4xl mx-auto space-y-12">
            
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#62755e] block">About Our Journey</span>
              <h2 className="font-serif font-semibold text-4xl text-[#2d2522] italic leading-tight">
                About Agriaura Trading
              </h2>
              <div className="h-0.5 w-16 bg-[#c39b5a]"></div>
            </div>

            <div className="space-y-6 text-sm text-[#6E625D] leading-relaxed font-light text-left">
              <p>
                Operating with logistics alignments in the central port grid of <strong>Nerul, Navi Mumbai</strong>, AGRIAURA TRADING bridges GlobalGAP-compliant grower cooperatives with quality-critical international importers. We manage sorting protocols, sanitization schedules, pre-cooling operations, and customs clearing dispatch handling to ensure fresh produce lands in destination markets with maximal crispness and optimal shelf life margins.
              </p>
              <p>
                Our core mission is straightforward: eliminating shipping delays and temperature drops. By utilizing strict biological controls at origin, we preserve natural nutrients and brix indices. Whether shipping highly sensitive Thompson Seedless table grapes or Cavendish bananas, our standards remain absolute and verified.
              </p>
            </div>

            {/* DIRECTORS SPECIFIC AND PROMINENT SECTION (Vilas Joshi, Rohit Garude) */}
            <div className="bg-white border border-[#e9e4de] p-8 rounded-2xl space-y-8 text-left shadow-xs">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#c39b5a] uppercase block">Agriaura Board</span>
                <h3 className="text-2xl font-serif font-bold text-[#2d2522] italic">Our Active Directors</h3>
                <p className="text-xs text-[#6E625D] font-light">
                  Governing commercial pipelines and field sourcing registries with decades of agricultural transport expertise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Director 1 */}
                <div className="p-6 rounded-xl bg-[#faf8f5] border border-[#e9e4de] space-y-3 relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-1.5 z-10">
                    <div className="w-8 h-8 rounded bg-[#62755e]/10 text-[#62755e] flex items-center justify-center mb-1">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2d2522]">Vilas Joshi</h4>
                    <span className="text-[10px] font-mono font-bold text-[#c39b5a] tracking-widest uppercase block">
                      Managing Director
                    </span>
                  </div>
                  <p className="text-xs text-[#6E625D] font-light leading-relaxed pt-2">
                    Supervising global seaport logistics, JNPT clearance channels, and commercial custom contracts.
                  </p>
                </div>

                {/* Director 2 */}
                <div className="p-6 rounded-xl bg-[#faf8f5] border border-[#e9e4de] space-y-3 relative overflow-hidden flex flex-col justify-between">
                  <div className="space-y-1.5 z-10">
                    <div className="w-8 h-8 rounded bg-[#62755e]/10 text-[#62755e] flex items-center justify-center mb-1">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#2d2522]">Rohit Garude</h4>
                    <span className="text-[10px] font-mono font-bold text-[#c39b5a] tracking-widest uppercase block">
                      Director of Operations
                    </span>
                  </div>
                  <p className="text-xs text-[#6E625D] font-light leading-relaxed pt-2">
                    Directing cold chain integrity, pesticide screening audits, and grower cooperative relationships at Nashik fields.
                  </p>
                </div>

              </div>
            </div>

            {/* FARM TO FORK TRACEABILITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-[#faf8f5] rounded-xl border border-[#e9e4de] space-y-2">
                <h4 className="font-serif font-bold text-base text-[#2d2522]">Thompson Seedless Sourcing</h4>
                <p className="text-xs text-[#6E625D] font-light leading-relaxed">
                  Grown on clean soils matching European regulatory metrics. Mechanically categorized and protected against shipping mold.
                </p>
              </div>
              <div className="p-6 bg-[#faf8f5] rounded-xl border border-[#e9e4de] space-y-2">
                <h4 className="font-serif font-bold text-base text-[#2d2522]">Premium Banana Sourcing</h4>
                <p className="text-xs text-[#6E625D] font-light leading-relaxed">
                  Thoroughly evaluated for stem size, hand weight, and greenness variables to withstand 25-day maritime preservation.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* ==================== CONTACT TAB ==================== */}
        {activeTab === 'contact' && (
          <div className="py-16 px-6 max-w-4xl mx-auto space-y-12">
            
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase font-mono tracking-widest font-bold text-[#62755e] block">Direct Sea Desk</span>
              <h2 className="font-serif font-semibold text-4xl text-[#2d2522] italic leading-tight">
                Request B2B Quote
              </h2>
              <div className="h-0.5 w-16 bg-[#c39b5a]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
              
              {/* Contact Details Left Column (5 cols) */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-white border border-[#e9e4de] p-6 rounded-2xl space-y-6 shadow-xs">
                  <h3 className="font-serif font-bold text-[#2d2522] text-lg">Official B2B Desk</h3>
                  
                  {/* Phone Details */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-[#c39b5a] tracking-widest uppercase font-bold block">DIRECT CUSTOMER LINE</span>
                    <a 
                      href="tel:+919653690014" 
                      className="text-base font-display font-bold text-[#2d2522] hover:text-[#62755e] flex items-center space-x-2 transition"
                    >
                      <Phone className="w-4 h-4 text-[#62755e]" />
                      <span>+91 96536 90014</span>
                    </a>
                  </div>

                  {/* Email Details */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-[#c39b5a] tracking-widest uppercase font-bold block">EMAIL COMMUNICATIONS</span>
                    <a 
                      href="mailto:agriauratrading@gmail.com" 
                      className="text-sm font-semibold text-[#2d2522] hover:text-[#62755e] flex items-center space-x-2 transition select-all"
                    >
                      <Mail className="w-4 h-4 text-[#62755e]" />
                      <span>agriauratrading@gmail.com</span>
                    </a>
                  </div>

                  {/* Central Transport Hub */}
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-[#c39b5a] tracking-widest uppercase font-bold block">OPERATIONAL DESK</span>
                    <div className="text-xs text-[#6E625D] flex items-start space-x-2 leading-relaxed">
                      <MapPin className="w-4 h-4 text-[#c39b5a] mt-0.5 flex-shrink-0" />
                      <span>Nerul, Navi Mumbai, Maharashtra, India - Nhava Sheva Sea Gate.</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#62755e]/10 border border-[#62755e]/20 text-[#62755e] rounded-xl text-[11px] leading-relaxed">
                  <strong>Notice:</strong> Quotes for CIF European seaports or FOB Nhava Sheva are provided within 12 business hours of form validation.
                </div>
              </div>

              {/* Form Right Column (7 cols) */}
              <div className="md:col-span-7 bg-white border border-[#e9e4de] p-8 rounded-2xl shadow-xs">
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E625D] mb-1">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. EuroFruit Wholesalers Ltd"
                      value={quoteForm.company}
                      onChange={(e) => setQuoteForm({...quoteForm, company: e.target.value})}
                      className="w-full p-2.5 bg-[#faf8f5] border border-[#e9e4de] rounded text-xs focus:outline-none focus:border-[#62755e]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E625D] mb-1">Business Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="buyer@company.com"
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                        className="w-full p-2.5 bg-[#faf8f5] border border-[#e9e4de] rounded text-xs focus:outline-none focus:border-[#62755e]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E625D] mb-1">Contact Phone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+1 234 567 8900"
                        value={quoteForm.phone}
                        onChange={(e) => setQuoteForm({...quoteForm, phone: e.target.value})}
                        className="w-full p-2.5 bg-[#faf8f5] border border-[#e9e4de] rounded text-xs focus:outline-none focus:border-[#62755e]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E625D] mb-1">Required Produce</label>
                    <select 
                      value={quoteForm.produce}
                      onChange={(e) => setQuoteForm({...quoteForm, produce: e.target.value})}
                      className="w-full p-2.5 bg-[#faf8f5] border border-[#e9e4de] rounded text-xs focus:outline-none focus:border-[#62755e]"
                    >
                      <option value="Grapes">Thompson Seedless Grapes</option>
                      <option value="Bananas">Cavendish G9 Bananas</option>
                      <option value="Both">Bulk Grapes &amp; Bananas Cargo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#6E625D] mb-1">Custom Loading Requirements</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Minimum 18° Brix rating, customized telescopic double-wall container packaging."
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({...quoteForm, message: e.target.value})}
                      className="w-full p-2.5 bg-[#faf8f5] border border-[#e9e4de] rounded text-xs focus:outline-none focus:border-[#62755e] resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formSubmitted}
                    className="w-full py-3 bg-[#62755e] hover:bg-[#52634e] text-white text-xs font-bold uppercase tracking-widest rounded transition duration-200 cursor-pointer text-center"
                  >
                    {formSubmitted ? 'Redirecting to WhatsApp...' : 'Submit RFQ Proposal'}
                  </button>

                </form>

              </div>

            </div>

          </div>
        )}

      </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#2d2522] text-[#fdfbf9] py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1a1210]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
          
          <div className="flex items-center space-x-3">
            <span className="font-display font-black tracking-widest text-[#fdfbf9] select-none text-base">AGRIAURA</span>
            <span className="text-[10px] text-white/50 tracking-wider">| EST. 2024</span>
          </div>

          <p className="text-[11px] text-white/60 font-light text-center">
            &copy; 12-Month Continuous supply. Operating from central transport grids in Nerul, Navi Mumbai. All Rights Reserved.
          </p>

          <span className="text-[10px] text-white/40 tracking-wider font-mono">
            Nhava Sheva Cargo Dispatch Grid
          </span>

        </div>
      </footer>

      {/* HTML EXPORT MODAL PANEL */}
      <AnimatePresence>
        {exportModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2d2522]/80 backdrop-blur-xs">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#e6e1da] rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <button 
                onClick={() => setExportModalOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-full bg-[#FAF9F6] text-[#2d2522] hover:bg-[#E6E1DA]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 text-left">
                <span className="text-[10px] font-mono tracking-widest text-[#c39b5a] font-bold uppercase block">B2B Exporter Panel</span>
                <h3 className="text-xl font-serif font-bold text-[#2d2522]">Single-File HTML Exporter</h3>
                <p className="text-xs text-[#6E625D] font-light leading-relaxed">
                  Export your compiled code as a single fully structured index.html file containing complete styling, and custom scripts to host anywhere effortlessly (GitHub Pages, Netlify, or direct email distribution).
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={handleCopyHTML}
                  className="flex items-center justify-center space-x-2 p-3 bg-[#62755e] text-white text-xs font-bold rounded-lg shadow-sm hover:bg-[#52634e] transition cursor-pointer"
                >
                  {copiedNotification ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedNotification ? 'Copied HTML!' : 'Copy Code'}</span>
                </button>
                <button 
                  onClick={handleDownloadHTML}
                  className="flex items-center justify-center space-x-2 p-3 bg-[#2d2522] text-[#faf8f5] text-xs font-bold rounded-lg shadow-sm hover:bg-neutral-800 transition cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download code</span>
                </button>
              </div>

              <p className="text-[9.5px] italic text-[#6E625D]/65 leading-none text-center">
                APEDA and FSSAI registry parameters are baked in securely for custom distribution.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
