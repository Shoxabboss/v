// 1. Elementlarni juftlashtirish
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  // 2. Elementlarni ikki barobarga oshirish
  function doubleElements(arr) {
    return arr.map(num => num * 2);
  }
  
  // 3. Elementlar yig‘indisi
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // 4. Massivni stringga aylantirish
  function arrayToString(arr) {
    return arr.join(",");
  }
  
  // 5. Matnlardan uzunroq so‘zlarni topish
  function filterLongWords(arr) {
    return arr.filter(word => word.length > 4);
  }
  
  // 6. Massivlarni birlashtirish
  function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  // 7. Negativ sonlarni ajratib olish
  function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
  }
  
  // 8. Elementlarni keyingi qiymatga o‘zgartirish
  function incrementArray(arr) {
    return arr.map(num => num + 1);
  }
  
  // 9. Element mavjudligini tekshirish
  function hasTen(arr) {
    return arr.includes(10);
  }
  
  // 10. Matndan barcha "e" harflarini olib tashlash
  function removeE(str) {
    return str.replaceAll("e", "");
  }
