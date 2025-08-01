import React from "react";

export default function ClaudeRecipe({recipe}) {
	return (
		<section>
			<h2>Chef Claude Recommends:</h2>
			{recipe}
		</section>
	);
}
