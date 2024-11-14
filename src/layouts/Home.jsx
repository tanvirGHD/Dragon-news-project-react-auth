import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-10/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-10/12 mx-auto py-5">
                <Navbar></Navbar>
            </nav>
            <main className="w-10/12 mx-auto pt-5 md:grid grid-cols-12">
                <aside className="left col-span-3">Left Navbar</aside>
                <section className="col-span-6">Main Content</section>
                <aside className="right col-span-3">Right Navbar</aside>
            </main>
        </div>
    );
};

export default Home;