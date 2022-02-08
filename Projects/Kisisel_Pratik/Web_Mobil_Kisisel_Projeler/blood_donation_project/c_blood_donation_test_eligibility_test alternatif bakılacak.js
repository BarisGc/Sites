/* Function of donoreligibilitytestform */
const questionDetails = new Map();

let q1dValue = `1. soru, donörü diğer soruları cevaplarken daha sakin ve daha rahat kılmayı sağlar. Donör
  kan vereceği gün kendini iyi ve sağlıklı hissetmelidir. Bazı grip ve üst solunum yolu
  enfeksiyonları geçirilmekte ise hastalığın iyileşmesi ve semptomların tamamen geçmesi
  beklenmelidir.`;

let q2dValue = `2. soru, hastada daha önce mevcut ve kan bağışlamasına engl olacak bir problemi daha
  başından yakalamayı hedefler. Bu soruya “evet” cevabı veren bir donör kan bankası doktoru
  ile görüşecektir. Bu durumda doktor daha önce niçin böyle bir tavsiyede bulunulduğunu
  anlamak için donörle görüşmeli ve son kararını kendisi vermelidir.`;

let q3dValue = ` 3. soruya, “evet” cevabı verenlerden çok zorda kalınmamışsa kan alınmamalıdır. Çünkü bazı
  vazoganal reflekse bağlı senkop olayları bu yapıda kişilerde daha çok görülmektedir.`;

let q4dValue = `4. soru, donörün daha önceki kan bağışlarını sorgulayarak yeni bir kan bağışı için yeterli
  süre geçip geçmediğini anlamak için sorulmuştur. Genelde kan bağışından 8 hafta sonra
  yeniden kan bağışlanabilir. Ancak ülkemizdeki uygulama kan bağışları arasında 3 aylık süre
  olmasıdır. Trombosit, plazma, lökosit gibi kan ürünleri için özel hücre ayırıcı aletlerle
  (ferezis) yapılan kan bağışlarında donör ayrıca tam kan bağışlamak isterse son ferezis
  işleminden sonra en az 48 saat geçmesi beklenmelidir. Bu şekilde kan bağışından sonra
  donörün tekrar ferezis için bağışta bulunması için en az 8 hafta geçmelidir.`;

let q5dValue = `5, 8, 24 ve 25. sorular ilaç kullanımını sorgulamaktadır. Aspirin
  alanlarda trombosit fonksiyonları bozulduğu için trombosit elde edilmesi ve kullanılması
  düşünülüyorsa veya ferezis cihazları ile sadece trombosit elde edilerek kullanılması
  düşünülüyorsa 3 gün süre ile kan alınmaz. Ancak oral kontraseptif, hafif analjezikler, minör
  trankilizanlar, vitaminler, diyet yapanlar, hormon ilacı alanlardan kan alınabilir.
  Antibiyotikler, kemoterapotikler alanlar zaten bu ilaçların almalarını gerektiren hastalıkları
  nedeniyle kan veremezler.`;

let q6dValue = `6. soru bu amaçla sorulmuştur. Diş çekimi
  yapılanlardan olası bir baktermi nedeniyle 3 gün kan alınmaması öğütlenir. Aslında bazı
  yerlerde bunu önemli olmadığı ve donör kendini iyi hissederse daha erken de kan
  alınabileceği şeklinde uygulama yapılmaktadır.`;

let q7dValue = `7 ve 20. sorular bu amaçla sorulmuştur. Ölü virüs, bakteri, riketsiya ve
  toxoid aşıları olan donörler sağlıklı iseler kan verebilirler. Bu grup aşılar içinde difteri,
  boğmaca, tifo, tetanoz, kolera, hepatit B, tifüs, grip (ölü virüsle hazırlanan), Salk (polio) ve
  kuduz (Human diploid) aşıları vardır. Atenüe virüs aşıları olanlar 2 hafta kan vermemelidir.
  Bu grup aşılar içinde kızamık, kabakulak, grip (canlı virüs), Sabin (oral polio) ve çiçek
  aşıları vardır. Kızamıkçık aşısı olanlar 4 hafta kan veremez. Şüpheli bir hayvan tarafından
  ısırılma sonrası kuduz aşısı olanlar 12 ay kan veremezler. Intravenöz İmmünoglobin
  yapılanlar bu tedaviyi gerektiren altta yatan hastalık durumlarına göre değerlendirilmelidir.
  Bu kişiler gerekirse hiçbir zaman donör olamazlar.`;

