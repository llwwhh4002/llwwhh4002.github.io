// // script.js  
// const images = [  
//     './images/favicon.jpg',  
//     'image2.jpg',  
//     'image3.jpg',  
//     // 添加更多图片路径...  
// ];  
// let currentImageIndex = 0;  
// const imageElement = document.getElementById('slideshow');  
// const imageContainer = document.querySelector('.image-container');  
// const imageCount = images.length;  
  
// function changeImage() {  
//     currentImageIndex = (currentImageIndex + 1) % imageCount;  
//     imageElement.src = images[currentImageIndex];  
// }  
  
// // 设置图片切换间隔为3秒  
// setInterval(changeImage, 3000);


// 获取canvas元素和2D渲染上下文  
const canvas = document.getElementById('main-image');  
const ctx = canvas.getContext('2d');  

// 图片数组，包含所有要播放的图片的URL  

const images = [  
    './images/1.jpg','./images/2.png','./images/3.jpg','./images/4.png','./images/5.jpg','./images/6.jpg','./images/7.jpg','./images/8.jpg','./images/9.jpg',
    './images/10.jpg','./images/11.jpg','./images/12.jpg','./images/13.jpg','./images/14.jpg','./images/15.jpg','./images/16.jpg','./images/17.jpg','./images/18.jpg',
    './images/19.jpg','./images/20.jpg','./images/21.jpg','./images/22.jpg','./images/23.jpg','./images/24.jpg','./images/25.jpg','./images/26.jpg','./images/27.jpg',
    './images/28.jpg','./images/29.jpg','./images/30.jpg','./images/31.jpg','./images/32.jpg','./images/33.jpg','./images/34.jpg','./images/35.jpg','./images/36.jpg',
    './images/37.jpg','./images/38.jpg','./images/39.jpg','./images/40.jpg','./images/41.jpg','./images/42.jpg','./images/43.jpg','./images/44.jpg','./images/45.jpg',
    './images/46.jpg','./images/47.jpg','./images/48.jpg','./images/49.jpg','./images/50.jpg','./images/51.png','./images/52.png','./images/53.jpg','./images/54.jpg',
    './images/55.jpg','./images/56.jpg','./images/57.jpg','./images/58.jpg','./images/59.jpg','./images/60.jpg','./images/61.jpg','./images/62.jpg','./images/63.jpg',
    './images/64.jpg','./images/65.jpg','./images/66.jpg','./images/67.jpg','./images/68.jpg','./images/69.jpg','./images/70.jpg','./images/71.jpg','./images/72.jpg',
    './images/73.jpg','./images/74.jpg','./images/75.jpg','./images/76.jpg','./images/77.jpg','./images/78.jpg','./images/79.jpg','./images/80.jpg','./images/81.jpg',
    './images/82.jpg','./images/83.jpg','./images/84.jpg','./images/85.jpg','./images/86.jpg','./images/87.jpg','./images/88.jpg','./images/89.jpg','./images/90.jpg',
    './images/91.jpg','./images/92.jpg','./images/93.jpg','./images/94.jpg','./images/95.jpg','./images/96.jpg','./images/97.jpg','./images/98.jpg','./images/99.jpg',
    ]; 

// 当前图片索引  
let currentIndex = 0;
// 图片加载完成的回调函数  
function onImageLoaded() {  

    // 绘制当前图片到canvas  
    ctx.drawImage(this,0,0, canvas.width, canvas.height);  

    // 更新索引，准备播放下一张图片  
    currentIndex = (currentIndex + 1) % images.length;  

    // 设置定时器，在一段时间后播放下一张图片  
    setTimeout(loadAndDrawNextImage, 3000); // 3000毫秒 = 3秒  
}  

// 加载并绘制下一张图片  
function loadAndDrawNextImage() {  
    // // 释放上一张图片的内存（如果有的话）  
    // if (currentImage) {  
    //     currentImage.onload = null;  
    //     currentImage.onerror = null;  
    //     currentImage = null;  
    // }
    // 创建新的Image对象  
    const img = new Image();  

    // 设置图片源并添加加载完成的回调函数  
    img.src = images[currentIndex];  
    img.onload = onImageLoaded;  
    img.onerror = function() {  
        console.error('图片加载失败:', img.src);  
        // 在加载失败时可以尝试重新加载或者跳过该图片  
        setTimeout(loadAndDrawNextImage, 1000); // 等待一段时间后尝试加载下一张  
    };  
}  

// 开始循环播放图片  
loadAndDrawNextImage(); 
