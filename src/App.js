import React, {useState} from "react";
import './style.css';

var foodDB = {
  NorthIndian: [{
      name: "Chola Bhatura 🍲🥯",
      rating: "Rating: 5/5"
    },
    {
      name: "Dal Bati Churma 🍱",
      rating: "Rating: 4.0/5"
    },
    {
      name: "Amritsari Kulcha 🍘",
      rating: "Rating: 4.0/5"
    },
    {
      name: "Matar Paneer & Laccha Paratha 🥘🥞",
      rating: "Rating: 4.0/5"
    }
  ],

  Bengali: [{
      name: "Rossogola 🍨",
      rating: "Rating: 5/5"
    },
    {
      name: "Luchi-Alur Dom 🍛",
      rating: "Rating: 4.0/5"
    },
    {
      name: "Chicken Biryani 🍗",
      rating: "Rating: 4.0/5"
    },
    {
      name: "Kosha Mangsho 🥩",
      rating: "Rating: 3.5/5"
    },

  ],
  Chinese: [{
      name: "Paneer Manchurian 🧆",
      rating: "Rating: 3.5/5"
    },
    {
      name: "Chicken Chilli Garlic Chowmein 🍜",
      rating: "Rating: 3.0/5"
    },
    {
      name: "Pan Fried Chicken Cheese Momo 🥟",
      rating: "Rating: 4.0/5"
    },
    {
      name: "Hot Schezwan Noodles 🍝",
      rating: "Rating: 4.0/5"
    }
  ],
  Desserts: [{
      name: "BadamPista Kulfi 🍡",
      rating: "Rating: 5/5"
    },
    {
      name: "ButterScotch Icecream 🍦",
      rating: "Rating: 4.5/5"
    },
    {
      name: "Chocolate Pudding 🍧",
      rating: "Rating: 4.0/5"
    },
    {
      name: "Vanilla Cake 🍰",
      rating: "Rating: 4.5/5"
    }
  ]
};

export default function App() {
  var [selectedCuisine, setCuisine] = useState("NorthIndian");

  function cuisineClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return ( <
    div className = "App" >
    <
    h1 > 🥘Tasty Grills < /h1> <
    p style = {
      {
        fontSize: "medium",
        fontFamily: "'Rubik', sans-serif"
      }
    } > {
      " "
    }
    Checkout my favorite dishes.Select a cuisine to get started {
      " "
    } <
    /p>

    <
    div > {
      Object.keys(foodDB).map(function (cuisine) {
        return ( <
          button onClick = {
            () => cuisineClickHandler(cuisine)
          }
          style = {
            {
              cursor: "pointer",
              background: "#FFFFFF",
              borderRadius: "1.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontFamily: "'Rubik', sans-serif",
            }
          } > {
            cuisine
          } <
          /button>
        );
      })
    } <
    /div>  <
    hr / >
    <
    div style = {
      {
        textAlign: "left"
      }
    } >
    <
    ul style = {
      {
        paddingInlineStart: "0"
      }
    } > {
      foodDB[selectedCuisine].map(function (food) {
        return ( <
          li id = "list"
          key = {
            food.name
          }
          style = {
            {
              listStyle: "none",
              padding: "1rem",
              border: "2px solid #FFFFFF",
              width: "60%",
              margin: "1rem 0rem",
              borderRadius: "2rem",
              fontFamily: "'Mate SC', serif",
              textAlign: "left",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }
          } > {
            " "
          } <
          div style = {
            {
              fontSize: "larger"
            }
          } > {
            food.name
          } < /div> <
          div style = {
            {
              fontSize: "smaller"
            }
          } > {
            food.rating
          } < /div> < /li >
        );
      })
    } < /ul> < /div > <
    /div>
  );
}