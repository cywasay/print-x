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
  X,
  Eye,
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
  { id: "gold", title: "Gold", image: "/metal-finish/gold-v2.png" },
  { id: "silver", title: "Silver", image: "/metal-finish/silver-v2.png" },
  { id: "copper", title: "Copper", image: "/metal-finish/copper-v2.png" },
  {
    id: "black-nickel",
    title: "Black Nickel",
    image: "/metal-finish/real-nickelv2.png",
  },
  {
    id: "black-metal",
    title: "Black Metal",
    image: "/metal-finish/black-metal-v2.png",
  },
  {
    id: "antique-gold",
    title: "Antique Gold",
    image: "/metal-finish/antique-gold-v2.png",
  },
  {
    id: "antique-silver",
    title: "Antique Silver",
    image: "/metal-finish/antique-silver-v2.png",
  },
  {
    id: "antique-copper",
    title: "Antique Copper",
    image: "/metal-finish/copperv2.png",
  },
];

const QUANTITY_OPTIONS = [
  { id: "25", label: "25 Pcs" },
  { id: "50", label: "50 Pcs" },
  { id: "100", label: "100 Pcs" },
  { id: "250", label: "250 Pcs" },
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
    customQuantity: "",
    backingType: "",
    colorAmount: "",
    designName: "",
    details: "",
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });

  const [showSizeGuide, setShowSizeGuide] = useState(false);

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

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 pt-6 pb-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side: Form Content */}
          <div className="flex-1 min-w-0 space-y-10 md:space-y-16">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0F6393] mb-3 md:mb-4 tracking-tight">
                Create Your <span className="text-[#00AEEF]">Order</span>
              </h1>
              <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl px-2 md:px-0">
                Customize your pins with our interactive builder. Follow the
                steps below to configure your perfect product.
              </p>
            </div>

            {/* Step 1 */}
            <section id="step-1" className="scroll-mt-32">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0F6393] mb-1">
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
                        ? "border-[#0F6393] ring-2 ring-[#0F6393]/5 shadow-sm"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="flex h-full min-h-[140px]">
                      <div className="w-[42%] relative bg-slate-50 overflow-hidden shrink-0">
                        <Image
                          src={style.image}
                          alt={`Selectable pin style: ${style.title}`}
                          fill
                          sizes="(max-width: 768px) 40vw, 200px"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          quality={85}
                        />
                        {formData.pinStyle === style.id && (
                          <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                            <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                              <Check size={22} className="text-white" strokeWidth={3.5} />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 p-5 flex flex-col justify-center items-center text-center">
                        <h3 className="text-base font-bold text-[#0F6393] mb-3">
                          {style.title}
                        </h3>
                        <button
                          className={`px-8 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all ${
                            formData.pinStyle === style.id
                              ? "bg-[#0F6393] text-white"
                              : "border-2 border-[#0F6393] text-[#0F6393] hover:bg-[#0F6393] hover:text-white"
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
                <h2 className="text-2xl font-bold text-[#0F6393] mb-1">
                  Step 2.{" "}
                  <span className="text-[#00AEEF]">Select Metal Finish</span>
                </h2>
                <div className="w-16 h-1 bg-[#00AEEF] rounded-full mt-2" />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {METAL_FINISHES.map((finish) => (
                  <div
                    key={finish.id}
                    onClick={() => updateForm("metalFinish", finish.id)}
                    className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
                      formData.metalFinish === finish.id
                        ? "border-[#0F6393] ring-2 ring-[#0F6393]/5 shadow-sm"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="aspect-square relative bg-slate-50 overflow-hidden">
                      <Image
                        src={finish.image}
                        alt={`Selectable metal finish: ${finish.title}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        quality={85}
                      />
                      {formData.metalFinish === finish.id && (
                        <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                          <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                            <Check size={18} className="text-white" strokeWidth={3.5} />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-xs font-bold text-[#0F6393]">
                        {finish.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dimensions */}
              <div className="mt-12 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F6393]/5 flex items-center justify-center">
                      <Ruler
                        size={20}
                        className="text-[#0F6393]"
                        strokeWidth={2.5}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F6393] tracking-tight">
                      Dimensions
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowSizeGuide(true)}
                    className="text-[#00AEEF] hover:text-[#0F6393] text-[12px] font-black uppercase tracking-widest flex items-center gap-2 transition-all duration-300 group/link"
                  >
                    <Eye size={14} className="group-hover:scale-110 transition-transform" />
                    <span>View Size Guide</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Measuring Unit
                    </label>
                    <div className="relative">
                      <select
                        value={formData.unit}
                        onChange={(e) => updateForm("unit", e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 outline-none font-bold text-sm text-[#0F6393] appearance-none cursor-pointer focus:border-[#0F6393] transition-colors shadow-sm"
                      >
                        <option>Centimeter</option>
                        <option>Inches</option>
                        <option>Millimeter</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Height
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2.5"
                      value={formData.height}
                      onChange={(e) => updateForm("height", e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-400 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">
                      Width
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 1.5"
                      value={formData.width}
                      onChange={(e) => updateForm("width", e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-400 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-12">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0F6393] mb-1">
                    Select Required Quantity
                  </h3>
                  <div className="w-12 h-1 bg-[#00AEEF] rounded-full" />
                </div>
                
                <div className="relative w-full overflow-hidden">
                  <div className="flex flex-nowrap overflow-x-auto gap-4 px-1 py-4 thin-scrollbar scroll-smooth">
                    {QUANTITY_OPTIONS.map((option) => (
                      <div
                        key={option.id}
                        onClick={() => updateForm("quantity", option.id)}
                        className={`relative cursor-pointer w-[80px] h-[80px] rounded-lg border-2 shrink-0 transition-all duration-300 flex flex-col items-center justify-center gap-0 group overflow-hidden ${
                          formData.quantity === option.id
                            ? "bg-[#0F6393] border-[#0F6393] shadow-lg scale-[1.05] z-10"
                            : "bg-white border-slate-100 hover:border-[#0F6393]/30 hover:shadow-md"
                        }`}
                      >
                      <span className={`text-lg font-black leading-tight ${
                        formData.quantity === option.id ? "text-white" : "text-[#0F6393]"
                      }`}>
                        {option.id === "custom" ? "+" : option.id}
                      </span>
                      <span className={`text-[8px] font-bold uppercase tracking-wider ${
                        formData.quantity === option.id ? "text-white/70" : "text-slate-400"
                      }`}>
                        {option.id === "custom" ? "Custom" : "Pcs"}
                      </span>
                      
                      {formData.quantity === option.id && (
                        <div className="absolute bottom-1.5 animate-in fade-in zoom-in duration-300">
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                  ))}
                  </div>
                </div>

                {formData.quantity === "custom" && (
                  <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
                    <input
                      type="number"
                      placeholder="Enter custom quantity (e.g. 2500)"
                      value={formData.customQuantity}
                      onChange={(e) =>
                        updateForm("customQuantity", e.target.value)
                      }
                      className="w-full max-w-md bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-400 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                    />
                  </div>
                )}
              </div>
            </section>

            {/* Delivery */}
            <section id="delivery" className="scroll-mt-32">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0F6393] mb-4 tracking-tight">
                  Select <span className="text-[#00AEEF]">Delivery Option</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DELIVERY_OPTIONS.map((option) => (
                  <div
                    key={option.id}
                    onClick={() => updateForm("delivery", option.id)}
                    className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${formData.delivery === option.id ? "bg-[#0F6393] text-white shadow-md" : "bg-white border-slate-100"}`}
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
                <h2 className="text-2xl font-bold text-[#0F6393] mb-1">
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
                        ? "border-[#0F6393] ring-2 ring-[#0F6393]/5 shadow-sm"
                        : "border-slate-100"
                    }`}
                  >
                    <div className="aspect-square relative bg-slate-50 overflow-hidden">
                      <Image
                        src={option.image}
                        alt={`Selectable backing type: ${option.title}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        quality={85}
                      />
                      {formData.backingType === option.id && (
                        <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                          <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                            <Check size={18} className="text-white" strokeWidth={3.5} />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-xs font-bold text-[#0F6393]">
                        {option.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0F6393] mb-1">
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
                          ? "border-[#0F6393] ring-2 ring-[#0F6393]/5 shadow-sm"
                          : "border-slate-100"
                      }`}
                    >
                      <div className="aspect-square relative bg-slate-50 overflow-hidden">
                        <Image
                          src={option.image}
                          alt={`Selectable color amount: ${option.title}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          quality={85}
                        />
                        {formData.colorAmount === option.id && (
                          <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                            <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                              <Check size={18} className="text-white" strokeWidth={3.5} />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="text-xs font-bold text-[#0F6393]">
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
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      File Attachment
                    </label>
                    <div className="flex-1 flex items-center justify-center border border-dashed border-slate-300 rounded-xl px-5 py-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer group shadow-sm">
                      <div className="flex items-center gap-3 text-slate-400 font-bold text-sm group-hover:text-[#0F6393]">
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
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors resize-none shadow-sm"
                  ></textarea>
                </div>

                <div className="pt-10 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-[#0F6393] mb-8">
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
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
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pt-8">
                  <button className="px-16 py-5 bg-[#0F6393] hover:bg-[#0F6393] text-white font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(0,76,153,0.3)] text-[13px] group">
                    Complete Quote
                    <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Size Guide Modal */}
          {showSizeGuide && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setShowSizeGuide(false)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-12 pointer-events-none"
              >
                <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
                  <button 
                    onClick={() => setShowSizeGuide(false)}
                    className="absolute top-0 right-0 md:-top-10 md:-right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all z-20 group"
                  >
                    <X size={24} className="text-white group-hover:rotate-90 transition-transform" />
                  </button>
                  
                  <div className="relative w-full h-full">
                    <Image 
                      src="/banners/size-guide.jpg" 
                      alt="Detailed pin size guide" 
                      fill 
                      className="object-contain rounded-2xl"
                      priority
                      quality={85}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Sidebar */}
          <div className="w-full lg:w-[380px]">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden font-sans">
                {/* Specialized Header Strip */}
                <div className="bg-[#26729D] px-6 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] leading-none mb-0.5 text-shadow-sm">Order</span>
                    <span className="text-[13px] font-black text-white uppercase tracking-widest leading-none">Summary</span>
                  </div>
                  <div className="text-[9px] font-black text-white/90 uppercase tracking-widest bg-white/10 px-2 py-1.5 rounded-md border border-white/20 backdrop-blur-sm">
                    Review Selections
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {/* Summary Rows */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Product Style</span>
                      <span className="text-[13px] font-bold text-[#0F6393] text-right truncate">
                        {selectedStyle?.title || "TBD"}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Metal Finish</span>
                      <span className="text-[13px] font-bold text-[#0F6393] text-right">
                        {selectedFinish?.title || "TBD"}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Unit Size</span>
                      <span className="text-[13px] font-bold text-[#0F6393]">
                        {formData.height || "0"}x{formData.width || "0"} {formData.unit === "Centimeter" ? "CM" : formData.unit === "Inches" ? "IN" : "MM"}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Order Quantity</span>
                      <span className="text-[13px] font-bold text-[#0F6393]">
                        {formData.quantity === "custom" ? formData.customQuantity : formData.quantity} Units
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Logistics</span>
                      <span className="text-[13px] font-bold text-[#00AEEF] text-right">
                        {selectedDelivery?.title || "TBD"}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Backing Type</span>
                      <span className="text-[13px] font-bold text-[#0F6393] text-right">
                        {selectedBacking?.title || "TBD"}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">Color Palette</span>
                      <span className="text-[13px] font-bold text-[#0F6393] text-right">
                        {selectedColor?.title || "TBD"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t border-dashed border-slate-200">
                    <button className="w-full bg-[#0F6393] hover:bg-[#0c537a] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0F6393]/10 group">
                      <ShoppingCart size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                      Complete Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Support Mini Card */}
              <a 
                href="https://wa.me/971507180562" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <Truck size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Expert Support</span>
                    <span className="text-[10px] font-bold text-[#25D366]">Chat on WhatsApp</span>
                  </div>
                </div>
                <div className="text-slate-300 group-hover:text-[#0F6393] transition-colors">
                  →
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
