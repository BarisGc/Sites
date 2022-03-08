using System;

namespace _10_arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            
            int[] sayiDizisi = {23,12,86,72,3,11,17,4};
            Console.WriteLine("********Sırasız Dizi ****");
            foreach (var sayi in sayiDizisi)
            {
                Console.WriteLine(sayi);
            }
            Console.WriteLine("********Sıralı Dizi ****");
            Array.Sort(sayiDizisi);
            foreach (var sayi in sayiDizisi)
            {
                Console.WriteLine(sayi);
            }
            Console.WriteLine("********Array Clear****");
            Array.Clear(sayiDizisi,2,2);
            foreach (var sayi in sayiDizisi)
            {
                Console.WriteLine(sayi);
            }

            Console.WriteLine("********Array Reverse****");
            Array.Reverse(sayiDizisi);
            foreach (var sayi in sayiDizisi)
            {
                Console.WriteLine(sayi);
            }

            Console.WriteLine("********Array Indexof****");
            
            Console.WriteLine(Array.IndexOf(sayiDizisi,23));

            Console.WriteLine("********Array Resize****");
            Array.Resize<int>(ref sayiDizisi,9);
            sayiDizisi[8] =99;
            foreach (var sayi in sayiDizisi)
            {
                Console.WriteLine(sayi);
            }
        }
    }
}
/*
* Diziler System.Array sınıfından türerler. 
-----------------------------------------
Array.Clear
Dizinin belirtilen elemanlarını varsayılan değerine getirir. Yani örneğin numeric bir dizi ise 0 olarak setler.

Örnek: Aşağıdaki örnek sayi dizisinin 2.indexinden başlayarak 2 tane elemanı temizler.

Array.Clear(sayiDizisi,2,2);
-----------------------------------------
Array.IndexOf
Verilen dizinin verilen elemanının indexini getirir. Eğer dizi içerisinde elemanı bulamazsa -1 döner.

Örnek:

Array.IndexOf(sayiDizisi,7)
-----------------------------------------
Array.Resize
Dizileri yeniden boyutlandırmak için kullanılır.

int[] sayiDizisi = {1,3,4,9,8,7};
Array.Resize<int>(ref sayiDizisi,12);
sayiDizisi[6] = 10;
Yukarıdaki örnekte başlangıçta 6 elemanlı olan sayiDizisi Resize metodu ile 12 elemanlı hale getirildi. Daha sonra 7. elemanına 10 değeri atandı. Diğer boş olan indexlerin değeri ise varsayılan olarak 0 atanır.

int[] sayiDizisi = {1,3,4,9,8,7};
Array.Resize<int>(ref sayiDizisi,3);
Yukarıdaki örnekte başlangıçta 6 elemanlı olan sayiDizisi Resize metodu ile 3 elemanlı hale getirildi. sondaki 3 eleman kırpıldı. Artık dizi şu şekilde: {1,3,4}
*/