let q8dValue = `5, 8, 24 ve 25. sorular ilaç kullanımını sorgulamaktadır. Aspirin
  alanlarda trombosit fonksiyonları bozulduğu için trombosit elde edilmesi ve kullanılması
  düşünülüyorsa veya ferezis cihazları ile sadece trombosit elde edilerek kullanılması
  düşünülüyorsa 3 gün süre ile kan alınmaz. Ancak oral kontraseptif, hafif analjezikler, minör
  trankilizanlar, vitaminler, diyet yapanlar, hormon ilacı alanlardan kan alınabilir.
  Antibiyotikler, kemoterapotikler alanlar zaten bu ilaçların almalarını gerektiren hastalıkları
  nedeniyle kan veremezler.`;

let q9dValue = `9. ve 11.sorular bu amaçla sorulmuştur. Bu sorulara “evet”
  cevabı verenler donör olarak kabul edilmemelidir. Ancak bu kişiler otolog kan donörü
  olmak isterlerse doktor kontrolünde ve doktorun izni ile kan verebilirler. 8. soru kişinin adı
  konmamış veya kendisinin bilmediği bir hastalığı olup olmadığını anlamak için sorulmuştur.
  Bu soruya “evet” cevabı verilmişse hastalığın ne olduğu aydınlatılmalıdır.`;

let q10dValue = `10. soru bu amaçla sorulmuştur. Epilepsi hastalarında
  kan bağışı yeni bir konvülsiyon atağına neden olabilir. Ancak konvülsif atakları ilaçla ya da
  ilaçsız olarak kontrolde olan donörlerden kan alınabilir. Bu durumun kararı doktor
  tarafından verilmelidir.`;

let q11dValue = `9. ve 11.sorular bu amaçla sorulmuştur. Bu sorulara “evet”
  cevabı verenler donör olarak kabul edilmemelidir. Ancak bu kişiler otolog kan donörü
  olmak isterlerse doktor kontrolünde ve doktorun izni ile kan verebilirler. 8. soru kişinin adı
  konmamış veya kendisinin bilmediği bir hastalığı olup olmadığını anlamak için sorulmuştur.
  Bu soruya “evet” cevabı verilmişse hastalığın ne olduğu aydınlatılmalıdır.`;

let q12dValue = `(12 ve 29. soruya “evet” cevabı verenler) hiçbir zaman kan donörü
  olarak kullanılmamalıdır.`;

let q13dValue = `13, 14, 15, 18. sorulara “evet” cevabı verenlerden de 12 ay süreyle kan
  alınmamalıdır.`;

let q14dValue = `14. ve 15.
  sorular bu amaçla sorulmuştur. Kendisine kan tranfüzyonu veya organ nakli yapılanlar 1 yıl
  süreyle kan veremez. Ameliyat olan fakat bu sırada ayrıca kan transfüzyonu yapılmayan
  kişiden iyileşip sağlığına kavuştuktan sonra kan alınabilir.`;

let q15dValue = `14. ve 15.
  sorular bu amaçla sorulmuştur. Kendisine kan tranfüzyonu veya organ nakli yapılanlar 1 yıl
  süreyle kan veremez. Ameliyat olan fakat bu sırada ayrıca kan transfüzyonu yapılmayan
  kişiden iyileşip sağlığına kavuştuktan sonra kan alınabilir.`;

let q16dValue = `16. soru bu amaçla
  sorulmuştur. Kanser, lösemi, lenfoma hastaları donör olamazlar. Kanser için istisnalar
  derinin bazal veya skuamöz hücreli kanseri, serviks’in in situ kanseri ve trioidin papiller
  kanseri olup da cerrahi ve medikal tedavi ile tam şifa bulanklardır. Kanama diyatezi olan
  hastalar hem venöz ponksiyon yerinden kaynaklanabilecekleri için hem de elde edilen
  plazma pıhtılaşma faktörlerinden fakir olup kullanıma uygun olmayacağı için donör
  olamazlar.`;

