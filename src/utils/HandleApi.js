import axios from "axios";

const baseurl = "https://fullstack-todo-app-yt-backend-l6eo.onrender.com";

const getToDo = (setToDo) => {
    axios
        .get(baseurl)
        .then(({ data }) => {
            console.log(data);
            setToDo(data);
        })
        .catch((err) => console.log(err));
};

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseurl}/save`, { text })
        .then(({ data }) => {
            console.log(data);
            setText("");
            getToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setUpdating) => {
    axios
        .post(`${baseurl}/update`, { _id: toDoId, text })
        .then(({ data }) => {
            console.log(data);
            setText("");
            setUpdating(false);
            getToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => { // Change parameter name to _id
    axios
        .post(`${baseurl}/delete`, { _id }) // Use _id consistently
        .then(({ data }) => {
            console.log(data);
            getToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export { getToDo, addToDo, updateToDo, deleteToDo };
