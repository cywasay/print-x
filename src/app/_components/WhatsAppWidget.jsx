"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { WHATSAPP_CONTACTS } from "@/lib/contact";

const WhatsAppContext = createContext(null);

export function WhatsAppProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <WhatsAppContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}
      <WhatsAppPickerPanel isOpen={isOpen} onClose={close} />
    </WhatsAppContext.Provider>
  );
}

export function useWhatsAppPicker() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) {
    throw new Error("useWhatsAppPicker must be used within WhatsAppProvider");
  }
  return ctx;
}

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function WhatsAppPickerPanel({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[9998] bg-black/20"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="fixed bottom-24 right-6 z-[9999] w-[min(340px,calc(100vw-2rem))] rounded-xl overflow-hidden shadow-2xl font-barlow animate-in fade-in slide-in-from-bottom-4 duration-200"
        role="dialog"
        aria-label="WhatsApp contacts"
      >
        <div className="bg-[#25D366] px-5 py-4 flex items-start gap-3">
          <div className="shrink-0 mt-0.5">
            <WhatsAppIcon className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="text-white text-[17px] font-bold leading-tight">
              Start a Conversation
            </h3>
            <p className="text-white/90 text-[13px] mt-1 leading-snug">
              Hi! Click one of our members below to chat on{" "}
              <strong className="font-bold">WhatsApp</strong>
            </p>
          </div>
        </div>

        <div className="bg-white px-4 py-4">
          <p className="text-center text-[12px] text-slate-500 mb-4">
            The team typically replies in a few minutes.
          </p>

          <ul className="flex flex-col gap-3">
            {WHATSAPP_CONTACTS.map((contact) => (
              <li key={contact.href}>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors group"
                >
                  <span className="w-1 self-stretch rounded-full bg-[#25D366] shrink-0" />
                  <span className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </span>
                  <span className="flex-1 text-[14px] font-semibold text-slate-700 leading-snug">
                    {contact.name}
                  </span>
                  <span className="text-[#25D366] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    <WhatsAppIcon className="w-5 h-5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function WhatsAppFloatingButton() {
  const { toggle, isOpen } = useWhatsAppPicker();

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      <div className="bg-white px-4 py-2 rounded-lg shadow-lg hidden md:block border border-gray-100">
        <p className="text-[13px] font-bold text-gray-800">
          Need Quote?{" "}
          <span className="text-gray-500 font-medium">Chat with us</span>
        </p>
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label="Open WhatsApp contacts"
        aria-expanded={isOpen}
        className="bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      >
        <WhatsAppIcon className="w-8 h-8" />
      </button>
    </div>
  );
}

export function WhatsAppTrigger({ children, className, onClick, ...props }) {
  const { open } = useWhatsAppPicker();

  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        open();
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}
