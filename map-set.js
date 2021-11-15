///23.

//1.

function unique(arr) {
    return Array.from(new Set(arr));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );
  
  //2.
  
  
  function aclean(arr){
      let map = new Map();
  
      for (let anagram of arr) {
          let anagramed = anagram.toLowerCase().split('').sort().join('');
          map.set(anagramed, anagram);
      }
      return Array.from(map.values());
  }
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert( aclean(arr) );
  
  
  //3.
  
  let map = new Map();
  
  map.set("name", "John");
  
  let keys = Array.from(map.keys());
  
  keys.push("more");
  
  alert(keys); 