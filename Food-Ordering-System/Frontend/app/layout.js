// import "../styles/globals.css";
import Navbar from "../components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
