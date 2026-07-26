import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, MapPin, Heart, ChevronRight, Menu, User, PlusCircle, 
  Car, Home, Smartphone, Sofa, Shirt, Dumbbell, Briefcase, 
  Dog, GraduationCap, Wrench, Facebook, Twitter, Instagram,
  Star, ChevronDown
} from 'lucide-react';

const categories = [
  { name: "Araçlar", icon: Car },
  { name: "Emlak", icon: Home },
  { name: "Elektronik", icon: Smartphone },
  { name: "Ev & Bahçe", icon: Sofa },
  { name: "Giyim & Moda", icon: Shirt },
  { name: "Spor & Outdoor", icon: Dumbbell },
  { name: "İş İlanları", icon: Briefcase },
  { name: "Hayvanlar", icon: Dog },
  { name: "Ders & Kurs", icon: GraduationCap },
  { name: "Hizmetler", icon: Wrench },
];

const listings = [
  { id: 1, title: "2021 Toyota Corolla Hybrid, Hatasız, İlk Sahibinden", price: "485.000 ₺", location: "Kadıköy, İstanbul", date: "Bugün", img: "https://picsum.photos/seed/car10/600/450", category: "Araçlar", featured: true },
  { id: 2, title: "3+1 Lüks Daire, Katta, Eşsiz Bosphorus Manzaralı", price: "3.200.000 ₺", location: "Çankaya, Ankara", date: "Dün", img: "https://picsum.photos/seed/house10/600/450", category: "Emlak", featured: true },
  { id: 3, title: "iPhone 15 Pro Max 256GB Titanyum - Kapalı Kutu", price: "42.500 ₺", location: "Karşıyaka, İzmir", date: "Bugün", img: "https://picsum.photos/seed/phone10/600/450", category: "Elektronik", featured: false },
  { id: 4, title: "MacBook Pro M3 Max 32GB RAM 1TB SSD", price: "68.000 ₺", location: "Beşiktaş, İstanbul", date: "2 gün önce", img: "https://picsum.photos/seed/laptop10/600/450", category: "Elektronik", featured: true },
  { id: 5, title: "2019 Honda Civic 1.6 Eco Elegance - Garantili", price: "380.000 ₺", location: "Osmangazi, Bursa", date: "Bugün", img: "https://picsum.photos/seed/car20/600/450", category: "Araçlar", featured: false },
  { id: 6, title: "2+1 Metroya Yürüme Mesafesinde Kiralık Yeni Daire", price: "18.500 ₺", location: "Bornova, İzmir", date: "3 gün önce", img: "https://picsum.photos/seed/house20/600/450", category: "Emlak", featured: false },
  { id: 7, title: "Samsung 65\" 4K Neo QLED Akıllı TV - Kutulu", price: "22.000 ₺", location: "Çukurova, Adana", date: "Bugün", img: "https://picsum.photos/seed/tv10/600/450", category: "Elektronik", featured: true },
  { id: 8, title: "Profesyonel Dağ Bisikleti - Çok Az Kullanıldı", price: "8.500 ₺", location: "Çankaya, Ankara", date: "Dün", img: "https://picsum.photos/seed/bike10/600/450", category: "Spor & Outdoor", featured: false },
  { id: 9, title: "Müstakil Havuzlu Yazlık Ev - Krediye Uygun", price: "8.850.000 ₺", location: "Bodrum, Muğla", date: "1 hafta önce", img: "https://picsum.photos/seed/house30/600/450", category: "Emlak", featured: false },
  { id: 10, title: "PlayStation 5 Çift Kol + 3 Güncel Oyun", price: "15.000 ₺", location: "Nilüfer, Bursa", date: "Bugün", img: "https://picsum.photos/seed/ps50/600/450", category: "Elektronik", featured: false },
  { id: 11, title: "Plaza Katında Taşınmaya Hazır Lüks Ofis", price: "42.000 ₺", location: "Levent, İstanbul", date: "Dün", img: "https://picsum.photos/seed/office10/600/450", category: "Emlak", featured: false },
  { id: 12, title: "Vintage Deri Koltuk Takımı - Özel Tasarım", price: "14.500 ₺", location: "Muratpaşa, Antalya", date: "2 gün önce", img: "https://picsum.photos/seed/sofa10/600/450", category: "Ev & Bahçe", featured: false },
];

const cities = [
  { name: "İstanbul", img: "https://picsum.photos/seed/istanbul1/800/800", count: "1.2M+" },
  { name: "Ankara", img: "https://picsum.photos/seed/ankara1/400/400", count: "450K+" },
  { name: "İzmir", img: "https://picsum.photos/seed/izmir1/400/400", count: "380K+" },
  { name: "Bursa", img: "https://picsum.photos/seed/bursa1/400/400", count: "210K+" },
  { name: "Antalya", img: "https://picsum.photos/seed/antalya1/400/400", count: "190K+" },
];

