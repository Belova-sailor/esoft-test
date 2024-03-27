let myMusic = [
	{
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [ 
		"CS", 
		"8T", 
		"LP" ],
	  "gold": true
	}
  ];
  
const deepClone = obj => {
	if (obj === null) return null;
	let clone = Object.assign({}, obj);
  
	Object.keys(clone).forEach(
	  key =>
		(clone[key] =
		  typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
	);
  
	return Array.isArray(obj) && obj.length
	  ? (clone.length = obj.length) && Array.from(clone)
	  : Array.isArray(obj)
	  ? Array.from(obj)
	  : clone;
  };

  console.log(deepClone(myMusic));
  