let q17dValue = `17. ve 26. sorular bu amaçla sorulmuştur. Sıtma geçiren ve tedavi olanlar
  iyileştikten sonra yeni bir tedavi görmeden en az 3 yıl sağlıklı olmaları halinde kan donörü
  olabilirler. Yine sıtmanın endemik olduğu yerlerden gelen göçmenler veya ziyaretçiler
  herhangi bir tedavi görmeden en az 3 yıl sağlıklı olmaları halinde kan donörü olabilirler.
  Sıtmanın endemik olduğu yerlere kısa süreyle gidenler döndükten sonra 6 ay herhangi bir
  tedavi görmeden en az 3 yıl sağlıklı olmaları halinde kan donörü olabilirler. Sıtmanın
  endemik olduğu yerlere kısa süreyle gidenler döndükten sonra 6 ay herhangi bir tedavi
  görmeden sağlıklı olurlarsa kan donörü olabilirler.`;

let q18dValue = `13, 14, 15, 18. sorulara “evet” cevabı verenlerden de 12 ay süreyle kan
  alınmamalıdır.`;

let q19dValue = `19, 27, 28, 29, 30. sorular bu amaçla sorulmuştur. Bilindiği gibi
  başta AIDS olmak üzere hepatitis B ve C, sifiliz gibi hastalıklar cinsel yolla bulaşabilir. Bu
  nedenle donör adaylarının cinsel yaşamlarını sorgulamak çok önemlidir. Öte yandan
  yukarıda sayılan hastalık etkenleri ile enfekte olan kişiler serokonversiyon olmadan önceki
  dönemlerde de hastalığı bulaştırabileceklerinden en iyi tedbir hastalık bulaşması için
  emniyetsiz ve riskli cinsel ilişkiye giren kişilerin donör olarak kabul edilmemesidir. Bu
  nedenle intravenöz uyuşturucu bağımlısı ya da faktör prepratları kullanan hemofili hastası
  birisi ile cinsel ilişkiye girenler ile para vererek ya da başkaları ile para karşılığı cinsel
  ilişkide olduğu bildiği bir kişi ile (bir defa bile olsa) cinsel ilişkide bulunanlardan 12 ay süre
  ile kan alınmamalıdır. Bir kişi kendisi para ve/veya uyuşturucu karşılığı cinsel ilişkide
  bulunuyorsa bu kişi hiçbir zaman donör olamaz. 1977 yılından sonra homoseksüel ilişkide
  bulunmuş (bir kere bile olsa) erkekler hiçbir zaman donör olamaz. Bu kişiler AIDS için
  yüksek risk grubundadırlar. Eğer bir kadın biseksüel bir erkek ile cinsel ilişkiye girmişse 12
  ay süre ile donör olamaz. AIDS olduğu bilinen ya da ARC hastaları ile cinsel ilişkiye
  girenler hiçbir zaman donör olamaz.`;

let q20dValue = `7 ve 20. sorular bu amaçla sorulmuştur. Ölü virüs, bakteri, riketsiya ve
  toxoid aşıları olan donörler sağlıklı iseler kan verebilirler. Bu grup aşılar içinde difteri,
  boğmaca, tifo, tetanoz, kolera, hepatit B, tifüs, grip (ölü virüsle hazırlanan), Salk (polio) ve
  kuduz (Human diploid) aşıları vardır. Atenüe virüs aşıları olanlar 2 hafta kan vermemelidir.
  Bu grup aşılar içinde kızamık, kabakulak, grip (canlı virüs), Sabin (oral polio) ve çiçek
  aşıları vardır. Kızamıkçık aşısı olanlar 4 hafta kan veremez. Şüpheli bir hayvan tarafından
  ısırılma sonrası kuduz aşısı olanlar 12 ay kan veremezler. Intravenöz İmmünoglobin
  yapılanlar bu tedaviyi gerektiren altta yatan hastalık durumlarına göre değerlendirilmelidir.
  Bu kişiler gerekirse hiçbir zaman donör olamazlar.`;

