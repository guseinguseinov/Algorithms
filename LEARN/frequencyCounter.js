// frequency counter
function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length != str2.length) return false;
  
  let str1Obj = {};
  let str2Obj = {};
  
  for (let i = 0; i < str1.length; i++) {
      if (str1[i] in str1Obj) {
          str1Obj[str1[i]]++;
      }
      else {
          str1Obj[str1[i]] = 1;
      }
  }
  
  for (let i = 0; i < str2.length; i++) {
      if (str2[i] in str2Obj) {
          str2Obj[str2[i]]++;
      }
      else {
          str2Obj[str2[i]] = 1;
      }
  }
  
  for (let key in str1Obj) {
      if (!(key in str2Obj)) {
          return false;
      }
      
      if (str2Obj[key] != str1Obj[key]) {
          return false;
      }
  }
  return true;  
  
}