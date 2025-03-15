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