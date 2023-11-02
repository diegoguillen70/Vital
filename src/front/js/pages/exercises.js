import React, { useEffect, useState } from "react";
import "../../styles/exercises.css";
import { useFetch } from "../hooks/useFetch";
import imageBackground from "../../img/image-background.png";
import CardWorkout from "../component/cardWorkout";
import { scrollToTop } from "../function/scrollToTop";
import { allExercises } from "../constants/allExcercises";

export const Exercises = () => {
  const bodyPart = "chest";
  const url = "https://exercisedb.p.rapidapi.com/exercises";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "89971d01c0msh1690c1d9906070dp1cb205jsnac087ad4de35",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    scrollToTop()
    console.log(allExercises.length);
  }, []);

  // const { data, error, loading } = useFetch(url, options);
  // console.log(data);
  const catagories = [
    "Back",
    "Cardio",
    "Chest",
    "Neck",
    "Shoulders",
    "Upper arms",
    "Lower arms",
    "Upper legs",
    "Lower legs",
    "Waist",
  ];
  return (
    <>
      <div
        className="container-fluid image-background vh-75"
        style={{ backgroundImage: `url(${imageBackground})` }}
      >
        <div className="container w-75 d-flex justify-content-center align-items-center wrap-background-image">
          <div className="title">
            <h1 className="text-vital-orange text-center fw-bold">Routines</h1>
            <p className="text-vital-white text-center pb-5">
              Welcome to Routines, your gateway to a healthier, more vibrant lifestyle. We are dedicated to revolutionizing the way you approach fitness by offering a comprehensive array of workout routines, designed to cater to all levels of fitness enthusiasts.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-vital-black">
        <div className="container d-flex pb-5 flex-column title-workout">
          <h1 className="text-vital-orange pt-4 text-center fw-bold">
            Workout Categories
          </h1>
          <div className="row col-11 d-flex mx-auto justify-content-around">
            {catagories.map((item, index) => {
              return <CardWorkout title={item.toLowerCase()} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

{

}
