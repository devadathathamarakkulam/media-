import { BASE_URL } from "./Base_url";
import { commonRequest } from "./commonRequest";

//to upload videos
export const addVideos=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/videos`,body)
}
//to get all videos

export const getVideos=async()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,'')
}
//to delete a specific video

export const deletevideo=async(id)=>{
  return await commonRequest('DELETE',`${BASE_URL}/videos/${id}`,{})
}

//to add category
export const addCategory=async(body)=>{
  return await commonRequest('POST',`${BASE_URL}/categories`,body)
}

//to get category list

export const getCategories=async()=>{
  return await commonRequest("GET",`${BASE_URL}/categories`,'')
}

//to delete a categry
export const deletecategory=async(id)=>{
  return await commonRequest('DELETE',`${BASE_URL}/categories/${id}`,{})
}

//to get all history
export const getHistory=async()=>{
  return await commonRequest("GET",`${BASE_URL}/watchhistory`,'')
}

//to add history
export const addHistory=async(body)=>{
  return await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
}

//to grt specific video
export const getSpecificVideos=async(id)=>{
  return await commonRequest("GET",`${BASE_URL}/videos/${id}`)
}

//to update category
export const updatecategory=async(id,body)=>{
  return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
}





