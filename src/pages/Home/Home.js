import React from "react";
import Product from "../../components/Product";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41VbT96pAWL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51bdMhAVOfL._AC_SY200_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
            rating={4}
          />{" "}
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={4}
          />{" "}
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            rating={4}
          />
        </div>{" "}
        <div className="home_row">
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41Ww3zikowL._AC_SY200_.jpg"
            rating={4}
          />{" "}
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41sFQT0I4aL._AC_SY200_.jpg"
            rating={4}
          />{" "}
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41gT9mzRM8L._AC_SY200_.jpg"
            rating={4}
          />{" "}
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
            rating={4}
          />
        </div>{" "}
        <div className="home_row">
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51+8z0H7zGL._AC_SY200_.jpg"
            rating={4}
          />{" "}
          <Product
            title="THe lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
