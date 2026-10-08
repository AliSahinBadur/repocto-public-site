# V2 taşıma doğrulaması · 8 Ekim 2026

Public sürüm izole statik HTTP ortamında ve Codex tarayıcısında denetlendi.
Gerçek uygulama başlatılmadı; model, şirket belgesi veya uygulama servisi
kullanılmadı.

**Sonuç:** Statik kaynak denetimindeki 11 kontrol geçti. Kaydedilen 26 tarayıcı
kontrolünün 25'i geçti. Bir klavye hatası hem public sürümde hem
değiştirilmemiş kaynak V2'de tekrarlandı; dolayısıyla
“bütün testler geçti” iddiası yoktur.

Bu rapor önceki yaklaşık tasarımın 7 Ekim testlerinin yerine geçer. Eski
sürümün sekmeleri, medya dönüşümleri veya erişilebilirlik sonuçları yeni V2
için kanıt olarak kullanılmadı.

## İstenen 25 alan

| # | Kontrol | Sonuç ve dayanak |
| --- | --- | --- |
| 1 | Ana sayfa | HTTP üzerinden açıldı; V2 başlığı ve tüm ana bölümler mevcut. |
| 2 | Konsol | Normal tıklama akışında yeni hata yok. SVG Enter kaynak V2'de de bulunan hatayı üretiyor; aşağıya bakın. |
| 3 | Eksik kaynak | Beklenen statik kaynaklarda 404 yok; bilinçli bulunamayan sayfa testi ayrı. |
| 4 | CSS | İki V2 CSS yüklendi; kaynaklarla içerik aynı. |
| 5 | JS | İki betik yüklendi; ikisinin sözdizimi kontrolü geçti. |
| 6 | Hero video | Özgün video yüklendi, oynuyor; readyState 4 gözlendi. |
| 7 | Poster | Özgün poster tarayıcı kaynak envanterinde mevcut; dosya özeti aynı. Oynatınca posterin kaldırılması V2 davranışı. |
| 8 | Wordmark | Başlık, hafıza ve alt bölümde özgün PNG yüklendi. |
| 9 | Ahtapot | Özgün PNG iki görünümde yüklendi; özel çizilmiş alternatif kaldırıldı. |
| 10 | Sekiz kol | Sekiz yetenek ve iki özgün navigasyon görünümü korundu. |
| 11 | Kol bağlantıları | 16 bağlantının tamamına tıklanıp doğru bölüm hedefi doğrulandı. |
| 12 | Çalışma akışı | Dört görünüm, sekiz özellik hedefi eksiksiz; HTML yapısı kaynakla karşılaştırıldı. |
| 13 | Doküman asistanı | Soru, örnek cevap ve kaynak mevcut; yalnız proje adı anonim. |
| 14 | Karşılaştırma | İki belge, teknik değerler ve değişen koşul örneği korundu. |
| 15 | Doküman hazırlama | Teknik notlar, akış ve belge taslağı korundu. |
| 16 | Hafıza / ağaç | Kategoriler, anlamsal ağaç, profil, güven ve kaynak izleri mevcut. |
| 17 | Filtreler | ALFA → 3, ALFA + Uzman A → 1, ek 2023 → 0, temizleme → 6 belge. Mobil yıl filtresi de denendi. |
| 18 | Ağaç / ilişkiler | Geçiş, tıklamayla seçim, kategori açma/kapama ve tarama çalıştı. %68 düşük güven / eksik kişi gösterimi doğrulandı. SVG Enter istisnası aşağıda. |
| 19 | Responsive | 1440×1000, 768×1024, 390×844, 320×720; sayfa çapında yatay taşma yok. Tablet/mobil menü ve mobil filtre/seçim denendi. |
| 20 | Dış istek | Gözlenen tarayıcı kaynak envanterinde dış kaynak yok; tamamı aynı statik kaynaktan. |
| 21 | Uygulama servisi | JS'de veri taşıma API'si yok; test sunucusu kaydında beklenen statik dosyalar var. |
| 22 | Özel adres | Ziyaretçi dosyalarında yerel servis adresi, özel ağ hedefi veya uygulama rotası kalmadı. |
| 23 | Gizli ayar | Ziyaretçi kodunda anahtar örüntüsü veya gerçek uygulama ortam ayarı bulunmadı; dağıtımda ortam dosyası yok. |
| 24 | Özel veri | Kişi/proje etiketleri anonim; belge içeriği veya kullanıcı klasörü taşınmadı. Görseller özgün ürün illüstrasyonları. |
| 25 | Statik ağ kaynakları | Tarayıcı envanteri: 2 CSS, 2 JS, 1 video, sorgu parametreli logo dahil 6 görsel URL'si; uzak font/diğer kaynak yok. İstek kaydıyla çapraz kontrol edildi. |

## Kaynak eşitliği

İki CSS, ana V2 JS ve altı medya dosyası yerel kopyalar arasında SHA-256 ile
birebir karşılaştırıldı. Git metin dosyalarının CRLF/LF satır sonlarını
normalleştirebilir; bu stil veya işlev değişikliği değildir. HTML'nin eleman
sırası, kimlikleri, sınıfları ve veri bağlantıları korunur. Hafıza betiğindeki
farklar logo yolu, anonim içerik ve demo açıklamalarıdır.

Kaynak landing dizininde değişiklik yapılmadı. Bağımlılık ve bölüm tablosu
[V2_PARITY.md](V2_PARITY.md) dosyasındadır.

## Bilinen kaynak hatası: SVG düğümünün klavye seçimi

İlişkiler görünümünde SVG belge düğümüne odaklanıp Enter basılınca
`documentTarget.click is not a function` oluşuyor. Kaynak hafıza betiğinin
klavye dinleyicisi, SVG elemanında bulunmayan `click()` metodunu çağırıyor.
Aynı adımlar değiştirilmemiş V2 üzerinde de aynı sonucu verdi.

Taşımanın eklediği bir fark değildir. Yalnız public/statik zorunlu
değişiklikler yapılması istendiği için burada düzeltilmedi. Grafik düğümüne
tıklama, normal ağaç belge düğmeleri ve kategori dallarının klavye kullanımı
çalışır. Tam klavye erişilebilirliği iddiasında bulunulamaz.

## Dağıtım ve sınırlar

- Mevcut `_headers` önceki public commit ile aynı. HTML politikaları ve
  `noindex, nofollow` korundu.
- Derin bulunamayan adres 404 verdi; iki CSS yüklendi ve ana sayfaya dönüş
  çalıştı. Beklenen statik kaynaklarda 404 gözlenmedi.
- Uygulama düğmesi yerine sayfa içi demo hedefi doğrulandı.
- Doğrudan dosya açılışı tarayıcı aracının güvenlik politikasıyla engellendi;
  geçti sayılmadı. HTTP testi tamamlandı.
- Hareket azaltma ve JavaScript kapalı kullanım için kod korundu, ancak bu
  oturumda ayrı tarayıcı ayarı testi yapılmadı.
- Bu, penetrasyon testi, her tarayıcı için uyumluluk veya tam piksel eşitliği
  garantisi değildir. Anonim etiketler metin uzunluğunu değiştirebilir.
- Rapor yerel doğrulamayı kaydeder. Canlı dağıtım ve yanıt başlıkları ayrıca
  kontrol edilmelidir; push tek başına başarı kanıtı değildir.
