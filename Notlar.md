# **Notlar**

## ***Genel Notlar***
- Image yolumuzu yazarken bir üst dizine nasıl çıkarız? ../ kullanarak
## ***Kullanışlı Siteler***
- [lorem picsum sitesi kullanılabilir.](https://picsum.photos/)
- https://htmlreference.io/
- https://www.cssdesignawards.com/
- https://css-tricks.com/quick-reminder-about-file-paths/
- https://960.gs/
- https://github.com/github/gitignore
- https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-popovers.php
- https://cdnjs.com/libraries/font-awesome
- http://www.cupcakeipsum.com/
- https://www.blindtextgenerator.com/lorem-ipsum
- https://www.pixelconverter.com/vw-to-pixel-px-converter/
- https://code.visualstudio.com/docs/getstarted/keybindings
- https://w3bits.com/labs/css-image-hover-zoom/
- https://download-directory.github.io/
- https://www.bigocheatsheet.com/
- https://github.com/gkandemi/docker



## ***Semboller***
- alt+124 ---- | ----

## ***Sık Kullanılan Kısayollar***
- !+enter veya html:5 ---- html blok emmet
- "ctrl+k+c" ya da ctrl+ö ---- comment atar
- Ctrl+Enter ---- İmleç Alt satıra geçer
- &nbsp ---- boşluk atar
- alt+96 ---- backtick ` veya altgr + ,
- ctrl+d ---- add selection to next find match
- Ctrl+K Ctrl+D ---- move last selection to next find match
- Ctrl+U ---- undo last cursor operation
- Ctrl+Shift+L ---- Select all occurrences of current selection
- ctrl + f2 ---- Select all occurrences of current word
- Alt+PageDown ---- scroll page down
- ctrl+end ---- end of file
- Fold (collapse) all regions	Ctrl+K Ctrl+0 ---- Unfold (uncollapse) all regions	Ctrl+K Ctrl+J ---- Fold (collapse) all subregions	Ctrl+K Ctrl+ğ ---- Unfold (uncollapse) all subregions	Ctrl+K Ctrl+ü 
-  CTRL + PAGE_DN to switch to the next tab
-  Toggle Block Comment	Shift+Alt+A	---- Toggle Line Comment	Ctrl+ö
-  Toggle Find Whole Word	Alt+W ---- Toggle Find Case Sensitive	Alt+C
-  format document ---- alt+shift+f


## ***Emmet***

- " > " ifadesi kardeş element oluşturur. ul>li vb.
- " ^ " ifadesi kardeş kalmayınca parent dışına çıkmak için kullanılır. ul>li^p vb.
- " * " birden fazla oluşturma. ul>li*3 vb. veya " + " kullanılır. ul>li+li+li vb.
- tag eklerken class özelliği vermek için ise ul.class1>li.class2*3 vb. yazılıp tab'a basılabilir
-  bir id özelliği eklemek için ise # kullanılır. ul#id1>li#id2 vb.
-  otomatik artış sağlayan değerler için " $ " kullanılır. ul>li#idNo$*3 vb.
- tagların içine text yazılması için p{text bla bla} yeterli
- emmet kullanırken tamamlama kayboluyorsa ctrl+spacebar bas
- rfce react






















# **Püf Noktalar**

# **Genel**

- Sayfaların başında açıklama blokları oluştur ki sayfa içinde kolay arama gerçekleşebilsin.
- Semantic(Anlamlandırılmış) HTML Etiketleri Kullanımı önemli.
- sabit topbar altında kalan içeriği gösterebilmek için padding veya margin kullanabilirsin.
- Arayüzü kodlamaya başlamadan önce layout çıkar ve bu layoutu belirlediğin çözünürlüğe göre önce bir hazırla, daha sonra içeriklere geç! responsive için ise önce çalışmayı belli bir çözünürlükte tamamla yani bu sırada kütüphane kullanıyorsan ölçü ve birimlerle kütüphaneyi ezme, çalışmayı tamamla sonra media rule ile ince çalışma yaparak responsive hale getir.
- Şimdilik responsive breakpointsleri bootstrap 5'e göre belirle ve media rule oluştur,sonra tekrar değerlendirirsin bu yaklaşım doğru mu diye...
- bootstrap 5, navbar brand "a" tagında position problemi olursa a tagına d-flex eklemeyi dene?
- absolute bir şeyleri ortalayacağın zaman transform %50 de kullan!
- wireframe: tasarım aşaması için...
  
# **Algorithm**
- For example, searching for an element in a sorted list of length n is O(log(n)). Searching for the element in n different sorted lists, each of length n is O(n*log(n)).

# **CSS**
- min-height:100vh; align center yazılmaz ise tüm ekran boyunu dikkate alıyor çünkü default değeri strech oluyor

# **Bootstrap**
- Bootstrap'in tipografik özeliklerini kullanmak için <body> tag'ine $font-family-base, $font-size-base ve $line-height-base niteliklerini uygulamanız gerekmektedir.
- With auto margins, flex items can be centered, spaced away or packed into sub-groups. Unlike justify-content, which is applied to the flex container, auto margins go on flex items.
  They work by consuming all free space in the specified direction.
- :last-of-type ile parenti flex kendi de flex item olan olan son itemi  mx-auto yapabilirsin.
- butondaki svg elemanın rengini değiştirebilmek için "fill" kullanabilirsin.

# **Javascript**
- parametre: fonksiyon yazımında kullanılan değerler iken arguments fonksiyon çalıştırılırken kullanılan değerlerdir.
- Object.keys() key eğer sayı ise order şeklinde çıktı veriyor ama garantisi yok, bu sebeple key string olursa kullanabilirsin. (BD)
- You are trying to use a switch statement like a series of if and else if statements. A switch statement does not work that way.
- let = readLine(); ile değişkeni input al
- fat arrow'da köşeli parantez varsa return gerekir.
- Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.
- foreach vs array.map
  So, forEach doesn’t actually return anything. It just calls the function for each array element and then it’s done. So whatever you return within that called function is simply discarded.

  On the other hand, map will similarly call the function for each array element but instead of discarding its return value, it will capture it and build a new array of those return values.
- . , dönüşümü için event.target.value.split(',').join('.'); kullanılabilir.
- es6 ile artık "const arr2 = [...arr1,arr3]" şeklinde yeni arraye kopyalama yapılabilir.
- Spread element (it's not an operator) works only with objects that are iterable. Array.from() works also on array-like objects 
  if you just want to convert something to array, I think it's better to use Array.from() because it's more readable. Spread elements are useful for example when you want to concatenate multiple arrays
- string.lenght karakter sayısını verir
- " const activeUsers = users.filter(user => user.isActive === true); " === true yazmaya gerek yok, zaten obje içindeki user.isActive hepsi false değilse sadece user.isActive yazmak yeterli çünkü hepsi true döner, illa user.isActive === true yazmaya gerek yok.
- console.log(object) inherited via prototypeleri göstermeyebiliyor çünkü The only way to get the objects inherited via prototype chain is by using a for..in loop. It's working all right. However, the object {x:3} is the prototype obj. When Node prints out the object, it only prints its own properties. x is a prototype property.
- class Insan {
    constructor(isim, yas) {
        this.isim = isim;
        this.yas = yas;
    }
}
//veya
function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}
//console.log
const ali = new Insan("ali",21);
console.log(ali.yas);
- var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: function (yasHesapla) {
    console.log( `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${yasHesapla} yaşındayım`,
    )}}
birey.yasHesapla = function () {
	return 2022 - this.dogumYili;
};
birey.merhabaDe(birey.yasHesapla());
- object'e ulaşım örneği >>>>> person["likes sea"] = true;  
- try {
   
    let user = JSON.parse(json); 
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }
   
    console.log( user.name );
   
  } catch(e) {
    console.log( "JSON Error: " + e ); 
  }
- const pattern = /e/;
pattern.test("textwall"); searches a string for the character "e":
veya 
/e/.test("textwall"); searches a string for the character "e":
- /e/.exec
-   let r = readLine();  console.log(PI*r*r);
-   There is no way to stop or break or continue a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
    Solution?
Just use a normal for loop. Nobody would laugh at you. or The Fun Way: use every()
- JavaScript Map class is another implementation of Hash Table
- map[key] isn’t the right way to use a Map
Although map[key] also works, e.g. we can set map[key] = 2, this is treating map as a plain JavaScript object, so it implies all corresponding limitations (only string/symbol keys and so on).
So we should use map methods: set, get and so on.
- 

# **Node.Js**
- node
- console.clear()
- .load dosyaismi.js
- mongoose: object document method > nesne dökuman modelleyici > veri tabanları için şablon
- postman, önyüz hazır olmadığında simülasyon için kullanılabiliyor, db ile alışveriş yapılabiliyor.
- problem1: kayıt ekleme problemi yaşarsan mongoDB indexleri kontrol et sonra refresh yap
- Artık Middleware kavramına aşinayız. Özetle istek - cevap (request - response) döngüsü bir ara yazılımlar(middleware) bütünüdür. Bazı durumlarda projemize özel kendi ara yazılımlarımızı oluşturmak isteriz.

# **SQL**
- GROUP BY kullanıyorsan, SELECT VE GROUP BY kısmında aynı sütun olmalı, ayrıca SELECT kısmında sadece bu aynı sütun ve bir de aggrate func olabiliyor.
- UPDATE employee
SET email = 'textwall@yandex.com', birthday = '2021.12.18'
WHERE name = 'Gaby'
RETURNING *;
- SELECT DISTINCT CITY FROM STATION
WHERE ID % 2 = 0;
-pgadmin comment toggle: ctrl ö / ctrl shift ö
-SELECT payment.customer_id, count(payment.amount),customer.first_name || ' ' || customer.last_name AS "İsim Soyİsim" FROM payment
INNER JOIN customer ON customer.customer_id = payment.customer_id
GROUP BY payment.customer_id, customer.first_name, customer.last_name
HAVING count(payment.amount) < (
SELECT avg(amount_adedi) from
(
SELECT count(payment.amount) AS amount_adedi from payment
	GROUP BY payment.customer_id
)
AS ortalama
)
ORDER BY count(payment.amount) DESC;
- PostgreSQL'de LIKE'a benzer şekilde "SIMILAR TO" diye bir keyword daha var, regexp patternlarını yakalıyormuş o da.


# **React**
- 1) npm init 2) package.json dosyası önemli, scrip içine gerekli şeyleri girince "npm start" ile çalıştırabiliyoruz, "node index" yazmaya gerek kalmıyor. 3) npmjs'den slugify indirdim, direk npm i slugify yazınca yükleniyor ilgili kütüphane. 4) node_modules yanlışlıkla silsem bir şey olmaz, npm install yazarsam, bağlılıklar içinden bulup yüklüyor.

-module yüklemek için artık "require" gerekli değil. Package.json içine "type":"module" yaz, index.js dosyana "import slugify from "slugify"; yaz.
- module export yaparken "export default" kullandıysan(ki gerek yok gibi görünüyor, sonra sorgula) import ederkende "import func1, {func2, func3} şeklinde yazman lazım. default olanlarda func ismi uymasa da oluyor.
- import fetch from "node-fetch";
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log("Users Yüklendi", users);

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((data) => data.json())
            .then((posts) => {
                console.log("post 1yüklendi", posts);

                fetch('https://jsonplaceholder.typicode.com/posts/2')
                    .then((data) => data.json())
                    .then((data) => console.log("post 2 yüklendi", data));
            });
    });
-----------------------------------------------------------------------------------
async function getData() {
    const users = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
        ).json();

    const post1 = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/1')
        ).json();

    const post2 = await (
        await fetch('https://jsonplaceholder.typicode.com/posts/2')
        ).json();
    console.log("users",users)
    console.log("post1",post1)
    console.log("post2",post2)
}
getData();

- //anonim func
  (async () => {
 //burada content olacak
})();

- const sayHi = (cb) => {
  cb();
  };

  sayHi(() => {
    console.log("hello);
  });

- const {data : users}  şeklinde dataya atama yapılabiliyor.
- const getUsers = () => {
    return new Promise(async (resolve, reject)=> {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users');
        resolve(data);
        reject("bir sorun oluştu")
    });
};
const getPost = (post_id) => {
    return new Promise(async (resolve, reject)=> {
        const {data} = await axios('https://jsonplaceholder.typicode.com/posts/' + post_id);
        // resolve(data);
        reject("bir sorun daha oluştu")
    });
};
// (async () => {
//     try {
//     const users = await getUsers();
//     const post = await getPost(1);
//     console.log(users)
//     console.log(post)
// } catch (e) {
//     console.log(e)
// }
//     })()
// veya aşağıdaki kod bloku
Promise.all([getUsers(), getPost(1)])
.then(console.log)
.catch(console.log);

- const result = users.map(element => ({...element, surname:'baris'})) 
//veya foreach ile her seferinde surname ekle
users.forEach(function (element) {
  element.surname = "baris";
});

- import axios from "axios";
const getData = (user_id) => {
    return new Promise(async (resolve, reject)=> {
        if (Number(user_id)) { //ok
            //ok
            const {data : data1} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`); // OK
            const {data : data2} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
        resolve([data1, data2]);
        }
        else {
        reject("user_id number değil !") //ok
        }
    });
};
async function processData(user_id) { //ok
    try {
        const [userData, postData] = await getData(user_id);
        userData.PostKEY = postData
        console.log(userData)
    } catch (error) {
    console.log(error)
}}
export default processData; //ok

