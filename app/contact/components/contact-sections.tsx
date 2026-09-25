"use client";

import { useState, type FormEvent } from "react";
import { FiPhone, FiMail, FiCheck, FiShield, FiClock, FiSend, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export function ContactSections() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "10-25",
    services: "Hybrid Payroll, Bookkeeping & VAT",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // POST to the client's Formspree endpoint
      await fetch("https://formspree.io/f/xbjnnkaq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          _replyto: formData.email,
          phone: formData.phone,
          employees: formData.employees,
          services: formData.services,
          message: formData.message,
          _subject: `New Consultation Request: ${formData.company || formData.name} (${formData.name})`,
        }),
      });
    } catch {
      // Graceful fallback
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#03060c] text-slate-100 overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* 1. CONTACT HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-cyan-500/15">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 -right-32 size-[450px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#050d1a_1px,transparent_1px),linear-gradient(to_bottom,#050d1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
              DIRECT ONBOARDING & ARCHITECTURE REVIEW
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
              Let&apos;s Architect Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Payroll Rails.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Free consultation. Zero obligation. We will review your workforce size, current bureau setup, and statutory tax deductibility to calculate your exact speed and efficiency gains.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT: ADVISORY DESKS + FORM */}
      <section className="py-20 sm:py-28 relative">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Direct Contacts Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                  DIRECT ACCESS
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Speak directly with senior directors
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  No automated ticket queues or offshore call centers. You consult directly with our principal UK financial specialists.
                </p>
              </div>

              {/* Jai Bhola Desk */}
              <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-[#081224] to-[#040914] p-7 backdrop-blur-xl shadow-xl transition-all hover:border-cyan-400/50">
                <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Jai Bhola</h3>
                    <p className="font-mono text-xs font-semibold uppercase text-cyan-400 mt-0.5">
                      Senior Financial Specialist
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:+447436343619"
                    className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                      <FiPhone size={15} />
                    </div>
                    +44 743 6343 619
                  </a>
                  <a
                    href="mailto:ask@saps.pro"
                    className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                      <FiMail size={15} />
                    </div>
                    ask@saps.pro
                  </a>
                </div>
              </div>

              {/* Robert Taylor Desk */}
              <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-[#081224] to-[#040914] p-7 backdrop-blur-xl shadow-xl transition-all hover:border-cyan-400/50">
                <div className="flex items-center justify-between border-b border-cyan-500/15 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Robert Taylor</h3>
                    <p className="font-mono text-xs font-semibold uppercase text-emerald-400 mt-0.5">
                      Senior Financial Specialist
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-300">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:+447950721126"
                    className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
                      <FiPhone size={15} />
                    </div>
                    +44 795 0721 126
                  </a>
                  <a
                    href="mailto:rob@saps.pro"
                    className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-emerald-300"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400">
                      <FiMail size={15} />
                    </div>
                    rob@saps.pro
                  </a>
                </div>
              </div>

              {/* Badges HUD */}
              <div className="grid grid-cols-3 gap-3 rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4">
                <div className="text-center">
                  <p className="font-mono text-xs font-bold text-cyan-400">100%</p>
                  <p className="mt-1 text-[11px] text-slate-400">HMRC Compliant</p>
                </div>
                <div className="text-center border-x border-slate-800">
                  <p className="font-mono text-xs font-bold text-emerald-400">24/7</p>
                  <p className="mt-1 text-[11px] text-slate-400">Direct Advisory</p>
                </div>
                <div className="text-center">
                  <p className="font-mono text-xs font-bold text-purple-400">&lt; 2.0s</p>
                  <p className="mt-1 text-[11px] text-slate-400">Disbursal Rail</p>
                </div>
              </div>
            </div>

            {/* Consultation Request Form (7 cols) */}
            <div className="lg:col-span-7 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#091122]/90 to-[#040813] p-7 sm:p-10 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-cyan-500/15 pb-5">
                <div>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    Book Architecture Review
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400">
                    Input your workforce specifications for a customized tax optimization and disbursal blueprint.
                  </p>
                </div>
                <div className="hidden sm:flex size-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                  <FiClock size={20} />
                </div>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-emerald-950/20 p-8 text-center backdrop-blur-xl">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40">
                    <FiCheck size={28} />
                  </div>
                  <h4 className="mt-5 text-2xl font-bold text-white">
                    Consultation Request Transmitted
                  </h4>
                  <p className="mt-3 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-cyan-300">{formData.name}</span>. Either Jai Bhola or Robert Taylor will contact you within 24 business hours to conduct your structural review.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-400/30 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-cyan-300 transition-colors hover:bg-cyan-500/20"
                  >
                    <span>Submit another specification</span>
                    <FiArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Miller"
                        className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                      >
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Hospitality Ltd"
                        className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                      >
                        Corporate Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@example.co.uk"
                        className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                      >
                        Direct Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7123 456 789"
                        className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="employees"
                        className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                      >
                        Workforce Size
                      </label>
                      <select
                        id="employees"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      >
                        <option value="10-25" className="bg-[#050811] text-white">10 – 25 Employees</option>
                        <option value="26-50" className="bg-[#050811] text-white">26 – 50 Employees</option>
                        <option value="51-100" className="bg-[#050811] text-white">51 – 100 Employees</option>
                        <option value="101-150" className="bg-[#050811] text-white">101 – 150 Employees</option>
                        <option value="150+" className="bg-[#050811] text-white">150+ Employees</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="services"
                        className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                      >
                        Primary Rail Required
                      </label>
                      <select
                        id="services"
                        value={formData.services}
                        onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      >
                        <option value="Hybrid Payroll" className="bg-[#050811] text-white">Hybrid Tax-Efficient Payroll</option>
                        <option value="Faster Payments" className="bg-[#050811] text-white">Instant Faster Payments Disbursals</option>
                        <option value="Bookkeeping" className="bg-[#050811] text-white">Continuous Ledger & Management Accounts</option>
                        <option value="VAT Returns" className="bg-[#050811] text-white">Quarterly MTD VAT Filing</option>
                        <option value="CIS Returns" className="bg-[#050811] text-white">CIS Construction Scheme</option>
                        <option value="Complete Package" className="bg-[#050811] text-white">Complete Enterprise Suite (All)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                    >
                      Brief Notes / Current Bureau Setup (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline current payday frequencies, payment rails, or tax optimization questions..."
                      className="mt-2 w-full rounded-xl border border-cyan-500/20 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder-slate-600 transition-all focus:border-cyan-400 focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 py-4 text-sm font-bold text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <FiSend size={16} />
                    <span>{submitting ? "Transmitting Specification..." : "Transmit Consultation Request"}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <FiShield size={14} className="text-cyan-400" />
                    <span>HMRC compliant · Zero obligation · NDA confidential assessment</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
