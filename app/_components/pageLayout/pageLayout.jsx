import Header from "../header";
import SideNav from "../sideNav"


const PageLayout = ({children})=>{
    return (
        <div>
            <div>
                <Header></Header>
            </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        
        <div className="h-32 rounded-lg bg-gray-200">
            <SideNav></SideNav>
        </div>
        <div className="h-32 rounded-lg  lg:col-span-3">
            {children}
        </div>
      </div>
        </div>
       
      );
      
}

export default PageLayout;