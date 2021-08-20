import React, {useState, useEffect} from 'react';
import InfoCard from '../compoonents/Card';
import Button from '@material-ui/core/Button';

// my prettier linter for airbnb style for some reason isn't working... not sure why

const MainContainer = (props) => {

  const [ statusObject, setStatusObject ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(6);

  // humandate object
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }

  // fetching json data from external host; was using fetch but wasn't working with the private json bin
  useEffect(() => {
    // no async await as this is default behavior
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
      let response = JSON.parse(req.responseText)
      setStatusObject(response)
      }
    };

    req.open("GET", "https://api.jsonbin.io/b/611c18eb53ca131484abbaa6/3", true);
    req.setRequestHeader("secret-key", "$2b$10$ZHDNH6Ffz1VzrEDCsVEa8uPh3xVAbPPpF74hY8sC0BVEpW6Tk0nlO");
    req.send();
  }, [])

  // event handlers 
  const handleNextPage = e => {
    Math.ceil(statusObject.length / 6) > currentPage ? 
    setCurrentPage(currentPage + 1) : 
    (alert('this is not the mail you\'re looking for'), setCurrentPage(currentPage))
  };

  const handlePreviousPage = e => {
    currentPage === 1 ? 
    setCurrentPage(1) : 
    setCurrentPage(currentPage - 1)
  }

  // individual array maps because parsing through nested objects in the infoMap wasn't panning out
  const forwardMap = statusObject.map((mail) => {
     const { forward } = mail;
     if (!forward) return null;
     const forwardStatus = forward.status;
     return forwardStatus;
   })

  const scanMap = statusObject.map((mail) => {
    const { scan } = mail;
    if (!scan) return null;
    const scanStatus = scan.status;
    return scanStatus;
  })

  const shredMap = statusObject.map((mail) => {
    const { shred } = mail;
    if (!shred) return null;
    const shredStatus = shred.status;
    return shredStatus;
  })

  // properties that will ultimately be passed down to children
  const infoMap = statusObject?.map((mail, i) => {
    const { id, businessRecipient, from, imageUrl, individualRecipient, timestamp } = mail;
    const newDate = new Date(timestamp);
    const month = months[newDate.getMonth()];
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const humanDate = `${month} ${day}, ${year}`;

    return <InfoCard
      className="infocards" 
      key={i} 
      id={id}
      businessRecipient={businessRecipient}
      from={from} 
      imageUrl={imageUrl} 
      individualRecipient={individualRecipient} 
      timestamp={humanDate} 
      forward={forwardMap[i]} 
      scan={scanMap[i]} 
      shred={shredMap[i]}
    />
    })

  // pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = infoMap.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div 
      className='MainContainer'>
      <header 
        className="bottomborder">
        <img
          className="stablelogo"
          alt="Logo"
          src="https://s3-us-west-2.amazonaws.com/usestable.com-assets/logos/stable-logo.svg"></img>
      </header>
      <div 
        className="secondaryheader"
        >
        <h2 
        className="allmail">All Mail
        </h2>
        <h3 
        className="piecesofmail">Here are all of the pieces of mail you've received at your Stable address
        </h3>  
      </div>
      <div 
        className="grid-container"
        >
        {currentPosts}
      <div 
        className="footer"
        >
        {infoMap.length} Mail Items
        <Button 
          className="nextButton" 
          variant="contained"
          onClick={handleNextPage}
          >Next
        </Button>
        <Button 
          className="prevButton" 
          variant="contained"
          onClick={handlePreviousPage}
          >Previous
        </Button>
      </div>
      </div>
    </div>
  )
}

export default MainContainer;
