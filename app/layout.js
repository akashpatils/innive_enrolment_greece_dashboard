import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/leftmenu.css";
import "../styles/nstyle.css";
import "../styles/pstyle.css";
import "../styles/skstyle.css";
import "../styles/responsiveDesign.css";
import "../styles/filtercomponent.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from '../redux/store';
import ReduxStore from "./reduxStore";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  title: "Greece Enrolment Dashboard",
  description: "Welcome to Greece Enrolment Dashboard",
  icons: {
    icon: [{ url: "/logo.svg" }],
  },
};

export default function RootLayout({ children }) {
  return (

    <>
      <html lang="en">
        <body className={`${inter.className} dark:bg-black`} >
          <ReduxStore>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
          </ReduxStore>
        </body>
      </html>
    </>
  );
}
