import React from 'react';
import { 
  ChevronDown, ShoppingCart, Star, MapPin, 
  Car, Home, Smartphone, Sofa, Shirt, Dumbbell, 
  Briefcase, PawPrint, GraduationCap, Wrench
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const listings = [
  { id: 1, title: "2021 Toyota Corolla 1.8 Hybrid", price: "485.000 ₺", location: "Kadıköy, İstanbul", date: "2 saat önce", img: "https://picsum.photos/seed/corolla1/400/300", featured: true },
  { id: 2, title: "3+1 Satılık Daire, 120m²", price: "3.200.000 ₺", location: "Çankaya, Ankara", date: "5 saat önce", img: "https://picsum.photos/seed/ev2/400/300", featured: true },
  { id: 3, title: "iPhone 15 Pro Max 256GB, Kutulu", price: "42.500 ₺", location: "Karşıyaka, İzmir", date: "1 saat önce", img: "https://picsum.photos/seed/iphone3/400/300", featured: true },
  { id: 4, title: "MacBook Pro M3 14\", 16GB/512GB", price: "68.000 ₺", location: "Beşiktaş, İstanbul", date: "3 saat önce", img: "https://picsum.photos/seed/mac4/400/300" },
  { id: 5, title: "2019 Honda Civic 1.6 Dizel", price: "380.000 ₺", location: "Osmangazi, Bursa", date: "1 gün önce", img: "https://picsum.photos/seed/civic5/400/300" },
  { id: 6, title: "2+1 Kiralık Daire, Eşyalı", price: "18.500 ₺/ay", location: "Bornova, İzmir", date: "30 dakika önce", img: "https://picsum.photos/seed/kiralik6/400/300" },
  { id: 7, title: "Samsung 65\" Neo QLED 4K", price: "22.000 ₺", location: "Çukurova, Adana", date: "4 saat önce", img: "https://picsum.photos/seed/samsung7/400/300" },
  { id: 8, title: "Trek Marlin 7 Dağ Bisikleti", price: "24.500 ₺", location: "Muratpaşa, Antalya", date: "2 gün önce", img: "https://picsum.photos/seed/trek8/400/300" },
  { id: 9, title: "Sony PlayStation 5 + 3 Oyun", price: "15.000 ₺", location: "Nilüfer, Bursa", date: "6 saat önce", img: "https://picsum.photos/seed/ps9/400/300" },
  { id: 10, title: "Canon EOS R50 Fotoğraf Makinesi", price: "28.000 ₺", location: "Altındağ, Ankara", date: "12 saat önce", img: "https://picsum.photos/seed/canon10/400/300" },
];

const mainCategories = [
  { name: "Araçlar", count: "142.500", icon: Car },
  { name: "Emlak", count: "210.000", icon: Home },
  { name: "Elektronik", count: "85.300", icon: Smartphone },
  { name: "Ev & Bahçe", count: "64.100", icon: Sofa },
  { name: "Giyim", count: "92.000", icon: Shirt },
  { name: "Spor", count: "18.400", icon: Dumbbell },
  { name: "İş İlanları", count: "12.500", icon: Briefcase },
  { name: "Hayvanlar", count: "8.200", icon: PawPrint },
  { name: "Ders & Kurs", count: "4.100", icon: GraduationCap },
  { name: "Hizmetler", count: "15.800", icon: Wrench },
];

const cities = [
  { name: "İstanbul", count: "450.000+ ilan", color: "bg-blue-600" },
  { name: "Ankara", count: "120.000+ ilan", color: "bg-red-600" },
  { name: "İzmir", count: "95.000+ ilan", color: "bg-teal-600" },
  { name: "Bursa", count: "65.000+ ilan", color: "bg-emerald-600" },
  { name: "Antalya", count: "55.000+ ilan", color: "bg-orange-500" },
  { name: "Adana", count: "30.000+ ilan", color: "bg-indigo-600" }
];

const navCats = ["Tümü", "Araçlar", "Emlak", "Elektronik", "Ev & Bahçe", "Giyim", "Spor", "İş İlanları", "Hayvanlar", "Ders & Kurs", "Hizmetler"];
const trends = ["iPhone 15", "Kiralık Daire", "2. El Araba", "MacBook", "PS5", "Bisiklet", "Koltuk Takımı", "Arazi Aracı", "Kombi", "Fotoğraf Makinesi"];

export function Anasayfa() {
  const featuredListings = listings.slice(0, 3);

  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] bg-[#F7F5F2] selection:bg-[#C0392B]/20 selection:text-[#962A20]">
      {/* Top Utility Bar */}
      <div className="bg-[#1A1A1A] text-white text-[11px] h-[36px] flex items-center justify-between px-4 lg:px-8">
        <div className="font-medium tracking-wide">Türkiye'nin en büyük alışveriş platformu</div>
        <div className="flex items-center gap-4 text-white/80">
          <a href="#" className="hover:text-white transition-colors">Satıcı Ol</a>
          <a href="#" className="hover:text-white transition-colors">Yardım</a>
          <a href="#" className="hover:text-white transition-colors">Giriş Yap</a>
          <a href="#" className="hover:text-white transition-colors">Kayıt Ol</a>
        </div>
      </div>
      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E8E4DF] shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-[72px] flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo */}
          <a href="#" className="text-[28px] font-extrabold tracking-tight text-[#1A1A1A] shrink-0 pb-1">
            <span className="text-[#C0392B]">ç</span>arşı
          </a>
          
          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-3xl border-2 border-[#1A1A1A] rounded overflow-hidden h-10 focus-within:ring-2 focus-within:ring-[#C0392B]/20 focus-within:border-[#C0392B] transition-all">
            <button className="bg-zinc-100 px-4 border-r border-[#1A1A1A] flex items-center gap-2 text-[13px] font-semibold text-zinc-800 hover:bg-zinc-200 transition-colors shrink-0">
              Kategori <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>
            <input 
              type="text" 
              placeholder="Ne arıyorsunuz?" 
              className="flex-1 px-4 text-[14px] outline-none min-w-0 font-medium placeholder:text-zinc-400 placeholder:font-normal" 
            />
            <button className="bg-[#1A1A1A] text-white px-8 font-semibold text-[14px] hover:bg-black transition-colors">
              Ara
            </button>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <button className="relative p-2 text-zinc-700 hover:text-[#1A1A1A] hover:bg-zinc-100 rounded-full transition-colors hidden sm:block">
              <ShoppingCart className="w-[22px] h-[22px]" />
              <span className="absolute top-1.5 right-1 w-2.5 h-2.5 bg-[#C0392B] rounded-full border-2 border-white"></span>
            </button>
            <Button className="bg-[#C0392B] hover:bg-[#A93226] text-white rounded-full px-6 py-2.5 h-auto text-[14px] font-bold transition-colors shadow-none border-none">
              İlan Ver
            </Button>
          </div>
        </div>
        {/* Mobile Search - visible only on small screens */}
        <div className="md:hidden px-4 pb-3">
           <div className="flex border-2 border-[#1A1A1A] rounded overflow-hidden h-11">
            <input 
              type="text" 
              placeholder="Ne arıyorsunuz?" 
              className="flex-1 px-3 text-[14px] outline-none min-w-0 font-medium placeholder:font-normal placeholder:text-zinc-400" 
            />
            <button className="bg-[#1A1A1A] text-white px-5 font-semibold text-[14px]">
              Ara
            </button>
          </div>
        </div>
      </header>
      {/* Category Nav Bar */}
      <nav className="bg-white border-b border-[#E8E4DF]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex gap-8 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-sidebar-accent-foreground">
            {navCats.map((nc, i) => (
              <button 
                key={nc} 
                className="whitespace-nowrap py-3.5 transition-colors text-zinc-600 hover:text-[#1A1A1A] border-b-[3px] border-transparent font-medium text-base bg-sidebar-ring rounded-tl-[15px] rounded-tr-[15px] rounded-br-[15px] rounded-bl-[15px]"
              >
                {nc}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-12">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-6">
          {/* Left: Featured List */}
          <div className="w-full md:w-[60%] flex flex-col">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] tracking-tight">Bu hafta öne çıkanlar</h2>
            </div>
            <div className="flex flex-col gap-3">
              {featuredListings.map(l => (
                <a href="#" key={l.id} className="bg-white border border-[#E8E4DF] rounded-lg p-2.5 flex gap-4 h-[104px] hover:shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all cursor-pointer group">
                  <div className="w-[120px] bg-zinc-100 rounded-md overflow-hidden relative shrink-0">
                     <img src={l.img} alt={l.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     {l.featured && (
                       <div className="absolute bottom-1 right-1 bg-white/95 p-1 rounded shadow-sm text-[#E67E22]">
                         <Star className="w-3 h-3 fill-current"/>
                       </div>
                     )}
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-1 min-w-0 pr-2">
                    <h3 className="text-[15px] font-medium text-[#1A1A1A] truncate group-hover:text-[#C0392B] transition-colors">{l.title}</h3>
                    <div>
                       <div className="font-bold text-[18px] text-[#1A1A1A]">{l.price}</div>
                       <div className="text-[12px] text-zinc-500 mt-1 flex items-center gap-1.5">
                         <MapPin className="w-3.5 h-3.5 opacity-70" />
                         <span className="truncate">{l.location}</span>
                       </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right: Promo Panel */}
          <div className="w-full md:w-[40%] bg-[#962A20] text-white rounded-lg p-8 md:p-10 flex flex-col justify-center relative overflow-hidden mt-8 md:mt-[44px]">
              <h2 className="text-[32px] font-extrabold mb-3 tracking-tight z-10 leading-none">Bugün Sat</h2>
              <p className="text-white/90 text-[15px] md:text-[16px] mb-8 max-w-[90%] z-10 font-medium leading-relaxed">
                Dakikalar içinde ilan ver, binlerce alıcıya anında ulaş. Eşyalarını nakite çevir.
              </p>
              <button className="bg-white text-[#962A20] font-bold rounded-full px-8 py-3 text-[15px] self-start hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all shadow-sm z-10">
                Hemen İlan Ver
              </button>
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </section>


        {/* Recently Listed Grid */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-[20px] font-bold text-[#1A1A1A] tracking-tight">Yeni İlanlar</h2>
            <a href="#" className="text-[14px] font-semibold text-[#1A1A1A] hover:text-[#C0392B] hover:underline transition-colors flex items-center">
              Tümünü Gör &rarr;
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {listings.map(listing => (
              <a href="#" key={listing.id} className="bg-white border border-[#E8E4DF] rounded-lg overflow-hidden group hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all relative flex flex-col">
                <div className="aspect-[4/3] w-full bg-zinc-100 relative overflow-hidden">
                  <img src={listing.img} alt={listing.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {listing.featured && (
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-bold text-[#E67E22] flex items-center gap-1 border border-black/5 shadow-sm">
                      <Star className="w-3.5 h-3.5 fill-current" /> Vitrin
                    </div>
                  )}
                  {/* Quick view hover overlay */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-[#1A1A1A] text-[13px] font-bold px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-zinc-200 pointer-events-none whitespace-nowrap translate-y-4 group-hover:-translate-y-1/2">
                    Hızlı Görüntüle
                  </div>
                </div>
                <div className="p-3.5 flex flex-col flex-1">
                  <h3 className="text-[14px] font-medium text-[#1A1A1A] line-clamp-2 leading-snug mb-3 h-10 group-hover:text-[#C0392B] transition-colors">
                    {listing.title}
                  </h3>
                  <div className="font-extrabold text-[17px] text-[#1A1A1A] mt-auto">
                    {listing.price}
                  </div>
                  <div className="text-[12px] text-zinc-500 font-medium mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 truncate max-w-[65%]">
                      <MapPin className="w-3.5 h-3.5 shrink-0 opacity-70" />
                      <span className="truncate">{listing.location}</span>
                    </div>
                    <span className="shrink-0">{listing.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        
        {/* Trending Searches */}
        <section className="pt-4 pb-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[14px] font-bold text-[#1A1A1A] mr-1">Trend Aramalar:</span>
            {trends.map(t => (
              <a href="#" key={t} className="bg-white border border-[#E8E4DF] rounded-full px-3.5 py-1.5 text-[13px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#1A1A1A] hover:border-zinc-300 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </section>
        
        {/* Cities */}
        <section className="pb-8">
          <h2 className="text-[20px] font-bold text-[#1A1A1A] tracking-tight mb-4">Şehrinizde Arama Yapın</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {cities.map((city, i) => (
              <a href="#" key={i} className="min-w-[160px] bg-white border border-[#E8E4DF] rounded-lg p-3.5 block hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all group">
                <div className={`w-full h-24 rounded-md mb-3 ${city.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                <h3 className="font-bold text-[15px] text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">{city.name}</h3>
                <p className="text-[13px] text-zinc-500 font-medium mt-0.5">{city.count}</p>
              </a>
            ))}
          </div>
        </section>

      </main>
      {/* Footer */}
      <footer className="bg-white border-t border-[#E8E4DF] pt-16 pb-8">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 md:col-span-4 lg:col-span-2 lg:pr-12">
              <a href="#" className="text-[32px] font-extrabold tracking-tight text-[#1A1A1A] inline-block mb-4">
                <span className="text-[#C0392B]">ç</span>arşı
              </a>
              <p className="text-[14px] text-zinc-600 font-medium leading-relaxed mb-6 max-w-sm">
                Türkiye'nin en pratik ve güvenilir alışveriş platformu. İkinci el eşyalardan sıfır ürünlere, emlak ve araçtan hizmet ilanlarına kadar her şey burada.
              </p>
              <div className="flex gap-3">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">in</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">x</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">fb</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[15px]">Hakkımızda</h4>
              <ul className="space-y-3 text-[13px] font-medium text-zinc-600">
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Biz Kimiz?</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Kariyer</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Kurumsal Satış</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Basın Odası</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[15px]">Yardım</h4>
              <ul className="space-y-3 text-[13px] font-medium text-zinc-600">
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Sıkça Sorulan Sorular</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Güvenli Alışveriş</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">İade Koşulları</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Canlı Destek</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Öneri & Şikayet</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[15px]">İlan Ver</h4>
              <ul className="space-y-3 text-[13px] font-medium text-zinc-600">
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Nasıl İlan Verilir?</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">İlan Verme Kuralları</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Mağaza Açmak İstiyorum</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Doping Seçenekleri</a></li>
                <li><a href="#" className="hover:text-[#C0392B] transition-colors">Reklam Seçenekleri</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#E8E4DF] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-zinc-500">
            <div>© 2025 Çarşı Teknoloji A.Ş. | Tüm hakları saklıdır.</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">KVKK Aydınlatma Metni</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Kullanıcı Sözleşmesi</a>
              <a href="#" className="hover:text-[#1A1A1A] transition-colors">Çerez Politikası</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
