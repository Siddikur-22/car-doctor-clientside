import { Link } from "react-router-dom";


const ServicesCard = ({ service }) => {
    const { _id, service_id, title, img, price, description, facility } = service;
    return (
     
          <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-2xl">{title}</h2>
          <p className="text-base text-red-600">Price:${price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     
    );
};

export default ServicesCard;