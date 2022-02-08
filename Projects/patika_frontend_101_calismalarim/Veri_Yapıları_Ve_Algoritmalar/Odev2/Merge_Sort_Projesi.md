# **Sorular**
1) [16,21,11,8,12,22] -> Merge Sort

- Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
- Big-O gösterimini yazınız.

# **Cevaplar***0

1) 
- Merge Sort türüne göre aşamalar:
   - [16,21,11,8,12,22]
   - [16,21,11]    [8,12,22]
   - [16,21] - [11]   [8,12] - [22]
   - [16] - [21] - [11] - [8] - [12] - [22]
   - [16] - [11,21]    [8] - [12,22]
   - [11,16,21] - [8,12,22]
   - [8,11,12,16,21,22]

- Big-O:
  - 2^x = n
  - log2(n) = x
  - O(n Log(n))