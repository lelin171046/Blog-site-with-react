import Footer from "../Component/Footer/Footer";
import Nav from "../Component/Nav";
import {Outlet} from 'react-router-dom';


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                {/* navbar  */}
                <Nav></Nav>
            </div>
            {/* Packet  */}
           <div className="min-h-[calc(100vh-116px)]">

           <Outlet></Outlet>

           </div>
           {/* Footer  */}
           
          <div className=""><Footer></Footer></div>
           
           
        </div>
    );
};

export default MainLayout;