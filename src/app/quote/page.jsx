"use client";

import { useState, useEffect } from "react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ShoppingCart,
  Info,
  Ruler,
  Truck,
  ChevronDown,
} from "lucide-react";
import { Suspense } from "react";

const PIN_STYLES = [
  {
    id: "hard-enamel",
    title: "Hard Enamel Pins",
    image: "/lapel-categories/hard-enamel-pin.jpg",
  },
  {
    id: "soft-enamel",
    title: "Soft Enamel Pins",
    image: "/lapel-categories/soft-enamel-pin.jpg",
  },
  {
    id: "die-struck",
    title: "Die Struck Pin Badges",
    image: "/lapel-categories/die-cast-pin.jpg",
  },
  {
    id: "3d-cast",
    title: "3D Cast Pin Badges",
    image: "/lapel-categories/3d-cast-pin.jpg",
  },
  {
    id: "epoxy-pin",
    title: "Epoxy Pins",
    image: "/lapel-categories/epoxy-pin.jpg",
  },
  {
    id: "custom-uv",
    title: "Custom UV Pins",
    image: "/lapel-categories/custom-UV-pin.jpg",
  },
  {
    id: "other",
    title: "Other pins",
    image: "/lapel-categories/other-pins-pin.jpg",
  },
];

const METAL_FINISHES = [
  { id: "gold", title: "Gold", image: "/metal-finish/gold.png" },
  { id: "silver", title: "Silver", image: "/metal-finish/silver.png" },
  { id: "copper", title: "Copper", image: "/metal-finish/copper.png" },
  {
    id: "black-nickel",
    title: "Black Nickel",
    image: "/metal-finish/black-nickel.png",
  },
  {
    id: "black-metal",
    title: "Black Metal",
    image: "/metal-finish/black-metal.png",
  },
  {
    id: "antique-gold",
    title: "Antique Gold",
    image: "/metal-finish/antique-gold.png",
  },
  {
    id: "antique-silver",
    title: "Antique Silver",
    image: "/metal-finish/antiue-silver.png",
  },
  {
    id: "antique-copper",
    title: "Antique Copper",
    image: "/metal-finish/antique-copper.png",
  },
];

const QUANTITY_OPTIONS = [
  { id: "25", label: "25 Pcs" },
  { id: "50", label: "50 Pcs" },
  { id: "100", label: "100 Pcs" },
  { id: "200", label: "200 Pcs" },
  { id: "300", label: "300 Pcs" },
  { id: "500", label: "500 Pcs" },
  { id: "1000", label: "1000 Pcs" },
  { id: "2000", label: "2000 Pcs" },
  { id: "custom", label: "Custom Quantity" },
];

const DELIVERY_OPTIONS = [
  {
    id: "standard",
    title: "Standard Delivery",
    time: "20 to 30 Days",
    icon: <Truck size={32} />,
  },
  {
    id: "express",
    title: "Express Delivery",
    time: "10 to 14 Days",
    icon: <Truck size={32} />,
  },
];

const BACKING_OPTIONS = [
  { id: "pvc", title: "PVC", image: "/backing-type/PVC.jpg" },
  {
    id: "metal-butterfly",
    title: "Metal Butterfly",
    image: "/backing-type/butter-flay.jpg",
  },
  { id: "magnet", title: "Magnet", image: "/backing-type/magnet.jpg" },
  {
    id: "safety-pin",
    title: "Safety Pin",
    image: "/backing-type/saftypin.jpg.jpeg",
  },
];

const COLOR_OPTIONS = [
  {
    id: "5-less",
    title: "5 Colors or less",
    image: "/colors-amount/5-colors.png",
  },
  { id: "6-8", title: "6 to 8 Colors", image: "/colors-amount/8-colors.png" },
  {
    id: "9-12",
    title: "9 to 12 Colors",
    image: "/colors-amount/12-colors.png",
  },
  {
    id: "13-20",
    title: "13 to 20 Colors",
    image: "/colors-amount/20-colors.png",
  },
];

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="w-10 h-10 border-4 border-[#00AEEF] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <QuotePageContent />
    </Suspense>
  );
}

