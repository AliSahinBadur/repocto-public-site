# RepOcto · Bağımsız tanıtım sitesi

**Bu repository yalnızca RepOcto tanıtım web sitesidir. RepOcto backend'i, şirket dokümanları, API'ler, yapay zekâ modelleri veya şirket içi sistemlerle hiçbir bağlantısı yoktur.**

Bu klasör mevcut uygulamadan bağımsızdır. Bir paket kurulumu, derleme, model,
hesap veya sunucu uygulaması gerektirmez. GitHub deposu herkese açıktır;
bu çalışma kapsamında canlı web yayını yapılmamıştır.

## Yerel açılış

Klasördeki `index.html` dosyasını Edge veya Chrome ile açın. PowerShell'de bu
klasörün içindeyken:

```powershell
Start-Process .\index.html
```

İnternet gerekmez. Görseller, videolar ve betikler bu klasörden yüklenir.
Klasörün tamamını birlikte taşıyın; yalnız HTML dosyasını taşımayın.
Video otomatik oynatılmazsa poster görünür kalır. Hareketi azaltma tercihi
desteklenir; animasyon düğmesi videoları durdurur/oynatır.

## İçerik

- `index.html`: ana tanıtım; açılış, yetenekler, dört ürün sekmesi, hafıza,
  yerel kurulum yaklaşımı, sık sorulanlar ve keşif bağlantıları.
- `css/site.css`: mevcut marka ve açılış stilleri.
- `css/sections.css`: ürün ve tanıtım bölümleri.
- `css/memory.css`: hafıza ağacı ve ilişki görünümü.
- `css/showcase.css`: bağımsız demo, erişilebilirlik ve küçük uyarlamalar.
- `js/site.js`: menü, sekmeler, sayaçlar ve animasyonlar.
- `js/memory-demo.js`: yalnız bellekte çalışan altı kurgusal kayıt.
- `assets/`: kullanılan 11 yerel görsel/video; eski alternatifler taşınmadı.
- `404.html`: kökten yayınlanan sitede derin adreslerde de çalışan hata görünümü.
- `_headers`: Cloudflare Pages için güvenlik başlıkları.

## Demo sınırı

Ürün arayüzlerindeki belgeler, uzman adları, örnek ölçümler ve güven puanları
kurgusaldır. Hafıza demosundaki düğme yalnız örnek işlem adımlarını oynatır;
disk taramaz, dosya açmaz ve indeks oluşturmaz. Arşiv adı salt okunurdur.
Filtreler, görünüm seçimi ve belge profili yalnız tarayıcı belleğinde değişir.
Sohbet yanıtları sabit örneklerdir; gerçek bir modele soru gönderilmez.

## İzolasyon

Uygulamayı açan bağlantılar ve dış iletişim formu çıkarıldı. Tüm navigasyon
aynı sayfadaki bölümlere gider. Kişi adları ve şirket klasör yolları kurgusal
etiketlerle değiştirildi. Sunucu kodu, şirket raporu, model, veri tabanı,
kimlik doğrulama, gönderilebilir form, uzak yazı tipi veya ölçüm betiği yoktur.

`connect-src 'none'` HTML politikasında ve dağıtım başlıklarında tanımlıdır.
Betik, stil, görsel ve video yalnız aynı kaynaktan yüklenebilir; form, çerçeve,
eklenti ve worker kullanımı kapalıdır. Satır içi betik/stil izni verilmez.
Animasyonların dinamik konumları yalnız yerel betikte CSS özellikleriyle ayarlanır.

Bu politika bütün ağ trafiğini kapatmak anlamına gelmez: yayımlandığında tarayıcı
bu sitenin HTML/CSS/JS/görsel/video dosyalarını hosting'den indirir. Uygulama
servisine veya üçüncü tarafa veri isteği gönderilmez. Hosting sağlayıcısının
standart erişim kayıtları, bu sitenin eklediği bir takip sistemi değildir.

COOP ve CORP başlıkları `same-origin` olarak ayarlıdır. Bunlar tarayıcıda
ek izolasyon sağlar; depoyu gizli yapmaz ve tek başına güvenlik garantisi değildir.

SVG ad alanındaki W3C adresi bir kimliktir, indirilen kaynak değildir.
Aşağıdaki resmî belge adresleri yalnız bu README'nin kurulum kaynaklarıdır;
ziyaretçiye yüklenen sayfa veya betiklerde dış bağlantı yoktur.

## Cloudflare Pages — yalnız daha sonra

1. Hazır olan ayrı `AliSahinBadur/repocto-public-site` repository'sini kullanın.
   Ana uygulama deposunu, dosya geçmişini veya üst klasörü taşımayın.
