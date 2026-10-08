# RepOcto V2 kaynak eşitliği

Bu public site yeni bir tasarım değildir. Kaynak, `AliSahinBadur/ucak`
deposunun `822ac4eddb172f62106835b1d370c7634109c168` commit'indeki
`app/ui/repocto_landing/v2/index.html` ve doğrudan bağımlılıklarıdır.
Public repo başlangıcı `94ea09b3c896c1d93f872a1a655fd1376ea257d9`.

## Bağımlılık haritası

| Kaynak | Public hedef | Uyarlama |
| --- | --- | --- |
| `v2/index.html` | `index.html` | Statik yollar, anonim örnekler, güvenlik metaverisi ve sayfa içi CTA |
| `v2/repocto-v2.css` | `css/repocto-v2.css` | Birebir |
| `v2/repocto-v2.js` | `js/repocto-v2.js` | Birebir |
| `repocto-legacy-memory.css` | `css/repocto-legacy-memory.css` | Birebir |
| `repocto-legacy-memory.js` | `js/repocto-legacy-memory.js` | Logo yolu, anonim kayıtlar, açık demo bildirimleri |
| `assets/repocto-favicon.svg` | Aynı asset adı | Birebir |
| `assets/repocto-wordmark.png` | Aynı asset adı | Birebir |
| `assets/repocto-hero-coral-v3.png` | Aynı asset adı | Birebir |
| `assets/repocto-hero-loop-v2.mp4` | Aynı asset adı | Birebir |
| `assets/repocto-octopus-friendly-v3.png` | Aynı asset adı | Birebir |
| `assets/repocto-memory-network.png` | Aynı asset adı | Birebir |

HTML referansları, CSS `url()` / `@import` kullanımı ve betiklerin oluşturduğu
kaynaklar incelendi. Hafıza betiği aynı yerel wordmark dosyasını oluşturulan
görünüme ekler. CSS dosyalarında ek medya/yazı tipi bağımlılığı yoktur;
yazı tipleri kaynak V2'nin sistem fontlarıdır. SVG ad alanı bir istek değildir.

## Taşıma sınırları

**A — Birebir:** İki CSS, ana V2 JS, altı gerçek medya dosyası; bölüm sırası,
komponentler, responsive kuralları, sekiz kol navigasyonu ve animasyonlar.

**B — Statik uyarlama:** HTML yolları, uygulama/iletişim CTA'larının sayfa içi
ürün turuna yönelmesi, gerçek proje ve kişi adlarının kurgusal kayıtlarla
değişmesi, taramanın yalnız bir demo olduğunun görünür olması. Hafıza
filtreleri, ağaç, ilişkiler, belge profili, güven ve metadata yapısı korunur.

**C — Taşınmayacak:** Uygulama rotaları, şirket iletişim hedefi, gerçek kişi
ve proje kayıtları, sunucu kodu, belgeler, veri tabanı, modeller, kimlik
doğrulama, ortam dosyaları ve anahtarlar. Kaynak V2'nin iki betiğinde API
veya gerçek klasör tarama çağrısı bulunmadı; bunlar public sürüme eklenmez.

Public repodaki yaklaşık V2 CSS/JS ve sonradan çizilmiş ahtapot kaynak
değildir. Eski kullanılmayan dosyalar temizlenir; önceki Git commit'lerinde
geri alınabilir. Güvenlik başlıkları ve `noindex, nofollow` korunur.

## Bölüm karşılaştırması

