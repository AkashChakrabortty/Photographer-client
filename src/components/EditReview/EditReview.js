import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EditReview = () => {
    const location = useLocation();
    const reviewId =  location.pathname.split(':')[1] ;
    
    const [data,setData] = useState();
    const [load, setLoad] = useState(false);
  
    const notify = () => toast("Edit success");
    useEffect(() => {
        fetch(`https://photographer-server-nine.vercel.app/reviews/${reviewId}`)
          .then((res) => res.json())
          .then((data) => {
        
            setData(data)
          });
      }, [load]);

      const handleSubmit = (event) => {
        event.preventDefault();
        const text = event.target.text.value;

        data['text'] = text;
        const userdb = {text};
    
        fetch(`https://photographer-server-nine.vercel.app/reviews/edit/${data._id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userdb),
        })
          .then((res) => res.json())
          .then((data) => {
             setLoad(!load)
             notify();
             event.target.reset();
          });
       
      };
    return (
      <div className="container">
        <div className="card col-6 mx-auto my-5">
           <div className="card-body">
           <h5 className="card-title">{data?.serviceName}</h5>
           <form onSubmit={handleSubmit}>
            <textarea
              className="form-control"
              placeholder="Leave a review here"
              id="floatingTextarea2"
              name="text" defaultValue={data?.text}
            ></textarea>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
            <ToastContainer />
          </form>
         </div>
        </div>
      </div>
    );
};

export default EditReview;