export function Anasayfa() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-950 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedListings />
        <RecentListings />
        <Cities />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-sm">
              <span className="text-white font-bold text-xl -rotate-3 group-hover:rotate-0 transition-transform">M</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-zinc-900">merkez.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">Araçlar</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">Emlak</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors">İkinci El</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-indigo-600 transition-colors flex items-center">
              Tümü <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50 rounded-full">
            <User className="w-4 h-4" />
            <span className="font-medium">Giriş Yap</span>
          </Button>
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            <span className="font-medium">İlan Ver</span>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-zinc-600 rounded-full">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-indigo-600/30 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-rose-600/20 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/cityscape4/1920/1080')] opacity-5 mix-blend-overlay object-cover" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-white/10 hover:bg-white/15 text-white border-0 px-4 py-1.5 backdrop-blur-md rounded-full text-xs sm:text-sm font-medium transition-colors">
          ✨ Yeni nesil alım satım deneyimi
        </Badge>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
          Aradığın her şey, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
            en net haliyle burada.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
          Emlak, araç, ikinci el eşya ve daha fazlası. Milyonlarca alıcı ve satıcı ile güvenle buluşun, hayalinizdekine hemen ulaşın.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2 relative z-20">
          <div className="flex-1 flex items-center px-4 w-full border-b sm:border-b-0 sm:border-r border-zinc-200">
            <Search className="w-5 h-5 text-zinc-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Ne arıyorsunuz? (Örn: Honda Civic, Kadıköy kiralık)" 
              className="w-full h-14 bg-transparent border-none focus:ring-0 text-zinc-800 placeholder-zinc-400 sm:text-lg outline-none"
            />
          </div>
          <div className="flex-[0.5] flex items-center px-4 w-full">
            <MapPin className="w-5 h-5 text-zinc-400 mr-3 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Tüm Türkiye" 
              className="w-full h-14 bg-transparent border-none focus:ring-0 text-zinc-800 placeholder-zinc-400 sm:text-lg outline-none"
            />
          </div>
          <Button className="w-full sm:w-auto h-14 px-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium transition-all shadow-md">
            Ara
          </Button>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-3 relative z-20">
          {["Acil Satılık", "Sahibinden", "Fiyatı Düşenler", "Yeni Projeler"].map(tag => (
            <span key={tag} className="bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 rounded-full px-5 py-2 text-sm backdrop-blur-md cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="py-20 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">Kategoriler</h2>
          <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-medium hidden sm:flex items-center gap-1 rounded-full px-5">
            Tümünü Gör <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <a key={i} href="#" className="group p-6 sm:p-8 rounded-[2rem] border border-zinc-100 bg-zinc-50 hover:bg-white hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/40 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white group-hover:bg-indigo-600 flex items-center justify-center shadow-sm text-zinc-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <cat.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-zinc-800 group-hover:text-indigo-900 transition-colors">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListingCard({ listing }: { listing: any }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <a href="#" className="group relative bg-white rounded-3xl overflow-hidden border border-zinc-200/60 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-1">
      {listing.featured && (
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-rose-500/90 hover:bg-rose-600 backdrop-blur-md text-white border-0 font-medium px-3 py-1 flex items-center gap-1 shadow-lg rounded-full">
            <Star className="w-3.5 h-3.5 fill-current" />
            Öne Çıkan
          </Badge>
        </div>
      )}
      <button 
        onClick={(e) => { e.preventDefault(); setIsFavorite(!isFavorite); }}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-white text-zinc-400 hover:text-rose-500 transition-all shadow-md hover:scale-110 active:scale-95"
      >
        <Heart className={`w-5 h-5 transition-colors ${isFavorite ? "fill-rose-500 text-rose-500" : ""}`} />
      </button>
      
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <img 
          src={listing.img} 
          alt={listing.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">{listing.category}</span>
          <h3 className="font-semibold text-zinc-900 text-base leading-snug mt-1 group-hover:text-indigo-700 transition-colors line-clamp-2">
            {listing.title}
          </h3>
        </div>
        <div className="mt-auto pt-4 border-t border-zinc-100">
          <p className="text-2xl font-bold text-indigo-700 mb-4 tracking-tight">{listing.price}</p>
          <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span className="truncate max-w-[120px]">{listing.location}</span>
            </div>
            <span className="bg-zinc-100 px-2 py-1 rounded-md">{listing.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

function FeaturedListings() {
  const featured = listings.filter(l => l.featured);
  
  return (
    <section className="py-24 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">Vitrindekiler</h2>
            <p className="text-zinc-500 text-lg">Haftanın öne çıkan, en çok incelenen seçkin ilanları.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentListings() {
  const recent = listings.filter(l => !l.featured);
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">Sizin İçin Seçtiklerimiz</h2>
            <p className="text-zinc-500 text-lg">Aramalarınıza ve favorilerinize göre en yeni ilanlar.</p>
          </div>
          <Button variant="outline" className="hidden sm:flex border-zinc-200 text-zinc-700 hover:bg-zinc-50 rounded-full px-6">
            Tümünü Göster
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recent.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
        <div className="mt-12 sm:hidden">
          <Button variant="outline" className="w-full border-zinc-200 text-zinc-700 rounded-xl h-12">
            Tümünü Göster
          </Button>
        </div>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-4">Şehre Göre Keşfet</h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Türkiye'nin dört bir yanından milyonlarca ilana tek tıkla ulaşın.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <a href="#" className="col-span-2 row-span-2 group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-900/20 transition-all duration-500 min-h-[300px] md:min-h-[420px]">
            <img src={cities[0].img} alt={cities[0].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">{cities[0].name}</h3>
                  <p className="text-white/80 font-medium text-lg">{cities[0].count} İlan</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white text-white group-hover:text-zinc-900 transition-colors duration-300">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </a>
          
          {cities.slice(1, 5).map((city, i) => (
            <a key={i} href="#" className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-900/10 transition-all duration-500 h-[200px]">
              <img src={city.img} alt={city.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
                <p className="text-white/70 text-sm font-medium">{city.count} İlan</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppDownload() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-zinc-100">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-indigo-50 to-rose-50/30 rounded-l-[4rem] lg:rounded-l-[8rem] -z-10 hidden md:block" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 tracking-tight mb-8 leading-[1.1]">
              Her an, her yerde <br />
              <span className="text-indigo-600">yanınızda.</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 mb-12 leading-relaxed font-light">
              Merkez mobil uygulaması ile ilanlara saniyeler içinde ulaşın, favorilerinizi takip edin ve satıcılarla anında mesajlaşın. Pazar cebinizde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-16 px-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center gap-4 transition-transform hover:scale-105">
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs text-zinc-400 font-medium">App Store'dan</span>
                  <span className="text-lg font-bold">İndirin</span>
                </div>
              </Button>
              <Button className="h-16 px-8 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center gap-4 transition-transform hover:scale-105">
                <div className="flex flex-col items-start text-left">
                  <span className="text-xs text-zinc-400 font-medium">Google Play'den</span>
                  <span className="text-lg font-bold">Edinin</span>
                </div>
              </Button>
            </div>
            
            <div className="mt-14 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}0/100/100`} className="w-14 h-14 rounded-full border-4 border-white object-cover shadow-sm z-10" alt="User" style={{ zIndex: 10 - i }} />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 text-amber-400 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-sm font-semibold text-zinc-600">4.8/5 <span className="text-zinc-400 font-normal">(120k+ değerlendirme)</span></span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end relative w-full max-w-[400px] lg:max-w-none">
            <div className="relative w-[320px] h-[640px] bg-zinc-900 rounded-[3.5rem] p-3 shadow-2xl border-4 border-zinc-800 rotate-[-4deg] hover:rotate-0 transition-all duration-700 ease-out z-10">
              <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative">
                <img src="https://picsum.photos/seed/appui10/600/1200" alt="App Preview" className="w-full h-full object-cover" />
                <div className="absolute top-0 w-full h-7 bg-zinc-900 flex justify-center rounded-t-[2.8rem]">
                  <div className="w-32 h-6 bg-zinc-900 rounded-b-3xl"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/4 -right-10 w-48 h-48 bg-rose-200 rounded-full blur-[80px] opacity-60 z-0" />
            <div className="absolute bottom-1/4 -left-10 w-56 h-56 bg-indigo-200 rounded-full blur-[80px] opacity-60 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3">
                <span className="text-white font-bold text-xl -rotate-3">M</span>
              </div>
              <span className="text-3xl font-bold tracking-tight text-white">merkez.</span>
            </div>
            <p className="text-zinc-500 mb-8 max-w-sm text-lg leading-relaxed">
              Türkiye'nin yeni nesil ilan platformu. Hızlı, güvenilir, modern ve kullanıcı odaklı alım satım deneyimi.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 text-lg">Kategoriler</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Araçlar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Emlak</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Elektronik</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Giyim & Moda</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 text-lg">Kurumsal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reklam Ver</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-8 text-lg">Yardım</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Güvenlik İpuçları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>© 2024 Merkez. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <span>Türkiye'de sevgiyle tasarlandı 🇹🇷</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
