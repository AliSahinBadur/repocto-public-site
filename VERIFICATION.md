# Doğrulama · 7 Ekim 2026

Sonuç: **23 kontrol geçti.** Edge 154.0.4258.24 ile yerel dosya açılışı ve
yalnız bu klasörü sunan geçici, izole statik test ortamı kullanıldı.
Gerçek uygulama başlatılmadı; şirket belgesi veya model kullanılmadı.

## Kontroller

| Alan | Sonuç |
| --- | --- |
| Üretim kaynakları | Kaynak landing dizinindeki tüm dosyaların SHA-256 özetleri değişmedi. |
| Statik içerik | Yalnız HTML, CSS, JS, yerel medya, dağıtım başlıkları ve açıklama dosyaları. |
| Dış bağımlılık | Ziyaretçi kodunda uzak kaynak, servis çağrısı, özel adres veya anahtar bulunmadı. |
| İşlev sınırları | Form, çerçeve, satır içi betik/stil, kullanıcı girişi veya izleme yok. |
| Dosya yolları | Tüm yerel kaynaklar bulundu; kullanılmayan medya kopyalanmadı. |
| Güvenlik politikası | HTML politikası ve dağıtım başlıkları eşleşti. Normal kullanımda CSP ihlali yok. |
| Etkin engelleme | Ayrı negatif testte sentetik bağlantı denemesi tarayıcı tarafından engellendi; test sunucusuna ulaşmadı. |
| Ağ gözlemi | Kullanıcı etkileşimlerinde sıfır dış servis, backend veya veri gönderim isteği. |
| Ekran genişlikleri | 1440, 1280, 768, 390 ve 320 piksel; sayfa çapında yatay taşma yok. |
| Sekmeler | Dört ürün görünümü, ok tuşları ve Home tuşu çalıştı. |
| Hafıza | Çalışma/kişi/yıl filtreleri, birleşik filtreler, boş sonuç ve sıfırlama çalıştı. |
| İlişkiler | Belge seçimi, ağaç/ilişki geçişi ve klavye seçimi çalıştı. |
| Örnek tarama | Gerçek dosya okumayan animasyon ve salt okunur örnek arşiv adı doğrulandı. |
| Diğer etkileşimler | Mobil menü, bölüm bağlantıları ve sık sorulanlar çalıştı. |
| Çevrimdışı | Ağ kapalıyken dosyadan açıldı; stiller, görseller, sekmeler ve hafıza demosu çalıştı. |
| Medya | Üç yerel video oynadı; durdur/oynat denetlendi. Hareket azaltmada posterler korundu. |
| JavaScript kapalı | Tanıtım metinleri görünür; etkileşimli demo için açıklama gösteriliyor. |
| Türkçe ve çalışma zamanı | Bozuk karakter örüntüsü, betik hatası veya normal kullanım konsol hatası bulunmadı. |

SVG dosyası ve SVG oluşturan betikteki W3C ad alanı bir ağ bağımlılığı değildir.
README'deki resmî doküman bağlantıları yalnız dağıtım rehberidir.
Yayınlandığında sayfanın kendi statik dosyaları hosting üzerinden indirilir;
“dış bağlantı yok” ifadesi bu normal dosya indirmelerini dışlamaz.

## Sınırlar

Bu bir penetrasyon testi veya her tarayıcı için uygunluk garantisi değildir.
Canlı Cloudflare yayını yapılmadı; son alan adındaki güvenlik başlıkları,
barındırma ayarları ve olası hosting kaynaklı betik eklemeleri yayın sonrası
ayrıca denetlenmelidir. Kurumun marka ve yayın onayı teknik kontrolden ayrıdır.

Üretim uygulaması, veri tabanı, modeller ve Git geçmişi taşınmadı.
Ana uygulamaya yeni dosya veya bağlantı eklenmedi. Bu doğrulama GitHub'a yükleme
öncesinde yapıldı; Cloudflare yayını bu testin kapsamı dışında kaldı.
