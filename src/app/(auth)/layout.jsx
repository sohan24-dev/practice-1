import Navber from "@/components/Navber";


const LayoutPage = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            {children}
        </div>
    );
};

export default LayoutPage;