2. Pages projesini bu ayrı repository'ye bağlayın.
3. Framework preset: **None**.
4. Build command: **exit 0**. Paket kurulumu veya derleme gerekmez.
5. Build output directory: **.** (bu repository'nin kökü).
6. Değişken veya servis bağlantısı eklemeyin. Web Analytics ve Zaraz'ı açmayın;
   haricî betik eklemeyin. Functions veya Worker eklemeyin.
7. İlk test yayınında ağ panelini ve CSP yanıt başlığını kontrol edin.
   `_headers` dosyasının kökte kaldığını doğrulayın.
8. Geçici adreste kontrol tamamlanmadan alan adı bağlamayın.

### Önizleme ve arama motorları

Önizleme varsayılanı: iki HTML sayfasında robots meta etiketi, dağıtımda ise
`X-Robots-Tag` başlığı `noindex, nofollow` değerindedir. Böylece bu yönergeyi
uygulayan arama motorlarından sayfayı indekslememeleri istenir. Bir erişim
kontrolü değildir; bağlantıyı bilenler siteyi ve public GitHub dosyalarını görebilir.

`robots.txt` ile tarama engellenmedi; botun `noindex` yönergesini okuyabilmesi
gerekir. Gerçek alan adı ve yayın onayı kesinleştiğinde ana sayfanın robots
meta etiketi ile `_headers` içindeki `X-Robots-Tag` birlikte gözden geçirilmelidir.
404 sayfasını `noindex` bırakın. Son alan adı belirlenmeden canonical,
sosyal paylaşım görsel adresi veya sitemap adresi üretilmedi.

HSTS ve alt alan adlarını etkileyen kalıcı HTTPS politikaları bu aşamada
eklenmedi. Lisans veya marka/görsel yayın izni varsayılmadı.

### Dosyadan açılış ve 404 ayrımı

Ana sayfa ve tüm ürün demoları göreli kaynak yollarını korur, çevrimdışı dosya
açılışıyla çalışır. Yalnız `404.html`, hosting'de `/a/b/c` gibi bulunamayan
adreslerde CSS, ikon ve ana sayfa bağlantısının bozulmaması için kökten başlayan
yollar kullanır. Bu hata sayfasını dosyadan değil statik hosting üzerinden
test edin. Dağıtım hedefi alan adının köküdür; alt dizine yayın ayrıca uyarlama ister.

### Kayıpsız medya optimizasyonu

Üç büyük PNG'nin yerine kayıpsız WebP kullanılır. Çözünürlük ve açılmış RGBA
pikselleri eski sürümle birebir karşılaştırıldı; görüntü yeniden üretilmedi
veya küçültülmedi. Saydam logonun PNG sürümü korundu. Videolar yeniden
kodlanmadı; yalnız bilgi akışı videosunun adı RepOcto ile tutarlı hale getirildi.

| Görsel | Önce | Sonra | Azalma |
| --- | ---: | ---: | ---: |
| Hafıza ağı | 5.11 MB | 2.40 MB | %52.98 |
| Açılış posteri | 2.07 MB | 1.54 MB | %25.43 |
| Yetenek merkezi | 2.14 MB | 1.62 MB | %24.33 |

Güncel statik dosyalar yaklaşık 17.67 MB'den 13.92 MB'ye indi (%21 civarı).
Bu ölçüm Git geçmişini veya tarayıcı önbelleğini değil dağıtılan dosya kümesini
karşılaştırır. Eski PNG'ler ilk Git commit'inden geri alınabilir. Gerçek ilk
yüklenme süresi ölçülmedi; Lighthouse sonucu veya hız yüzdesi iddia edilmiyor.

Üretim sunucusuna veya özel uygulama deposuna bağlantı kurulmaz.
GitHub'da bulunması sitenin canlıya alındığı anlamına gelmez. Domain alma ve
Cloudflare yayını ayrı adımlardır; bu dosyalar kendiliğinden yayın başlatmaz.
GitHub'ın `has_pages` alanı yalnız GitHub Pages durumunu gösterir; tek başına
Cloudflare'da yayın olup olmadığını kanıtlamaz.

Yerel dosya açılışında HTML içindeki CSP geçerlidir. `frame-ancestors` ve
diğer HTTP başlıkları dosya açılışında uygulanmaz; Pages yayını bunları
`_headers` üzerinden uygular. Nihai hosting başlıkları yayın sonrası ayrıca
doğrulanmalıdır.

Resmî kaynaklar (7 Ekim 2026'da kontrol edildi):
[Statik HTML yayını](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) ·
[Özel güvenlik başlıkları](https://developers.cloudflare.com/pages/configuration/headers/) ·
[Google noindex açıklaması](https://developers.google.com/search/docs/crawling-indexing/block-indexing) ·
[COOP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy) ·
[CORP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Resource-Policy).
