"use server";

import CategoryModel from "@/models/categories/category_model";
import { revalidatePath } from "next/cache";



export async function addCategory(name:string){
    const data =  await CategoryModel.addCategory(name);
if(data.code===0){
    revalidatePath("/admin/categories");
    revalidatePath("/results");

}
    return data;
}



export async function editCategory(id:number, name:string, description:string){
    const data =  await CategoryModel.updateCategory(id,name, description);
if(data.code===0){
    revalidatePath("/admin/categories");
    revalidatePath("/results");

}
    return data;
}

export async function deleteCategory(id:number){
    const data =  await CategoryModel.deleteCategory(id);
if(data.code===0){
    revalidatePath("/admin/categories");
    revalidatePath("/results");

}
    return data;
}