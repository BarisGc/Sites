using System;

namespace console_programlama
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Isminizi Giriniz");
            string name = Console.ReadLine();
            Console.WriteLine("Soyadınızı giriniz");
            string surname = Console.ReadLine();
            Console.WriteLine("Merhaba"+ " " + name + " " + surname);
            int degisken = 5;
            Console.WriteLine(degisken);
            
        }
    }
}
