import React from "react";

export default function IngredientsList({ ingredients, generateRecipe }) {
	const listOfIngredients = ingredients.map((ingredient) => {
		return <li key={ingredient}>{ingredient}</li>;
	});

	return (
		<section>
			<ul className="ingredients-list" aria-live="polite">
				{listOfIngredients}
			</ul>
			{listOfIngredients.length >= 4 && (
				<div className="get-recipe-container">
					<div>
						<h3>Ready for a recipe?</h3>
						<p>Generate a recipe from your list of ingredients.</p>
					</div>
					<button onClick={generateRecipe}>Get a recipe</button>
				</div>
			)}
		</section>
	);
}
