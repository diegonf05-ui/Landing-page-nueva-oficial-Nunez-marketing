import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  ArrowRight, 
  Quote, 
  Clock, 
  SearchX, 
  Check, 
  LayoutTemplate, 
  Image as ImageIcon, 
  LineChart, 
  Plus,
  HelpCircle,
  Award,
  Zap,
  Target,
  FileText,
  DollarSign,
  ChevronDown,
  ShieldCheck,
  Percent
} from 'lucide-react';
import { 
  PORTFOLIO_PROJECTS, 
  FAQ_ITEMS, 
  MYTHS_REALITIES, 
  BRANDS, 
  PortfolioProject 
} from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<'branding' | 'creativos' | 'fotografias' | 'metrics'>('branding');
  const [activeFaq, setActiveFaq] = useState<string | null>("faq-1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Financial ROI Calculator Interactive States
  const [monthlyBudget, setMonthlyBudget] = useState<number>(3000000); // Default to 3,000,000 Gs.

  // Monitor scroll to control navbar effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Facebook Pixel Tracking Call
  const trackConversion = () => {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'StartTrial', {
        value: '0.00',
        currency: 'USD',
        predicted_ltv: '0.00',
      });
    }
  };

  // Humanized format for PYG
  const formatPYG = (value: number) => {
    return new Intl.NumberFormat('es-PY', {
      style: 'currency',
      currency: 'PYG',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value).replace(/PYG/, '₲');
  };

  // ROI calculations based on realistic Paraguayan market metrics
  // Average CPC in PY: ₲ 400
  // Average CPM in PY: ₲ 12.000
  const cpc = 450;
  const estimatedClicks = Math.round(monthlyBudget / cpc);
  
  // Scenario metrics:
  // 1. By yourself (Casual): conversion to actual lead rate ~1.5%, sale closure ~3%
  const casualLeads = Math.round(estimatedClicks * 0.015);
  const casualSales = Math.round(casualLeads * 0.03);
  const casualValuePerSale = 350000; // 350k average order value
  const casualRevenue = casualSales * casualValuePerSale;
  const casualNet = casualRevenue - monthlyBudget;

  // 2. Traditional Agency: conversion to lead rate ~3%, sale closure ~5% (More volume, poor followup)
  const agencyLeads = Math.round(estimatedClicks * 0.035);
  const agencySales = Math.round(agencyLeads * 0.05);
  const agencyValuePerSale = 450000;
  const agencyRevenue = agencySales * agencyValuePerSale;
  const agencyNet = agencyRevenue - monthlyBudget - 2000000; // subtracting typical agency retainer fee (2M Gs.)

  // 3. Núñez System (Premium): Conversion to qualified lead rate ~7%, absolute sale closure ~12% (Optimized funnel & prompt sales chat guide)
  const superLeads = Math.round(estimatedClicks * 0.075);
  const superSales = Math.round(superLeads * 0.12);
  const superValuePerSale = 650000; // Better direction of art pulls high-value buyers
  const superRevenue = superSales * superValuePerSale;
  // Let's assume standard Fase 2 retainer scale based on budget, say roughly 3.500.000 Gs.
  const nunezFee = 3500000;
  const superNet = superRevenue - monthlyBudget - nunezFee;

  // Custom Stamped Logo Component
  const Logo = () => (
    <div className="flex items-center gap-1.5 cursor-pointer select-none">
      <div className="font-sans font-black text-xl md:text-2xl tracking-tighter text-[#0B0F19] flex items-center">
        Nu<span className="relative inline-block text-[#2F57FB]">n<span className="absolute -top-[5px] left-1/2 -translate-x-1/2"><svg width="14" height="5" viewBox="0 0 14 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-y-[1.1]"><path d="M1 3.5C2 3.5 3 1.5 4.5 1.5C6 1.5 6.5 3.5 8 3.5C9.5 3.5 10 1.5 11.5 1.5C12.5 1.5 12.8 2 13 2.5" stroke="#2F57FB" strokeWidth="2" strokeLinecap="round" /></svg></span></span>ez
      </div>
      <div className="font-serif italic text-xs uppercase tracking-widest text-[#2F57FB]">Studio</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0B0F19] font-sans selection:bg-[#2F57FB] selection:text-white relative overflow-x-hidden antialiased">
      
      {/* Background grids resembling premium trade desk layouts */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle, expensive blueprint pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(11,15,25,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(11,15,25,0.015)_1px,transparent_1px)] bg-[size:50px_50px] opacity-70"></div>
        
        {/* Editorial border guides */}
        <div className="absolute top-0 bottom-0 left-[5%] w-[1px] bg-[#E4E4DB]/40 hidden xl:block"></div>
        <div className="absolute top-0 bottom-0 right-[5%] w-[1px] bg-[#E4E4DB]/40 hidden xl:block"></div>
        
        {/* Aesthetic glow accents */}
        <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-[#2F57FB]/5 rounded-full blur-[100px] pointer-events-none opacity-60"></div>
        <div className="absolute top-[40%] right-[5%] w-[550px] h-[550px] bg-[#2F57FB]/4 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
      </div>

      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#2F57FB] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Saltar al contenido principal
      </a>

      {/* Header / Navbar Block */}
      <header id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Upper Editorial Scarcity Bar */}
        <div className="bg-[#0B0F19] text-[#FBFBF9] py-2 text-center text-[9px] font-black uppercase tracking-[0.25em] relative z-50 border-b border-[#2F57FB]/15">
          QUEDAN VALIDADOS 2 CUPO COMERCIALES ESTE MES EN PARAGUAY · [ESTADO: DISPONIBLE]
        </div>

        <div className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E4E4DB] py-3.5 shadow-sm' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <Logo />
            
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              <a href="#diagnostico" className="text-[10px] font-black text-[#0B0F19]/70 hover:text-[#2F57FB] uppercase tracking-[0.15em] transition-colors">
                El Diagnóstico
              </a>
              <a href="#roi-calculator" className="text-[10px] font-black text-[#0B0F19]/70 hover:text-[#2F57FB] uppercase tracking-[0.15em] transition-colors">
                Calculadora ROI
              </a>
              <a href="#casos" className="text-[10px] font-black text-[#0B0F19]/70 hover:text-[#2F57FB] uppercase tracking-[0.15em] transition-colors">
                Casos Reales
              </a>
              <a href="#fases" className="text-[10px] font-black text-[#0B0F19]/70 hover:text-[#2F57FB] uppercase tracking-[0.15em] transition-colors">
                Metodología
              </a>
              
              <a 
                href="https://wa.me/595975190555?text=Hola!%20Quiero%20comenzar%20gratis%20por%20la%20Fase%201%20de%20mi%20pauta" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={trackConversion}
                className="inline-flex items-center justify-center border border-[#0B0F19] hover:bg-[#0B0F19] hover:text-[#FBFBF9] text-[#0B0F19] text-[9px] font-black uppercase tracking-[0.15em] px-5 py-2.5 rounded transition-all shadow-xs"
              >
                Empezar gratis
              </a>
            </nav>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#0B0F19] hover:text-[#2F57FB] transition-colors"
              aria-label="Menú navegación"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-[#FBFBF9] border-b border-[#E4E4DB] shadow-lg md:hidden flex flex-col items-center py-8 gap-6 backdrop-blur-lg"
            >
              <a 
                href="#diagnostico" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-black text-[#0B0F19] hover:text-[#2F57FB] uppercase tracking-widest"
              >
                El Diagnóstico
              </a>
              <a 
                href="#roi-calculator" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-black text-[#0B0F19] hover:text-[#2F57FB] uppercase tracking-widest"
              >
                Calculadora ROI
              </a>
              <a 
                href="#casos" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-black text-[#0B0F19] hover:text-[#2F57FB] uppercase tracking-widest"
              >
                Casos Reales
              </a>
              <a 
                href="#fases" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-black text-[#0B0F19] hover:text-[#2F57FB] uppercase tracking-widest"
              >
                Metodología
              </a>
              <a 
                href="https://wa.me/595975190555?text=Hola!%20Quiero%20comenzar%20gratis%20por%20la%20Fase%201%20de%20mi%20pauta"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  trackConversion();
                }}
                className="bg-[#0B0F19] text-[#FBFBF9] w-[80%] py-3.5 text-center text-xs font-black uppercase tracking-widest rounded transition-colors"
              >
                EMPEZAR GRATIS FASE 1
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container Area */}
      <main id="main-content" className="relative z-10 pt-24 sm:pt-28">
        
        {/* SECTION 1: HERO - Premium split editorial blueprint */}
        <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Top-level Wildcard Print Stamp */}
          <div className="absolute top-4 right-8 text-right hidden xl:block font-mono text-[8px] text-[#0B0F19]/40 leading-normal uppercase">
            <span>[REPORTE EMISIÓN: 2026]</span><br />
            <span>[FONDOS ASUNCION PARAGUAY]</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-7 flex flex-col items-start justify-center">
              
              {/* Premium Sovereign Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-1.5 bg-[#F4F4EE] border border-[#E4E4DB] px-3.5 py-1.5 rounded mb-6 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#2F57FB]"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2F57FB] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2F57FB]"></span>
                </span>
                SISTEMA COMERCIAL DE ALTO DESEMPEÑO
              </motion.div>

              {/* Master Headline: Typography Pairing */}
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-[34px] sm:text-[54px] lg:text-[62px] leading-[1.08] font-black text-[#0B0F19] tracking-tighter uppercase mb-6"
              >
                ¿Metés plata en Meta <br />
                <span className="font-serif italic font-light text-[#2F57FB] block relative mt-1.5 normal-case">
                  y no sabés cuántos
                  {/* Freehand clean vector underline */}
                  <svg className="absolute -bottom-2 left-0 w-48 sm:w-80 h-2.5 text-[#2F57FB]/30" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9C70 4.5 160 2.5 295 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
                clientes te devuelve?
              </motion.h1>

              {/* Body explanation: Realistic & Straightforward */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="text-sm sm:text-base text-[#0B0F19]/85 leading-relaxed max-w-[560px] mb-8 font-medium"
              >
                Diseñamos tus anuncios de alto impacto visual, configuramos tu embudo de ventas y estructuramos un sistema de seguimiento para que veas dinero en caja, no reportes de likes ni métricas de vanidad que no pagan salarios.
              </motion.p>

              {/* CTA Action Deck */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <a 
                  href="https://wa.me/595975190555?text=Hola!%20Quiero%20comenzar%20gratis%20por%20la%20Fase%201%20de%20mi%20pauta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={trackConversion}
                  className="bg-[#2F57FB] hover:bg-[#0B0F19] text-[#FBFBF9] px-7 py-4.5 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all text-center flex items-center justify-center gap-1.5 uppercase hover:scale-[1.01] active:scale-[0.99] shadow-sm shadow-[#2F57FB]/25"
                >
                  SOLICITAR DIAGNÓSTICO GRATUITO <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a 
                  href="#casos" 
                  className="bg-[#F4F4EE] hover:bg-neutral-200 text-[#0B0F19] px-7 py-4.5 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all text-center border border-[#E4E4DB]"
                >
                  VER CASOS REALES
                </a>
              </motion.div>

              {/* Brief Social Badging */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex items-center gap-4 text-[#0B0F19]/50 font-mono text-[9px] uppercase tracking-widest"
              >
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#2F57FB]" /> EXCELENCIA AVALADA</span>
                <span>•</span>
                <span>SÓLO ₲ EN RETORNOS DIRECTOS</span>
              </motion.div>
            </div>

            {/* Right Interactive Overlap Sticker Card Collage */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center mt-8 lg:mt-0">
              {/* Central glowing sovereign backing */}
              <div className="absolute inset-0 bg-[#2F57FB]/5 rounded-full filter blur-[80px] pointer-events-none"></div>

              {/* Visual stage frame with fine editorial dual-rulers */}
              <div className="relative w-full max-w-[400px]" style={{ height: '460px' }}>
                
                {/* 🔴 CASUAL CARD - The "Before" (Greyish, tilted, taped note look) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: -12, x: -35 }}
                  animate={{ opacity: 1, rotate: -6, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="absolute left-0 top-6 z-10 bg-white p-3 rounded shadow-lg border border-[#E4E4DB] hover:rotate-0 hover:z-35 transition-all duration-300"
                  style={{ width: '55%' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-50 text-red-600 text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded border border-red-100">
                      SIN EMBUDO
                    </span>
                    <span className="font-mono text-[8px] text-[#0B0F19]/40">ANTERIOR</span>
                  </div>

                  <div className="relative overflow-hidden rounded bg-slate-100 border border-slate-200">
                    <img 
                      src="https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699fab189a0c18c7f4b2cbee.webp" 
                      alt="Anterior: Publicidad sin rumbo" 
                      className="w-full h-auto aspect-[4/5] object-cover filter grayscale" 
                    />
                  </div>

                  {/* Detriment status note */}
                  <div className="absolute -bottom-4 -left-3 bg-[#FBFBF9] p-2 rounded shadow border border-[#E4E4DB] flex items-center gap-1.5 max-w-[140px] z-30">
                    <TrendingDown className="text-red-500 w-3.5 h-3.5 flex-shrink-0" />
                    <p className="text-[7.5px] leading-tight font-mono text-[#0B0F19]/70">
                      <strong>ANTES:</strong> Gasto en likes sin retorno claro.
                    </p>
                  </div>
                </motion.div>

                {/* 🔵 PREMIUM SYSTEM CARD - The "After" (Ink black, glowing line work, beautiful metrics) */}
                <motion.div 
                  initial={{ opacity: 0, rotate: 10, x: 35 }}
                  animate={{ opacity: 1, rotate: 4, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="absolute right-0 top-24 z-20 bg-[#0B0F19] p-4 rounded shadow-2xl border border-[#2F57FB]/30 hover:rotate-0 hover:scale-105 transition-all duration-300"
                  style={{ width: '58%' }}
                >
                  {/* Accent tag badge */}
                  <div className="absolute -top-3.5 -right-1.5 bg-[#2F57FB] text-white p-1 rounded-full shadow-lg border-2 border-[#0B0F19] animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>

                  <div className="flex items-center justify-between mb-3.5">
                    <span className="bg-[#2F57FB]/25 text-[#2F57FB] text-[7px] font-black tracking-widest uppercase px-1.5 py-0.5 rounded border border-[#2F57FB]/30">
                      SISTEMA NÚÑEZ
                    </span>
                    <span className="font-mono text-[8px] text-[#FBFBF9]/40">RECOMENDADO</span>
                  </div>

                  <div className="relative overflow-hidden rounded bg-stone-900 border border-[#FBFBF9]/10">
                    <img 
                      src="https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699e56b61001a51ae6540847.webp" 
                      alt="Sistema Premium de Ventas" 
                      className="w-full h-auto aspect-[4/5] object-cover hover:scale-105 transition-all duration-700" 
                    />
                  </div>

                  {/* Exquisite monetary metric label */}
                  <div className="absolute -bottom-6 -right-2 bg-white border border-[#2F57FB] p-2 rounded shadow-lg flex flex-col max-w-[170px] z-30">
                    <div className="flex items-center gap-1 mb-0.5">
                      <TrendingUp className="text-emerald-500 w-3.5 h-3.5 animate-bounce" />
                      <span className="text-[7px] font-mono text-slate-500 uppercase tracking-wider">RETORNO OPTIMIZADO</span>
                    </div>
                    <p className="text-[8.5px] font-black text-[#0B0F19] leading-tight">
                      Cada ₲ 1.000.000 invertido vuelve multiplicado. Medimos ventas netas.
                    </p>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: DYNAMIC LOGO MARQUEE */}
        <section className="py-12 bg-white border-y border-[#E4E4DB] overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center px-4 mb-6">
            <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB]">
              EMPRESAS QUE HAN RECIBIDO NUESTRA ESTRUCTURA
            </p>
          </div>

          <div className="relative flex overflow-x-hidden bg-[#F4F4EE]/50 py-3 border-t border-b border-[#E4E4DB]/50">
            <div className="whitespace-nowrap flex items-center gap-16 py-1 animate-[marquee_25s_linear_infinite]">
              {[...BRANDS, ...BRANDS].map((brand, idx) => (
                <span 
                  key={idx} 
                  className="font-sans font-extrabold text-[11px] sm:text-[12px] text-[#0B0F19]/45 hover:text-[#0B0F19] uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2 select-none cursor-default"
                >
                  {brand}
                  <span className="text-[#2F57FB]">•</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: THE COMID DIAGNOSTIC (PROBLEM & ROAD) */}
        <section id="diagnostico" className="py-20 sm:py-28 bg-[#FBFBF9] px-4 border-b border-[#E4E4DB]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Direct copy on problematics */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 bg-[#F4F4EE]/90 border border-[#E4E4DB] rounded px-3 py-1 mb-6">
                  <span className="text-[8px] sm:text-[9px] font-black text-[#2F57FB] tracking-[0.15em] uppercase">
                    EL INFORME DE DIAGNÓSTICO
                  </span>
                </div>

                <h2 className="text-3xl sm:text-[42px] leading-[1.1] font-black text-[#0B0F19] uppercase tracking-tight mb-6">
                  Malgastar pauta en Meta <br />
                  <span className="font-serif italic font-light text-[#2F57FB] normal-case">es un error de estructura,</span> <br />
                  no de tu producto.
                </h2>

                <p className="text-sm text-[#0B0F19]/80 leading-relaxed mb-10 font-medium">
                  Muchas marcas nos dicen: "Ya metí dinero y no me compraron". Claro, porque las agencias de volumen se limitan a publicar gráficas lindas pero descuidan la conversión del embudo. Sin una ruta que mida e impulse la compra, estás regalando tu dinero institucional.
                </p>

                {/* Structured checkpoints in Paraguay */}
                <div className="space-y-6">
                  
                  {/* Point 1 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#F4F4EE] border border-[#E4E4DB] rounded flex items-center justify-center text-[#2F57FB] group-hover:bg-[#2F57FB] group-hover:text-white transition-all shadow-xs">
                      <TrendingDown className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#0B0F19]">
                        Fuga #1: Desconocimiento del costo por cliente
                      </h3>
                      <p className="text-xs text-[#0B0F19]/65 leading-relaxed mt-1 max-w-sm">
                        Sabés cuánto gastás en el mes, pero no sabés exactamente cuántos guaraníes te cuesta cerrar un comprador real.
                      </p>
                    </div>
                  </div>

                  {/* Point 2 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#F4F4EE] border border-[#E4E4DB] rounded flex items-center justify-center text-[#2F57FB] group-hover:bg-[#2F57FB] group-hover:text-white transition-all shadow-xs">
                      <SearchX className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#0B0F19]">
                        Fuga #2: Leads enfriados por demora
                      </h3>
                      <p className="text-xs text-[#0B0F19]/65 leading-relaxed mt-1 max-w-sm">
                        El anuncio funciona, la gente escribe interesada en WhatsApp... pero si pasaron 2 horas sin respuesta, la compra se enfrió.
                      </p>
                    </div>
                  </div>

                  {/* Point 3 */}
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 bg-[#F4F4EE] border border-[#E4E4DB] rounded flex items-center justify-center text-[#2F57FB] group-hover:bg-[#2F57FB] group-hover:text-white transition-all shadow-xs">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-[#0B0F19]">
                        Fuga #3: Reportes de likes que no llenan el banco
                      </h3>
                      <p className="text-xs text-[#0B0F19]/65 leading-relaxed mt-1 max-w-sm">
                        Te entregan métricas de "visualizaciones" y alcances inflados que ocultan la preocupante falta de ventas efectivas.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Comparative Analytical Ledger Card */}
              <div className="bg-[#F4F4EE] rounded border border-[#E4E4DB] p-6 sm:p-8 shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#2F57FB]"></div>
                
                <div className="flex justify-between items-start mb-6 border-b border-[#E4E4DB] pb-4">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0B0F19]">Estructura de Retornos Clínicos</h4>
                    <span className="font-mono text-[8px] text-[#0B0F19]/45 uppercase">CÁLCULO EMPRESARIAL PROMEDIO</span>
                  </div>
                  <span className="font-mono text-[8px] bg-[#2F57FB]/10 text-[#2F57FB] border border-[#2F57FB]/25 px-2 py-0.5 rounded uppercase">
                    PARAGUAY 2026
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Option DIY */}
                  <div className="bg-white/80 p-4 rounded border border-[#E4E4DB] hover:border-[#2F57FB]/40 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#0B0F19]/50">Ruta Amateur</span>
                      <span className="text-[8px] font-mono border border-[#E4E4DB] text-red-600 bg-red-50/40 px-2 py-0.5 rounded uppercase">
                        RETIENE & RESA
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <p className="text-[10px] text-[#0B0F19]/60 font-medium">Posteás sin pauta fina estructurada</p>
                      <p className="text-xs font-black text-red-600 font-mono tracking-tight">Retorno Bajo</p>
                    </div>
                  </div>

                  {/* Option Tradicional */}
                  <div className="bg-white/80 p-4 rounded border border-[#E4E4DB] hover:border-[#2F57FB]/40 transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-black uppercase tracking-widest text-[#0B0F19]/50">Agencia Tradicional</span>
                      <span className="text-[8px] font-mono border border-[#E4E4DB] text-amber-600 bg-amber-50/40 px-2 py-0.5 rounded uppercase">
                        SÓLO LIKES
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <p className="text-[10px] text-[#0B0F19]/60 font-medium">Post de stock sin ventas guiadas</p>
                      <p className="text-xs font-black text-amber-600 font-mono tracking-tight">Retorno x1.5</p>
                    </div>
                  </div>

                  {/* Option Núñez System */}
                  <div className="bg-[#0B0F19] text-white p-5 rounded border border-[#2F57FB]/50 relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 bg-[#2F57FB] text-white text-[8px] font-black px-3 py-1 rounded-bl uppercase tracking-wider">
                      RETORNO FACTIBLE CRECIENTE
                    </div>
                    
                    <div className="mb-4 relative z-10">
                      <span className="text-[8px] font-extrabold tracking-widest text-[#2F57FB] uppercase">METODOLOGÍA DIARIA</span>
                      <h5 className="font-sans font-black text-sm uppercase tracking-wide mt-0.5">SISTEMA COMPRA COMPROMETIDA</h5>
                      <p className="text-[9px] text-[#FBFBF9]/60 font-medium mt-1 leading-normal">
                        Foco exclusivo en retorno de caja. Anuncios sofisticados + Embudo directo + Reporte neto financiero automatico.
                      </p>
                    </div>

                    <div className="border-t border-[#FBFBF9]/10 pt-4 flex justify-between items-end relative z-10">
                      <div>
                        <span className="text-[8px] tracking-wider text-[#FBFBF9]/50 block uppercase">CASO REFERENCIA REAL</span>
                        <span className="text-[9px] font-mono text-[#2F57FB] font-black">ELECTRODOMÉSTICOS</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-emerald-400 block uppercase font-mono tracking-widest">RETORNO NETO VERIFICADO</span>
                        <span className="text-lg font-black text-emerald-400 font-mono tracking-tight leading-none">+ ₲ 134.950.000</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* SECTION 4: THE INTERACTIVE ROI FINANCIAL CALCULATOR */}
        <section id="roi-calculator" className="py-20 sm:py-28 bg-white border-b border-[#E4E4DB] relative">
          {/* Section banner */}
          <div className="max-w-4xl mx-auto text-center px-4 mb-16">
            <div className="inline-flex items-center gap-1.5 bg-[#F4F4EE] border border-[#E4E4DB] px-3.5 py-1.5 rounded mb-4 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#2F57FB]">
              DEMOSTRACIÓN DE PRECISIÓN MATEMÁTICA
            </div>
            <h2 className="text-3xl sm:text-[42px] leading-tight font-black text-[#0B0F19] uppercase tracking-tight mb-4">
              Calculá la Viabilidad <span className="font-serif italic font-light text-[#2F57FB] normal-case">de tu Pauta</span>
            </h2>
            <p className="text-sm text-[#0B0F19]/70 max-w-xl mx-auto leading-relaxed">
              Deslizá la barra con tu presupuesto comercial mensual pensado para Facebook/Instagram Meta Ads y observá la simulación de ganancias reales usando el Sistema Núñez frente a los canales convencionales.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            
            {/* Left Control Column */}
            <div className="lg:col-span-5 bg-[#FBFBF9] border border-[#E4E4DB] rounded p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black tracking-widest uppercase text-[#0B0F19]/45 block mb-2">[PASO 1: FIJAR PRESUPUESTO PUBLICITARIO]</span>
                <label htmlFor="budget-slider" className="sr-only">Deslizá para definir presupuesto publicitario mensual en guaraníes</label>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B0F19]">PRESUPUESTO EN PAUTA</span>
                  <span className="text-xl font-mono font-black text-[#2F57FB]">{formatPYG(monthlyBudget)}</span>
                </div>

                <div className="mt-2 mb-8">
                  <input 
                    id="budget-slider"
                    type="range" 
                    min={1500000} 
                    max={15000000} 
                    step={500000}
                    value={monthlyBudget} 
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full accent-[#2F57FB] h-1.5 bg-[#E4E4DB] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-[#0B0F19]/55 mt-1">
                    <span>₲ 1.5 M</span>
                    <span>₲ 5 M</span>
                    <span>₲ 10 M</span>
                    <span>₲ 15 M</span>
                  </div>
                </div>

                {/* Analytical Market Metrics under the set budget */}
                <div className="border-t border-[#E4E4DB] pt-6 space-y-4">
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-[#0B0F19]">Métricas del Mercado Py</h4>
                  
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#0B0F19]/60">Costo por Click promedio (CPC)</span>
                    <span className="font-mono font-bold text-[#0B0F19]">₲ {cpc}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#0B0F19]/60">Interesados de Campaña Estimados</span>
                    <span className="font-mono font-bold text-[#0B0F19]">{estimatedClicks.toLocaleString('es-PY')} Clicks</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E4E4DB] pt-6 mt-8">
                <p className="text-[10px] text-slate-500 italic leading-normal">
                  *Cálculos estimados en base a promedios históricos en Paraguay. La optimización fina del embudo del Sistema Núñez permite aumentar el valor promedio del ticket de venta.
                </p>
              </div>
            </div>

            {/* Right Display Column: Comparing 3 Tracks */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
              
              {/* Option A: Casual DIY */}
              <div className="bg-[#FBFBF9] border border-[#E4E4DB] p-5 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="max-w-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#0B0F19]">CASUAL / POR TU CUENTA</span>
                  </div>
                  <p className="text-[11px] text-[#0B0F19]/70 leading-normal">
                    Invertís vos solo, improvisando imágenes. Poca respuesta, cierre manual complejo sin flujo de WhatsApp preparado.
                  </p>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 bg-white border border-[#E4E4DB] p-4 rounded min-w-[200px]">
                  <span className="text-[8px] font-mono text-[#0B0F19]/50 block uppercase">NUEVAS VENTAS ESTIMADAS</span>
                  <span className="text-[13px] font-bold text-[#0B0F19] block">{casualSales} Ventas (promedio)</span>
                  <span className="text-[8px] font-mono text-slate-400 block uppercase mt-1">RETORNO NETO</span>
                  <span className={`text-[15px] font-mono font-black ${casualNet > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                    {formatPYG(casualNet)}
                  </span>
                </div>
              </div>

              {/* Option B: Standard Agency */}
              <div className="bg-[#FBFBF9] border border-[#E4E4DB] p-5 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="max-w-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#0B0F19]">AGENCIA TRADICIONAL ESTÁNDAR</span>
                  </div>
                  <p className="text-[11px] text-[#0B0F19]/70 leading-normal">
                    Contenido genérico de stock, sin embudo real. Fee fijo mensual de retención alto. Reportes llenos de likes.
                  </p>
                </div>
                <div className="text-left sm:text-right flex-shrink-0 bg-white border border-[#E4E4DB] p-4 rounded min-w-[200px]">
                  <span className="text-[8px] font-mono text-[#0B0F19]/50 block uppercase">NUEVAS VENTAS ESTIMADAS</span>
                  <span className="text-[13px] font-bold text-[#0B0F19] block">{agencySales} Ventas (promedio)</span>
                  <span className="text-[8px] font-mono text-slate-400 block uppercase mt-1">RETORNO NETO (- RETENCION FEE)</span>
                  <span className={`text-[15px] font-mono font-black ${agencyNet > 0 ? 'text-emerald-500' : 'text-[#0B0F19]'}`}>
                    {formatPYG(agencyNet)}
                  </span>
                </div>
              </div>

              {/* Option C: NUNEZ PREMIUM SYSTEM */}
              <div className="bg-[#0B0F19] text-[#FBFBF9] border-2 border-[#2F57FB]/70 p-6 rounded relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
                <div className="absolute top-0 right-0 bg-[#2F57FB] text-white text-[8px] font-black px-4 py-1 rounded-bl uppercase tracking-wider">
                  MÁXIMO RENDIMIENTO COMERCIAL
                </div>
                
                <div className="max-w-sm relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-white">NÚÑEZ SYSTEM (PREMIUM)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal">
                    Anuncios de alto nivel estético dirigidos al público premium, embudo fluido, reportabilidad de ROAS real en ventas netas.
                  </p>
                </div>

                <div className="text-left sm:text-right flex-shrink-0 bg-black/40 border border-[#2F57FB]/30 p-4 rounded min-w-[200px] relative z-10">
                  <span className="text-[8px] font-mono text-[#FBFBF9]/40 block uppercase">NUEVAS VENTAS ESTIMADAS</span>
                  <span className="text-[14px] font-black text-emerald-400 block">{superSales} Ventas (promedio)</span>
                  <span className="text-[8px] font-mono text-[#FBFBF9]/40 block uppercase mt-1">RETORNO NETO (- FEE ADAPTADO F2)</span>
                  <span className="text-[18px] font-mono font-black text-emerald-400 block">
                    {formatPYG(superNet)}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 5: MITO VS REALIDAD (HIGH END CRITICAL GRID) */}
        <section className="py-20 sm:py-28 bg-[#0B0F19] text-white relative border-b border-[#2F57FB]/10">
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            
            <div className="text-center mb-16">
              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB] mb-3">
                MINDSET OPERATIVO FINANCIERO
              </p>
              <h2 className="text-3xl sm:text-[42px] leading-tight font-black uppercase tracking-tight text-white">
                Mito vs. <span className="font-serif italic font-light text-[#2F57FB] normal-case">Realidad Comercial</span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed mt-2.5">
                Reemplazamos falsas métricas de vanidad por nociones comerciales reales para consolidar el retorno neto de tu inversión.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {MYTHS_REALITIES.map((item, idx) => (
                <div 
                  key={item.id} 
                  className="bg-stone-900 border border-[#FBFBF9]/10 rounded p-6 shadow-lg flex flex-col justify-between h-full relative group overflow-hidden"
                >
                  {/* Subtle corner badge decoration */}
                  <div className="absolute top-0 right-0 font-mono text-[7px] text-[#FBFBF9]/10 p-2">[0{idx + 1}]</div>

                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-rose-400 mb-3 bg-rose-500/10 border border-rose-500/20 w-fit px-2.5 py-0.5 rounded">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Mito habitual</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-normal italic">
                      "{item.myth}"
                    </p>
                  </div>

                  {/* Dual split borderline feel */}
                  <div className="w-full h-[1px] bg-[#FBFBF9]/10 my-4"></div>

                  <div>
                    <div className="flex items-center gap-1.5 text-emerald-400 mb-3 bg-emerald-400/10 border border-emerald-400/20 w-fit px-2.5 py-0.5 rounded">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span className="text-[8px] font-black uppercase tracking-widest">Realidad de caja</span>
                    </div>
                    <p className="text-sm font-black text-[#FBFBF9] uppercase tracking-tight mb-2">
                      {item.reality}
                    </p>
                    <p className="text-xs text-slate-400 leading-normal font-normal">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 6: BIO DE DIEGO NÚÑEZ (EDITORIAL BRIEF) */}
        <section className="py-20 max-w-7xl mx-auto px-4 relative">
          <div className="bg-[#F4F4EE] rounded border border-[#E4E4DB] p-8 md:p-14 relative overflow-hidden">
            
            {/* Stamp logo on back representation */}
            <div className="absolute top-6 right-6 font-mono text-[8px] text-[#0B0F19]/45 text-right uppercase">
              <span>[DOC: COMPROMISO]</span><br />
              <span>[DIRECTOR: D. NÚÑEZ]</span>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-12 relative z-10">
              
              <div className="flex-1">
                {/* Director initial stamp label */}
                <div className="w-12 h-12 bg-[#0B0F19] text-[#FBFBF9] rounded-full flex items-center justify-center font-bold text-base mb-6 shadow">
                  Ñ
                </div>

                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB] mb-2">
                  COMPROMISO DIRECTO SIN INTERMEDIARIOS
                </p>
                <h2 className="text-3xl sm:text-[42px] font-black leading-none uppercase text-[#0B0F19] mb-8">
                  No soy una <br />
                  <span className="font-serif italic font-light text-[#2F57FB] lowercase normal-case">agencia tradicional corporativa.</span>
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-[#0B0F19]/80 leading-relaxed font-medium">
                  <p>
                    No vas a perder el tiempo tratando con ejecutivos corporativos junior, becarios temporales o un software automático que no sabe nada de tu negocio. El canal de comunicación directo soy yo: <strong>Diego Núñez</strong>. Me ocupo personalmente de estructurar tu pauta de Meta Ads, auditar tu embudo y brindarte la dirección de arte de tus anuncios.
                  </p>
                  <p>
                    Operamos con respaldo técnico especializado de primer nivel para coordinar que tus anuncios corran siempre y sin bloqueos, pero las decisiones de presupuesto e impacto las definís directamente conmigo. Resoluciones ágiles por WhatsApp, sin demoras burocráticas innecesarias.
                  </p>
                </div>

                {/* Stamped direct quote */}
                <div className="bg-white rounded border border-[#E4E4DB] p-5 mt-8 border-l-4 border-[#2F57FB] flex gap-4">
                  <Quote className="text-[#2F57FB] opacity-60 flex-shrink-0 w-6 h-6 rotate-180" />
                  <p className="text-xs sm:text-sm text-[#0B0F19] italic font-semibold leading-relaxed">
                    "Si una campaña publicitaria en Meta no se traduce en nuevos clientes recurrentes o dinero comprobado en tu banco, no sirve de nada. Mi trabajo es asegurar el retorno."
                  </p>
                </div>
              </div>

              {/* Physical mockup illustrative card detail */}
              <div className="flex-1 w-full max-w-sm hidden xl:block relative">
                <div className="bg-[#0B0F19] p-5 rounded border border-[#FBFBF9]/10 text-white shadow-2xl relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                    <span className="font-mono text-[7px] text-[#FBFBF9]/55 uppercase tracking-widest">REGISTRO DE TRABAJO IN-SITU</span>
                  </div>
                  <h4 className="text-xs font-serif italic text-white/90 uppercase mb-4">ESTUDIO DE BODEGÓN PREMIUM</h4>
                  
                  <div className="relative overflow-hidden rounded bg-stone-900 border border-white/5 h-[220px]">
                    <img 
                      src="https://raw.githubusercontent.com/diegonf2023-design/Landing-de-Nunez-marketing-oficial/main/public/images/699f805af074ea1082e21ade.webp"
                      alt="Dirección Lumínica y Texturas Núñez"
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>

                  <div className="flex justify-between items-center text-[7.5px] font-mono text-[#FBFBF9]/40 mt-3.5 uppercase">
                    <span>SECTOR: PREMIUM ART</span>
                    <span>ASUNCIÓN, PY</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: INTERACTIVE CASES SHOWCASE GRID */}
        <section id="casos" className="py-20 sm:py-28 bg-[#FBFBF9] border-t border-[#E4E4DB] relative">
          <div className="max-w-7xl mx-auto px-4">
            
            <div className="text-center mb-12">
              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB] mb-3">
                EVIDENCIA FACTUAL DE FACTURACIÓN
              </p>
              <h2 className="text-3xl sm:text-[42px] leading-tight font-black uppercase tracking-tight text-[#0B0F19]">
                Plata en caja, <span className="font-serif italic font-light text-[#2F57FB] normal-case">no likes.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#0B0F19]/75 max-w-xl mx-auto leading-relaxed mt-2.5">
                No te mostramos renders utópicos o plantillas abstractas. Estos son registros reales de marcas que aplicaron nuestro sistema comercial y elevaron su rentabilidad neta.
              </p>
            </div>

            {/* Interactive Category Selector (Tabs) */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#F4F4EE] border border-[#E4E4DB] p-1.5 rounded-lg flex flex-wrap justify-center gap-1">
                <button 
                  onClick={() => setActiveTab('branding')} 
                  className={`px-4.5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                    activeTab === 'branding' 
                      ? 'bg-[#0B0F19] text-white shadow-sm' 
                      : 'text-slate-500 hover:text-[#0B0F19]'
                  }`}
                >
                  <LayoutTemplate className="w-3.5 h-3.5" />
                  <span>Marca & Feed</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('creativos')} 
                  className={`px-4.5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                    activeTab === 'creativos' 
                      ? 'bg-[#0B0F19] text-white shadow-sm' 
                      : 'text-slate-500 hover:text-[#0B0F19]'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Anuncios (Meta)</span>
                </button>

                <button 
                  onClick={() => setActiveTab('fotografias')} 
                  className={`px-4.5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                    activeTab === 'fotografias' 
                      ? 'bg-[#0B0F19] text-white shadow-sm' 
                      : 'text-slate-500 hover:text-[#0B0F19]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Fotografías</span>
                </button>

                <button 
                  onClick={() => setActiveTab('metrics')} 
                  className={`px-4.5 py-2.5 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all ${
                    activeTab === 'metrics' 
                      ? 'bg-[#2F57FB] text-white shadow-md' 
                      : 'text-slate-500 hover:text-[#0B0F19]'
                  }`}
                >
                  <LineChart className="w-3.5 h-3.5" />
                  <span>Resultados ROAS</span>
                </button>
              </div>
            </div>

            {/* Content Display Grid */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {PORTFOLIO_PROJECTS.filter(project => project.category === activeTab).map((project) => (
                    <div 
                      key={project.id}
                      className="bg-white border border-[#E4E4DB] rounded p-3 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                    >
                      <div className="relative overflow-hidden rounded bg-slate-100 aspect-[4/5] mb-3">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" 
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="px-1 py-1">
                        <span className="font-mono text-[8px] tracking-wider text-[#2F57FB] font-black uppercase block mb-1">
                          {project.subCategory || project.client}
                        </span>
                        <h4 className="text-[11px] sm:text-xs font-black uppercase text-[#0B0F19] tracking-tight leading-snug mb-1">
                          {project.title}
                        </h4>
                        
                        {project.result && (
                          <div className="mt-2 bg-emerald-50 border border-emerald-200/50 p-2 rounded">
                            <span className="text-[7.5px] font-mono font-black text-slate-500 block">DESEMPEÑO REAL</span>
                            <p className="text-[10px] text-emerald-700 font-extrabold leading-normal mt-0.5">
                              {project.result}
                            </p>
                          </div>
                        )}

                        {project.highlightText && (
                          <div className="mt-1.5 bg-[#2F57FB]/10 p-1 px-2 rounded w-fit border border-[#2F57FB]/20">
                            <p className="text-[8px] font-black text-[#2F57FB] tracking-widest">{project.highlightText}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* SECTION 8: METHODOLOGY FASES (THE 2 STAGE ESTRUCTURA) */}
        <section id="fases" className="py-20 sm:py-28 bg-[#F4F4EE] border-t border-[#E4E4DB] relative">
          <div className="max-w-7xl mx-auto px-4">
            
            <div className="text-center mb-16">
              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB] mb-3">
                FLUJO DE CONTRATACIÓN TRANSPARENTE
              </p>
              <h2 className="text-3xl sm:text-[42px] leading-tight font-black uppercase tracking-tight text-[#0B0F19]">
                Dos Fases. <span className="font-serif italic font-light text-[#2F57FB] normal-case">Sin Letra Chica.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#0B0F19]/75 max-w-xl mx-auto leading-relaxed mt-2.5">
                Estructuramos nuestro compromiso comercial en dos pasos claros para reducir tu riesgo, garantizando un control completo de su inversión en Paraguay.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Fase 1 Card */}
              <div className="bg-white border border-[#E4E4DB] rounded p-6 sm:p-10 flex flex-col justify-between shadow-sm hover:translate-y-[-4px] transition-all duration-300">
                <div>
                  <div className="bg-[#F4F4EE] text-[#2F57FB]/90 text-[8px] font-black px-3 py-1.5 rounded uppercase tracking-widest w-fit mb-6 border border-[#E4E4DB]">
                    FASE 1: DIAGNÓSTICO PROFUNDO & DIAGRAMA (GRATIS)
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B0F19] tracking-tight mb-6">
                    El Plan de Acción <br className="hidden sm:block" />
                    Base
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3 items-start">
                      <Check className="text-[#2F57FB] w-4 h-4 mt-0.5" />
                      <p className="text-xs text-[#0B0F19]/80 font-bold leading-normal">
                        Auditoría completa de tu cuenta comercial de anuncios en Meta.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Check className="text-[#2F57FB] w-4 h-4 mt-0.5" />
                      <p className="text-xs text-[#0B0F19]/80 font-bold leading-normal">
                        Detección exacta de por dónde se pierden o enfrían interesados en el chat.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Check className="text-[#2F57FB] w-4 h-4 mt-0.5" />
                      <p className="text-xs text-[#0B0F19]/80 font-bold leading-normal">
                        Entrega del moodboard de arte y el itinerario exacto que armaríamos para tu marca (en 7 días).
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-500 text-xs italic leading-relaxed border-t border-[#E4E4DB] pt-4 mb-8">
                    "Si el informe y la maqueta preliminar no te cierran del todo, cancelamos el flujo allí mismo. Nos damos la mano sin letra chica ni compromisos comerciales."
                  </p>
                </div>

                <a 
                  href="https://wa.me/595975190555?text=Hola!%20Quiero%20solicitar%20mi%20diagn%C3%B3stico%20gratuito%20de%20anuncios" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={trackConversion}
                  className="w-full py-4 text-center border border-[#0B0F19] bg-[#0B0F19] text-[#FBFBF9] hover:bg-[#2F57FB] hover:border-[#2F57FB] text-[10px] font-black uppercase tracking-[0.15em] transition-colors rounded shadow-xs"
                >
                  SOLICITAR MI DIAGNÓSTICO GRATUITO
                </a>
              </div>

              {/* Fase 2 Card */}
              <div className="bg-[#0B0F19] text-white border-2 border-[#2F57FB]/70 rounded p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#2F57FB] text-white text-[8px] font-black px-4 py-1.5 rounded-bl uppercase tracking-wider">
                  MONTAJE SISTÉMICO
                </div>

                <div>
                  <div className="bg-[#2F57FB]/20 text-[#2F57FB] text-[8px] font-black px-3 py-1.5 rounded uppercase tracking-widest w-fit mb-6 border border-[#2F57FB]/30">
                    FASE 2: DESPLIEGUE & RETORNO MENSUAL
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-6">
                    Ejecución e <br className="hidden sm:block" />
                    Inyección Fina
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3 items-start">
                      <Check className="text-[#2F57FB] w-4 h-4 mt-0.5" />
                      <p className="text-xs text-slate-200 font-bold leading-normal">
                        Producción estética de anuncios y copies sofisticados dirigidos a tu comprador ideal.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Check className="text-[#2F57FB] w-4 h-4 mt-0.5" />
                      <p className="text-xs text-slate-200 font-bold leading-normal">
                        Diseño del flujo en WhatsApp / Web y automatización de la ruta de interesados.
                      </p>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Check className="text-[#2F57FB] w-4 h-4 mt-0.5" />
                      <p className="text-xs text-slate-200 font-bold leading-normal">
                        Auditoría diaria de presupuesto de Meta Ads y dashboard con reportes mensuales de ROAS neto.
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs italic leading-relaxed border-t border-[#FBFBF9]/10 pt-4 mb-8">
                    "Contrato flexible mes a mes. Sin obligaciones mínimas de permanencia legal. Yo prefiero que te quedes con nosotros exclusivamente por la solidez del retorno financiero en tu caja."
                  </p>
                </div>

                <a 
                  href="https://wa.me/595975190555?text=Hola!%20Quiero%20agendar%20consulta%20de%20viabilidad%20para%20Fase%202" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={trackConversion}
                  className="w-full py-4 text-center bg-[#2F57FB] text-[#FBFBF9] hover:bg-[#FBFBF9] hover:text-[#0B0F19] text-[10px] font-black uppercase tracking-[0.15em] transition-colors rounded shadow-lg shadow-[#2F57FB]/20"
                >
                  AGENDAR CONSULTA DE VIABILIDAD
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 9: ACCORDION PRECISE FAQS */}
        <section className="py-20 sm:py-28 bg-[#FBFBF9] border-t border-[#E4E4DB]">
          <div className="max-w-4xl mx-auto px-4">
            
            <div className="text-center mb-16">
              <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB] mb-3">
                RESPUESTAS DIRECTAS SIN INTERMEDIARIOS
              </p>
              <h2 className="text-3xl sm:text-[42px] leading-tight font-black uppercase tracking-tight text-[#0B0F19]">
                Consultas <span className="font-serif italic font-light text-[#2F57FB] normal-case">Frecuentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white border border-[#E4E4DB] rounded overflow-hidden shadow-xs hover:border-[#2F57FB]/40 transition-all"
                  >
                    <button 
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0B0F19]"
                    >
                      <span className="text-xs sm:text-sm uppercase tracking-tight font-black leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#2F57FB] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="p-5 sm:p-6 border-t border-[#E4E4DB] bg-[#F4F4EE]/30 text-xs sm:text-sm text-[#0B0F19]/85 leading-relaxed font-medium">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION 10: END CALL TO ACTION */}
        <section className="py-20 sm:py-28 bg-[#0B0F19] text-[#FBFBF9] relative overflow-hidden border-t border-[#2F57FB]/20">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.25em] text-[#2F57FB] block mb-3">
              ¿CÓMO QUERÉS PROCEDER?
            </span>
            <h2 className="text-3xl sm:text-[52px] leading-tight font-black uppercase text-white tracking-tight mb-6">
              Vuelve cada guaraní, <br />
              <span className="font-serif italic font-light text-[#2F57FB] normal-case lowercase leading-normal">comprobado en tu cuenta.</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
              Estructuramos un plan piloto personalizado y sin cargo para auditar la salud de tus anuncios. Sin riesgos financieros, sin letra chica corporativa.
            </p>

            <a 
              href="https://wa.me/595975190555?text=Hola!%20Quiero%20comenzar%20gratis%20por%20la%20Fase%201%20de%20mi%20pauta" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={trackConversion}
              className="inline-flex items-center justify-center bg-[#2F57FB] hover:bg-[#FBFBF9] hover:text-[#0B0F19] text-white px-8 py-5 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#2F57FB]/15"
            >
              EMPEZÁ GRATIS POR LA FASE 1 <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0B0F19] border-t border-[#FBFBF9]/10 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-1.5 grayscale brightness-200">
              <span className="font-sans font-black text-lg tracking-tighter text-[#0B0F19]">
                Nu<span className="relative inline-block">n<span className="absolute -top-[5px] left-1/2 -translate-x-1/2">~</span></span>ez
              </span>
              <span className="font-serif italic text-xs uppercase tracking-widest text-[#2F57FB]">Studio</span>
            </div>
            <p className="font-mono text-[8px] text-[#FBFBF9]/40 uppercase tracking-widest">
              DIRECCIÓN INDEPENDIENTE COMERCIAL · ASUNCIÓN PARAGUAY
            </p>
          </div>

          <div className="text-center md:text-right font-mono text-[8px] text-[#FBFBF9]/40 leading-normal uppercase">
            <span>© 2026 NÚÑEZ STUDIO. TODOS LOS DERECHOS PRESERVADOS.</span><br />
            <span>DISEÑO EN BASE A PRINCIPIOS DE VALOR DE CAJA.</span>
          </div>

        </div>
      </footer>

    </div>
  );
}