- Bu yüzden bilgisayarınızda Node.js kurulu olsa bile bir react projesi oluşturmadan önce terminalde npm install -g npm@latest komutunu çalıştırarak en güncel versiyonda olduğundan emin olabilirsiniz.

- npx create-react-app ilk-uygulama         //Burada kullandığımız npx npm 5.2+ ile gelen bir paket çalıştırma aracıdır.
- cd ilk-uygulama
  npm run start
-  <Header>asdasdads</Header>
    veya innertext yok ise
   <Header />

- <h1>
      { isLoggedIn && `benim adım ${name} ve ${surname}`}
      </h1>
      {!isLoggedIn && `giriş yapmadınız`}

  // veya

-props gönderirken paremetreyi {} gönder yani age= {15} veya boolean = {true} gibi... stringte gerek yok.

- jsx loop içinde en dıştaki div'e key vermek gerekiyor performans için. 
  <div key={index}> 
            {index} {element} 
        </div>
- shape >>>> object olarak gönderdiğimiz propslar için kullanılabilecek bir PropTypes kontrolü

-  const hello = (name) => {
    console.log("hello" + name)}; 
 const topla = (a,b) => a+b;
 let text = 'text'
 export {hello, topla, text}

- npx create-react-app . yazarsak mevcut klasörün içine yükleme yapılır.
- pressing enter on a textbox will most likey trigger a form submit (if inside a form)
- Put the console.log in an useEffect hook without dependencies and you'll see it isn't actually rendering twice.
- javascripte object objecye veya array arraye denk mi diye sorgularsan false çıkar çünkü memory'deki referansları farklıdır.
- state değişirse component tekrar baştan çalışıyor, return jsx kısmının üstü de öyle, altı da öyle tekrar işleniyor.
- child'dan parenta akış olmuyor, react olayı tek yön yani parent'tan çocuğa veri akışıymış.
- xxx is not a function hatası ise problar arası geçişte prop gönderimi unutulmuş olabilir.
- <> is the shorthand tag for React.Fragment which allows us to group a list of elements without wrapping them in a new node. The only difference between them is that the shorthand version does not support the key attribute.
- todolist: setItems([...items, {name:text}]) yada setItems((prev)=>[...prev, {name:text}])

