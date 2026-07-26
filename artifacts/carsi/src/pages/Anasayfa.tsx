import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, ShoppingCart, Star, MapPin, 
  Car, Home, Smartphone, Sofa, Shirt, Dumbbell, 
  Briefcase, PawPrint, GraduationCap, Wrench,
  User, Heart, Bell, Settings, LogOut, ClipboardList
} from 'lucide-react';

type NavGroup = { title: string; items: string[] };
type NavCategory = { name: string; groups: NavGroup[] };

const navCategories: NavCategory[] = [
  {
    name: "Araçlar",
    groups: [
      { title: "Popüler Markalar", items: ["BMW", "Mercedes-Benz", "Toyota", "Volkswagen", "Ford", "Renault", "Fiat", "Honda", "Hyundai", "Audi", "Dacia", "Opel"] },
      { title: "Araç Tipi", items: ["Otomobil", "SUV & Crossover", "Pickup & Ticari", "Motosiklet", "Scooter", "Bisiklet", "Elektrikli Araç", "Minibüs & Midibüs"] },
      { title: "Diğer", items: ["Yedek Parça & Aksesuar", "Kiralık Araç", "Klasik & Koleksiyon", "Tekne & Yat", "Karavan", "Tarım Araçları"] },
    ]
  },
  {
    name: "Emlak",
    groups: [
      { title: "Satılık", items: ["Satılık Daire", "Satılık Villa", "Satılık Müstakil", "Satılık Arsa", "Satılık Tarla", "Satılık Bina", "Devremülk"] },
      { title: "Kiralık", items: ["Kiralık Daire", "Kiralık Villa", "Kiralık Yazlık", "Günlük Kiralık", "Oda & Kiracı Aranıyor", "Ofis & Büro Kiralık"] },
      { title: "İş Yeri", items: ["Satılık Ofis", "Kiralık Ofis", "Satılık Dükkan", "Kiralık Dükkan", "Depo & Antrepo", "Satılık Arazi"] },
    ]
  },
  {
    name: "Elektronik",
    groups: [
      { title: "Telefon & Tablet", items: ["Cep Telefonu", "Tablet", "Akıllı Saat & Band", "Bluetooth Kulaklık", "Şarj Aleti & Kablo", "Telefon Kılıfı"] },
      { title: "Bilgisayar", items: ["Laptop & Notebook", "Masaüstü PC", "Ekran & Monitör", "Klavye & Mouse", "SSD & Hard Disk", "Grafik Kartı & İşlemci"] },
      { title: "Eğlence & Görüntü", items: ["Oyun Konsolu", "Oyun", "TV & Smart TV", "Projeksiyon", "Hoparlör & Soundbar", "Kamera & Fotoğraf Makinesi"] },
    ]
  },
  {
    name: "Ev & Bahçe",
    groups: [
      { title: "Mobilya", items: ["Koltuk & Kanepe", "Yatak & Yatak Odası", "Yemek Masası & Sandalye", "Çalışma Masası", "Dolap & Gardırop", "Çocuk Mobilyası"] },
      { title: "Mutfak & Banyo", items: ["Bulaşık Makinesi", "Çamaşır Makinesi", "Buzdolabı & Derin Dondurucu", "Fırın & Ocak", "Ankastre Ürünler", "Banyo Donanımı"] },
      { title: "Dekorasyon & Bahçe", items: ["Aydınlatma & Lamba", "Halı & Kilim", "Perde & Stor Perde", "Tablo & Çerçeve", "Saksı & Bahçe Bitkisi", "Bahçe Mobilyası"] },
    ]
  },
  {
    name: "Giyim",
    groups: [
      { title: "Kadın", items: ["Elbise & Etek", "Bluz & Gömlek", "Pantolon & Jean", "Dış Giyim & Mont", "Pijama & İç Giyim", "Hamile Giyim"] },
      { title: "Erkek", items: ["Takım Elbise & Gömlek", "T-Shirt & Sweatshirt", "Pantolon & Jean", "Dış Giyim & Kaban", "Spor Giyim", "İş Giyim"] },
      { title: "Aksesuar & Ayakkabı", items: ["Bayan Ayakkabı", "Erkek Ayakkabı", "Çanta & Çantacılık", "Kemer & Cüzdan", "Saat", "Takı & Mücevher"] },
    ]
  },
  {
    name: "Spor",
    groups: [
      { title: "Kondisyon & Fitness", items: ["Koşu Bandı", "Bisiklet", "Dumbbell & Ağırlık", "Yoga & Pilates", "Boks & Dövüş Sporları", "Fitness Aksesuar"] },
      { title: "Outdoor & Doğa", items: ["Kamp Ekipmanı", "Dağcılık & Trekking", "Avcılık & Balıkçılık", "Su Sporları & Yüzme", "Kayak & Snowboard", "Olta & Misina"] },
      { title: "Takım Sporları", items: ["Futbol", "Basketbol", "Tenis & Padel", "Voleybol", "Golf", "Masa Tenisi"] },
    ]
  },
  {
    name: "İş İlanları",
    groups: [
      { title: "Tam Zamanlı", items: ["Yazılım & IT", "Mühendislik", "Finans & Muhasebe", "Satış & Pazarlama", "Sağlık & Eczacılık", "Eğitim & Öğretmenlik"] },
      { title: "Esnek Çalışma", items: ["Yarı Zamanlı", "Freelance & Proje İşi", "Staj Fırsatları", "Uzaktan Çalışma", "Hafta Sonu İşi", "Sezonluk İş"] },
      { title: "Sektörler", items: ["Lojistik & Depo", "İnşaat & Tesisat", "Güvenlik", "Turizm & Otel", "Medya & Reklam", "Hukuk & Danışmanlık"] },
    ]
  },
  {
    name: "Hayvanlar",
    groups: [
      { title: "Evcil Hayvan", items: ["Kedi", "Köpek", "Kuş & Papağan", "Balık & Akvaryum", "Hamster & Kemirgen", "Sürüngen"] },
      { title: "Ürünler", items: ["Mama & Katkı Ürünleri", "Tasma & Giysi", "Kafes & Kulübe", "Oyuncak", "Sağlık & İlaç", "Akvaryum Malzemeleri"] },
      { title: "Hizmetler", items: ["Veteriner", "Hayvan Eğitimi", "Pet Kuaför & Bakım", "Pansiyonat", "Kayıp & Bulundu", "Eş Arıyorum"] },
    ]
  },
  {
    name: "Ders & Kurs",
    groups: [
      { title: "Akademik", items: ["Matematik", "Fen Bilimleri & Fizik", "Türkçe & Edebiyat", "Tarih & Coğrafya", "Sınav Hazırlık (YKS/LGS)", "İlkokul Dersleri"] },
      { title: "Dil & Sanat", items: ["İngilizce", "Almanca & Fransızca", "Müzik Aleti", "Resim & El Sanatları", "Dans & Bale", "Fotoğrafçılık"] },
      { title: "Mesleki & Teknik", items: ["Yazılım & Kodlama", "Grafik Tasarım", "Dijital Pazarlama", "Sürücü Kursu", "Güzellik & Estetik", "Aşçılık & Pastacılık"] },
    ]
  },
  {
    name: "Hizmetler",
    groups: [
      { title: "Ev & Tadilat", items: ["Temizlik Hizmetleri", "Tadilat & Boyacı", "Nakliyat & Taşıma", "Tesisatçı & Elektrikçi", "Çilingir", "Bahçe & Peyzaj"] },
      { title: "Kişisel", items: ["Güzellik & Kuaför", "Özel Ders", "Masaj & Terapi", "Fotoğraf & Video Çekim", "Düğün & Organizasyon", "Bebek Bakıcısı"] },
      { title: "Profesyonel", items: ["Hukuk & Avukatlık", "Mali Müşavirlik", "Mühendislik Danışmanlığı", "Web & Yazılım Geliştirme", "Çeviri Hizmetleri", "Catering"] },
    ]
  },
];

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
  { name: "İstanbul", count: "450.000+ ilan", seed: "istanbul" },
  { name: "Ankara", count: "120.000+ ilan", seed: "ankara" },
  { name: "İzmir", count: "95.000+ ilan", seed: "izmir" },
  { name: "Bursa", count: "65.000+ ilan", seed: "bursa" },
  { name: "Antalya", count: "55.000+ ilan", seed: "antalya" },
  { name: "Adana", count: "30.000+ ilan", seed: "adana" },
  { name: "Konya", count: "28.000+ ilan", seed: "konya" },
  { name: "Gaziantep", count: "25.000+ ilan", seed: "gaziantep" },
  { name: "Kocaeli", count: "22.000+ ilan", seed: "kocaeli" },
  { name: "Mersin", count: "20.000+ ilan", seed: "mersin" },
  { name: "Trabzon", count: "9.500+ ilan", seed: "trabzon" },
  { name: "Eskişehir", count: "9.000+ ilan", seed: "eskisehir" },
  { name: "Muğla", count: "12.000+ ilan", seed: "mugla" },
  { name: "Kayseri", count: "18.000+ ilan", seed: "kayseri" },
  { name: "Samsun", count: "16.000+ ilan", seed: "samsun" },
];