function QuotePageContent() {
  const searchParams = useSearchParams();
  const styleFromUrl = searchParams.get("style");

  const [formData, setFormData] = useState({
    pinStyle: "",
    metalFinish: "",
    unit: "Centimeter",
    height: "",
    width: "",
    delivery: "standard",
    quantity: "100",
    backingType: "",
    colorAmount: "",
    designName: "",
    details: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
    if (styleFromUrl && PIN_STYLES.some((s) => s.id === styleFromUrl)) {
      setFormData((prev) => ({ ...prev, pinStyle: styleFromUrl }));
    }
  }, [styleFromUrl]);

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const selectedStyle = PIN_STYLES.find((s) => s.id === formData.pinStyle);
  const selectedFinish = METAL_FINISHES.find(
    (f) => f.id === formData.metalFinish,
  );
  const selectedDelivery = DELIVERY_OPTIONS.find(
    (d) => d.id === formData.delivery,
  );
  const selectedQuantity = QUANTITY_OPTIONS.find(
    (q) => q.id === formData.quantity,
  );
  const selectedBacking = BACKING_OPTIONS.find(
    (b) => b.id === formData.backingType,
  );
  const selectedColor = COLOR_OPTIONS.find(
    (c) => c.id === formData.colorAmount,
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Form Content */}
          <div className="flex-1 space-y-16">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-[#001A33] mb-4 tracking-tight">
                Create Your <span className="text-[#00AEEF]">Order</span>
              </h1>
              <p className="text-slate-500 text-base font-medium max-w-2xl">
                Customize your pins with our interactive builder. Follow the
                steps below to configure your perfect product.
              </p>
            </div>

            {/* Step 1 */}
            <section id="step-1" className="scroll-mt-32">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#001A33] mb-1">
                  Step 1.{" "}
                  <span className="text-[#00AEEF]">Select Pin Style</span>
                </h2>
                <div className="w-16 h-1 bg-[#00AEEF] rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PIN_STYLES.map((style) => (
                  <div
                    key={style.id}
                    onClick={() => updateForm("pinStyle", style.id)}
                    className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
                      formData.pinStyle === style.id
                        ? "border-[#004C99] ring-2 ring-[#004C99]/5 shadow-sm"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="flex h-full min-h-[140px]">
                      <div className="w-[42%] relative bg-slate-50 overflow-hidden shrink-0">
                        <Image
                          src={style.image}
                          alt={style.title}
                          fill
                          sizes="(max-width: 768px) 40vw, 200px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {formData.pinStyle === style.id && (
                          <div className="absolute inset-0 bg-[#004C99]/10 flex items-center justify-center relative z-10">
                            <Check size={20} className="text-[#004C99]" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 p-5 flex flex-col justify-center items-center text-center">
                        <h3 className="text-base font-bold text-[#001A33] mb-3">
                          {style.title}
                        </h3>
                        <button
                          className={`px-8 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all ${
                            formData.pinStyle === style.id
                              ? "bg-[#004C99] text-white"
                              : "border-2 border-[#004C99] text-[#004C99] hover:bg-[#004C99] hover:text-white"
                          }`}
                        >
                          {formData.pinStyle === style.id
                            ? "Selected"
                            : "Select"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step 2 */}
            <section id="step-2" className="scroll-mt-32">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#001A33] mb-1">
                  Step 2.{" "}
                  <span className="text-[#00AEEF]">Select Metal Finish</span>
                </h2>
                <div className="w-16 h-1 bg-[#00AEEF] rounded-full mt-2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {METAL_FINISHES.map((finish) => (
                  <div
                    key={finish.id}
                    onClick={() => updateForm("metalFinish", finish.id)}
                    className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
                      formData.metalFinish === finish.id
                        ? "border-[#004C99] ring-2 ring-[#004C99]/5 shadow-sm"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="flex h-full min-h-[110px]">
                      <div className="w-[35%] relative bg-slate-50 overflow-hidden shrink-0">
                        <Image
                          src={finish.image}
                          alt={finish.title}
                          fill
                          sizes="(max-width: 768px) 30vw, 150px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 p-4 flex items-center justify-center">
                        <h3 className="text-base font-bold text-[#001A33]">
                          {finish.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dimensions */}
              <div className="mt-12 bg-[#001A33] p-10 rounded-2xl shadow-xl relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Ruler
                      size={20}
                      className="text-[#51A9FF]"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Dimensions
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[10px] font-black text-blue-100/50 uppercase tracking-[0.2em] ml-1">
                      Measuring Unit
                    </label>
                    <div className="relative">
                      <select
                        value={formData.unit}
                        onChange={(e) => updateForm("unit", e.target.value)}
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-bold text-sm text-white appearance-none cursor-pointer focus:border-[#51A9FF] transition-colors"
                      >
                        <option className="bg-[#001A33]">Centimeter</option>
                        <option className="bg-[#001A33]">Inches</option>
                        <option className="bg-[#001A33]">Millimeter</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[10px] font-black text-blue-100/50 uppercase tracking-[0.2em] ml-1">
                      Height
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2.5"
                      value={formData.height}
                      onChange={(e) => updateForm("height", e.target.value)}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-bold text-sm text-white placeholder:text-white/40 placeholder:font-medium focus:border-[#51A9FF] transition-colors shadow-inner"
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[10px] font-black text-blue-100/50 uppercase tracking-[0.2em] ml-1">
                      Width
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1.5"
                      value={formData.width}
                      onChange={(e) => updateForm("width", e.target.value)}
                      className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3.5 outline-none font-bold text-sm text-white placeholder:text-white/40 placeholder:font-medium focus:border-[#51A9FF] transition-colors shadow-inner"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#001A33] mb-1">
                    Select Required Quantity
                  </h3>
                  <div className="w-12 h-1 bg-[#00AEEF] rounded-full" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {QUANTITY_OPTIONS.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => updateForm("quantity", option.id)}
                      className={`group cursor-pointer bg-white rounded-lg p-3.5 border transition-all duration-300 flex items-center gap-3 ${
                        formData.quantity === option.id
                          ? "border-[#001A33] bg-[#001A33]/5 shadow-sm"
                          : "border-slate-100"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center ${formData.quantity === option.id ? "bg-[#001A33] border-[#001A33]" : "border-slate-200"}`}
                      >
                        {formData.quantity === option.id && (
                          <Check size={10} className="text-white" />
                        )}
                      </div>
                      <span className="font-bold text-xs text-[#001A33]">
                        {option.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section id="delivery" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#001A33] mb-4 tracking-tight">
                  Select <span className="text-[#00AEEF]">Delivery Option</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DELIVERY_OPTIONS.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => updateForm("delivery", option.id)}
                    className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${formData.delivery === option.id ? "bg-[#001A33] text-white shadow-md" : "bg-white border-slate-100"}`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${formData.delivery === option.id ? "bg-white/10" : "bg-slate-50"}`}
                      >
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-bold mb-0.5">
                          {option.title}
                        </h3>
                        <p
                          className={`text-[10px] font-semibold ${formData.delivery === option.id ? "text-white/60" : "text-slate-400"}`}
                        >
                          {option.time}
                        </p>
                      </div>
                      <div
                        className={`ml-auto w-5 h-5 rounded-full border flex items-center justify-center ${formData.delivery === option.id ? "bg-[#00AEEF] border-[#00AEEF]" : "border-slate-200"}`}
                      >
                        {formData.delivery === option.id && (
                          <Check
                            size={10}
                            className="text-white"
                            strokeWidth={4}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Step 3 */}
            <section id="step-3" className="scroll-mt-32 pb-40">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#001A33] mb-1">
                  Step 3.{" "}
                  <span className="text-[#00AEEF]">Select Backing Type</span>
                </h2>
                <div className="w-16 h-1 bg-[#00AEEF] rounded-full mt-2" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {BACKING_OPTIONS.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => updateForm("backingType", option.id)}
                    className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
                      formData.backingType === option.id
                        ? "border-[#004C99] ring-2 ring-[#004C99]/5 shadow-sm"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="aspect-square relative bg-slate-50 overflow-hidden">
                      <Image
                        src={option.image}
                        alt={option.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {formData.backingType === option.id && (
                        <div className="absolute inset-0 bg-[#004C99]/10 flex items-center justify-center relative z-10">
                          <Check size={20} className="text-[#004C99]" />
                        </div>
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-xs font-bold text-[#001A33]">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#001A33] mb-1">
                    Select Amount of Colors for Pin:
                  </h3>
                  <div className="w-12 h-1 bg-[#00AEEF] rounded-full" />
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {COLOR_OPTIONS.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => updateForm("colorAmount", option.id)}
                      className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
                        formData.colorAmount === option.id
                          ? "border-[#004C99] ring-2 ring-[#004C99]/5 shadow-sm"
                          : "border-slate-100"
                      }`}
                    >
                      <div className="aspect-square relative bg-slate-50 overflow-hidden">
                        <Image
                          src={option.image}
                          alt={option.title}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {formData.colorAmount === option.id && (
                          <div className="absolute inset-0 bg-[#004C99]/10 flex items-center justify-center relative z-10">
                            <Check size={20} className="text-[#004C99]" />
                          </div>
                        )}
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="text-xs font-bold text-[#001A33]">
                          {option.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design & Contact Details */}
              <div className="mt-16 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Design Name
                    </label>
                    <input
                      type="text"
                      value={formData.designName}
                      onChange={(e) => updateForm("designName", e.target.value)}
                      placeholder="Project Name"
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#001A33] placeholder:text-slate-500 placeholder:font-medium focus:border-[#004C99] transition-colors shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      File Attachment
                    </label>
                    <div className="flex-1 flex items-center justify-center border border-dashed border-slate-300 rounded-xl px-5 py-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer group shadow-sm">
                      <div className="flex items-center gap-3 text-slate-400 font-bold text-sm group-hover:text-[#004C99]">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-blue-500 shadow-sm text-sm font-black">
                          +
                        </div>
                        <span>Select design file</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Additional Details
                  </label>
                  <textarea
                    rows="4"
                    value={formData.details}
                    onChange={(e) => updateForm("details", e.target.value)}
                    placeholder="Tell us more about your project requirements..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#001A33] placeholder:text-slate-500 placeholder:font-medium focus:border-[#004C99] transition-colors resize-none shadow-sm"
                  ></textarea>
                </div>

                <div className="pt-10 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-[#001A33] mb-8">
                    Account Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => updateForm("fullName", e.target.value)}
                        placeholder="Enter your name"
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#001A33] placeholder:text-slate-500 placeholder:font-medium focus:border-[#004C99] transition-colors shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#001A33] placeholder:text-slate-500 placeholder:font-medium focus:border-[#004C99] transition-colors shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#001A33] placeholder:text-slate-500 placeholder:font-medium focus:border-[#004C99] transition-colors shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateForm("company", e.target.value)}
                        placeholder="Your Brand Ltd."
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#001A33] placeholder:text-slate-500 placeholder:font-medium focus:border-[#004C99] transition-colors shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-8">
                  <button className="px-16 py-5 bg-[#004C99] hover:bg-[#001A33] text-white font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(0,76,153,0.3)] text-[13px] group">
                    Complete Quote
                    <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[420px]">
            <div className="sticky top-32">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden font-sans">
                {/* Header with Logo */}
                <div className="p-8 pb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-black pt-1">
                    Order Summary
                  </h3>
                  <div className="shrink-0">
                    <Image
                      src="/logo-web.png"
                      alt="PrintX Logo"
                      width={100}
                      height={32}
                      className="h-8 w-auto object-contain"
                      style={{ height: "auto", width: "auto" }}
                    />
                  </div>
                </div>

                <div className="px-8 pb-8 space-y-6">
                  {/* Pin Style Row */}
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-700">Pin Style:</span>
                    <span className="text-slate-900">
                      {selectedStyle?.title || "No Pin Style Selected"}
                    </span>
                  </div>

                  <div className="space-y-4 pt-2">
                    <h4 className="text-lg font-bold text-black">
                      Customize Options:
                    </h4>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">Size:</span>
                      <span className="text-slate-900">
                        {formData.height || '"'} x {formData.width || '"'}{" "}
                        {formData.unit === "Centimeter"
                          ? "CM"
                          : formData.unit === "Inches"
                            ? "IN"
                            : "MM"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">Metal Finish :</span>
                      <span className="text-slate-900">
                        {selectedFinish?.title || ""}
                      </span>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-black">
                      Further Options:
                    </h4>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">Backing Type :</span>
                      <span className="text-slate-900">
                        {selectedBacking?.title || ""}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">Colors :</span>
                      <span className="text-slate-900">
                        {selectedColor?.title || ""}
                      </span>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-black">
                      Details, Artwork & Delivery :
                    </h4>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">Design Name :</span>
                      <span className="text-slate-900">
                        {formData.designName || ""}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-700">Delivery :</span>
                      <span className="text-slate-900">
                        {selectedDelivery?.title || ""}
                      </span>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm font-semibold text-slate-700">
                      Quantity :
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      {formData.quantity} Pcs
                    </span>
                  </div>
                </div>
              </div>

              {/* Support Button */}
              <div className="mt-6 bg-[#25D366] px-6 py-4 rounded-xl text-white shadow-lg flex items-center justify-between cursor-pointer hover:bg-[#20bd5a] transition-all">
                <span className="font-bold text-sm uppercase tracking-wider">
                  Expert Support
                </span>
                <div className="bg-white/20 p-2 rounded-lg">
                  <Truck size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
