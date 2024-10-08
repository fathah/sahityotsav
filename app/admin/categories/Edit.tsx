"use client";

import ZDialog from "@/components/common/ZDialog";
import { ZFormInput, ZFormTextArea, ZSubmitButton } from "@/components/widgets/Form";
import { useSignalEffect } from "@preact/signals-react";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { editCategory } from "./func";
import { rowUpdateSignal } from "@/controller/row_actions";


const EditCategory = () => {
    const [item, setItem] = useState<any>(null);
    const [loading, setLoading] = useState(false);


    useSignalEffect(()=>{
        if(rowUpdateSignal.value && rowUpdateSignal.value.type==="category" && rowUpdateSignal.value.action=="edit"){
            const data = rowUpdateSignal.value.data;
            setItem(data);
            formik.setValues({
                name:data.name,
                description:data.description
            });
        }
    })

    const formik  = useFormik({
        initialValues:{
            name:'',
            description:''
        },
        onSubmit:async(values)=>{
            setLoading(true);
            const resp = await editCategory(item.id, values.name, values.description);
            if(resp.code===0){
                toast.success(resp.message);
                setItem(null);
            }else{
                toast.error(resp.message);
            }
            setLoading(false);
        }
    });

    return (
            <ZDialog
        visible={item!==null}
        onHide={() => setItem(null)}
        header=""
        >
            <h2 className="text-2xl font-bold">Edit Category</h2>
            <form onSubmit={formik.handleSubmit}>
                <ZFormInput
                formik={formik}
                formLabel="Category Name"
                name="name"
                />
                <ZFormTextArea
                formik={formik}
                formLabel="Description"
                name="description"
                />
                <div className="fullcenter">
                    <ZSubmitButton
                    loadText="Updating..."
                    loading={loading}
                    text="Update"
                    />
                </div>
            </form>
        </ZDialog>
        
    );
}

export default EditCategory;