import API from "@/configs/API";

// Function to create a GeneralMaster
export const createGeneralMaster = async (data: any) => {
    try {
        const response = await API.post("general/general-master", data);
        return response.data;
    } catch (error) {
        console.error("Create GeneralMaster API Error:", error);
        throw error;
    }
};

// Function to get all GeneralMasters
export const getAllGeneralMasters = async () => {
    try {
        const response = await API.get("general/general-master");
        return response.data;
    } catch (error) {
        console.error("Get All GeneralMasters API Error:", error);
        throw error;
    }
};

// Function to get a GeneralMaster by ID
export const getGeneralMasterById = async (id: string) => {
    try {
        const response = await API.get(`general/general-master/${id}`);
        return response.data;
    } catch (error) {
        console.error("Get GeneralMaster By ID API Error:", error);
        throw error;
    }
};

// Function to update a GeneralMaster
export const updateGeneralMaster = async (id: string, data: any) => {
    try {
        const response = await API.put(`general/general-master/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Update GeneralMaster API Error:", error);
        throw error;
    }
};

// Function to delete a GeneralMaster
export const deleteGeneralMaster = async (id: string) => {
    try {
        const response = await API.delete(`general/general-master/${id}`);
        return response.data;
    } catch (error) {
        console.error("Delete GeneralMaster API Error:", error);
        throw error;
    }
};


// Function to get GeneralDtls by GeneralMaster ID
export const getGeneralDtlsByGeneralMstId = async (generalMstId: string) => {
    try {
        const response = await API.get(`general/general-mst/${generalMstId}`);
        return response.data;
    } catch (error) {
        console.error("Get GeneralDtls By GeneralMaster ID API Error:", error);
        throw error;
    }
};