let q21dValue = `21. soru bu amaçla
  sorulmuştur. Sifiliz, gonore geçiren ve bu nedenle tedavi olanlardan tedavinin bitmesinden
  sonra sağlıklı kalmak koşuluyla ancak 12 ay sonra kan alınabilir. RPR testi pozitif olanlar
  donör olamazlar bu testin negatifleşmesinden 12 ay sonra kan verebilirler. Diğer cinsel
  yolla bulaşan hastalığı olanlarda en önemli risk bu kişilerde ayrıca HIV ve hepatotrop virüs
  enfeksiyonlarının sık oluşudur. Bu nedenle bu kişiler donör olarak kabul edilmezler.`;

let q22dValue = `22. soru bu amaçla sorulmuştur. İnsan kaynaklı
  büyüme hormonu alanlarda çok uzun süreli inkübasyonu olan etkenin kanı kontamine edip
  hastalık geçişine neden olabileceği düşünülerek bu ilaçla tedavi olanlardan hiçbir zaman kan
  alınmaz. Ancak rekombinant metotlarla üretilen büyüme hormonu alanlar için böyle bir
  tehlike yoktur ve bu kişiler donör olabilir.`;

let q23dValue = `23. soru bu amaçla sorulmuştur. Aktif tüberkülozu olanlardan kan
  alınmaz. Eskiden tüberküloz geçirmiş, halen ilaç kullanmayan ve sağlıklı olan donörlerden
  kan alınabilir. Bu şekilde ppd eri testi pozitif olan sağlıklı kişilerden de kan alınabilir.`;

let q24dValue = `5, 8, 24 ve 25. sorular ilaç kullanımını sorgulamaktadır. Aspirin
  alanlarda trombosit fonksiyonları bozulduğu için trombosit elde edilmesi ve kullanılması
  düşünülüyorsa veya ferezis cihazları ile sadece trombosit elde edilerek kullanılması
  düşünülüyorsa 3 gün süre ile kan alınmaz. Ancak oral kontraseptif, hafif analjezikler, minör
  trankilizanlar, vitaminler, diyet yapanlar, hormon ilacı alanlardan kan alınabilir.
  Antibiyotikler, kemoterapotikler alanlar zaten bu ilaçların almalarını gerektiren hastalıkları
  nedeniyle kan veremezler.`;

let q25dValue = `5, 8, 24 ve 25. sorular ilaç kullanımını sorgulamaktadır. Aspirin
  alanlarda trombosit fonksiyonları bozulduğu için trombosit elde edilmesi ve kullanılması
  düşünülüyorsa veya ferezis cihazları ile sadece trombosit elde edilerek kullanılması
  düşünülüyorsa 3 gün süre ile kan alınmaz. Ancak oral kontraseptif, hafif analjezikler, minör
  trankilizanlar, vitaminler, diyet yapanlar, hormon ilacı alanlardan kan alınabilir.
  Antibiyotikler, kemoterapotikler alanlar zaten bu ilaçların almalarını gerektiren hastalıkları
  nedeniyle kan veremezler.`;

let q26dValue = `17. ve 26. sorular bu amaçla sorulmuştur. Sıtma geçiren ve tedavi olanlar
  iyileştikten sonra yeni bir tedavi görmeden en az 3 yıl sağlıklı olmaları halinde kan donörü
  olabilirler. Yine sıtmanın endemik olduğu yerlerden gelen göçmenler veya ziyaretçiler
  herhangi bir tedavi görmeden en az 3 yıl sağlıklı olmaları halinde kan donörü olabilirler.
  Sıtmanın endemik olduğu yerlere kısa süreyle gidenler döndükten sonra 6 ay herhangi bir
  tedavi görmeden en az 3 yıl sağlıklı olmaları halinde kan donörü olabilirler. Sıtmanın
  endemik olduğu yerlere kısa süreyle gidenler döndükten sonra 6 ay herhangi bir tedavi
  görmeden sağlıklı olurlarsa kan donörü olabilirler.`;

