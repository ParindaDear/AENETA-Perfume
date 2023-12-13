const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    /*id: 1,*/
    title: "Scarlet Elegance",
    price: 790,
    desc:"น้ำหอม Aeneta Luxury Perfume รุ่น Scarlet Elegance เป็นน้ำหอมกลิ่นดอกไม้ที่อบอวนไปด้วยความน่าหลงใหลของดอกกุหลาบมอญ และเพิ่มความเข้มข้นด้วยดอกเบอกาม็อท เสมือนพาเราไปกลางทุ่งดอกไม้ที่ไม่มีที่สิ้นสุด",
    img: "./img/Red.png"
  },
  {
    /*id: 2,*/
    title: "Gentle Rainfall",
    price: 790,
    desc:"น้ำหอม Aeneta Luxury Perfume รุ่น Gentle Rainfall ได้รับแรงบันดาลใจมาจากความงามของดอกไฮเดรนเยียที่เบ่งบานในช่วงบ่ายที่ชุ่มไปด้วยหยดน้ำฝน โดยเราจะสัมผัสได้ถึงกลิ่นของดอกไฮเดรนเยียและดอกไวโอเล็ตที่หอมเบาบางนุ่มลึก",
    img: "./img/Blue.png"
  },
  {
    /*id: 3,*/
    title: "Sweet Harmony",
    price: 790,
    desc:"น้ำหอม Aeneta Luxury Perfume รุ่น Sweet Harmony เพิ่มเสน่ห์ที่อ่อนหวานและสดใสให้กับตัวคุณ จากกลิ่นหอมหวานของวานิลลามาดากัสการ์ ตัดกลับกลิ่นที่สดชื่นของส้มสีทอง ที่เข้ากันอย่างลงตัว",
    img: "./img/Yellow.png"
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price + "THB";
    currentProductImg.src = choosenProduct.img;
    currentProductDesc.textContent = choosenProduct.desc;
  });
});