# ** React-TestingWithJest **
- // React Testing Library provides you with several methods to find an element by specific attributes in addition to the getByText() method above:

// getByText(): find the element by its textContent value
// getByRole(): by its role attribute value
// getByLabelText(): by its label attribute value
// getByPlaceholderText(): by its placeholder attribute value
// getByAltText(): by its alt attribute value
// getByDisplayValue(): by its value attribute, usually for <input> elements
// getByTitle(): by its title attribute value

// And when these methods are not enough, you can use the getByTestId() method, which allows you to find an element by its data-testid attribute:
// But since selecting elements using data-testid attributes doesn't resemble how a real user would use your application, the documentation recommends you use it only as the last resort when all other methods fail to find your element. Generally, finding by Text, Role, or Label should cover most cases.
- 

# **Docker**
- docker images -  docker run -it ubuntu -  docker ps veya docker container ls -  docker ps --all veya docker container ls -a - docker container rm $(docker container ls -aq) hepsini siler
- "docker run redis:5" " docker run -d redis (detach mod yani arka planda çalışsın) " " docker attach 'id'(detach olanı attach yapar öne getirir"
- "docker container logs 'id' "docker run -it gkandemir/interactive-terminal-app (interaktif input output için -it kullanıldı"
- "docker run -p dış_port:içport mongo (port mapping olur)" "docker run -v /opt/data:/data/db mongo (docker run stateless dolayısıyla verileri tutmak için kullanılır. volume mapping)" "docker inspect 'id'"   
- docker run --name mysql-server -p 3306:3306 -e MYSQL_ROOT_PASSOWRD=TEST123 -d mysql (bağlanılacak container)
- docker run --name pmyadmin -p 8000:80 link mysql-server:db -d phpmyadmin/phpmyadmin (bağlanan container)









































































































































# **Yapılan basit ama Önemli Hatalar**

##### Vs Code
- ctrl+f işlevi case sensitive imiş.


##### Css
- .css eklerken, taşırken vb. durumlarda dosya yoluna dikkat et
- They all have their uses for different use cases. I don't use just one measurement type. There are lots out there including some you missed (I often use ch, I know some people use ex instead of em). I generally use these:

px for border widths, box shadows, etc.

em for font sizes

vw/vh is sometimes used for layout stuff

rem for margins and padding

ch I tend to use for things like paragraph text widths or sizing containers that will hold monospace fonts.
- image ve altındaki yazıyı align ederken aradaki boşluğu azaltmak için m ve p yetersiz kalırsa, line-height de kullanabilirsin.
- #TodoListRows li.CustomUnChecked:nth-child(even) 
- , it's specifically part of the CSS spec that inline blocks within a link don't get an underline.




##### FlexBox 
- Flex parentdan hemen sonra flex child gelmeli! parent ile child arasına boş div bile girse çalışmaz!
- Flex itemlerin pozisyonlarını değiştirebilmek için parentın width ve height auto değil, belli bir değer olması lazım ! Mesela row'da bir parent ve altındaki div col 3 de bir childtır. Row'a height verilmeli width ise zaten boostrap 100% veriyor
- Flex, row/column direction durumlarına göre justify/align ters çalışır.


##### Block/Inlıne
- inline olursa, mesela labellar, justify/align ile pozisyon değiştiremezsin.

##### PhotoEdit
- imagelerin önce canvaslarını container ölçüsüne göre ayarla, daha sonra imagelerin image sizelerını kaplamasını istediğin alan kadar ayarla

##### js
- özel bir durum yok ise counterları döngünün en altına koy, araya değil!
- ternary operator içinde return olmaz ama sonucunu return edebilirsin, örnek: return condition? returnValue1 : returnValue2;
- unreachable code after return statement
- object oluştururken key olarak variable yazarken önce boş object oluştur let ObjectPushed = {}sonra aşağıdaki şekilde atamaları yap:
  ObjectPushed[todolistkullaniciAdiInputValue] = todolistkullaniciPuanInputValue
- tarih belirlerken obje olarak oluşturmayı unutma. örnek: const dateNow = new Date("dateString");
- object destructionda yeni variablelar ile yıkılan objelerin key isimleri aynı olmalı

##### React
- const {data : data1} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);  BURADA `` ARASINA '' KOYMA!
- jsx de kullanılmak üzere olan fonksiyon ismi büyük harf ile başlamalı ki mesela Header ve header karışmasın.
- mutlaka jsx bir fragment içinde olmalı yani <> veya <div> veya <React.Fragment> vesaire...
- jsx'de class değil classname kullanılır. laber for değil, htmlfor kullanılmalı. bu arada label for ile label yani yazıya tıklanınca bağlı olduğu inputa focus verilir.
- usestate, useeffect gibi hooklar if içinde olmamalı, function altında olmalı, herhangi bir kontrole bağlı olmamalı
- return item.isActive === true           =   yazma !
- prop alırken ({actions}) köşeli parantez yazmayı unutma
- By trying to access the DOM and set innerHTML directly, you're sort of fighting against some of the general principals of React. In this specific case, it's failing because the div doesn't actually exist in the DOM when you first try to mutate it.





# Sorulacak Sorular

### js ###
- js'de BigInt kullanmamızı gerektirecek durumlar yaşadınız mı?
- parametre gönderebilmek için bind() mi gerekiyor eventlistener için yoksa anonymous function mı kullanılmalı?
-map(function(element, index, array) { ... }, thisArg)   thisarg nasıl ve nerede kullanılır?
-object ve sınıf içine metod koyabilmek için prototype şart mı?
-only way to get the objects inherited via prototype chain is by using a for..in loop. console'da göstermemesini sor.

### Genel ###
- Gif pause nasıl yapılır?

### React ###
- this.setState kullanımı hooklarla beraber anlamını kaybetti mi? sadece class componentlerle mi kullanılır?
- data-bs ile çalışma attibute olayı biraz anlatılmalı, yarn mı npm mi? duruma göre ciddi bir fark var mı?