// import React from 'react';
import NewsImg1 from '../assets/images1x/news1.webp'
import NewsImg2 from '../assets/images1x/news2.webp'
import NewsImg3 from '../assets/images1x/news3.webp'
import CoursesImg1 from '../assets/images1x/courses-img1.webp'
import CoursesImg2 from '../assets/images1x/courses-img2.webp'
import CoursesImg3 from '../assets/images1x/courses-img3.webp'
import Tutor1 from '../assets/images1x/circle1.webp'
import Tutor2 from '../assets/images1x/circle2.webp'
import Tutor3 from '../assets/images1x/circle3.webp'
import Comment1 from '../assets/images1x/comment1.webp'
import Comment2 from '../assets/images1x/comment2.webp'
import Comment3 from '../assets/images1x/comment3.webp'
import Img1x_1 from '../assets/images1x/img1x_1.webp'
import Img1x_2 from '../assets/images1x/img1x_2.webp'
import Img1x_3 from '../assets/images1x/img1x_3.webp'
import Img1x_4 from '../assets/images1x/img1x_4.webp'
import Img1x_5 from '../assets/images1x/img1x_5.webp'
import Img1x_6 from '../assets/images1x/img1x_6.webp'
import Img2x_1 from '../assets/images2x/img2x_1.webp'
import Img2x_2 from '../assets/images2x/img2x_2.webp'
import Img2x_3 from '../assets/images2x/img2x_3.webp'
import Img2x_4 from '../assets/images2x/img2x_4.webp'
import Img2x_5 from '../assets/images2x/img2x_5.webp'
import Img2x_6 from '../assets/images2x/img2x_6.webp'
import Img3x_1 from '../assets/images3x/img3x_1.webp'
import Img3x_2 from '../assets/images3x/img3x_2.webp'
import Img3x_3 from '../assets/images3x/img3x_3.webp'
import Img3x_4 from '../assets/images3x/img3x_4.webp'
import Img3x_5 from '../assets/images3x/img3x_5.webp'
import Img3x_6 from '../assets/images3x/img3x_6.webp'

// fetch(url)
// .then(response=>response.json)
// .then(data=>console.log(data))

export const CardData = [
    {
        id: 1,
        img: NewsImg1,
        title: "Dasturlashni o'rganishdagi 8 ta xato.",
        date: "12/06/2021",
        desc: "Dasturchilik olamiga kirib kelgan paytim 16 yosh bo'lganman va men..."
    }, {
        id: 2,
        img: NewsImg2,
        title: "Web dasturlash tarixi.",
        date: "07/08/2021",
        desc: "Dasturchilik olamiga kirib kelgan paytim 16 yosh bo'lganman va men..."
    }, {
        id: 3,
        img: NewsImg3,
        title: "Dasturchilik orqali million?",
        date: "10/08/2021",
        desc: "Dasturchilik olamiga kirib kelgan paytim 16 yosh bo'lganman va men..."
    }, {
        id: 4,
        img: NewsImg2,
        title: "Googleda ishlaydigan o'zbek dasturchisi.",
        date: "22/06/2021",
        desc: "Dasturchilik olamiga kirib kelgan paytim 16 yosh bo'lganman va men..."
    }, {
        id: 5,
        img: NewsImg3,
        title: "Android dasturlash.",
        date: "15/07/2021",
        desc: "Dasturchilik olamiga kirib kelgan paytim 16 yosh bo'lganman va men..."
    }, {
        id: 6,
        img: NewsImg1,
        title: "Qaysi yo'nalishni tanlasam bo'ladi?",
        date: "10/09/2021",
        desc: "Dasturchilik olamiga kirib kelgan paytim 16 yosh bo'lganman va men..."
    }
]

