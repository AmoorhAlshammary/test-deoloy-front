import {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


function OneDecoration({token, user}) {
    const { id } = useParams();
    //console.log(id);

    const [decorationId, setDecorationId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState('')


    const [reservation, setReservation] = useState(null);

    const history = useHistory();

    useEffect(()=> {
      // console.log('use effect')
      const getOneDecoration = async ()=>{
          if(token){
            // console.log("kkkkkk");
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/decoration/${id}`, { headers: { authorization: `Bearer ${token}` } });
            // console.log(response.data);
            setDecorationId(response.data.oneDecoration._id);
            setName(response.data.oneDecoration.name);
            setDescription(response.data.oneDecoration.description);
            setImg(response.data.oneDecoration.img);
            setPrice(response.data.oneDecoration.price);

            setReservation(response.data.reservation);
            
          }else{
            history.push('/login');
          }
      }
        getOneDecoration();
    }, []);



    const postReserve = async () => {
      // console.log(decorationId, user._id)
        try {
      
          const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reservation`, {
            decorationId: decorationId,
            userId: user._id,
            date: new Date()
          },
            { headers: { authorization: `Bearer ${token}` } }
          )
          // console.log(response)
          history.push(`/reservation/user/view`)
        } catch (error) {
          console.log(error)
        }
    }

    const cancelReservation = async () => {
        try {
  
          const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/reservation/${reservation._id}`,
            { headers: { authorization: `Bearer ${token}` } }
          )
          // console.log(response)
          history.push('/decoration')
        } catch (error) {
          console.log(error)
        }
    }


    // admin functions
    const updateDecoration = async ()=>{
      try {
        const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/decoration`,{
          id: decorationId,
          name,
          description,
          img,
          price
        },
        {headers: {authorization: `Bearer ${token}`}}
        )
        if(response.status===201){
          // show alert update done
          alert(`Decoration : ${name} updated successfully`)
        }
      } catch (error) {
        console.log(error);
      }
    }
    const deleteDecoration = async ()=>{
      try {
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/decoration/${decorationId}`,
        {headers: {authorization: `Bearer ${token}`}}
        )
        if(response.status===201){
          // show alert update done
          alert(`Decoration : ${response.data.name} deleted successfully with all reservations`)
          history.push('/decoration')
        }
      } catch (error) {
        console.log(error);
      }
    }
 
    return (
        <div className='container'>
                {user.isAdmin ?
                  <div className="card m-2" style={{width: 300}}>
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h3>Update Decoration</h3>
                      <h5 className="card-title">Name: {name}</h5>
                      <p className="card-text">Description: {description}</p>
                      <p className="card-text">Price: {price} SR</p>
                      <input type="text" className="form-control mb-2" placeholder='Name' onChange={(e)=> setName(e.target.value)} />
                      <input type="text" className="form-control mb-2" placeholder='Decoration' onChange={(e)=> setDescription(e.target.value)} />
                      <input type="text" className="form-control mb-2" placeholder='Image URL' onChange={(e)=> setImg(e.target.value)} />
                      <input type="number" className="form-control mb-2" placeholder='price' onChange={(e)=> setPrice(e.target.value)} />
                      <button className='btn btn-success m-2' onClick={()=>updateDecoration()}>UPDATE</button>
                      <button className='btn btn-danger' onClick={()=>deleteDecoration()}>DELETE</button>
                    </div>
                  </div>
                  :
                  // https://getbootstrap.com/docs/5.1/components/card/
                  <div className="card m-2" style={{width: 300}}>
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{description}</p>
                      <p className="card-text">{price} SR</p>
                      {reservation ? 
                        <button className='btn btn-dark' onClick={ ()=>cancelReservation() }>CANCEL</button> 
                        :
                        <button className='btn btn-info' onClick={ ()=>postReserve() }>RESERVE</button>
                      }
                    </div>
                  </div>
                }
        </div>
    )
}

export default OneDecoration
