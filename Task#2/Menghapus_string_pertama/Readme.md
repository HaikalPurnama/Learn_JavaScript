#  Menghapus Kemunculan Pertama String Pencarian

Program ini menghapus kemunculan pertama dari string pencarian dalam string yang diberikan.

## Implementasi Code

```
  function removeFirstOccurrence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if (index !== -1) {
      return str.slice(0, index) + str.slice(index + searchStr.length);
    } else {
      return str;
    }
  }
  
  const str = "Haikal Purnama";
  const searchStr = "ika";
  const result = removeFirstOccurrence(str, searchStr);
  console.log(`String sebelum penghapusan: ${str}`);
  console.log(`String setelah penghapusan: ${result}`);

```

## Penjelasan

Fungsi ``removeFirstOccurrence`` menerima dua parameter: ``str`` (string asli) dan ``searchStr`` (string yang akan dihapus).

Fungsi menggunakan metode ``indexOf()`` untuk menemukan indeks kemunculan pertama ``searchStr`` dalam ``str``.

Jika ``searchStr`` ditemukan, fungsi menggunakan ``slice()`` untuk membuat string baru tanpa ``searchStr``.

Jika ``searchStr`` tidak ditemukan, fungsi mengembalikan ``str`` asli.

## Output

> String sebelum penghapusan: Haikal Purnama
>
> String setelah penghapusan: Hal Purnama
