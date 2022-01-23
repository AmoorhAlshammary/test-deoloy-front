import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./Decoration.css"
export default function Decoration({ token, user }) {
  const history = useHistory()
  const [data, setData] = useState([]);
  const [search , setsearch] = useState("");

  const newsearch = (e) => {
    setsearch(e.target.value)
  }
  
  useEffect(() => {
    const getData = async () => {
      // console.log(token,"kkkkkk");
      if(token){
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/decoration`, { headers: { authorization: `Bearer ${token}` } })
        setData(response.data);
        // console.log(respone.data);
      }else{
        history.push('/login')
      }
    }
    getData();
    // eslint-disable-next-line
  }, []);


  const searchd = ()=> {
    const searchd= data.filter((element) => {
      if (element.name.toLowerCase().includes(search.toLocaleLowerCase())) {
        return element;
      }
      console.log(element);
    });
    setData(searchd);
    return searchd;
  };
 


  return (
    <>
   <input placeholder="Search" type="text" className=" col-sm-3 width=100px " onChange={(e)=> newsearch(e)} />
      <button  className="searchInput w-60 border-0 px-4 py-2"onClick={()=>searchd()}>search</button>   
          
    <div class="container">
          <div class="row"  >
            
        {data.map((element, i) => {
            return (
              // https://getbootstrap.com/docs/5.1/components/card/
                <div key={element._id} className="card m-2" style={{width: 300}}>
                  <img id="as"src={element.img} className="card-img-top" alt="" width="350" height="350"/>
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">{element.description}</p>
                    <Link className="btn btn-primary" to={`/decoration/${element._id}`} >Open</Link>

                  </div>
                </div>
              
            )
          })
          
        }

      </div>
    </div>

    </>
  )
}




