import React from "react";

export default function Main() {
	return (
		<main>
			<form className="add-ingredient-form">
				<input
					type="text"
					className="form-input"
					placeholder="e.g. oregano"
					aria-label="Add Ingredient"
				/>
				<button className="btn">Add ingredient</button>
			</form>
		</main>
	);
}