let q27dValue = `19, 27, 28, 29, 30. sorular bu amaçla sorulmuştur. Bilindiği gibi
  başta AIDS olmak üzere hepatitis B ve C, sifiliz gibi hastalıklar cinsel yolla bulaşabilir. Bu
  nedenle donör adaylarının cinsel yaşamlarını sorgulamak çok önemlidir. Öte yandan
  yukarıda sayılan hastalık etkenleri ile enfekte olan kişiler serokonversiyon olmadan önceki
  dönemlerde de hastalığı bulaştırabileceklerinden en iyi tedbir hastalık bulaşması için
  emniyetsiz ve riskli cinsel ilişkiye giren kişilerin donör olarak kabul edilmemesidir. Bu
  nedenle intravenöz uyuşturucu bağımlısı ya da faktör prepratları kullanan hemofili hastası
  birisi ile cinsel ilişkiye girenler ile para vererek ya da başkaları ile para karşılığı cinsel
  ilişkide olduğu bildiği bir kişi ile (bir defa bile olsa) cinsel ilişkide bulunanlardan 12 ay süre
  ile kan alınmamalıdır. Bir kişi kendisi para ve/veya uyuşturucu karşılığı cinsel ilişkide
  bulunuyorsa bu kişi hiçbir zaman donör olamaz. 1977 yılından sonra homoseksüel ilişkide
  bulunmuş (bir kere bile olsa) erkekler hiçbir zaman donör olamaz. Bu kişiler AIDS için
  yüksek risk grubundadırlar. Eğer bir kadın biseksüel bir erkek ile cinsel ilişkiye girmişse 12
  ay süre ile donör olamaz. AIDS olduğu bilinen ya da ARC hastaları ile cinsel ilişkiye
  girenler hiçbir zaman donör olamaz.`;

let q28dValue = `19, 27, 28, 29, 30. sorular bu amaçla sorulmuştur. Bilindiği gibi
  başta AIDS olmak üzere hepatitis B ve C, sifiliz gibi hastalıklar cinsel yolla bulaşabilir. Bu
  nedenle donör adaylarının cinsel yaşamlarını sorgulamak çok önemlidir. Öte yandan
  yukarıda sayılan hastalık etkenleri ile enfekte olan kişiler serokonversiyon olmadan önceki
  dönemlerde de hastalığı bulaştırabileceklerinden en iyi tedbir hastalık bulaşması için
  emniyetsiz ve riskli cinsel ilişkiye giren kişilerin donör olarak kabul edilmemesidir. Bu
  nedenle intravenöz uyuşturucu bağımlısı ya da faktör prepratları kullanan hemofili hastası
  birisi ile cinsel ilişkiye girenler ile para vererek ya da başkaları ile para karşılığı cinsel
  ilişkide olduğu bildiği bir kişi ile (bir defa bile olsa) cinsel ilişkide bulunanlardan 12 ay süre
  ile kan alınmamalıdır. Bir kişi kendisi para ve/veya uyuşturucu karşılığı cinsel ilişkide
  bulunuyorsa bu kişi hiçbir zaman donör olamaz. 1977 yılından sonra homoseksüel ilişkide
  bulunmuş (bir kere bile olsa) erkekler hiçbir zaman donör olamaz. Bu kişiler AIDS için
  yüksek risk grubundadırlar. Eğer bir kadın biseksüel bir erkek ile cinsel ilişkiye girmişse 12
  ay süre ile donör olamaz. AIDS olduğu bilinen ya da ARC hastaları ile cinsel ilişkiye
  girenler hiçbir zaman donör olamaz.`;

