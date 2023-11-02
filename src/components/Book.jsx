import React from 'react'

export default function Book({book}) {
  return (
      <div className="book-card has-before has-after">
        <div className='imageContainer'>
          <img 
            src={book?.volumeInfo?.imageLinks?.smallThumbnail} 
            width="120" 
            height="50" 
            loading="lazy" 
            alt="Thumbnail" />
        </div>
        <div className='detailContainer'>
          <h3 className="h3 card-title">
            {book?.volumeInfo?.title?.substring(0, 100)}
          </h3>
          <h4 className="h4">
            {book?.volumeInfo?.authors}
          </h4>
          <div

            className='btn-link'>
            <span className="span">Read</span>
          </div>
        </div>
        
        
      </div>
  )
}
