/* hackerrank Designer PDF Viewer */
/* hackerrank is not for JS... */

function designerPdfViewer(h, word) {
  let arr = [];
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
      arr.push(String.fromCharCode(i));
  }
  let height = [];
 
  for (let i = 0; i < word.length; i++) {
      if (arr.indexOf(word[i]) >= 0) {
        height.push(h[arr.indexOf(word[i])]);
         
      }
  }
  return word.length * Math.max(...height);
  
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];

let word = 'abc';

console.log(designerPdfViewer(h, word));