let q29dValue = `19, 27, 28, 29, 30. sorular bu amaçla sorulmuştur. Bilindiği gibi
  başta AIDS olmak üzere hepatitis B ve C, sifiliz gibi hastalıklar cinsel yolla bulaşabilir. Bu
  nedenle donör adaylarının cinsel yaşamlarını sorgulamak çok önemlidir. Öte yandan
  yukarıda sayılan hastalık etkenleri ile enfekte olan kişiler serokonversiyon olmadan önceki
  dönemlerde de hastalığı bulaştırabileceklerinden en iyi tedbir hastalık bulaşması için
  emniyetsiz ve riskli cinsel ilişkiye giren kişilerin donör olarak kabul edilmemesidir. Bu
  nedenle intravenöz uyuşturucu bağımlısı ya da faktör prepratları kullanan hemofili hastası
  birisi ile cinsel ilişkiye girenler ile para vererek ya da başkaları ile para karşılığı cinsel
  ilişkide olduğu bildiği bir kişi ile (bir defa bile olsa) cinsel ilişkide bulunanlardan 12 ay süre
  ile kan alınmamalıdır. Bir kişi kendisi para ve/veya uyuşturucu karşılığı cinsel ilişkide
  bulunuyorsa bu kişi hiçbir zaman donör olamaz. 1977 yılından sonra homoseksüel ilişkide
  bulunmuş (bir kere bile olsa) erkekler hiçbir zaman donör olamaz. Bu kişiler AIDS için
  yüksek risk grubundadırlar. Eğer bir kadın biseksüel bir erkek ile cinsel ilişkiye girmişse 12
  ay süre ile donör olamaz. AIDS olduğu bilinen ya da ARC hastaları ile cinsel ilişkiye
  girenler hiçbir zaman donör olamaz.`;

let q30dValue = `19, 27, 28, 29, 30. sorular bu amaçla sorulmuştur. Bilindiği gibi
  başta AIDS olmak üzere hepatitis B ve C, sifiliz gibi hastalıklar cinsel yolla bulaşabilir. Bu
  nedenle donör adaylarının cinsel yaşamlarını sorgulamak çok önemlidir. Öte yandan
  yukarıda sayılan hastalık etkenleri ile enfekte olan kişiler serokonversiyon olmadan önceki
  dönemlerde de hastalığı bulaştırabileceklerinden en iyi tedbir hastalık bulaşması için
  emniyetsiz ve riskli cinsel ilişkiye giren kişilerin donör olarak kabul edilmemesidir. Bu
  nedenle intravenöz uyuşturucu bağımlısı ya da faktör prepratları kullanan hemofili hastası
  birisi ile cinsel ilişkiye girenler ile para vererek ya da başkaları ile para karşılığı cinsel
  ilişkide olduğu bildiği bir kişi ile (bir defa bile olsa) cinsel ilişkide bulunanlardan 12 ay süre
  ile kan alınmamalıdır. Bir kişi kendisi para ve/veya uyuşturucu karşılığı cinsel ilişkide
  bulunuyorsa bu kişi hiçbir zaman donör olamaz. 1977 yılından sonra homoseksüel ilişkide
  bulunmuş (bir kere bile olsa) erkekler hiçbir zaman donör olamaz. Bu kişiler AIDS için
  yüksek risk grubundadırlar. Eğer bir kadın biseksüel bir erkek ile cinsel ilişkiye girmişse 12
  ay süre ile donör olamaz. AIDS olduğu bilinen ya da ARC hastaları ile cinsel ilişkiye
  girenler hiçbir zaman donör olamaz.`;

let q31dValue = `31. soru bu amaçla
  sorulmuştur. Diğer sorular sonucu herhangi bir risk faktörü taşımayan ve sadece serolojik
  testlerini ve/veya sağlık durumunu merak ettiği için kan bağışında bulunmak isteyenler
  olabilir. Bu durum aslında kişilerin kan bağışında bulunmalarını özendirici bir durumdur. Bu
  kişiler kan bağışı karşılığında ücretsiz sağlık kontrolünden geçmiş olacaklardır. Bu nedenle
  çıkacak sonuçların gizliliği ve kişinin sonuçlar hakkında haberdar edilmesine özen
  gösterilmesi gerekir. Sadece bu soruya “evet” cevabı verilmesi donörün reddini gerektirmez.`;