const trends = ["iPhone 15", "Kiralık Daire", "2. El Araba", "MacBook", "PS5", "Bisiklet", "Koltuk Takımı", "Arazi Aracı", "Kombi", "Fotoğraf Makinesi"];

function CategoryNav() {
  const [active, setActive] = useState<string | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeCat = navCategories.find(c => c.name === active) ?? null;

  const show = (name: string) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActive(name);
  };
  const hide = () => {
    hideTimer.current = setTimeout(() => setActive(null), 150);
  };
  const cancelHide = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };

  return (
    <nav className="bg-white border-b border-[#E8E4DF] relative" onMouseLeave={hide}>
      {/* Tab row */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* "Tümü" — static, no dropdown */}
          <button className="shrink-0 whitespace-nowrap py-3.5 font-semibold text-base border-b-[3px] text-[#C0392B] border-[#C0392B]">
            Tümü
          </button>

          {navCategories.map(cat => (
            <button
              key={cat.name}
              onMouseEnter={() => show(cat.name)}
              className="shrink-0 whitespace-nowrap py-3.5 font-medium border-b-[3px] transition-colors flex items-center gap-1 text-[#C0392B] border-[#C0392B] text-[19px]"
            >
              {cat.name}
              <ChevronDown className={`w-3.5 h-3.5 opacity-40 transition-transform ${active === cat.name ? 'rotate-180' : ''}`} />
            </button>
          ))}
        </div>
      </div>
      {/* Full-width mega panel */}
      {active && activeCat && (
        <div
          className="absolute left-0 right-0 top-full z-50 bg-white border-b border-[#E8E4DF] shadow-2xl"
          onMouseEnter={cancelHide}
          onMouseLeave={hide}
        >
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-6">
            {/* Group columns */}
            <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${activeCat.groups.length}, 1fr)` }}>
              {activeCat.groups.map(group => (
                <div key={group.title}>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#C0392B] mb-3">
                    {group.title}
                  </p>
                  <ul className="space-y-0.5">
                    {group.items.map(item => (
                      <li key={item}>
                        <a
                          href="#"
                          className="flex items-center gap-2 py-1.5 font-medium text-zinc-700 hover:text-[#C0392B] transition-colors group/item text-[15px]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover/item:bg-[#C0392B] transition-colors shrink-0" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer link */}
            <div className="mt-5 pt-4 border-t border-[#E8E4DF]">
              <a href="#" className="text-[13px] font-semibold text-[#C0392B] hover:underline">
                Tüm {active} İlanlarını Gör →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 h-9 px-3 rounded-full border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-all text-[14px] font-medium text-zinc-700"
      >
        <div className="w-7 h-7 rounded-full bg-[#C0392B] flex items-center justify-center text-white">
          <User className="w-4 h-4" />
        </div>
        <span className="hidden sm:block">Hesabım</span>
        <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-white border border-[#E8E4DF] rounded-xl shadow-lg py-1.5 z-50">
          <div className="px-4 py-3 border-b border-[#E8E4DF]">
            <div className="font-semibold text-[14px] text-[#1A1A1A]">Ahmet Yılmaz</div>
            <div className="text-[12px] text-zinc-500 mt-0.5">ahmet@example.com</div>
          </div>
          <div className="py-1">
            {[
              { icon: ClipboardList, label: 'İlanlarım' },
              { icon: Heart, label: 'Favorilerim' },
              { icon: Bell, label: 'Bildirimler', badge: 3 },
              { icon: Settings, label: 'Ayarlar' },
            ].map(({ icon: Icon, label, badge }) => (
              <button key={label} className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-[#1A1A1A] transition-colors text-left">
                <Icon className="w-4 h-4 opacity-60 shrink-0" />
                <span className="flex-1">{label}</span>
                {badge && <span className="bg-[#C0392B] text-white text-[11px] font-bold rounded-full px-1.5 py-0.5 leading-none">{badge}</span>}
              </button>
            ))}
          </div>
          <div className="border-t border-[#E8E4DF] py-1">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-red-600 hover:bg-red-50 transition-colors">
              <LogOut className="w-4 h-4 shrink-0" />
              Çıkış Yap
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Anasayfa() {
  const featuredListings = listings.slice(0, 3);

  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] bg-[#F7F5F2] selection:bg-[#C0392B]/20 selection:text-[#962A20]">
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-sm">
        {/* Logo / Actions row */}
        <div className="bg-white border-b border-[#E8E4DF]">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-[64px] flex items-center justify-between gap-4 lg:gap-8">
            <a href="#" className="text-[28px] font-extrabold tracking-tight text-[#1A1A1A] shrink-0 pb-1">
              <span className="text-[#C0392B]">ç</span>arşı
            </a>
            <div className="flex items-center gap-4 shrink-0">
              <button className="relative p-2 text-zinc-700 hover:text-[#1A1A1A] hover:bg-zinc-100 rounded-full transition-colors hidden sm:block">
                <ShoppingCart className="w-[22px] h-[22px]" />
                <span className="absolute top-1.5 right-1 w-2.5 h-2.5 bg-[#C0392B] rounded-full border-2 border-white"></span>
              </button>
              <ProfileMenu />
            </div>
          </div>
        </div>

        {/* Search row */}
        <div className="bg-white border-b border-[#E8E4DF] py-3">
          <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="hidden md:flex items-center gap-3">
              <button className="shrink-0 h-11 px-6 rounded border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] font-semibold text-[14px] hover:bg-zinc-50 transition-colors">
                Buy
              </button>
              <button className="shrink-0 h-11 px-6 rounded border-2 border-[#C0392B] bg-[#C0392B] text-white font-semibold text-[14px] hover:bg-[#962A20] hover:border-[#962A20] transition-colors">
                Sell
              </button>
            <div className="flex-1 flex border-2 border-[#1A1A1A] rounded overflow-hidden h-11 focus-within:ring-2 focus-within:ring-[#C0392B]/20 focus-within:border-[#C0392B] transition-all">
              <button className="bg-zinc-100 px-4 border-r border-[#1A1A1A] flex items-center gap-2 text-[13px] font-semibold text-zinc-800 hover:bg-zinc-200 transition-colors shrink-0">
                Kategori <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              <input type="text" placeholder="Ne arıyorsunuz?" className="flex-1 px-4 text-[14px] outline-none min-w-0 font-medium placeholder:text-zinc-400 placeholder:font-normal" />
              <button className="bg-[#1A1A1A] text-white px-8 font-semibold text-[14px] hover:bg-black transition-colors">Ara</button>
            </div>
            </div>
            <div className="flex md:hidden border-2 border-[#1A1A1A] rounded overflow-hidden h-11">
              <input type="text" placeholder="Ne arıyorsunuz?" className="flex-1 px-3 text-[14px] outline-none min-w-0 font-medium placeholder:font-normal placeholder:text-zinc-400" />
              <button className="bg-[#1A1A1A] text-white px-5 font-semibold text-[14px]">Ara</button>
            </div>
          </div>
        </div>

        <CategoryNav />
      </header>

      <main className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 space-y-12">
        {/* Hero */}
        <section className="flex flex-col md:flex-row gap-6">
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
                        <Star className="w-3 h-3 fill-current" />
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

        {/* Categories grid */}
        <section>
          <h2 className="text-[20px] font-bold text-[#1A1A1A] tracking-tight mb-4">Kategoriler</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {mainCategories.map(cat => {
              const Icon = cat.icon;
              return (
                <a href="#" key={cat.name} className="bg-white border border-[#E8E4DF] rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all group text-center">
                  <div className="w-10 h-10 rounded-full bg-[#F7F5F2] group-hover:bg-[#C0392B]/10 flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5 text-zinc-600 group-hover:text-[#C0392B] transition-colors" />
                  </div>
                  <span className="text-[13px] font-semibold text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">{cat.name}</span>
                  <span className="text-[11px] text-zinc-400">{cat.count} ilan</span>
                </a>
              );
            })}
          </div>
        </section>

        {/* New Listings Grid */}
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 text-[#1A1A1A] text-[13px] font-bold px-5 py-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm border border-zinc-200 pointer-events-none whitespace-nowrap translate-y-4 group-hover:-translate-y-1/2">
                    Hızlı Görüntüle
                  </div>
                </div>
                <div className="p-3.5 flex flex-col flex-1">
                  <h3 className="text-[14px] font-medium text-[#1A1A1A] line-clamp-2 leading-snug mb-3 h-10 group-hover:text-[#C0392B] transition-colors">
                    {listing.title}
                  </h3>
                  <div className="font-extrabold text-[17px] text-[#1A1A1A] mt-auto">{listing.price}</div>
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
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[20px] font-bold text-[#1A1A1A] tracking-tight">Şehrinizde Arama Yapın</h2>
            <div className="flex gap-2">
              <button
                onClick={() => { const el = document.getElementById('cities-scroll'); if (el) el.scrollBy({ left: -600, behavior: 'smooth' }); }}
                className="w-9 h-9 rounded-full border border-[#E8E4DF] bg-white flex items-center justify-center text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-[#1A1A1A] transition-all shadow-sm"
              >
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              <button
                onClick={() => { const el = document.getElementById('cities-scroll'); if (el) el.scrollBy({ left: 600, behavior: 'smooth' }); }}
                className="w-9 h-9 rounded-full border border-[#E8E4DF] bg-white flex items-center justify-center text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-[#1A1A1A] transition-all shadow-sm"
              >
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>
          </div>
          <div id="cities-scroll" className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {cities.map((city, i) => (
              <a href="#" key={i} className="min-w-[148px] max-w-[148px] border border-[#E8E4DF] rounded-lg overflow-hidden block hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:border-zinc-300 transition-all group bg-white shrink-0">
                <div className="w-full h-24 overflow-hidden">
                  <img src={`https://picsum.photos/seed/${city.seed}/300/200`} alt={city.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-[14px] text-[#1A1A1A] group-hover:text-[#C0392B] transition-colors">{city.name}</h3>
                  <p className="text-[12px] text-zinc-500 font-medium mt-0.5">{city.count}</p>
                </div>
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
              <div className="flex gap-3">
                {['in', 'x', 'fb'].map(s => (
                  <div key={s} className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-[#1A1A1A] hover:text-white transition-colors cursor-pointer">
                    <span className="font-bold">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[15px]">Hakkımızda</h4>
              <ul className="space-y-3 text-[13px] font-medium text-zinc-600">
                {['Biz Kimiz?', 'Kariyer', 'İletişim', 'Kurumsal Satış', 'Basın Odası'].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#C0392B] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[15px]">Yardım</h4>
              <ul className="space-y-3 text-[13px] font-medium text-zinc-600">
                {['Sıkça Sorulan Sorular', 'Güvenli Alışveriş', 'İade Koşulları', 'Canlı Destek', 'Öneri & Şikayet'].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#C0392B] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1A1A] mb-5 text-[15px]">İlan Ver</h4>
              <ul className="space-y-3 text-[13px] font-medium text-zinc-600">
                {['Nasıl İlan Verilir?', 'İlan Verme Kuralları', 'Mağaza Açmak İstiyorum', 'Doping Seçenekleri', 'Reklam Seçenekleri'].map(l => (
                  <li key={l}><a href="#" className="hover:text-[#C0392B] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E8E4DF] pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-zinc-500">
            <div>© 2025 Çarşı Teknoloji A.Ş. | Tüm hakları saklıdır.</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {['KVKK Aydınlatma Metni', 'Gizlilik Politikası', 'Kullanıcı Sözleşmesi', 'Çerez Politikası'].map(l => (
                <a key={l} href="#" className="hover:text-[#1A1A1A] transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
