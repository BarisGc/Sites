# **Sorular**
1) [22,27,16,2,18,6] -> Insertion Sort

- Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
- Big-O gösterimini yazınız.
- Time Complexity: Average case: Aradığımız sayının ortada olması,Worst case: Aradığımız sayının sonda olması, Best case: Aradığımız sayının dizinin en başında olması.
- Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.


2) [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

# **Cevaplar**

1)
- Insertion Sort türüne göre aşamalar:

   - (n): [22,27,16,2,18,6]
   - (n-1): [2,27,16,22,18,6]
   - (n-2): [2,6,16,22,18,27]
   - (1): [2,6,16,18,22,27]

- Big-O: (n*(n+1)) / 2 >>> O(n^2)
  
- Time Complexity:
   - Best case : [2,6,16,18,22,27] = 2
   - Average case : [2,6,16,18,22,27] = 16 - 18
   - Worst case: [2,6,16,18,22,27] = 27

- Diziler sıralandıktan sonra [2,6,16,18,22,27] 18 sayısı **Average Case** kapsamına girer.

2) 
   - n:   [7,3,5,8,2,9,4,15,6]
   - n-1: [2,3,5,8,7,9,4,15,6]
   - n-2: [2,3,4,8,7,9,5,15,6]
   - n-3: [2,3,4,5,7,9,8,15,6]

