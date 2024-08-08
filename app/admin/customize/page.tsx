import CoreConfigs from "@/models/configs/core_configs_model";
import CustomizeForm from "./CustomizeForm";
import BroachureForm from "./BrochureForm";

const CustomizePage = async () => {
    const configs = await CoreConfigs.getCoreConfigs();
    return (
        <div className="commonwidth">
            <h1 className="text-2xl font-bold">Customize Site</h1>
            <section className="grid lg:grid-cols-2 gap-10">
            <CustomizeForm configs={configs}/>
           <BroachureForm configs={configs}/>
            </section>
        </div>
    );
}

export default CustomizePage;