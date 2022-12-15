import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>
				<div>
					<NavBar />
					<div className='container mx-auto'>{children}</div>
				</div>
			</body>
		</html>
	);
}