let q32dValue = `32. soru ile tarif edilen durum ARC belirti ve bulgularıdır.
  Bu soruya “evet” cevabı verenler hiçbir zaman donör olamazlar.`;

let q33dValue = `33. soru bu amaçla sorulmuştur. Gebelik süresince ve
  normal doğumdan sonra 6 hafta süre ile kan alınmamalıdır. Otolog kan donasyonu gerekirse
  gerekli izin doktor tarafından verilmelidir. Kendisine kan verilmedikçe düşükler veya
  (uygun koşullarda yapılmış) küretaj kan donasyonuna engel değildir.`;




questionDetails.set("q1", q1dValue);
questionDetails.set("q2", q2dValue);
questionDetails.set("q3", q3dValue);
questionDetails.set("q4", q4dValue);
questionDetails.set("q5", q5dValue);
questionDetails.set("q6", q6dValue);
questionDetails.set("q7", q7dValue);
questionDetails.set("q8", q8dValue);
questionDetails.set("q9", q9dValue);
questionDetails.set("q10", q10dValue);
questionDetails.set("q11", q11dValue);
questionDetails.set("q12", q12dValue);
questionDetails.set("q13", q13dValue);
questionDetails.set("q14", q14dValue);
questionDetails.set("q15", q15dValue);
questionDetails.set("q16", q16dValue);
questionDetails.set("q17", q17dValue);
questionDetails.set("q18", q18dValue);
questionDetails.set("q19", q19dValue);
questionDetails.set("q20", q20dValue);
questionDetails.set("q21", q21dValue);
questionDetails.set("q22", q22dValue);
questionDetails.set("q23", q23dValue);
questionDetails.set("q24", q24dValue);
questionDetails.set("q25", q25dValue);
questionDetails.set("q26", q26dValue);
questionDetails.set("q27", q27dValue);
questionDetails.set("q28", q28dValue);
questionDetails.set("q29", q29dValue);
questionDetails.set("q30", q30dValue);
questionDetails.set("q31", q31dValue);
questionDetails.set("q32", q32dValue);
questionDetails.set("q33", q33dValue);




const questions = {
  q1: "1. Do you feel  healthy and well today?",
  q2: "2. Are you currently taking an antibiotic?",
  q3: "3. In the past 36 hours, have you taken aspirin or anything that has aspirin in it?",
  q4: "4. In the past 8 weeks, have you donated blood, platelets or plasma?",
  q5: `5. In the past 8 weeks, have you had any vaccinations or other shots?`,
  q6: "6. In the past 8 weeks, have you had contact with someone who had a smallpox vaccination?",
  q7: "7. In the past 16 weeks, have you donated a double unit of red cells using an apheresis  machine?",
  q8: "8. In the past 12 months, have you had a blood transfusion?",
  q9: "9. In the past 12 months, have you had a transplant such as organ, tissue, or bone marrow?",
  q10: "10. In the past 12 months, have you had a contact with someone else’s blood?",
  q11: "11. Have you ever had sexual contact with anyone who has HIV/AIDS ?",
  q12: "12. The past 12 months, have you had sexual contact with a prostitute or anyone else who takes\n money or drugs or other payment for sex?",
  q13: "13. In the past 12 months, have you had sexual contact with anyone who has ever used needles\n to take drugs or steroids, or anything Not prescribed by their doctor?",
  q14: "14. In the past 12 months, have you had sexual contact with a person who has hepatitis?",
  q15: "15. In the past 12 months, have you had a tattoo?",
  q16: "16. In the past 12 months have you had ear or body piercing?",
  q17: "17. In the past three years, have you been outside Turkey?",
  q18: "18. Have you ever had a positive test for the HIV/AIDS virus?",
  q19: "19. Have you ever used needles to take drugs, steroids, or anything Not prescribed by your doctor?",
  q20: "20. Have you ever had any type of cancer, including leukemia?",
  q21: "21. Have you ever been in Africa?",
  q22: "22. Have you ever had a bleeding condition or a blood disease?",
  q23: "23. Have you ever had any problems with your heart or lungs?",
  q24: "24. Have you ever had psoriasis ? Have you used drugs for this disease?",
  q25: "25. Do you take oral medication for acne treatment?",
  q26: "26. Have you anemia disease?",
  q27: "27. Do you have the cold or the flu?",
  q28: "28. Did you have  any  relatives who had Creutzfeldt-Jakob disease?",
  q29: "29. Have you ever had malaria?",
  q30: "30. Have you ever had sexual contact with same gender?",
  q31: "31. Are you pregnant now?",
  q32: "32. In the past 12 months, have you had a graft such as bone or skin?"
};

