/**
 * I wanted to keep the index a little cleaner
 * I also wanted to match the amount of images to the actual amount of posts the profile mentions
 * So I made the data folder and the TS file to keep all the "posts" in one location
 * 
 * Each Object needs a unique id for the FlatList, as well as a URL tag
 * Picsum seeds just adds a variety of placeholder photos 
 */

const IMAGES = [
  {id: "1", url: "https://picsum.photos/seed/a/300"},
  {id: "2", url: "https://picsum.photos/seed/b/301"},
  {id: "3", url: "https://picsum.photos/seed/c/302"},
  {id: "4", url: "https://picsum.photos/seed/d/303"},
  {id: "5", url: "https://picsum.photos/seed/e/304"},
  {id: "6", url: "https://picsum.photos/seed/f/305"},
  {id: "7", url: "https://picsum.photos/seed/g/306"},
  {id: "8", url: "https://picsum.photos/seed/h/307"},
  {id: "9", url: "https://picsum.photos/seed/i/308"},
  {id: "10", url: "https://picsum.photos/seed/j/309"},
  {id: "11", url: "https://picsum.photos/seed/k/310"},
  {id: "12", url: "https://picsum.photos/seed/l/311"},
  {id: "13", url: "https://picsum.photos/seed/m/312"},
  {id: "14", url: "https://picsum.photos/seed/n/313"},
  {id: "15", url: "https://picsum.photos/seed/o/314"},
  {id: "16", url: "https://picsum.photos/seed/p/315"},
  {id: "17", url: "https://picsum.photos/seed/q/316"},
  {id: "18", url: "https://picsum.photos/seed/r/317"},
  {id: "19", url: "https://picsum.photos/seed/s/318"},
  {id: "20", url: "https://picsum.photos/seed/t/319"},
  {id: "21", url: "https://picsum.photos/seed/u/320"},
  {id: "22", url: "https://picsum.photos/seed/a/300"},
  {id: "23", url: "https://picsum.photos/seed/b/301"},
  {id: "24", url: "https://picsum.photos/seed/c/302"},
  {id: "25", url: "https://picsum.photos/seed/d/303"},
  {id: "26", url: "https://picsum.photos/seed/e/304"},
  {id: "27", url: "https://picsum.photos/seed/f/305"},
  {id: "28", url: "https://picsum.photos/seed/g/306"},
  {id: "29", url: "https://picsum.photos/seed/h/307"},
  {id: "30", url: "https://picsum.photos/seed/i/308"},
  {id: "31", url: "https://picsum.photos/seed/j/309"},
  {id: "32", url: "https://picsum.photos/seed/k/310"},
  {id: "33", url: "https://picsum.photos/seed/l/311"},
  {id: "34", url: "https://picsum.photos/seed/m/312"},
  {id: "35", url: "https://picsum.photos/seed/n/313"},
  {id: "36", url: "https://picsum.photos/seed/o/314"},
  {id: "37", url: "https://picsum.photos/seed/p/315"},
  {id: "38", url: "https://picsum.photos/seed/q/316"},
  {id: "39", url: "https://picsum.photos/seed/r/317"},
  {id: "40", url: "https://picsum.photos/seed/s/318"},
  {id: "41", url: "https://picsum.photos/seed/t/319"},
  {id: "42", url: "https://picsum.photos/seed/u/320"},
  {id: "43", url: "https://picsum.photos/seed/k/310"},
  {id: "44", url: "https://picsum.photos/seed/l/311"},
  {id: "45", url: "https://picsum.photos/seed/m/312"},
  {id: "46", url: "https://picsum.photos/seed/n/313"},
  {id: "47", url: "https://picsum.photos/seed/o/314"},
  {id: "48", url: "https://picsum.photos/seed/p/315"},
  {id: "49", url: "https://picsum.photos/seed/q/316"},
  {id: "50", url: "https://picsum.photos/seed/r/317"},
  {id: "51", url: "https://picsum.photos/seed/s/318"},
  {id: "52", url: "https://picsum.photos/seed/t/319"},
  {id: "53", url: "https://picsum.photos/seed/u/320"},
];

export default IMAGES;