export const CoursesData = [
    {
        id: 1,
        img: CoursesImg1,
        course: "Matematika",
        tutorImg: Tutor1,
        tutor: "Mo'minov Otabek",
        title: "0 dan boshlab eng mukammal misol va masalalargacha o'rganib chiqamiz",
        price: "280 000 so'm"
    }, {
        id: 2,
        img: CoursesImg2,
        course: "Fizika",
        tutorImg: Tutor2,
        tutor: "Rasulov Jasur",
        title: "0 dan boshlab eng mukammal misol va masalalargacha o'rganib chiqamiz",
        price: "300 000 so'm"
    }, {
        id: 3,
        img: CoursesImg3,
        course: "Mental arifmetika",
        tutorImg: Tutor3,
        tutor: "Inoyatov Og'abek",
        title: "0 dan boshlab eng mukammal misol va masalalargacha o'rganib chiqamiz",
        price: "199 000 so'm"
    }, {
        id: 4,
        img: CoursesImg2,
        course: "Matematika",
        tutorImg: Tutor2,
        tutor: "Mo'minov Otabek",
        title: "0 dan boshlab eng mukammal misol va masalalargacha o'rganib chiqamiz",
        price: "280 000 so'm"
    }, {
        id: 5,
        img: CoursesImg3,
        course: "Mental arifmetika",
        tutorImg: Tutor3,
        tutor: "Inoyatov Og'abek",
        title: "0 dan boshlab eng mukammal misol va masalalargacha o'rganib chiqamiz",
        price: "199 000 so'm"
    }, {
        id: 6,
        img: CoursesImg1,
        course: "Matematika",
        tutorImg: Tutor1,
        tutor: "Mo'minov Otabek",
        title: "0 dan boshlab eng mukammal misol va masalalargacha o'rganib chiqamiz",
        price: "280 000 so'm"
    },

]

export const TeachersData = [
    {
        id: 1,
        name: "Mo'minov Otabek",
        img: Tutor1,
        speciality: "Matematika fani o'qituvchisi",
        about: "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirdlariga ega"
    },
    {
        id: 2,
        name: "Rasulov Jasurbek",
        img: Tutor2,
        speciality: "Fizika fani o'qituvchisi",
        about: "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirdlariga ega"
    },
    {
        id: 3,
        name: "Inoyatov Og'abek",
        img: Tutor3,
        speciality: "Mental arifmetika o'qituvchisi",
        about: "8 yillik tajribaga ega ustozimiz, 2013-yilda Magistraturani tamomlagan. Hozirda 50 dan ortiq shogirdlariga ega"
    }
]


export const CommentsData = [

    {
        id: 1,
        img: Comment1,
        name: "Sabina Halilova",
        speciality: "Senior backend dasturchi",
        comment: "Nibh lectus quisque pellentesque lacus. Et lectus diam facilisis etiam sagittis. Arcu mauris s leo ut. Faucibus."
    },
    {
        id: 2,
        img: Comment2,
        name: "Mirvohid Saidahmatov",
        speciality: "Senior frontend dasturchi",
        comment: "Facilisis a lectus augue sit. Placerat bibendum amet quis elementum,netus. Ut sit proin cras pharetra. Nunc proin et."
    }, {
        id: 3,
        img: Comment3,
        name: "Azam Muhammadyor",
        speciality: "Senior frontend dasturchi",
        comment: "Cursus odio dapibus mauris nibh. Ultricies non in commodo ornare tellus diam. Nunc mi non ac morbi magnis tincidunt."
    }
]


export const GalleryItems = [
    {
        id: 1,
        img1x: Img1x_1,
        img2x: Img2x_1,
        img3x: Img3x_1
    },
    {
        id: 2,
        img1x: Img1x_2,
        img2x: Img2x_2,
        img3x: Img3x_2
    }, {
        id: 3,
        img1x: Img1x_3,
        img2x: Img2x_3,
        img3x: Img3x_3
    }, {
        id: 4,
        img1x: Img1x_4,
        img2x: Img2x_4,
        img3x: Img3x_4
    }, {
        id: 5,
        img1x: Img1x_5,
        img2x: Img2x_5,
        img3x: Img3x_5
    }, {
        id: 6,
        img1x: Img1x_6,
        img2x: Img2x_6,
        img3x: Img3x_6
    }

]