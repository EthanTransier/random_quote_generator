import {useState, useEffect} from 'react'

const ButtonGen = () => {
    const [quotes, setQuotes] = useState([])
  useEffect(() =>{
    fetch('https://api.quotable.io/random').then(response=>{
        if(response.status >=200 && response.status < 300){
            return response.json()
        }else{
            throw new Error(response.statusText)
        }
    }).then((data)=>{
            console.log(data)
            setQuotes(data)
        }).catch((error)=>{console.log(error)})
  }, [])
  return(
    <>
        <h3>"{quotes.content}" - {quotes.author}</h3>
        <div className='actions'>
          <button></button>
        </div>
        <button onClick={()=>{
          window.location.reload()
        }}>New Quote</button>
    </>
  )

}

export default ButtonGen