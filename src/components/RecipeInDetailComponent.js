import React from "react";


function RecipeInDetail(props){

 return(
  <div>
      <h1>{props.recipe.name}</h1>
      <div className="row" id= "details">
         <div className="recipe-column col-md-3 col-xs-12">
            <div className="card">
              <div className="card-header">
                 <div className= "row">
                    <div className="col-6">
                       <img src={props.recipe.image} alt={props.recipe.name} width="100%"/>
                    </div>
                    <div className="col-6">
                            <p>Prep: {props.recipe.preparationTime}</p>
                            <p>Cook: {props.recipe.cookingTime}</p>
                            <p>Yields: {props.recipe.yields}</p>
                    </div>
                  </div>     
              </div>
              <div className="card-body">
                 <h4>Ingredients</h4>
                 <ul>
                     {props.ingredients.ingredients.map((ingredient,index)=>
                        <li key={index}>
                            <input type="checkbox"/>
                            <span> {ingredient}</span>
                        </li>
                     )}
                  </ul>
              </div>
            </div>
          </div>

         <div className="recipe-column col-md-9 col-xs-12">
            <div className="card">
                <div className="card-body">
                <h4>Method</h4>
                <ul className="list-group list-group-flush">
                    {props.ingredients.method.map((step,index) =>
                     <li className="list-group-item" key={index}>
                                {step}
                     </li>     
                    )}                      
                </ul>
            </div>
         </div>
        </div>
     </div>
   </div>);

}

export default RecipeInDetail;