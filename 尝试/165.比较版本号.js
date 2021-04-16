let version1 = "2.3.2.2.1.3.5.6.4.3.2.4.6.33.45.2";

let version2 = "2.5.2.4.2.3.66.44.22.78";

function getResult(v1, v2) {
  let arr1 = v1.split(".");
  let arr2 = v2.split(".");
  let len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    let data1 = arr1[i] ? parseInt(arr1[i]) : 0;
    let data2 = arr2[i] ? parseInt(arr2[i]) : 0;
    if (data1 > data2) {
      return 1;
    } else if (data1 < data2) {
      return -1;
    }
  }
  return 0;
}

console.log(getResult(version1, version2));
