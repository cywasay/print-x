"use client";

import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const googleReviews = [
  {
    name: "Athi Rokith",
    initial: "A",
    bgColor: "bg-[#e8701a]",
    time: "1 year ago",
    text: "Your approach, the quality of the items, and the fast delivery are all great.👍👍👍",
  },
  {
    name: "Annette Engelbrecht",
    initial: "A",
    bgColor: "bg-[#e15031]",
    time: "1 year ago",
    text: "Great service, I ordered with limited time and they went over and beyond to assist me. Price was also really good. Thank you for the...",
  },
  {
    name: "KUO LI",
    initial: "K",
    bgColor: "bg-[#e87717]",
    time: "1 year ago",
    text: "Very good quality and excellent service",
  }
];

const solutionsData = [
  {
    title: "Large Format\nPrinting",
    desc: "Eye-Catching Banners,\nDelivered Fast!",
    img: "/hero_printing_1775637492071.png"
  },
  {
    title: "Digital and Offset\nPrinting",
    desc: "High-Quality Prints for\nEvery Need!",
    img: "/hero_products_1775637475637.png"
  },
  {
    title: "Custom\nPromotional Gifts",
    desc: "Custom-Branded Gifts\nto Impress and Delight.",
    img: "/hero_gifts_1775637506200.png"
  },
  {
    title: "Graphic\nDesigning",
    desc: "Creative Designs to\nBring Your Vision to Life!",
    img: "/hero_products_1775637475637.png"
  }
];

const popularProductsData = [
  { name: "Basic Sublimation Lanyards", img: "/hero_gifts_1775637506200.png" },
  { name: "Personalized A5 PU Notebooks with Front Pocket & Magnetic Flap | Dorniel", img: "/hero_products_1775637475637.png" },
  { name: "Metal Ballpen - Billund", img: "/hero_products_1775637475637.png" },
  { name: "Round Epoxy Lapel Pin", img: "/hero_gifts_1775637506200.png" },
  { name: "Custom Lapel Badges", img: "/hero_gifts_1775637506200.png" },
  { name: "D-Clip Lanyards", img: "/hero_gifts_1775637506200.png" },
  { name: "Sublimation Lanyards Pack", img: "/hero_gifts_1775637506200.png" },
  { name: "USB Flash Drives", img: "/hero_printing_1775637492071.png" }
];

const blogData = [
  {
    title: "Design Tips for Custom Lapel Pins That Stand Out",
    date: "July 2, 2025",
    excerpt: "Design Tips for Custom Lapel Pins That Stand Out Custom lapel pins are powerful branding tools. Whether you use them for business, events, recognition, or fashion, they must stand out.",
    img: "/hero_gifts_1775637506200.png"
  },
  {
    title: "Cultural Influences in Business Card Design: What Works in Dubai?",
    date: "April 7, 2025",
    excerpt: "Cultural Influences in Business Card Design What Works in Dubai? Dubai, a city of luxury and innovation, has set high standards in the market for networking, be it business cards",
    img: "/hero_printing_1775637492071.png"
  },
  {
    title: "The Power of First Impressions: Why Business Cards Still Matter in the Digital Age",
    date: "April 7, 2025",
    excerpt: "The Power of First Impressions Why Business Cards Still Matter in the Digital Age In today's digital age, most aspects of business have transitioned online for convenience and efficiency. The business",
    img: "/hero_products_1775637475637.png"
  }
];

