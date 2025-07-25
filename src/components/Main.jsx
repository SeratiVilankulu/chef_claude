import React, { useState } from "react";

export default function Main() {
	const [ingredients, setIngredients] = useState([]);

	const listOfIngredients = ingredients.map((ingredient) => {
		return <li key={ingredient}>{ingredient}</li>;
	});

	const addIngredient = (formData) => {
		const newIngredient = formData.get("ingredient");
		setIngredients((prev) => [...prev, newIngredient]);
	};

	return (
		<main>
			<section>
				<form className="add-ingredient-form" action={addIngredient}>
					<input
						type="text"
						className="form-input"
						placeholder="e.g. oregano"
						aria-label="Add Ingredient"
						name="ingredient"
					/>

					<button className="btn">Add ingredient</button>
				</form>
				<h2>Ingredients on hand:</h2>

				{listOfIngredients.length > 0 ? (
					<section>
						<ul className="ingredients-list" aria-live="polite">
							{listOfIngredients}
						</ul>
						<div className="get-recipe-container">
							<div>
								<h3>Ready for a recipe?</h3>
								<p>Generate a recipe from your list of ingredients.</p>
							</div>
							<button>Get a recipe</button>
						</div>
					</section>
				) : (
					<p className="no-ingredients">No ingredients added yet.</p>
				)}
			</section>
		</main>
	);
}
