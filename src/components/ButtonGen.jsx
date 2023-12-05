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
        <h1>"{quotes.content}" - {quotes.author}</h1>
    </>
  )
}

export default ButtonGen