import React, { useEffect, useState } from "react";
import AccountMenu from "./navbar.js";
import MyCard from "./cards.js";
import Footer from "./footer.js";
import Carousel from "./Carousel.js";
import Container from "@mui/material/Container";

const Homepage = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:9001/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFoodCat(data.foodCategory || []);
        setFoodItem(data.foodItems || []);
      } else {
        throw new Error("Request failed with status " + response.status);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <AccountMenu />
      <Carousel />
      <Container sx={{ fontWeight: "bold", mt: 1 }}>
        {foodCat.length > 0 ? (
          foodCat.map((category) => {
            return (
              <div className="row mb-3" key={category._id}> {/* Added key prop here */}
                <hr />
                <div>{category.CategoryName}</div>
                <hr />
                {foodItem.length > 0
                  ? foodItem
                      .filter((item) => item.CategoryName === category.CategoryName)
                      .map((filterItems) => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <MyCard
                              foodName={filterItems.name}
                              options={filterItems.options[0]}
                              imgSrc={filterItems.img}
                              description={filterItems.description}
                            />
                          </div>
                        );
                      })
                  : <div>No Such Data Found</div>}
              </div>
            );
          })
        ) : (
          <div>No categories found</div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
