import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/leftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
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


            <main className="w-10/12 mx-auto pt-5 md:grid grid-cols-12 gap-7">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="right col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>


        </div>
    );
};

export default Home;