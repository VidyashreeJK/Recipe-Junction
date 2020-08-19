import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import RecipeInDetail from "./RecipeInDetailComponent";
import Footer from "./FooterComponent";
import { RECIPES } from "../shared/recipes";
import { INGREDIENTS } from "../shared/ingredients";

function Main() {
  const [search, setSearch] = useState("");

  const searchedRecipe =
    search === ""
      ? ""
      : RECIPES.filter((recipe) =>
          recipe.name.toLowerCase().includes(search.toLowerCase())
        )[0];

  function handleChange(event) {
    setSearch(event.target.value);
  }

  const Recipe = ({ match }) => {
    return (
      <RecipeInDetail
        recipe={
          RECIPES.filter(
            (recipe) => recipe.id === parseInt(match.params.recipeId, 10)
          )[0]
        }
        ingredients={
          INGREDIENTS.filter(
            (ingredientItem) =>
              ingredientItem.recipeId === parseInt(match.params.recipeId, 10)
          )[0]
        }
      />
    );
  };

  const HomePage = () => {
    return (
      <Home recipes={RECIPES.filter((recipe) => recipe.featured === true)} />
    );
  };

  return (
    <div>
      <Header
        searchValue={search}
        onChange={handleChange}
        searchedValue={searchedRecipe}
      />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route path="/home/:recipeId" component={Recipe} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
