//import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
const ProductList = ({product}) => {
  

  return (
    <>
      <div class="card">
        <center>
          <img
            src={product.image}
            width={100}
            height={150}
            alt="product list"
          />
        </center>
        <div class="card-body">
          <h6>{product.title}</h6>
          <div>{product.category}</div>
          <h6>{product.price}</h6>
          <div>{product.rating}</div>
          <div className="d-flex">
            <StarRatings
              rating={product.rating}
              starRatedColor="yellow"
              //   changeRating={this.changeRating}
              numberOfStars={5}
             
            />
            <span>(120 ratings)</span>
          </div>
        </div>
        {/* <div className="product-parent"></div> */}
      </div>
    </>
  );
};
export default ProductList;
