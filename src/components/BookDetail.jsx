function BookDetail({show,item,onClose}) {
  if(!show)
    {
        return null;
    }
  return (
    <div className="overlay ">
      <div className='book-detail-card has-before has-after'>
        <div className=' o-hidden inner-book-detail-card'>
          <div className='modalImageContainer imageContainer'>
            <img 
              src={item?.volumeInfo?.imageLinks?.smallThumbnail} 
              height="100%"
              width="75%" 
              loading="lazy" 
              alt="Thumbnail"/>
          </div>
          <div className='detailContainer '>
            <h3 className="h3 card-title mb-10">{item?.volumeInfo?.title.substring(0, 100)}</h3>
            <h4 className="h4 section-subtitle txt-aln-lft mb-10">{item?.volumeInfo?.authors[0]}</h4>
            <div className='flex mb-10'>
              <h4 >{item?.volumeInfo?.categories[0]}</h4>
              <h4 >{item?.volumeInfo?.publisher}</h4>
              <h4 >{item?.volumeInfo?.publishedDate}</h4>
              <h4 >{item?.volumeInfo?.pageCount}</h4>
            </div>
            <div>
              <p className="card-text">
                {item?.volumeInfo?.description?.substring(0, 800)}
              </p>
            </div>
          </div>
          
        </div>
          <button type="button" className="btn-close" onClick={onClose}>
            <span className="icon-cross"></span>
          </button>
          <button type="button" className="btn-read">
            <a href={item?.volumeInfo?.previewLink} className="read-text">Read Now</a>
          </button>
        </div>        
      </div>
  )
}

export default BookDetail;