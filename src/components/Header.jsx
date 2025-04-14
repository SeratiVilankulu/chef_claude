import chefLogo from "/chef-claude-icon.png";

export default function Header() {
	return (
		<header className="header">
			<div className="container">
				<img src={chefLogo} alt="Chef Claud icon" className="chef-logo" />
				<h1 className="logo-name">Chef Claude</h1>
			</div>
		</header>
	);
}
