import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Oi, Modak, Climate_Crisis, Silkscreen, Roboto, Andada_Pro, Alegreya } from "next/font/google";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const oi = Oi({ subsets: ["latin"], weight: "400" });
const modak = Modak({ subsets: ["latin"], weight: "400" });
const climateCrisis = Climate_Crisis({ subsets: ["latin"], weight: "400" });
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const andadaPro = Andada_Pro({ subsets: ["latin"], weight: "600" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				.font-oi { font-family: ${oi.style.fontFamily}; }
				.font-modak { font-family: ${modak.style.fontFamily}; }
				.font-climate { font-family: ${climateCrisis.style.fontFamily}; }
				.font-silkscreen { font-family: ${silkscreen.style.fontFamily}; }
				.font-roboto { font-family: ${roboto.style.fontFamily}; }
				.font-andada { font-family: ${andadaPro.style.fontFamily}; }
			`}</style>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}