"use server";

import { AuthModel } from "@/models/users/auth";
import { authToken } from "./token";


export async function  isAdminAuthorized():Promise<boolean>{
    console.log("✅ Checked");
    
    const token = authToken();
    if(!token){
        return false;
    }
    return AuthModel.isAdmin();
}