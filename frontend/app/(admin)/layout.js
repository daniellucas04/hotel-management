import "../globals.css";
import Header from "./component/header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
