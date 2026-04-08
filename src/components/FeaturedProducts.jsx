import Image from 'next/image';
import Link from 'next/link';

const offerData = [
  { name: 'Personalized Notebooks', count: 20, img: '/hero_gifts_1775637506200.png' },
  { name: 'Lapel Pin', count: 9, img: '/hero_products_1775637475637.png' },
  { name: 'Drinkware', count: 32, img: '/hero_printing_1775637492071.png' },
  { name: 'Custom Lanyard', count: 14, img: '/hero_gifts_1775637506200.png' },
  { name: 'Corporate Gift Sets', count: 18, img: '/hero_products_1775637475637.png' },
  { name: 'Awards & Trophies', count: 45, img: '/hero_gifts_1775637506200.png' },
  { name: 'Custom Pens', count: 24, img: '/hero_products_1775637475637.png' },
  { name: 'Tech & Flash Drives', count: 11, img: '/hero_printing_1775637492071.png' },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20 w-full font-sans">
      <div className="max-w-[1300px] mx-auto px-6">
        
        <h2 className="text-[34px] md:text-[38px] text-[#146b9a] font-medium text-center mb-16 tracking-tight">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-[4.5rem]">
          {offerData.map((item, idx) => (
            <Link key={idx} href="#" className="flex flex-col items-center group">
              
              {/* Product Card Container */}
              <div className="w-full aspect-square bg-[#f5f6f8] rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] group-hover:-translate-y-1.5 transition-all duration-300 p-8 md:p-10 relative flex items-center justify-center border-[3px] border-white/50 ring-1 ring-black/5">
                
                {/* Product Image */}
                <div className="relative w-full h-full pointer-events-none drop-shadow-lg group-hover:scale-105 transition-transform duration-500">
                   <Image 
                     src={item.img} 
                     alt={item.name} 
                     fill 
                     className="object-contain" 
                   />
                </div>
              </div>

              {/* Text Label Below Card */}
              <p className="mt-5 text-[15.5px] text-center">
                <span className="text-[#146b9a] font-medium group-hover:text-[#0b4a6d] transition-colors">
                  {item.name}
                </span>
                <span className="text-slate-900 font-bold ml-1.5">
                  ({item.count})
                </span>
              </p>

            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