const shortRadioAnswers = {
  a1: "Yes",
  a2: "No"
}

const extraQuestions = {

  _3extraq: "How much dose aspirin did you take ?",
  _25extraq: "When did you start to take ?",
  _28extraq: "Degree of your diseased relative ?"
};

const extraRadioAnswers = {
  _3extraans1: "-75 mg",
  _3extraans2: "+75 mg",
  _25extraans1: "- 15 days",
  _25extraans2: "+ 15 days",
  _28extraqans1: "First-degree or second-degree relative",
  _28extraqans2: "Third-degree relative"
}

/* Html in Js: Donor Eligibility Test Form */



let text = `<form id = "form">
<div class="form-control">
<label>
<h2>Select The Answers That Best Describes Your <b><i>SITUATION</i></b></h2>
</label>`;

let counter1 = 1;
let counter2 = 1001;
let counter3 = 10001;
for (var key of Object.keys(questions)) {
  for (let x of questionDetails.keys()) {
    if (x == key) {

      text += `<label><b> ${questions[key]}</b></label>
    <button type="button"  id="questionInfoimg" value="${key}" onClick="infoFunc(this.value)" <img src="question-mark.svg" alt="Info_Mark"></button>

    <label for=${counter1}><input type="radio" id=${counter1} name=${counter3} value="Yes">
     Yes</input></label>

     <label for=${counter2}><input type="radio" id=${counter2} name=${counter3} value="No">
     No</input></label>
     `;
      counter1++;
      counter2++;
      counter3++;

    }
  }

}

text += `</div>
<button type="submit" value="submit">Submit</button>		
</form>`;


document.getElementById("donoreligibilitytestform").innerHTML = text;



/* Function: Shrink the header when the user starts to scroll the page */

function scrollFunctionTopPos() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollFunction_40_1000();
    document.getElementById("questioninfoDiv").style.top = "11vw";

  } else {
    scrollFunction_0_39();
    document.getElementById("questioninfoDiv").style.top = "25vw";
  }
}

function scrollFunction_40_1000() {

  document.getElementById("banner").style.height = "10vw";
  document.getElementById("banner-title").style.fontSize = "1.5vw";
  document.getElementById("banner-desc").style.fontSize = "1vw";
  document.getElementById("btn-signup").style.fontSize = "0.8vw";
}

function scrollFunction_0_39() {
  document.getElementById("banner").style.height = "20vw";
  document.getElementById("banner-title").style.fontSize = "3vw";
  document.getElementById("banner-desc").style.fontSize = "2vw";
  document.getElementById("btn-signup").style.fontSize = "1.6vw";
}


/* Function: "information popup" */

function infoFunc(clicked_value) {
  let infoText = "";
  let control = "";

  for (let qvalue of questionDetails.keys()) {

    if (clicked_value == qvalue) {
      let y = questionDetails.get(qvalue);
      infoText = `<p>${y}</p>`;
      document.getElementById("questioninfoDiv").innerHTML = infoText;
    }
  }

  popupcontrolFunc(clicked_value, control);
}

/* Functions: " control of information popup" */

function popupcontrolFunc(clicked_value, control) {

  if (control == clicked_value) {
    popupTrueOrFalse();

  }

  else {
    popupTrue();
    control = clicked_value;
  }
}

function popupTrueOrFalse() {
  let popup = document.getElementById("questioninfoDiv");
  popup.classList.toggle("show");
}

function popupTrue() {
  let popup = document.getElementById("questioninfoDiv");
  popup.classList.toggle("show", true);
}



























