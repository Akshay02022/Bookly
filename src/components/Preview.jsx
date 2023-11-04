import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import 'swiper/css';
import Book from './Book'
import BookDetail from './BookDetail'
export default function Preview() {
  const [book1, setBook1] =useState([]);
  const [book2, setBook2] =useState([]);
  const [book3, setBook3] =useState([]);
 
  const [bookItem,setItem]=useState();
  const [show,setShow]=useState(false);
  useEffect(()=>{
    axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              "Verity" +
              "&key=AIzaSyBdBDaZP2ZxWL1_X3rhMEi1PXnKxRXpcrM" +
              "&maxResults=30"
          )
          .then((res) => {
            setBook1(res.data.items)
          })
          .catch((err) => console.log(err));

    axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              "Ugly Love by Colleen Hoover" +
              "&key=AIzaSyBdBDaZP2ZxWL1_X3rhMEi1PXnKxRXpcrM" +
              "&maxResults=30"
          )
          .then((res) => {
            setBook2(res.data.items)
          })
          .catch((err) => console.log(err));
    axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              "Steve Jobs" +
              "&key=AIzaSyBdBDaZP2ZxWL1_X3rhMEi1PXnKxRXpcrM" +
              "&maxResults=30"
          )
          .then((res) => {
            setBook3(res.data.items)
          })
          .catch((err) => console.log(err));
  },[])
  

  return (
    <section className="section preview" aria-label="preview" id="Best-Seller">
        <div className="container">

          <p className="section-subtitle">Most Read Book</p>

          <h2 className="h2 section-title has-underline">
            Best Seller 2023
            <span className="span has-before"></span>
          </h2>

          <Swiper
            breakpoints={{
              414: {
                spaceBetween:0,
                slidesPerView:1
              },
              768: {
                spaceBetween:100,
                slidesPerView:2
              },
              1200: {
                spaceBetween:500,
                slidesPerView:3
              }
            }}
            spaceBetween={0}  
            slidesPerView={1}
          >
            {
            book1?.map((book, index) => (
              book?.saleInfo?.listPrice?.amount !== undefined
              &&
              (
                <div 
                  key={`${index}${book.id}`}
                  className='swiper'>
                  <SwiperSlide key={`${index}${book.id}`}>
                  {console.log(`${index}${book.id}`)}
                  <div onClick={()=>{setShow(true);setItem(book)}}>
                    <Book 
                    className="gg swiper"
                    book={book}
                    />
                    
                  </div>
                  </SwiperSlide>
                </div>
                )
              ))
            }
            <BookDetail show={show} item={bookItem} onClose={()=>setShow(false)}/>  
          </Swiper>
          <Swiper
            breakpoints={{
              414: {
                spaceBetween:0,
                slidesPerView:1
              },
              768: {
                spaceBetween:100,
                slidesPerView:2
              },
              1200: {
                spaceBetween:500,
                slidesPerView:3
              }
            }}
            spaceBetween={0}  
            slidesPerView={1}
          >
            {
            book2?.map((book, index) => (
              book?.saleInfo?.listPrice?.amount !== undefined
              &&
              (
                <div
                  key={`${book.id}${index}`}
                  className='swiper'>
                  <SwiperSlide key={`${book.id}${index}`} >
                  {console.log(`${book.id}${index}`)}
                  <div onClick={()=>{setShow(true);setItem(book)}}>
                    <Book 
                    className="gg swiper"
                    book={book}
                    />
                  </div>
                  </SwiperSlide>
                </div>
                )
              ))
            }
            <BookDetail show={show} item={bookItem} onClose={()=>setShow(false)}/>  
          </Swiper>
          <Swiper
            breakpoints={{
              414: {
                spaceBetween:0,
                slidesPerView:1
              },
              768: {
                spaceBetween:100,
                slidesPerView:2
              },
              1200: {
                spaceBetween:500,
                slidesPerView:3
              }
            }}
            spaceBetween={0}  
            slidesPerView={1}
          >
            {
            book3?.map((book, index) => (
              book?.saleInfo?.listPrice?.amount !== undefined
              &&
              (
                <div 
                  key={`${book.id}`} 
                  className='swiper'>
                  <SwiperSlide  key={`${book.id}`} >
                  {console.log(`${book.id}`)}
                  <div onClick={()=>{setShow(true);setItem(book)}}>
                    <Book 
                    className="gg swiper"
                    book={book}
                    />
                  </div>
                  </SwiperSlide>
                </div>
                )
              ))
            }
            <BookDetail show={show} item={bookItem} onClose={()=>setShow(false)}/>  
          </Swiper>
        </div>
      </section>
  )
}
