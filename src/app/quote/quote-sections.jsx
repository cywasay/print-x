"use client";

import { memo } from "react";
import Image from "next/image";
import {
  Check,
  Ruler,
  Eye,
  ChevronDown,
  Truck,
  Upload,
  FileText,
  Trash2,
  AlertCircle,
  ShoppingCart,
} from "lucide-react";
import { WhatsAppTrigger } from "@/app/_components/WhatsAppWidget";

export const PinStyleStep = memo(function PinStyleStep({ selectedId, onSelect }) {
  return (
    <section id="step-1" className="scroll-mt-32">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0F6393] mb-1">
          Step 1. <span className="text-[#00AEEF]">Select Pin Style</span>
        </h2>
        <div className="w-16 h-1 bg-[#00AEEF] rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PIN_STYLES.map((style) => (
          <div
            key={style.id}
            onClick={() => onSelect(style.id)}
            className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
              selectedId === style.id
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
                  loading="lazy"
                />
                {selectedId === style.id && (
                  <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                    <div className="w-10 h-10 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                      <Check size={22} className="text-white" strokeWidth={3.5} />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 p-5 flex flex-col justify-center items-center text-center">
                <h3 className="text-base font-bold text-[#0F6393] mb-3">{style.title}</h3>
                <button
                  className={`px-8 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all ${
                    selectedId === style.id
                      ? "bg-[#0F6393] text-white"
                      : "border-2 border-[#0F6393] text-[#0F6393] hover:bg-[#0F6393] hover:text-white"
                  }`}
                >
                  {selectedId === style.id ? "Selected" : "Select"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export const MetalFinishGrid = memo(function MetalFinishGrid({ selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {METAL_FINISHES.map((finish) => (
        <div
          key={finish.id}
          onClick={() => onSelect(finish.id)}
          className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
            selectedId === finish.id
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
              loading="lazy"
            />
            {selectedId === finish.id && (
              <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                  <Check size={18} className="text-white" strokeWidth={3.5} />
                </div>
              </div>
            )}
          </div>
          <div className="p-3 text-center">
            <h3 className="text-xs font-bold text-[#0F6393]">{finish.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
});

export const QuantitySelector = memo(function QuantitySelector({
  quantity,
  customQuantity,
  onSelect,
  onCustomQuantityChange,
  onCustomQuantityBlur,
}) {
  return (
    <div id="quantity-section" className="scroll-mt-32 mt-12">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-[#0F6393] mb-1">Select Required Quantity</h3>
        <div className="w-12 h-1 bg-[#00AEEF] rounded-full" />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex flex-nowrap overflow-x-auto gap-4 px-1 py-4 thin-scrollbar scroll-smooth">
          {QUANTITY_OPTIONS.map((option) => (
            <div
              key={option.id}
              onClick={() => onSelect(option.id)}
              className={`relative cursor-pointer w-[80px] h-[80px] rounded-lg border-2 shrink-0 transition-all duration-300 flex flex-col items-center justify-center gap-0 group overflow-hidden ${
                quantity === option.id
                  ? "bg-[#0F6393] border-[#0F6393] shadow-lg scale-[1.05] z-10"
                  : "bg-white border-slate-100 hover:border-[#0F6393]/30 hover:shadow-md"
              }`}
            >
              <span
                className={`text-lg font-black leading-tight ${
                  quantity === option.id ? "text-white" : "text-[#0F6393]"
                }`}
              >
                {option.id === "custom" ? "+" : option.id}
              </span>
              <span
                className={`text-[8px] font-bold uppercase tracking-wider ${
                  quantity === option.id ? "text-white/70" : "text-slate-400"
                }`}
              >
                {option.id === "custom" ? "Custom" : "Pcs"}
              </span>

              {quantity === option.id && (
                <div className="absolute bottom-1.5 animate-in fade-in zoom-in duration-300">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {quantity === "custom" && (
        <div className="mt-6 animate-in slide-in-from-top-2 duration-300">
          <input
            type="number"
            placeholder="Enter custom quantity (e.g. 2500)"
            value={customQuantity}
            onChange={(e) => onCustomQuantityChange(e.target.value)}
            onBlur={onCustomQuantityBlur}
            className="w-full max-w-md bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-400 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
          />
        </div>
      )}
    </div>
  );
});

export const DeliveryStep = memo(function DeliveryStep({ delivery, onSelect }) {
  return (
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
            onClick={() => onSelect(option.id)}
            className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 ${delivery === option.id ? "bg-[#0F6393] text-white shadow-md" : "bg-white border-slate-100"}`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${delivery === option.id ? "bg-white/10" : "bg-slate-50"}`}
              >
                {option.icon}
              </div>
              <div>
                <h3 className="text-base font-bold mb-0.5">{option.title}</h3>
                <p
                  className={`text-[10px] font-semibold ${delivery === option.id ? "text-white/60" : "text-slate-400"}`}
                >
                  {option.time}
                </p>
              </div>
              <div
                className={`ml-auto w-5 h-5 rounded-full border flex items-center justify-center ${delivery === option.id ? "bg-[#00AEEF] border-[#00AEEF]" : "border-slate-200"}`}
              >
                {delivery === option.id && (
                  <Check size={10} className="text-white" strokeWidth={4} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export const BackingGrid = memo(function BackingGrid({ selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {BACKING_OPTIONS.map((option) => (
        <div
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
            selectedId === option.id
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
              loading="lazy"
            />
            {selectedId === option.id && (
              <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                  <Check size={18} className="text-white" strokeWidth={3.5} />
                </div>
              </div>
            )}
          </div>
          <div className="p-3 text-center">
            <h3 className="text-xs font-bold text-[#0F6393]">{option.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
});

export const ColorGrid = memo(function ColorGrid({ selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {COLOR_OPTIONS.map((option) => (
        <div
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`group cursor-pointer bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md ${
            selectedId === option.id
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
              loading="lazy"
            />
            {selectedId === option.id && (
              <div className="absolute inset-0 bg-[#0F6393]/5 flex items-center justify-center relative z-10">
                <div className="w-8 h-8 bg-[#00AEEF] rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
                  <Check size={18} className="text-white" strokeWidth={3.5} />
                </div>
              </div>
            )}
          </div>
          <div className="p-3 text-center">
            <h3 className="text-xs font-bold text-[#0F6393]">{option.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
});

export const QuoteSidebar = memo(function QuoteSidebar({
  selectedStyleTitle,
  selectedFinishTitle,
  unitSizeLabel,
  quantityLabel,
  selectedDeliveryTitle,
  selectedBackingTitle,
  selectedColorTitle,
  isSubmitting,
  onSubmit,
}) {
  return (
    <div className="w-full lg:w-[380px]">
      <div className="sticky top-32">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden font-sans">
          <div className="bg-[#26729D] px-6 py-4 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em] leading-none mb-0.5 text-shadow-sm">
                Order
              </span>
              <span className="text-[13px] font-black text-white uppercase tracking-widest leading-none">
                Summary
              </span>
            </div>
            <div className="text-[9px] font-black text-white/90 uppercase tracking-widest bg-white/10 px-2 py-1.5 rounded-md border border-white/20 backdrop-blur-sm">
              Review Selections
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Product Style
                </span>
                <span className="text-[13px] font-bold text-[#0F6393] text-right truncate">
                  {selectedStyleTitle}
                </span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Metal Finish
                </span>
                <span className="text-[13px] font-bold text-[#0F6393] text-right">
                  {selectedFinishTitle}
                </span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Unit Size
                </span>
                <span className="text-[13px] font-bold text-[#0F6393]">{unitSizeLabel}</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Order Quantity
                </span>
                <span className="text-[13px] font-bold text-[#0F6393]">{quantityLabel}</span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Logistics
                </span>
                <span className="text-[13px] font-bold text-[#0F6393] text-right">
                  {selectedDeliveryTitle}
                </span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Backing Type
                </span>
                <span className="text-[13px] font-bold text-[#0F6393] text-right">
                  {selectedBackingTitle}
                </span>
              </div>
              <div className="flex justify-between items-baseline gap-4">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                  Color Palette
                </span>
                <span className="text-[13px] font-bold text-[#0F6393] text-right">
                  {selectedColorTitle}
                </span>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-dashed border-slate-200">
              <button
                onClick={onSubmit}
                disabled={isSubmitting}
                className="w-full bg-[#0F6393] hover:bg-[#0c537a] disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0F6393]/10 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                    <span>Request Quote</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <WhatsAppTrigger className="mt-4 w-full flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all group text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
              <Truck size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
                Expert Support
              </span>
              <span className="text-[10px] font-bold text-[#25D366]">Chat on WhatsApp</span>
            </div>
          </div>
          <div className="text-slate-300 group-hover:text-[#0F6393] transition-colors">→</div>
        </WhatsAppTrigger>
      </div>
    </div>
  );
});

const PIN_STYLES = [
  { id: "hard-enamel", title: "Hard Enamel Pins", image: "/lapel-categories/hard-enamel-pin.jpg" },
  { id: "soft-enamel", title: "Soft Enamel Pins", image: "/lapel-categories/soft-enamel-pin.jpg" },
  { id: "die-struck", title: "Die Struck Pin Badges", image: "/lapel-categories/die-cast-pin.jpg" },
  { id: "3d-cast", title: "3D Cast Pin Badges", image: "/lapel-categories/3d-cast-pin.jpg" },
  { id: "epoxy-pin", title: "Epoxy Pins", image: "/epoxy-pins/6.jpg" },
  { id: "custom-uv", title: "Custom UV Pins", image: "/lapel-categories/custom-UV-pin.jpg" },
  { id: "other", title: "Other pins", image: "/lapel-categories/other-pins-pin.jpg" },
];

const METAL_FINISHES = [
  { id: "gold", title: "Gold", image: "/metal-finish/gold-v2.png" },
  { id: "silver", title: "Silver", image: "/metal-finish/silver-v2.png" },
  { id: "copper", title: "Copper", image: "/metal-finish/copper-v2.png" },
  { id: "black-nickel", title: "Black Nickel", image: "/metal-finish/real-nickelv2.png" },
  { id: "black-metal", title: "Black Metal", image: "/metal-finish/black-metal-v2.png" },
  { id: "antique-gold", title: "Antique Gold", image: "/metal-finish/antique-gold-v2.png" },
  { id: "antique-silver", title: "Antique Silver", image: "/metal-finish/antique-silver-v2.png" },
  { id: "antique-copper", title: "Antique Copper", image: "/metal-finish/copperv2.png" },
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
    time: "10 to 20 Days",
    icon: <Truck size={32} />,
  },
];

const BACKING_OPTIONS = [
  { id: "pvc", title: "PVC", image: "/backing-type/PVC.jpg" },
  { id: "metal-butterfly", title: "Metal Butterfly", image: "/backing-type/butter-flay.jpg" },
  { id: "magnet", title: "Magnet", image: "/backing-type/magnet.jpg" },
  { id: "safety-pin", title: "Safety Pin", image: "/backing-type/saftypin.jpg.jpeg" },
];

const COLOR_OPTIONS = [
  { id: "3-less", title: "3 Colors or less", image: "/colors-amount/three-colors.png" },
  { id: "5-less", title: "5 Colors or less", image: "/colors-amount/5-colors.png" },
  { id: "6-8", title: "6 to 8 Colors", image: "/colors-amount/8-colors.png" },
];
