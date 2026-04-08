import Link from 'next/link';

export default function Services() {
  return (
    <div className="flex flex-col mb-12">
      {/* Personalized Recommendations CTA (Classic Amazon pattern) */}
      <section className="py-8 bg-white border-y border-slate-200 flex flex-col items-center text-center w-full">
        <div className="py-2">
          <p className="text-[13px] font-medium mb-1.5">See personalized corporate printing rates</p>
          <Link href="#" className="inline-block w-[240px] py-1.5 bg-gradient-to-b from-amber-200 to-amber-400 border border-amber-500 rounded shadow-sm text-sm font-bold text-slate-900 hover:from-amber-300 hover:to-amber-500 transition-colors mb-1.5">
            Sign in securely
          </Link>
          <p className="text-[11px] text-slate-600">
            New corporate client? <Link href="#" className="text-cyan-800 hover:text-orange-700 hover:underline">Start here.</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
