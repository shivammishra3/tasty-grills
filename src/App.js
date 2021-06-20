import React, { useState } from "react";
import './style.css';

var foodDB = {
  NorthIndian: [
    { name: "Matar Paneer & Butter Nan", rating: "Rating: 4/5" },
    { name: "Veg Mixed Shahi Korma", rating: "Rating: 3.5/5" },
    { name: "Onion Kulcha", rating: "Rating: 3/5" },
    { name: "Chola Bhatura", rating: "Rating: 3/5" }
  ],

  Bengali: [
    {
      name: "Chicken Biryani",
      rating: "5/5"
    },
    {
      name: "Luchi-Alur Dom",
      rating: "4.5/5"
    },
    {
      name: "Kosha Mangsho",
      rating: "4.5/5"
    },
    {
      name: "Rossogola",
      rating: "4.5/5"
    }
  ],
  Chinese: [
    {
      name: "Paneer Manchurian",
      rating: "3.5/5"
    },
    {
      name: "Chicken Chilli Garlic Chowmein",
      rating: "5/5"
    },
    {
      name: "Pan Fried Chicken Cheese Momo",
      rating: "5/5"
    },
    {
      name: "Hot Schezwan Noodles",
      rating: "4/5"
    }
  ],
  Desserts: [
    {
      name: "BadamPista Kulfi",
      rating: "3.5/5"
    },
    {
      name: "ButterScotch Icecream",
      rating: "5/5"
    },
    {
      name: "Chocolate Pudding",
      rating: "5/5"
    },
    {
      name: "Vanilla Cake",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedCuisine, setCuisine] = useState("Chinese");
  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1> 🥘 Tasty Grills </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite dishes. Select a cuisine to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map(function (cuisine) {
          return (
          <button
            onClick={() => cuisineClickHandler(cuisine)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {cuisine}
          </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedCuisine].map(function(food) {
            return (
            <li
              key={food.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "2rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}