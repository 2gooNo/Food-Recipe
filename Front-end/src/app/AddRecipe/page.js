"use client";

import { useState, useEffect } from "react";
import { Back_End_Url } from "../../../back-url";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function addRecipe() {
  const router = useRouter();
  const [userData, setUserData] = useState();
  const [food, setFood] = useState({});

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (token == null) {
      router.push("/LogInPage");
    } else {
      const data = await axios.get(`${Back_End_Url}/getUser`, {
        headers: { token },
      });
      setUserData(data);
      console.log("name", data?.data?.user?.userName);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addQuiz = async () => {
    // addQuestion();

    const { data } = await axios.post(`${Back_End_Url}/createFood`, {
      foodCreator: data?.data?.user?.userName,
      foodName: food.foodName,
      category: food.category,


      // recipes:userData?.data?.user?.userName,
      // instructions:
    });
    router.push("/CustomQuizMenu");
  };

  return (
    <div>
      <input
        className="foodName"
        placeholder="foodName"
        onChange={(e) =>
          setFood((prev) => ({ ...prev, foodName: e.target.value }))
        }
        value={food.foodName}
      ></input>
      <input
        className="category"
        placeholder="category"
        onChange={(e) =>
          setFood((prev) => ({ ...prev, category: e.target.value }))
        }
        value={food.category}
      ></input>
      <input className="recipes" placeholder="recipes"></input>
      {
        [Array(10)].map(() => (
            <input placeholder="instruction"></input>
        ))
      }
      <input className="instructions" placeholder="instructions"></input>
      <input className="imgSrc" placeholder="imgSrc"></input>
    </div>
  );
}
