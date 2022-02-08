/* Function: of faq content */


/* faq Questions */
let faqQuestionsArray = [
  `Kimler kan bağışında bulunabilir?`,
  `Nerede kan bağışında bulunabilirim?`,
  `Kan bağışı ne kadar sürer?`,
  `Kimliğimi bildirmem zorunlu mu?`,
  `Sorgulama formundaki bütün soruları cevaplamak zorunda mıyım?`,
  `Kan vermenin sağlığa yararı var mıdır?`,
  `Hangi aralıklarla kan bağışında bulunabilirim?`,
  `Kızılay Kan Satıyor mu?`,
  `İhtiyacımız olduğunda neden kan bulamıyoruz?`,
  `Kan bağışı sonrasında yapılan test sonuçları bizlere bildiriliyor mu?`,
  `COVID aşısından sonra kan bağışı yapabilir miyim?`,
  `Kan bağışı sırasında hastalık bulaşma riski var mı?`,
  `SMS hangi durumlarda alıyoruz ya da gelen SMS nasıl engellenir?`,
  `Ödül/Madalya sistemi nedir?`,
  `Sarılık geçirenler kan bağışında bulunabilir mi?`
   ]

let faqAnswersArray = [
`18-65 yaş aralığında 50 kilogramın üzerindeki her sağlıklı birey kan bağışçısı adayı olabilir. (19 yaşından gün almak, 65’ini doldurmamak gerekir.) 
İlk kez kan bağışında bulunacaklar için üst yaş sınırı: 61 yaşından gün almamış olmalı. Düzenli kan bağışçıları için üst yaş sınırı 65 yaşını doldurduktan, 70 yaşından gün alana kadar kan bağış merkezi doktorunun onayı olmak şartıyla yılda en fazla 1 kez olmak üzere kan bağışlayabilir. 
`,

`Size en yakın kan bağışı merkezi, kan alma birimi ya da kan bağışı kampanyamızı görmek için lütfen tıklayınız.
`,

`Kayıt, muayene, kan bağışı ve ikram işlemleri yaklaşık 30-35 dk. sürmektedir.
`,

`Bağışçılar her kan bağışı işlemi öncesinde isim-soy isim, doğum tarihi (gün/ay/yıl), TC kimlik numarasını içeren nüfus cüzdanı, ehliyet veya pasaport ve kalıcı adres bilgilerini vererek kendilerini tanıtmalıdır. Kimlik ibrazı Sağlık Bakanlığı’nın hazırlanmış olduğu Ulusal Kan ve Kan Bileşeni Hazırlama, Kullanım ve Kalite Güvencesi Rehberi 2016'ya göre zorunludur.
`,

`Sorgulama formunun içeriği Sağlık Bakanlığı tarafından belirlenmektedir. 
Kişi kan bağışı için başvurduğunda mutlaka sorgulama formundaki kişisel ve sağlıkla ilgili soruları eksiksiz cevaplandırmak ve bu formu bizzat onaylamak zorundadır. Sorulan sorular kan bağışımızın ve kanı alacak hasta sağlığı için büyük önem arz etmektedir.
`,

`Kan bağışlamanın sağlığa herhangi bir yararı olduğuna dair bilimsel bir çalışma yoktur. Kan bağışının bağışçıya en önemli faydası hiç tanımadığı üç kişinin hayatını kurtarmaktır.
`,

`Tam kan bağışında;
Erkekler 90 günde bir
Kadınlar 120 gün de bir
Aferez ve tam kan bağışı aralıkları hakkında detaylı bilgi için Ulusal Kan ve Kan Bileşenleri Hazırlama, Kullanım ve Kalite Güvencesi Rehberi 2016 (bkz. 73-74)
`,

`Türk Kızılay’a gönüllü olarak bağışlanmış olan kanlar laboratuvar testlerinden geçerler.
Eşzamanlı olarak 3 bileşene ayrılarak uygun koşullarda saklanırlar. Kullanıma hazır olan kan bileşenleri hastanelere transfer edilir.
Bu süreçte kesinlikle hasta ve hasta yakınından herhangi bir ücret talep edilmez. 
Söz konusu süreçlerin maliyetlerinin ücret politikası Sağlık Bakanlığı ve SGK tarafından belirlenmektedir. Bu konudaki ayrıntılar Sağlık Bakanlığı ve SGK tarafından resmi gazetede yayınlanan “Sağlık Uygulama Tebliği’nde” de yer almaktadır.
Kan transfüzyonu sırasında hasta/hasta yakınından ücret talep edilmesi durumunda söz konusu hastanenin bağlı bulunduğu İl Sağlık Müdürlüklerine konu hakkında bildirimde bulunulması uygun olacaktır. 
`,

`Sağlık Bakanlığı’na bağlı kan nakli yapan 1131 hastane vardır. Bu hastanelerin 1118 tanesinin tüm kan ihtiyacı Kızılay tarafından karşılanmaktadır. Türk Kızılay Ülke kan ihtiyacını %90 oranında karşılamaktadır. Geriye kalan 13 hastanenin geçici kan alımı yetkisi bulunmaktadır. Türk Kızılay tüm kan ihtiyacını karşılayana kadar bu 13 hastane kendi kan ihtiyaçlarını karşılamakla yükümlüdür.
`,

`Alınan bütün kanlara HIV, Hepatit B-C ve Sifiliz testleri uygulanmaktadır. Test sonuçlarının ve bağışçı bilgilerinin 3.kişiler ile paylaşılması Kan Kanunu çerçevesinde yasak olup, güvenlik nedeni ile sms veya e-mail yolu ile bağışçılarımız ile paylaşamamaktayız. 
Test sonuçlarınız ile ilgili olumsuz bir durum söz konusu olduğunda kişiye özel bilgilendirme yapılmaktadır.Eğer sonuçlar normal ise herhangi bir bilgilendirme yapılmamaktadır.
Yine de sonuçlarınızı görmek isterseniz ilgili kan merkezimize kimliğiniz ile bizzat başvurmanız gerekmektedir.
`,

`COVID aşısı olduktan sonra semptom gelişmemiş ise aşıdan 7 gün sonra, semptom gelişmiş ise semptomların düzelmesinden 7 gün sonra bağışçı olunabilmektedir.
`,

`Kan bağışı işlemi boyunca kullanılan tüm malzemeler tek kullanımlık ve sterildir. Sizler için kullanılan malzemeler işlem sonunda kalite standartlarına uygun şekilde imha edilirler. Bu süreç içerisinde herhangi bir hastalık bulaşının olması söz konusu değildir.
`,

`Kan bağışı gerçekleştiğinde ilgili kanın üzerinde bağışçı bilgileri ile eşleşen barkodlar yer almaktadır. Bağışçımızın kaydı yapılırken bu barkod numarası üzerinden yapılmaktadır. Bağışlanan kan bileşenlerine ayrılmakta, ihtiyaç durumuna göre hastanelere iletilmektedir. Hastaneye çıkış yapılmak üzere kan bileşeninin barkodu okutulduğunda bağışçımızın son bağışında ibraz ettiği cep telefonu numarasına bağışladıklarını kanın bir ihtiyaç sahibi tarafından kullanılmak üzere yola çıktığı bildiren bir SMS gönderilir. Ayrıca bağışçılarımızın doğum günlerinde de SMS gönderilmektedir. Bunun yanında gezici ekiplerde kan bağışında bulunan bağışçılarımıza aynı bölgeye tekrar kampanya düzenlendiğinde bilgilendirme amacıyla SMS gönderilmektedir.
 Kampanya ve diğer gönderilen SMS’lerimizi almak istemeyen bağışçılarımızın başvuruları hangi kanal ile yaptıklarına bakılmaksızın isteği teyit edilerek Bilgi İşlem Birimi tarafından gerçekleştirilmektedir. 
`,

`Türk Kızılayı güvenli kanın düzenli kan bağışçı profili ile gerçekleşeceği düşünmektedir. Bu anlayışla kurumumuza gönüllü olarak düzenli kan bağışında bulunan bağışçılarımıza anı olarak kalması için madalya/ödül sistemi oluşturulmuştur. Türk Kızılayı’na Kan Bağışı Merkezi fark etmeksizin 10 kez bağış yapan bağışçımıza BRONZ MADALYA, 25 kez bağış yapan bağışçımıza GÜMÜŞ MADALYA, 35 kez bağış yapan bağışçımıza ALTIN MADALYA, 45 kez bağış yapan bağışçımıza PLAKET takdim edilmektedir. Madalya ve plaketler hak edilen yılın bir sonraki senesinde 14 Haziran Dünya Gönüllü Kan Bağışçıları Günü itibari ile Kan Bağışı Merkezlerimiz tarafından teslim edilmektedir.
`,

`Hepatit A enfeksiyonu geçirenler tedavi sürecini tamamladıktan sonra 12 ay boyunca kan bağışında bulunamaz. Hepatit B ve C geçirenler ise tedavilerini tamamlamış olsalar dahi hiçbir zaman kan bağışında bulunamazlar.
`
]


document.getElementById("faqSection").innerHTML = faqQuestionsArray[0];







//let faqAnswersArray=`


















    
        
    
      
      
      

  
  


  