export default function LandingSections() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 2. Small Height Excellence Section - Rebuilt from Screenshot */}
      <section className="relative w-full h-[220px] md:h-[280px] lg:h-[320px] bg-gradient-to-r from-[#e3e6e8] via-[#f7f8f9] to-[#e3e6e8] overflow-hidden flex items-center justify-center border-y border-slate-200/60 shadow-inner">
        
        {/* Left Image (Badge mockup placeholder) */}
        <div className="absolute -left-10 sm:left-4 md:left-[10%] lg:left-[15%] w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] z-10 pointer-events-none">
           <div className="relative w-full h-full -rotate-12 transform">
             <Image 
               src="/hero_products_1775637475637.png" 
               alt="PrintX Custom Lapel Badges" 
               fill 
               className="object-contain drop-shadow-2xl opacity-90" 
             />
           </div>
        </div>

        {/* Center Text Typography block */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-2xl">
          <h3 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] font-black text-[#2e3133] tracking-[0.25em] uppercase scale-x-110 mb-1 lg:mb-2 ml-3">
            IT'S ALL ABOUT
          </h3>
          <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[80px] font-black text-[#146b9a] tracking-tight uppercase scale-x-105 ml-2 mt-0 leading-none">
            EXCELLENCE!
          </h2>
        </div>

        {/* Right Image (Cards mockup placeholder) */}
        <div className="absolute -right-10 sm:right-4 md:right-[10%] lg:right-[15%] w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] z-10 pointer-events-none">
           <div className="relative w-full h-full rotate-6 transform">
             <Image 
               src="/hero_printing_1775637492071.png" 
               alt="PrintX Custom Business Cards" 
               fill 
               className="object-contain drop-shadow-2xl opacity-90" 
             />
           </div>
        </div>

      </section>

      {/* 3. The Complete Printing Solution */}
      <section className="py-20 bg-[#f4f7f9] border-y border-slate-200">
        <div className="max-w-[1350px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[38px] font-semibold text-[#146b9a] tracking-tight mb-2">
              The Complete Printing Solution
            </h2>
            <p className="text-[#8da0ad] text-[17px] font-medium tracking-wide">
              From Promotional Gifts, Business cards to Billboards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutionsData.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[20px] shadow-[0_15px_45px_-12px_rgba(0,0,0,0.08)] flex flex-col p-8 items-center text-center hover:-translate-y-2 transition-transform duration-500 border border-slate-100/50">
                <h3 className="text-[22px] font-semibold text-[#146b9a] leading-tight mb-2 min-h-[56px] flex items-center justify-center whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-[#96a4af] text-[15px] leading-relaxed mb-6 min-h-[44px] whitespace-pre-line">
                  {item.desc}
                </p>
                
                <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-b from-[#f2f4f7] to-[#e1e5eb] flex items-center justify-center relative mb-8 shadow-inner border border-white">
                  <div className="relative w-[140px] h-[140px] hover:scale-110 transition-transform duration-500">
                    <Image 
                      src={item.img} 
                      alt={item.title.replace('\n', ' ')} 
                      fill 
                      className="object-contain drop-shadow-xl" 
                    />
                  </div>
                </div>

                {/* Thin dashed divider line matching the screenshot */}
                <div className="w-[85%] h-px border-b border-dashed border-slate-300 mb-6 opacity-80"></div>

                <a href="#" className="flex items-center gap-2 text-[#56606a] hover:text-[#146b9a] font-medium text-[15px] transition-colors group">
                  <ArrowRight size={18} className="text-[#8493a0] group-hover:text-[#146b9a] transition-colors stroke-[2.5]" /> 
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Popular Products */}
      <section className="py-20 bg-white">
        <div className="max-w-[1350px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[38px] font-semibold text-[#146b9a] tracking-tight">
              Our Popular Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {popularProductsData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start group">
                <div className="w-full aspect-square bg-[#fbfcff] rounded-2xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.12)] border border-slate-100 p-8 flex items-center justify-center relative mb-5 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image 
                      src={item.img} 
                      alt={item.name} 
                      fill 
                      className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
                
                <h3 className="text-[#146b9a] text-[15px] font-semibold leading-snug mb-4 group-hover:text-[#0b4a6d] transition-colors min-h-[44px]">
                  {item.name}
                </h3>
                
                <button className="bg-[#ecedf1] hover:bg-[#dfe1e7] text-[#5e6670] text-[13px] font-semibold px-4 py-2 rounded transition-colors shadow-sm tracking-wide">
                  Get a Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Prestigious Clients */}
      <section className="py-20 bg-[#f6f8f9] border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[30px] md:text-[34px] font-semibold text-[#146b9a] text-center mb-12 tracking-tight">
            Our Prestigious Clients
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
            {/* Generating 5 logo placeholders matching the screen's 5 columns */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-[140px] h-[140px] md:w-[190px] md:h-[190px] bg-white flex items-center justify-center p-6 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="relative w-full h-full opacity-80 hover:opacity-100 hover:scale-105 transition-all cursor-pointer">
                  <Image 
                    src={item % 2 === 0 ? "/hero_gifts_1775637506200.png" : "/hero_printing_1775637492071.png"} 
                    alt={`Client Logo ${item}`} 
                    fill 
                    className="object-contain mix-blend-darken" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Blogs Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[36px] font-semibold text-[#146b9a] tracking-tight mb-1">
              Blogs
            </h2>
            <a href="#" className="text-[#646e77] hover:text-[#146b9a] text-[15px] font-medium transition-colors">
              View all &raquo;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.map((blog, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.08)] flex flex-col group hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                
                {/* Blog Image */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-[#f0f2f5] border-b border-slate-100">
                  <Image 
                    src={blog.img} 
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
                
                {/* Blog Text Content */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-semibold text-[#30363d] leading-snug mb-1">
                    {blog.title}
                  </h3>
                  <span className="text-[#a1abb3] text-[13px] mb-4">
                    {blog.date}
                  </span>
                  
                  <p className="text-[#6e7780] text-[14px] leading-[1.6] mb-6 flex-grow">
                    {blog.excerpt}
                  </p>
                  
                  <a href="#" className="text-[#146b9a] font-semibold text-[13px] hover:text-[#0b4a6d] transition-colors mt-auto inline-block">
                    Read More &raquo;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEO Content Section */}
      <section className="py-20 bg-[#fafbfc]">
        <div className="max-w-[1250px] mx-auto px-6">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-[#146b9a] text-center mb-8 tracking-tight">
            Top Corporate and Promotional Gifts Company in Dubai, UAE
          </h2>
          
          <div className="space-y-5 text-[#6b7280] text-[15px] leading-[1.8] font-medium">
            <p>
              Corporate gifts and promotional items are more complex than they first appear. They can boost staff relations, energize your brand, and engage your audience with extras. They are small and beautiful. PrintX delivers branded <span className="text-[#c12a4f]">promotional gifts</span> to your table. We believe in the great value they bring!
            </p>
            <p>
              PrintX has led the way in using promotional gifts items to grab attention for over 10 years. Since the start of our adventure, we have undergone constant change. As we are top promotional and corporate gifts suppliers in Dubai, UAE. We help companies connect better with their target customers. How is this possible? We've expanded our services so all companies and organizations can benefit.
            </p>

            <h3 className="text-[22px] font-semibold text-[#146b9a] pt-6 mb-1">
              High-Quality Promotional Gifts That Leave a Lasting Impact
            </h3>
            <p>
              Investing in PrintX is a creative journey. It changes ordinary items into expressions of your brand's values. Our dedicated team works hard in our production facilities to create every gift and service. They research your brand's parts. Then, they create products and combine them for a lasting impact.
            </p>

            <h3 className="text-[22px] font-semibold text-[#146b9a] pt-6 mb-1">
              Promotional Products That Actually Get Used &ndash; And Not Forgotten!
            </h3>
            <p>
              A simple way to promote your business is by adding <span className="text-[#c12a4f]">promotional items</span> to your orders. Can branded accessories, office equipment, or apparel enhance the perception of your business? What about kids' gifts, badges or <span className="text-[#c12a4f]">trophies</span>? Promo goods are great for showing off your brand identity. There are plenty of them ready for your logo. Buy them as gifts to delight your customers or brighten your colleagues' day!
            </p>

            <h3 className="text-[22px] font-semibold text-[#146b9a] pt-6 mb-1">
              Beyond Logos &ndash; Customized Corporate Gifts That Truly Connect
            </h3>
            <p>
              PrintX can tackle the tough job of duplicating or printing your brand-specific pieces. Our customization service makes it easy to choose the colors and textures you want. You'll find many personalized items in our business gift shop. Items can include sticky notes, <span className="text-[#c12a4f]">silicone wristbands</span>, paper cups, and notebooks. Share your high-resolution photos and your vision. They will instantly be featured on the products you need.
            </p>

            <h3 className="text-[22px] font-semibold text-[#146b9a] pt-6 mb-1">
              Beyond Basic Printing: Premium Finishing Touches That Elevate Your Brand
            </h3>
            <p>
              We work hard as a corporate gifts company. Our goal is to boost your brand's great reputation. We're happy to offer any extra printing and finishing services you need. This will help turn your products into great assets for your company. PrintX provides a variety of extras. Commercial printing, cutting, engraving, stitching, debossing, and embossing are some of these features. Showcase your brand with unique style and depth. No extra effort needed.
            </p>

            <h3 className="text-[22px] font-semibold text-[#146b9a] pt-6 mb-1">
              Promo Products That Work &ndash; Order Yours Today &amp; See the Difference!
            </h3>
            <p>
              Do you serve a large number of clients? We can produce a wide range of personalized promotional items at PrintX. Experience the difference of PrintX, get in touch with the department in charge of what you wish to buy. No Arabic? No worries! We break language barriers&mdash;order with ease in your preferred language.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Google Reviews Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1300px] mx-auto px-6">
          
          {/* Header Title with Stars */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-16 text-[24px] md:text-[34px] font-bold text-[#146b9a] tracking-tight">
            <span>Your love fuels us!</span>
            <div className="flex gap-1 text-[#fbb529]">
              <Star fill="currentColor" size={32} className="stroke-none" />
              <Star fill="currentColor" size={32} className="stroke-none" />
              <Star fill="currentColor" size={32} className="stroke-none" />
              <Star fill="currentColor" size={32} className="stroke-none" />
              <Star fill="currentColor" size={32} className="stroke-none" />
            </div>
            <span>shoutout to <span className="underline decoration-[#146b9a] decoration-2 underline-offset-4">#PrintxFamily</span></span>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-14">
            
            {/* Overall Rating Left Block */}
            <div className="flex flex-col items-center pt-8 min-w-[200px]">
              <h3 className="text-[20px] font-semibold text-[#1e2329] mb-2 tracking-wide">EXCELLENT</h3>
              <div className="flex gap-1 text-[#fbb529] mb-3">
                <Star fill="currentColor" size={26} className="stroke-none" />
                <Star fill="currentColor" size={26} className="stroke-none" />
                <Star fill="currentColor" size={26} className="stroke-none" />
                <Star fill="currentColor" size={26} className="stroke-none" />
                <div className="relative">
                   {/* Half star hack for the 4.5 look */}
                   <Star fill="#e5e7eb" size={26} className="stroke-none" />
                   <div className="absolute inset-0 overflow-hidden w-[55%]">
                      <Star fill="#fbb529" size={26} className="stroke-none" />
                   </div>
                </div>
              </div>
              <p className="text-[13px] text-slate-600 mb-3 font-medium">Based on <strong>54 reviews</strong></p>
              
              {/* Google Text Logo styling */}
              <div className="flex items-center tracking-tighter text-[36px] font-medium font-sans">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">o</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#0F9D58]">l</span>
                <span className="text-[#DB4437]">e</span>
              </div>
            </div>

            {/* Reviews Cards Container */}
            <div className="relative flex items-center w-full max-w-[950px]">
              
              {/* Left Arrow */}
              <button className="absolute -left-6 z-10 w-11 h-11 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] items-center justify-center hover:bg-slate-50 transition-colors hidden sm:flex">
                <ChevronLeft size={22} className="text-slate-500 mr-0.5" />
              </button>

              <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-5 w-full px-2 py-4 no-scrollbar pb-6">
                {googleReviews.map((review, idx) => (
                  <div key={idx} className="w-[290px] shrink-0 snap-center bg-[#f7f8f9] rounded-xl p-6 text-left flex flex-col items-start shadow-sm border border-[#f0f0f0]">
                    
                    {/* Author block row */}
                    <div className="flex items-center justify-between w-full mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-lg ${review.bgColor}`}>
                          {review.initial}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[13.5px] font-semibold text-[#1a1f24] leading-tight">
                            {review.name}
                          </span>
                          <span className="text-[11.5px] text-[#9ca6af] mt-0.5">
                            {review.time}
                          </span>
                        </div>
                      </div>
                      
                      {/* Simple SVG Google 'G' Icon */}
                      <span className="text-[#4285F4] shrink-0">
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24">
                           <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                        </svg>
                      </span>
                    </div>

                    {/* 5-Star Row */}
                    <div className="flex gap-[1px] text-[#fbb529] mb-3">
                      <Star fill="currentColor" size={15} className="stroke-none" />
                      <Star fill="currentColor" size={15} className="stroke-none" />
                      <Star fill="currentColor" size={15} className="stroke-none" />
                      <Star fill="currentColor" size={15} className="stroke-none" />
                      <Star fill="currentColor" size={15} className="stroke-none" />
                    </div>

                    {/* Review text */}
                    <p className="text-[#414850] text-[13px] leading-[1.65] flex-grow pr-2">
                      {review.text}
                    </p>
                    
                    {/* Read more button condition based on review height/length */}
                    {idx === 1 && (
                      <button className="text-[#8c96a0] text-[12px] mt-2 hover:text-[#525a61] transition-colors">Read more</button>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button className="absolute -right-6 z-10 w-11 h-11 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] items-center justify-center hover:bg-slate-50 transition-colors hidden sm:flex">
                <ChevronRight size={22} className="text-slate-500 ml-0.5" />
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* 9. Get A Quote Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="rounded-[20px] overflow-hidden bg-gradient-to-r from-[#176a95] via-[#6ba0bd] to-[#f0f4f7] shadow-[0_8px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row p-8 md:p-12 gap-8 md:gap-12 items-center">
            
            {/* Left side: Text content */}
            <div className="flex-1 flex flex-col justify-center text-white h-full pb-4 md:pb-0">
              <h2 className="text-[34px] font-bold mb-4 tracking-tight">
                Get a Quote
              </h2>
              <p className="text-[14px] leading-[1.8] text-white/95 pr-2 md:pr-10">
                <strong>Our expert team is here to Assist!</strong> Get high-quality corporate gifts from PrintX
                Advertising Today. Perfect for clients and employees, our personalized gifts
                make a lasting impression. Contact us today to get started!
              </p>
            </div>

            {/* Right side: Form Container */}
            <div className="flex-[1.2] flex flex-col gap-[14px] w-full max-w-[500px] ml-auto">
              
              <div className="flex flex-col sm:flex-row gap-[14px]">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="flex-1 bg-white border border-gray-300/40 rounded shadow-sm px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#176a95]/50 placeholder:text-[#a0aab2] transition-shadow"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 bg-white border border-gray-300/40 rounded shadow-sm px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#176a95]/50 placeholder:text-[#a0aab2] transition-shadow"
                />
              </div>
              
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-white border border-gray-300/40 rounded shadow-sm px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#176a95]/50 placeholder:text-[#a0aab2] transition-shadow"
              />
              
              <textarea 
                placeholder="Message" 
                rows="5"
                className="w-full bg-white border border-gray-300/40 rounded shadow-sm px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#176a95]/50 placeholder:text-[#a0aab2] resize-y transition-shadow"
              ></textarea>
              
              <div className="flex justify-center mt-1">
                <button 
                  className="bg-white text-[#176a95] font-bold text-[14px] px-10 py-2.5 rounded hover:bg-slate-50 transition-colors shadow-sm"
                >
                  Send
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
