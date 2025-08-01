import React, { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
	const [ingredients, setIngredients] = useState([]);

	const [recipe, setRecipe] = useState("");

	const addIngredient = (formData) => {
		const newIngredient = formData.get("ingredient");
		setIngredients((prev) => [...prev, newIngredient]);
	};

	async function generateRecipe() {
		const aiRecipeResponse = await getRecipeFromMistral(ingredients);
		setRecipe(aiRecipeResponse);
	}

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
						required
					/>

					<button className="btn">Add ingredient</button>
				</form>
				<h2>Ingredients on hand:</h2>

				{ingredients.length > 0 ? (
					<IngredientsList
						ingredients={ingredients}
						generateRecipe={generateRecipe}
					/>
				) : (
					<p className="no-ingredients">No ingredients added yet.</p>
				)}
			</section>
			{recipe && <ClaudeRecipe recipe={recipe} />}
		</main>
	);
}
