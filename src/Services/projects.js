import api from "./apiConfig";

export const getProjects = async () => {
    try {
        const response = await api.get("/projects");
        return response.data;
    } catch (error) {
        console.error("Error getting projects: ", error);
    }
};

export const getProject = async (id) => {
    try {
        const response = await api.get(`/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erorr getting project: ", error);
    }
};