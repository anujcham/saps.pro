"use client";

import { useState, type FormEvent } from "react";
import { FiPhone, FiMail, FiCheck, FiShield, FiClock, FiSend } from "react-icons/fi";

export function ContactSections() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "10-25",
    services: "Hybrid Payroll, Bookkeeping & VAT",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden bg-slate-50">
      {/* Contact Hero */}
      <section className="relative bg-[#0c120f] py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(245,158,11,0.18),transparent_36%),linear-gradient(135deg,#0a100d,#16231d)]" />
        <div className="relative z-10 mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-amber-400">
            Get Started
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Let&apos;s Talk.
          </h1>
          <div className="mt-4 h-1 w-16 bg-amber-400" />
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Free consultation. No obligation. We will review your current financial structure and show you clearly how SAPs.Pro can support your business.
          </p>
        </div>
      </section>

      {/* Main Content: Direct Contacts + Form */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[94rem] px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Direct Contacts Column */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Speak directly with our senior advisors
              </h2>
              <p className="mt-3 text-slate-600">
                You won&apos;t be routed to an overseas call center. You will consult directly with our principal specialists.
              </p>

              <div className="mt-10 space-y-6">
                {/* Jai Bhola */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-amber-400">
                  <div className="h-1 w-12 bg-amber-400" />
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">Jai Bhola</h3>
                  <p className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Senior Financial Specialist
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href="tel:+447436343619"
                      className="flex items-center gap-3 text-base font-medium text-slate-800 transition-colors hover:text-amber-600"
                    >
                      <div className="flex size-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                        <FiPhone size={16} />
                      </div>
                      +44 743 6343 619
                    </a>
                    <a
                      href="mailto:ask@saps.pro"
                      className="flex items-center gap-3 text-base font-medium text-amber-600 transition-colors hover:underline"
                    >
                      <div className="flex size-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                        <FiMail size={16} />
                      </div>
                      ask@saps.pro
                    </a>
                  </div>
                </div>

                {/* Robert Taylor */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-amber-400">
                  <div className="h-1 w-12 bg-amber-400" />
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">Robert Taylor</h3>
                  <p className="mt-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Senior Financial Specialist
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href="tel:+447950721126"
                      className="flex items-center gap-3 text-base font-medium text-slate-800 transition-colors hover:text-amber-600"
                    >
                      <div className="flex size-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                        <FiPhone size={16} />
                      </div>
                      +44 795 0721 126
                    </a>
                    <a
                      href="mailto:rob@saps.pro"
                      className="flex items-center gap-3 text-base font-medium text-amber-600 transition-colors hover:underline"
                    >
                      <div className="flex size-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                        <FiMail size={16} />
                      </div>
                      rob@saps.pro
                    </a>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="mt-8 flex flex-wrap gap-4 rounded-xl bg-slate-900 p-5 text-white">
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
                  <FiShield size={16} />
                  <span>100% HMRC Compliant</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
                  <FiClock size={16} />
                  <span>24/7 Advisory</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <FiCheck size={16} />
                  <span>UK Registered</span>
                </div>
              </div>
            </div>

            {/* Consultation Request Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-950">
                Book A Consultation
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Provide a few details about your company and workforce to receive a clear assessment of your payroll & tax position.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-8 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-400 text-slate-950">
                    <FiCheck size={24} />
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-slate-950">
                    Consultation Request Received
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Thank you, {formData.name}. Either Jai Bhola or Robert Taylor will contact you within 24 business hours to review your structure.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-amber-700 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
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
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
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
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Business Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="david@example.co.uk"
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7123 456 789"
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="employees"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Workforce Size
                      </label>
                      <select
                        id="employees"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="10-25">10 – 25 Employees</option>
                        <option value="26-50">26 – 50 Employees</option>
                        <option value="51-100">51 – 100 Employees</option>
                        <option value="101-150">101 – 150 Employees</option>
                        <option value="150+">150+ Employees</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="services"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                      >
                        Primary Requirement
                      </label>
                      <select
                        id="services"
                        value={formData.services}
                        onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Hybrid Payroll">Hybrid Tax-Efficient Payroll</option>
                        <option value="Bookkeeping">Bookkeeping & Management Accounts</option>
                        <option value="VAT Returns">VAT Returns & Penalty Protection</option>
                        <option value="CIS Returns">CIS Construction Scheme</option>
                        <option value="Complete Package">Complete Financial Support (All)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700"
                    >
                      Brief Notes / Current Setup (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us briefly about your current payroll or accounting arrangements..."
                      className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-950 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-amber-400 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 shadow-md transition-all hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
                  >
                    <FiSend size={16} /> Request Free Consultation
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    No obligation. Confidential review. Fast response from our UK team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

