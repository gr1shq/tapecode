import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Hero from "./(sections)/Hero";

export default function Home() {
  return (
   <div className="min-h-screen">
      <Header />
      <Hero />
      <Footer />

   </div>
  );
}
