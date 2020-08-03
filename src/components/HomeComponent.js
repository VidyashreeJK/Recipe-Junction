import React from "react";
import { Link } from "react-router-dom";


function RenderFeaturedRecipes(props) {
  return (
    <div className={`carousel-item ${props.status}`}>
      <h2>{props.recipe.name}</h2>
      <img
        className="carousel-image"
        src={props.recipe.image}
        alt="recipe-carousel"
      />
      <Link to={`/home/${props.recipe.id}`}>
        <button className="btn btn-lg btn-block btn-outline-dark" type="button">
          See Recipe
        </button>
      </Link>
    </div>
  );
}



function Home(props){

   const FeaturedRecipe=props.recipes.map((recipe) => {
        return (
          <RenderFeaturedRecipes
            key={recipe.id}
            recipe={recipe}
            status={
              recipe.featured && props.recipes[0] === recipe ? "active" : ""
            }
          />
        );
      });
    

    

    return (
      <div id="featured-recipe-carousel" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
        {FeaturedRecipe}
        </div>
        <a className="carousel-control-prev" href="#featured-recipe-carousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#featured-recipe-carousel"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
}



export default Home;