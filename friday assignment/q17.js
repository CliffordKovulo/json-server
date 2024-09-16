function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
  }
  
  let exampleObject = {
    name: "John",
    age: 30,
    profession: "Developer"
  };
  
  console.log(hasProperty(exampleObject, "age"));
  console.log(hasProperty(exampleObject, "salary"));
  