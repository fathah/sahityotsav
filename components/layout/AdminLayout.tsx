import Link from "next/link";
import AOSClient from "../common/AOSClient";
import APPCONFIGS from "@/configs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Footer from "../common/Footer";
import BackButton from "../common/BackButton";

const AdminLayout = (props:any) => {
   
    return (
        <div>
            <AOSClient/>
            <section className="bg-primary py-4 text-white" data-aos="fade-down">
                <nav className="flex justify-between items-center commonwidth">
                    <Link href={`/admin`} className="flex items-center">
                    <MdOutlineAdminPanelSettings className="text-4xl mr-2"/>
                    <h5 className=" font-bold text-lg ">Admin Panel</h5>

                    </Link>
                   
                    
                </nav>
            </section>
            <BackButton/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default AdminLayout;