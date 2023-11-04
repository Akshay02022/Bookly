import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Book from './Book';
import BookDetail from './BookDetail';
export default function Books() {
  const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY
  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);
  const [bookItem,setItem]=useState();
  const [show,setShow]=useState(false);
  const searchBook=(evt)=>{
      if(evt.key==="Enter")
      {
          axios
          .get(
            "https://www.googleapis.com/books/v1/volumes?q=" +
              search +
              `&key=${API_KEY} `+
              "&maxResults=30"
          )
          .then((res) => {
            setData(res.data.items)
          })
          .catch((err) => console.log(err));
      }
    }
  
    const x = Math.floor(bookData.length/3);
  return (
    <section className='section searchBooks' id='searchBooks'>
      <h2 className="h2 section-title has-underline">
        Search Book you want to read..
        <span className="span has-before"></span>
      </h2>

      {/* SearchBar */}
      <div className='searchBar' id="cover">
        <div className="tb">
          <div className="td">
            <input className='searchInput' type="text" placeholder="Search" 
            value={search}
            onChange={
              (e) => setSearch(e.target.value)} 
            onKeyPress={searchBook}/>
          </div>
        </div>
      </div>
     
      {bookData && (
        <div className="row"> 
          <div className="column">
          {
            bookData?.map((book, index) => (
             
              index < x 
              && book?.saleInfo?.listPrice?.amount !== undefined
              &&
              (   <div>
                  <div onClick={()=>{setShow(true);setItem(book)}}>
                  <Book 
                  key={index}
                  className="gg"
                  book={book}
                  />
                  </div>
                  
                  <BookDetail show={show} item={bookItem} onClose={()=>setShow(false)}/>  
                  </div>
                )
              ))
          }
          </div>
          <div className="column">
          {
            bookData?.map((book, index) => (
              index >= x && index < 2*x && book?.saleInfo?.listPrice?.amount !== undefined
              &&
              (<div>
                <div onClick={()=>{setShow(true);setItem(book)}}>
                <Book 
                key={index}
                className="gg"
                book={book}
                />
                </div>
                
                <BookDetail show={show} item={bookItem} onClose={()=>setShow(false)}/>
                </div>
              )
              ))
          }
          </div>
          <div className="column">
          {
            bookData?.map((book, index) => (
              index >= 2*x && index < 3*x 
              && book?.saleInfo?.listPrice?.amount !== undefined
              &&
              (<div>
                <div onClick={()=>{setShow(true);setItem(book)}}>
                <Book 
                key={book.id}
                className="gg"
                book={book}
                />
                </div>
                
                <BookDetail show={show} item={bookItem} onClose={()=>setShow(false)}/>
                </div>
              )
            ))
          }
          </div>
        </div>
        )}

    </section>
  )
}
