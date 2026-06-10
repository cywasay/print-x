"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useQuoteScroll } from "./useQuoteScroll";
import {
  PinStyleStep,
  MetalFinishGrid,
  QuantitySelector,
  DeliveryStep,
  BackingGrid,
  ColorGrid,
  QuoteSidebar,
} from "./quote-sections";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import { WhatsAppProvider } from "@/app/_components/WhatsAppWidget";
import { WHATSAPP_CONTACTS } from "@/lib/contact";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Check,
  Info,
  Ruler,
  Truck,
  ChevronDown,
  X,
  Eye,
  Upload,
  FileText,
  Trash2,
  AlertCircle,
  Paperclip,
  MessageCircle,
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
    image: "/epoxy-pins/6.jpg",
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
    id: "3-less",
    title: "3 Colors or less",
    image: "/colors-amount/three-colors.png",
  },
  {
    id: "5-less",
    title: "5 Colors or less",
    image: "/colors-amount/5-colors.png",
  },
  { id: "6-8", title: "6 to 8 Colors", image: "/colors-amount/8-colors.png" },
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
  const fileInputRef = useRef(null);
  const [designFile, setDesignFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollToSection, scheduleScroll } = useQuoteScroll();
  const dimensionScrollTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  useEffect(() => {
    if (!showSuccessModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [showSuccessModal]);

  const handleFile = (file) => {
    setFileError(null);
    if (!file) return;

    const maxSize = 25 * 1024 * 1024; // 25 MB
    if (file.size > maxSize) {
      setFileError("File is too large. Maximum size allowed is 25MB.");
      return;
    }

    setDesignFile(file);

    if (file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);
    } else {
      setFilePreview(null);
    }

    if (!formData.designName) {
      const fileNameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      const cleanedName = fileNameWithoutExt
        .replace(/[_-]/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
      
      setFormData((prev) => ({ ...prev, designName: cleanedName }));
    }
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const removeFile = (e) => {
    if (e) e.stopPropagation();
    setDesignFile(null);
    if (filePreview) {
      URL.revokeObjectURL(filePreview);
      setFilePreview(null);
    }
    setFileError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.pinStyle) errors.pinStyle = "Please select a pin style.";
    if (!formData.metalFinish) errors.metalFinish = "Please select a metal finish.";
    if (!formData.height || isNaN(formData.height) || parseFloat(formData.height) <= 0) {
      errors.height = "Please enter a valid height.";
    }
    if (!formData.width || isNaN(formData.width) || parseFloat(formData.width) <= 0) {
      errors.width = "Please enter a valid width.";
    }
    if (formData.quantity === "custom") {
      if (!formData.customQuantity || isNaN(formData.customQuantity) || parseInt(formData.customQuantity) <= 0) {
        errors.quantity = "Please enter a valid custom quantity.";
      }
    } else if (!formData.quantity) {
      errors.quantity = "Please select a quantity.";
    }
    if (!formData.backingType) errors.backingType = "Please select a backing type.";
    if (!formData.colorAmount) errors.colorAmount = "Please select a color palette.";
    if (!formData.fullName.trim()) errors.fullName = "Please enter your full name.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Please enter your phone number.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = useCallback(
    async (e) => {
      if (e) e.preventDefault();

      if (!validateForm()) {
        if (!formData.pinStyle) {
          scrollToSection("step-1");
        } else if (
          !formData.metalFinish ||
          !formData.height ||
          !formData.width ||
          !formData.quantity ||
          (formData.quantity === "custom" && !formData.customQuantity)
        ) {
          scrollToSection("step-2");
        } else if (!formData.backingType || !formData.colorAmount) {
          scrollToSection("step-3");
        } else {
          scrollToSection("design-details-section");
        }
        return;
      }

      setIsSubmitting(true);
      setFormErrors({});

      try {
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
          formDataToSend.append(key, formData[key]);
        });
        if (designFile) {
          formDataToSend.append("designFile", designFile);
        }

        const response = await fetch("/api/quote", {
          method: "POST",
          body: formDataToSend,
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Failed to submit quote request.");
        }

        setShowSuccessModal(true);
      } catch (err) {
        console.error("Submission error:", err);
        setFormErrors({
          submit: err.message || "An unexpected error occurred. Please try again.",
        });
        scheduleScroll("design-details-section", 100);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, designFile, scrollToSection, scheduleScroll],
  );

  useEffect(() => {
    if (styleFromUrl && PIN_STYLES.some((s) => s.id === styleFromUrl)) {
      setFormData((prev) => ({ ...prev, pinStyle: styleFromUrl }));
    }
  }, [styleFromUrl]);

  const updateForm = useCallback(
    (field, value, nextId = null) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (nextId) scheduleScroll(nextId);
    },
    [scheduleScroll],
  );

  const handlePinStyleSelect = useCallback(
    (id) => updateForm("pinStyle", id, "step-2"),
    [updateForm],
  );
  const handleMetalFinishSelect = useCallback(
    (id) => updateForm("metalFinish", id, "dimensions-section"),
    [updateForm],
  );
  const handleQuantitySelect = useCallback(
    (id) => {
      if (id === "custom") {
        updateForm("quantity", id);
      } else {
        updateForm("quantity", id, "delivery");
      }
    },
    [updateForm],
  );
  const handleDeliverySelect = useCallback(
    (id) => updateForm("delivery", id, "step-3"),
    [updateForm],
  );
  const handleBackingSelect = useCallback(
    (id) => updateForm("backingType", id, "color-palette-section"),
    [updateForm],
  );
  const handleColorSelect = useCallback(
    (id) => updateForm("colorAmount", id, "design-details-section"),
    [updateForm],
  );
  const handleCustomQuantityChange = useCallback(
    (value) => updateForm("customQuantity", value),
    [updateForm],
  );
  const handleCustomQuantityBlur = useCallback(() => {
    if (formData.customQuantity) scrollToSection("delivery");
  }, [formData.customQuantity, scrollToSection]);

  const selectedStyle = useMemo(
    () => PIN_STYLES.find((s) => s.id === formData.pinStyle),
    [formData.pinStyle],
  );
  const selectedFinish = useMemo(
    () => METAL_FINISHES.find((f) => f.id === formData.metalFinish),
    [formData.metalFinish],
  );
  const selectedDelivery = useMemo(
    () => DELIVERY_OPTIONS.find((d) => d.id === formData.delivery),
    [formData.delivery],
  );
  const selectedBacking = useMemo(
    () => BACKING_OPTIONS.find((b) => b.id === formData.backingType),
    [formData.backingType],
  );
  const selectedColor = useMemo(
    () => COLOR_OPTIONS.find((c) => c.id === formData.colorAmount),
    [formData.colorAmount],
  );

  const handleDimensionBlur = useCallback(() => {
    if (!formData.height || !formData.width) return;
    if (dimensionScrollTimer.current) clearTimeout(dimensionScrollTimer.current);
    dimensionScrollTimer.current = setTimeout(() => {
      scrollToSection("quantity-section");
      dimensionScrollTimer.current = null;
    }, 500);
  }, [formData.height, formData.width, scrollToSection]);

  const sidebarUnitSize = useMemo(
    () =>
      `${formData.height || "0"}x${formData.width || "0"} ${
        formData.unit === "Centimeter" ? "CM" : formData.unit === "Inches" ? "IN" : "MM"
      }`,
    [formData.height, formData.width, formData.unit],
  );

  const sidebarQuantity = useMemo(
    () =>
      `${formData.quantity === "custom" ? formData.customQuantity : formData.quantity} Units`,
    [formData.quantity, formData.customQuantity],
  );

  const resetQuoteForm = () => {
    setShowSuccessModal(false);
    setFormData({
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
    removeFile();
    setFormErrors({});
  };

  const firstName = formData.fullName.trim().split(/\s+/)[0] || "there";
  const unitLabel =
    formData.unit === "Centimeter" ? "cm" : formData.unit === "Inches" ? "in" : "mm";
  const quantityLabel =
    formData.quantity === "custom" ? formData.customQuantity : formData.quantity;
  const summaryChips = [
    `${formData.height}×${formData.width} ${unitLabel}`,
    `${quantityLabel} pcs`,
    selectedFinish?.title,
    selectedBacking?.title,
    selectedColor?.title,
  ].filter(Boolean);

  const whatsAppHref = `${WHATSAPP_CONTACTS[0].href}?text=${encodeURIComponent(
    `Hi! I just submitted a quote request on Print-X for my custom pins:\n\n` +
      `- Style: ${selectedStyle?.title || "TBD"}\n` +
      `- Finish: ${selectedFinish?.title || "TBD"}\n` +
      `- Size: ${formData.height}x${formData.width} ${formData.unit}\n` +
      `- Quantity: ${quantityLabel} pcs\n` +
      `- Backing: ${selectedBacking?.title || "TBD"}\n` +
      `- Colors: ${selectedColor?.title || "TBD"}\n` +
      `- Name: ${formData.fullName}\n` +
      `- Email: ${formData.email}\n` +
      (designFile ? `- File attached: ${designFile.name}\n` : "") +
      `Please let me know the pricing and next steps!`,
  )}`;

  return (
    <WhatsAppProvider>
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

            <PinStyleStep selectedId={formData.pinStyle} onSelect={handlePinStyleSelect} />

            {/* Step 2 */}
            <section id="step-2" className="scroll-mt-32">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0F6393] mb-1">
                  Step 2.{" "}
                  <span className="text-[#00AEEF]">Select Metal Finish</span>
                </h2>
                <div className="w-16 h-1 bg-[#00AEEF] rounded-full mt-2" />
              </div>
              <MetalFinishGrid
                selectedId={formData.metalFinish}
                onSelect={handleMetalFinishSelect}
              />

              {/* Dimensions */}
              <div id="dimensions-section" className="scroll-mt-32 mt-12 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
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
                      onBlur={handleDimensionBlur}
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
                      onBlur={handleDimensionBlur}
                      className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-400 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                    />
                  </div>
                </div>
              </div>

              <QuantitySelector
                quantity={formData.quantity}
                customQuantity={formData.customQuantity}
                onSelect={handleQuantitySelect}
                onCustomQuantityChange={handleCustomQuantityChange}
                onCustomQuantityBlur={handleCustomQuantityBlur}
              />
            </section>

            <DeliveryStep delivery={formData.delivery} onSelect={handleDeliverySelect} />

            {/* Step 3 */}
            <section id="step-3" className="scroll-mt-32 pb-40">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#0F6393] mb-1">
                  Step 3.{" "}
                  <span className="text-[#00AEEF]">Select Backing Type</span>
                </h2>
                <div className="w-16 h-1 bg-[#00AEEF] rounded-full mt-2" />
              </div>

              <BackingGrid
                selectedId={formData.backingType}
                onSelect={handleBackingSelect}
              />

              <div id="color-palette-section" className="scroll-mt-32 mt-12">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-[#0F6393] mb-1">
                    Select Amount of Colors for Pin:
                  </h3>
                  <div className="w-12 h-1 bg-[#00AEEF] rounded-full" />
                </div>
                <ColorGrid
                  selectedId={formData.colorAmount}
                  onSelect={handleColorSelect}
                />
              </div>

              {/* Design & Contact Details */}
              <div id="design-details-section" className="scroll-mt-32 mt-16 space-y-10">
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
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center justify-between">
                      <span>File Attachment</span>
                      <span className="text-[9px] font-bold text-[#00AEEF] normal-case tracking-normal">
                        Accepts Vector & Images (Max 25MB)
                      </span>
                    </label>
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.ai,.eps,.svg,.zip,.rar"
                      className="hidden"
                    />

                    {!designFile ? (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setIsDragging(true);
                        }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setIsDragging(false);
                          const files = e.dataTransfer.files;
                          if (files && files.length > 0) {
                            handleFile(files[0]);
                          }
                        }}
                        className={`flex-1 flex items-center justify-center border border-dashed rounded-xl px-5 py-4 bg-white transition-all cursor-pointer group shadow-sm ${
                          isDragging
                            ? "border-[#00AEEF] bg-[#00AEEF]/5"
                            : "border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center gap-3 text-slate-400 font-bold text-sm group-hover:text-[#0F6393] transition-colors">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm text-sm font-black transition-colors ${
                            isDragging
                              ? "bg-[#00AEEF] text-white"
                              : "bg-slate-50 text-blue-500"
                          }`}>
                            {isDragging ? <Upload size={14} className="animate-bounce" /> : "+"}
                          </div>
                          <span>
                            {isDragging ? "Drop your file here!" : "Select design file"}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex items-center justify-between border border-slate-200 rounded-xl px-5 py-4 bg-white shadow-sm transition-all duration-300">
                        <div className="flex items-center gap-3 min-w-0">
                          {filePreview ? (
                            <div className="w-8 h-8 relative rounded-lg overflow-hidden border border-slate-100 shadow-sm shrink-0 bg-slate-50">
                              <img
                                src={filePreview}
                                alt="Design preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#0F6393] border border-slate-100 shadow-sm shrink-0">
                              <FileText size={16} />
                            </div>
                          )}
                          <div className="min-w-0 flex flex-col justify-center">
                            <span className="text-sm font-bold text-[#0F6393] truncate max-w-[150px] sm:max-w-[240px]">
                              {designFile.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold leading-none mt-0.5">
                              {(designFile.size / (1024 * 1024)).toFixed(2)} MB • {designFile.name.split('.').pop()?.toUpperCase() || "File"}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-1 ml-4">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="p-1.5 text-slate-400 hover:text-[#0F6393] hover:bg-slate-50 rounded-lg transition-colors"
                            title="Change File"
                          >
                            <Upload size={14} />
                          </button>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors"
                            title="Remove File"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {fileError && (
                      <span className="text-rose-500 text-[10px] font-bold mt-1 flex items-center gap-1 animate-in fade-in slide-in-from-top-1 duration-200">
                        <AlertCircle size={10} />
                        {fileError}
                      </span>
                    )}
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
                        placeholder="+971 50 123 4567"
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
                        placeholder="you@company.ae"
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
                        placeholder="Your Brand LLC"
                        className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 outline-none font-bold text-sm text-[#0F6393] placeholder:text-slate-500 placeholder:font-medium focus:border-[#0F6393] transition-colors shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Validation Feedback */}
                {Object.keys(formErrors).length > 0 && (
                  <div className="p-5 bg-rose-50 border border-rose-100 rounded-2xl animate-in slide-in-from-top-3 duration-300">
                    <h4 className="text-rose-800 font-bold text-sm flex items-center gap-2 mb-3">
                      <AlertCircle size={16} />
                      <span>Please complete the following selections:</span>
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-rose-600 text-xs font-semibold list-disc list-inside">
                      {formErrors.pinStyle && <li>{formErrors.pinStyle}</li>}
                      {formErrors.metalFinish && <li>{formErrors.metalFinish}</li>}
                      {(formErrors.height || formErrors.width) && (
                        <li>
                          {formErrors.height ? formErrors.height : ""}
                          {formErrors.height && formErrors.width ? " " : ""}
                          {formErrors.width ? formErrors.width : ""}
                        </li>
                      )}
                      {formErrors.quantity && <li>{formErrors.quantity}</li>}
                      {formErrors.backingType && <li>{formErrors.backingType}</li>}
                      {formErrors.colorAmount && <li>{formErrors.colorAmount}</li>}
                      {formErrors.fullName && <li>{formErrors.fullName}</li>}
                      {formErrors.email && <li>{formErrors.email}</li>}
                      {formErrors.phone && <li>{formErrors.phone}</li>}
                      {formErrors.submit && <li className="col-span-full font-bold">{formErrors.submit}</li>}
                    </ul>
                  </div>
                )}

                <div className="flex justify-center pt-8">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-16 py-5 bg-[#0F6393] hover:bg-[#0c537a] disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(0,76,153,0.3)] text-[13px] group flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Quote</span>
                        <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </>
                    )}
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
                      sizes="(max-width: 768px) 100vw, 800px"
                      quality={85}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          <QuoteSidebar
            selectedStyleTitle={selectedStyle?.title || "TBD"}
            selectedFinishTitle={selectedFinish?.title || "TBD"}
            unitSizeLabel={sidebarUnitSize}
            quantityLabel={sidebarQuantity}
            selectedDeliveryTitle={selectedDelivery?.title || "TBD"}
            selectedBackingTitle={selectedBacking?.title || "TBD"}
            selectedColorTitle={selectedColor?.title || "TBD"}
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
      
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-[6px]"
              onClick={resetQuoteForm}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quote-success-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", stiffness: 400, damping: 34 }}
              className="relative z-10 flex w-full max-w-[400px] max-h-[88dvh] flex-col overflow-hidden rounded-t-2xl border border-slate-200/80 bg-white shadow-[0_24px_48px_-12px_rgba(15,99,147,0.25)] sm:rounded-2xl"
            >
              <div className="relative shrink-0 bg-gradient-to-br from-[#0F6393] via-[#0d7aab] to-[#00AEEF] px-4 py-3.5 sm:px-5">
                <button
                  type="button"
                  onClick={resetQuoteForm}
                  aria-label="Close"
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                >
                  <X size={14} strokeWidth={2.5} />
                </button>
                <div className="flex items-center gap-3 pr-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 22, delay: 0.1 }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-md"
                  >
                    <Check size={20} className="text-[#0F6393]" strokeWidth={3} />
                  </motion.div>
                  <div>
                    <h3 id="quote-success-title" className="text-[15px] font-bold leading-tight text-white sm:text-base">
                      Quote received!
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/80">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      </span>
                      Reply within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-3.5 sm:px-5 sm:py-4">
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08, duration: 0.25 }}
                  className="space-y-3"
                >
                  <p className="text-[13px] leading-relaxed text-slate-600">
                    Thanks,{" "}
                    <span className="font-semibold text-[#0F6393]">{firstName}</span>!
                    We&apos;re preparing your proof for{" "}
                    <span className="font-semibold text-slate-800">{selectedStyle?.title}</span>.
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {summaryChips.map((chip, i) => (
                      <motion.span
                        key={chip}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.12 + i * 0.04, duration: 0.2 }}
                        className="rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold text-[#0F6393]"
                      >
                        {chip}
                      </motion.span>
                    ))}
                  </div>

                  {designFile && (
                    <div className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/80 px-2.5 py-2">
                      <Paperclip size={12} className="shrink-0 text-[#00AEEF]" />
                      <span className="min-w-0 truncate text-[11px] font-medium text-slate-600" title={designFile.name}>
                        {designFile.name}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 rounded-lg bg-[#F0F9FF] px-2.5 py-2 text-[10px] font-medium text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-[#0F6393]">
                      <Check size={11} strokeWidth={3} />
                      Received
                    </span>
                    <span className="text-slate-300">·</span>
                    <span>Design proof</span>
                    <span className="text-slate-300">·</span>
                    <span>Your quote</span>
                  </div>
                </motion.div>
              </div>

              <div className="shrink-0 border-t border-slate-100 bg-white p-3 sm:p-4">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={resetQuoteForm}
                    className="order-2 flex h-10 flex-1 items-center justify-center rounded-xl border border-slate-200 text-[11px] font-bold uppercase tracking-wide text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 sm:order-1"
                  >
                    New quote
                  </button>
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="order-1 flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-[#20ba56] sm:order-2"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
    </WhatsAppProvider>
  );
}
