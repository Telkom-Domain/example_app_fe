import axios from "axios";
import { LOCAL_STORAGE_TOKEN, BASE_API } from "../utils/constants";
import { getLocalStorage } from "../utils/helper/localStorage";

export async function GetAllNotes(accessToken) {
    const API_URL = `${BASE_API}/notes`;
    try {
        const GET_DATA = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const res = GET_DATA.data;

        return Promise.resolve({
            status: "success",
            message: "Success get all notes",
            data: res,
        });
    } catch (err) {
        return Promise.reject({
            status: "error",
            message: err.response.data.message,
        });
    }
}

export async function GetNotesById(accessToken, id) {
    const API_URL = `${BASE_API}/notes/${id}`;
    try {
        const GET_DATA = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const res = GET_DATA.data;

        return Promise.resolve({
            status: "success",
            message: "Success get notes by id",
            data: res,
        });
    } catch (err) {
        return Promise.reject({
            status: "error",
            message: err.response.data.message,
        });
    }
}

export async function PostNotes(accessToken, values) {
    const API_URL = `${BASE_API}/notes`;
    const owner = getLocalStorage(LOCAL_STORAGE_TOKEN).decoded.id_token.sub;
    const data = {
        title: values.title,
        body: values.note,
        owner: owner,
    };

    try {
        const POST_NOTES = await axios.post(API_URL, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const res = POST_NOTES.data;

        return Promise.resolve({
            status: "success",
            message: "Success add notes",
        });
    } catch (err) {
        return Promise.reject({
            status: "error",
            message: err.response.data.message,
        });
    }
}

export async function DeleteNotes(accessToken, payload, reload) {
    const API_URL = `${BASE_API}/notes/${payload.id}`;
    try {
        const DELETE_NOTES = await axios.delete(API_URL, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const res = DELETE_NOTES.data;
        reload();
        return Promise.resolve({
            status: "success",
            message: "Success delete notes",
        });
    } catch (err) {
        return Promise.reject({
            status: "error",
            message: err.response.data.message,
        });
    }
}

export async function UpdateNotes(accessToken, value, id, reload) {
    const API_URL = `${BASE_API}/notes/${id}`;
    const data = {
        title: value.title,
        body: value.note,
    };

    try {
        const UPDATE_NOTES = await axios.put(API_URL, data, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const res = UPDATE_NOTES.data;
        reload();
        return Promise.resolve({
            status: "success",
            message: "Success update notes",
        });
    } catch (err) {
        return Promise.reject({
            status: "error",
            message: err.response.data.message,
        });
    }
}