| V2 bölümü | Public sürüm | Durum | Fark varsa sebep |
| --- | --- | --- | --- |
| Başlık, mobil menü, ilerleme çizgisi | Aynı HTML yapısı, CSS ve V2 betiği | Birebir | Güvenlik metaverisi ayrıca eklendi; tasarım değişmedi. |
| Açılış / hero | Özgün poster, video, wordmark, metin ve istatistikler | Birebir | Yalnız statik dosya yolları. |
| Dosya uzantıları ve dört adım | Aynı içerik ve düzen | Birebir | Yok. |
| Sekiz kollu navigasyon | Gerçek ahtapot PNG'si, sekiz ana ve sekiz ikincil bağlantı | Birebir | Özel public ahtapot çizimi kullanılmıyor. |
| Doküman asistanı / arama / soru / kaynak | Aynı soru-cevap ve kaynak kartı | Static uyarlama | Örnek proje ve belge kodu anonim. |
| Teknik özet / karşılaştırma | Aynı iki belge ve teknik ölçüm örneği | Birebir | Yok. |
| Sınıflandırma / hafıza akışı | Aynı klasör → çalışma → konu → belge görünümü | Static uyarlama | Örnek arşiv ve anonim çalışma etiketi. |
| Doküman hazırlama | Aynı notlar, dönüşüm ve belge taslağı | Birebir | Gerçek belge üretimi kaynak V2'de de yok; ürün gösterimi. |
| Hafıza başlığı ve tarama çubuğu | Aynı bileşenler ve zamanlanmış tarama | Static uyarlama | Demo olduğu ve gerçek dosya okunmadığı açıklandı. |
| Çalışma / kişi / yıl filtreleri | Aynı mantık, altı kayıt, dört çalışma | Static uyarlama | Anonim etiketler; filtre/sıfırlama davranışı korundu. |
| Kategori ağacı ve anlamsal ağaç | Aynı dallar, düğüm seçimi ve düzen | Static uyarlama | Yalnız kayıt içerikleri anonim. |
| İlişki görünümü | Aynı SVG ilişkileri ve tıklama davranışı | Static uyarlama | Anonim etiketler; kaynaktaki klavye hatası ayrıca belgeleniyor. |
| Belge profili / metadata / güven / kaynak izleri | Aynı alanlar, gerekçeler, düşük güven göstergesi | Static uyarlama | Gerçek isimler ve klasör yolu yerine demo etiketleri. |
| Güvenlik anlatımı ve kapanış görseli | Aynı içerik, özgün hafıza ağı PNG'si | Birebir | Yok. |
| Uygulama ve iletişim CTA'ları | Aynı düğme stilleriyle sayfa içi ürün turu | Static uyarlama | Gerçek uygulama/şirket formuna geçişi önler. |
| Alt bilgi | Aynı wordmark ve yerleşim | Static uyarlama | Kurgusal ürün demosu açıklaması. |
| Gerçek uygulama ve şirket iletişim hedefleri | Bağlantı yok | Public için çıkarıldı | Public gösterim gerçek sisteme ulaşmamalı. |
| Gerçek kişi/proje etiketleri ve özel klasör yolu | Anonim demo karşılıkları | Public için çıkarıldı | Şirket içi bilginin public sürüme taşınmaması. |

Hiçbir V2 görsel bölümü kaldırılmadı veya sadeleştirilmedi. Sunucu, model,
belge işleme ve gerçek dosya tarama V2 landing'in statik demosunda zaten
çalışan özellikler değildir; public siteye de eklenmedi.

## Temizlenen eski public dosyaları

Yaklaşık V2 dosyaları `css/repocto-v2-public.css`, `js/repocto-v2-public.js`
ve `assets/repocto-octopus-public.svg` kaldırıldı. Kullanılmayan eski `site`,
`sections`, `showcase`, `memory` stilleri, `site.js`, `memory-demo.js` ve sekiz
eski medya dosyası dağıtım kümesinden çıkarıldı. Önceki public commit bunları
içerir; Git geçmişi silinmedi.

Hata sayfasının önceki üç kart kuralı `css/error.css` içinde korundu.
`404.html` yalnız güncel statik stil yollarını kullanacak şekilde güncellendi.
`_headers` değişmedi. Ana uygulama dosyalarına dokunulmadı.

## Doğrulama

Kaynak eşitliği, anonimleştirme, tarayıcı etkileşimleri, dört ekran genişliği
ve bilinen kaynak hatası [doğrulama raporunda](VERIFICATION.md) kayıtlıdır.
Kaynakta da bulunan SVG Enter hatası gizlenmedi; kaynak dışı bir davranış
düzeltmesi bu taşımanın parçası yapılmadı.
