# RepOcto · V2 public tanıtım sitesi

Bu depo, gerçek RepOcto V2 landing page'in bağımsız, statik ürün tanıtımıdır.
Gerçek uygulama, şirket belgeleri, hesaplar, modeller ve uygulama servisleri
bu sitenin parçası değildir.

Yeni bir tasarım üretilmedi. Kaynak V2'nin bölüm sırası, stilleri, ahtapot
görseli, videosu ve tarayıcı içi hafıza demosu taşındı. Yalnız kaynak yolları,
public bağlantılar ve anonim demo içerikleri uyarlandı.

- [Kaynak bağımlılıkları ve bölüm karşılaştırması](V2_PARITY.md)
- [8 Ekim 2026 doğrulama sonuçları ve bilinen sınırlar](VERIFICATION.md)

## Dosyalar

| Dosya | Görev |
| --- | --- |
| `index.html` | V2 açılış, uzantılar, sekiz kol, dört çalışma görünümü, hafıza ve kapanış |
| `css/repocto-v2.css` | Kaynak V2 stilleri; değiştirilmedi |
| `js/repocto-v2.js` | Kaynak V2 menüsü, bölüm takibi, video ve animasyonlar; değiştirilmedi |
| `css/repocto-legacy-memory.css` | Kaynak hafıza stilleri; değiştirilmedi |
| `js/repocto-legacy-memory.js` | Altı anonim kayıtla ağaç, ilişkiler, filtreler, profil ve demo taraması |
| `assets/` | V2'nin kullandığı altı özgün medya; yeniden üretilmedi veya dönüştürülmedi |
| `404.html`, `css/error.css` | Derin adreslerde çalışan hata sayfası; önceki hata kartı stilleri korundu |
| `_headers` | Mevcut güvenlik ve arama motoru başlıkları; değiştirilmedi |

## Demo ne yapar?

Çalışma, kişi ve yıl filtreleri birlikte uygulanır. Kategori dalları açılıp
kapanır; ağaç veya ilişki düğümüne tıklanınca belge profili, metadata,
sınıflandırma gerekçesi, kaynak izleri ve güven göstergesi güncellenir.

ALFA, BETA, GAMA, DELTA ve Uzman A–D kurgusal etiketlerdir. Dosya adları
indirilebilir gerçek dosyalar değildir. Örnek klasör alanı kaynak V2'deki
gibi düzenlenebilir; hiçbir dosya veya klasör açmaz. **Tara** yalnız tarayıcı
belleğindeki zamanlanmış demo durumlarını oynatır. Yenilemede seçimler sıfırlanır.

Doküman asistanı, karşılaştırma ve hazırlama bölümleri kaynak V2'deki sabit
ürün örnekleridir; gerçek soru-cevap veya rapor üretimi yapmaz.

Kaynak V2'den gelen bilinen bir sınır: ilişki grafiğinin SVG belge düğümlerinde
Enter ile seçim hata verir. Tıklama ve normal ağaç düğmeleri çalışır.
Kaynağa sadakat talebi nedeniyle bu taşıma sırasında işlev mantığı
değiştirilmedi; ayrıntı doğrulama raporundadır.

## Güvenlik sınırı

Uygulamaya ve şirket iletişim formuna giden düğmeler aynı sayfanın ürün
turuna yönlendirilir. Ziyaretçi betiklerinde veri gönderme, dosya sistemi
erişimi, kalıcı depolama veya servis bağlantısı yoktur. Uzak font, analiz
betiği, gönderilebilir form, kimlik doğrulama ve sunucu kodu eklenmedi.

HTML politikası ve `_headers` içindeki `connect-src 'none'` korunur.
Betikler, stiller ve medya yalnız sitenin kendi kaynağından yüklenir.
Çerçeve, form, worker ve satır içi betik/stil izni verilmez. COOP/CORP,
Referrer-Policy, Permissions-Policy ve diğer mevcut başlıklar korunur.

Bu, hiç ağ kullanılmadığı anlamına gelmez: statik dosyalar yayın sunucusundan
indirilir. SVG içindeki W3C ad alanı bir ağ isteği değildir. Barındırma
sağlayıcısının erişim kayıtları sitenin eklediği takip kodu değildir.

`noindex, nofollow` iki HTML'de ve dağıtım başlığında bulunur. Bu bir erişim
kontrolü değildir: site ve depo herkese açıktır. Güvenlik başlıkları tek
başına güvenlik garantisi veya marka yayın izni yerine geçmez.

## Çalıştırma ve yayın

Paket kurulumu, derleme veya model gerekmez. Repo kökünü herhangi bir statik
HTTP sunucusunda açmak yeterlidir. Ana sayfa `index.html`; CSS/JS/medya
yolları göreli tutuldu. Doğrudan dosya açılışı bu test oturumunda tarayıcı
politikası nedeniyle doğrulanamadı; HTTP açılışı doğrulandı.

Kullanıcının mevcut yayın düzeni: Cloudflare Pages → bu repo → `main`.
Framework **None**, build komutu **boş**, çıktı repo kökü. `main` push'u
bağlı Pages projesinin otomatik dağıtımını tetikler. Yeni hosting projesi
veya servis bağlantısı gerekmez.

`_headers` ve `404.html` kökte kalmalıdır. Hata sayfasındaki CSS/ikon/ana sayfa
yolları derin adresler için kökten başlar. Alt dizine dağıtım bu çalışmanın
hedefi değildir. Ortam değişkeni, Functions, Worker veya analiz betiği gerekmez.

Yerel testler dağıtımın başarıyla bittiğini tek başına kanıtlamaz. Cloudflare
sonucu, yayın dosyaları ve yanıt başlıkları ayrıca doğrulanmalıdır.
