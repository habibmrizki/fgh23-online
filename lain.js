// Function
// function namaFungsi(input...){proses yang diakhiri dengan return}

function validate(x, y) {
  if (x > y) {
    return "x lebih besar dari y";
  } else {
    return "x lebih kecil dari y";
  }
}

// validate => fungsi
// validate(1,2)
// console.log(validate(1, 2));
// validate(3,1)
// console.log(validate(3, 1));

// return bisa digunakan untuk memberhentikan fungsi

function validateV2(x, y) {
  if (x > y) return "x lebih besar dari y";
  return "x lebih kecil dari y";
}
// validateV2(1,2)
// console.log(validateV2(1, 2));
// validateV2(3,1)
// console.log(validateV2(3, 1));
this.val = "One";
const Car = {
  brand: "Honda",
  name: "Civic",
  color: "White",
  getColor: function () {
    return this.color; // this mengacu ke object Car sebagai pembungkus fungsi
  },
  getBrand() {
    return this.brand; // this mengacu ke object Car sebagai pembungkus fungsi
  },
  getName: () => {
    return this.val; // this mengacu ke Global sebagai pembungkus object Car yang membungkus fungsi
  },
  compare: (x, y) => {
    if (x > y) return "X lebih besar daripada Y";
    return "X lebih kecil daripada Y";
  },
};

// console.log(Car.getColor());
// console.log(Car.getBrand());
// console.log(Car.getName());
// console.log(Car.compare(1, 2));

// 3 cara penulisan fungsi
// 1. const/let namaFungsi = function (){}
// 2. function namaFungsi (){}
// 3. const/let namaFungsi = () => {}

// Array.sort
// namaArray.sort(function(a,b){return a - b})
// namaArray.sort((a,b) => {return b - a})
const numbers = [2, 4, 6, 1, 3, 5, 10];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);
// numbers.sort((a, b) => {
//   return a - b; // ascending
// });
// console.log(numbers);

// Array.reverse
// numbers.reverse()
// console.log(numbers)

// Array.push
// const newLength = numbers.push(9, 8);
// console.log(newLength, numbers);

// Array.map
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

const newNumbers = numbers.map(function (element, index) {
  //   console.log("Index ke-" + index + " = " + element);
  return element + index;
});

// console.log(newNumbers);

// String.split
const str = "Fazztrack";
// console.log(str.split());
// console.log(str.split("", 5));
// console.log(str.split("a"));
// console.log(str)

// Array.join
// console.log(numbers.join())
// console.log(numbers.join(""))
// console.log(numbers.join(0))
// console.log(numbers)

// string literal
// console.log(
//   "lorem ipsum dolor si amet\nlorem ipsum dolor si amet\nlorem ipsum dolor si amet\nlorem ipsum dolor si amet\nlorem ipsum dolor si amet\nlorem ipsum dolor si amet"
// );

const num1 = 1;
const num2 = 2;
// console.log(num1 + " + " + num2 + " = " + (num1 + num2));

// console.log(
//   `lorem ipsum dolor si amet
// lorem ipsum dolor si amet
// lorem ipsum dolor si amet
// lorem ipsum dolor si amet
// lorem ipsum dolor si amet`
// );
// console.log(`${num1} + ${num2} = ${num1 + num2}`);

// spread op
const EU = ["UK", "Switzerland", "Swedia", "Netherland"];
const SEA = ["Indonesia", "Malaysia", "Singapura"];

// console.log(EU);
// console.log(...EU);
// console.log(EU[0], EU[1], EU[2], EU[3]);

const ASIA = ["Arab Saudi", "Jepang", "China", "Korea", ...SEA];
// console.log(ASIA);
const EURASIA = [...ASIA, ...EU];
// console.log(EURASIA);
const newSEA = [
  ...SEA,
  "Brunei",
  "Vietnam",
  "Laos",
  "Thailand",
  "Kamboja",
  "Indonesia",
  "Filipina",
  "Myanmar",
];
// console.log(newSEA);

let person = {
  name: "Agus",
  age: 23,
  isMarried: false,
};
// let agusBaru = {
//   pekerjaan: "ASN",
//   isMarried: true,
// };
const newAgus = { ...person, pekerjaan: "ASN", isMarried: true };
// console.log(newAgus);

// destructuring
const { name: nama, age, isMarried } = person;
const namas = person.name;
const ages = person.age;
const isMarrieds = person.isMarried;
console.log(nama, age, isMarried);
console.log(namas, ages, isMarrieds);

const [indonesia, malaysia, singapura] = SEA;
const indo = SEA[0];
const malay = SEA[1];
const sing = SEA[2];
console.log(indonesia, malaysia, singapura);
console.log(indo, malay, sing);

// array of integer
// nama array nums, panjang n
// membuat array ans, panjang 2n (2 kali lipat dari array nums)
// ans[i] === nums[i]
// ans[i + n] === nums[i]
// ans => gabungan dari 2 array nums
// output array ans
