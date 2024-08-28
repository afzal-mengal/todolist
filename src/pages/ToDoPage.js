import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addTodo, resetToDos } from '../store/todoSlice';
import { addDoneTodo, resetDoneToDos } from '../store/doneSlice';
import ToDoCard from './../components/ToDoCard';
import DoneCard from './../components/DoneCard.js';

import './ToDoPage.css'

export default function ToDoPage() {

    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                console.log("No token found");
                navigate("/login", 100);
                return;
            }
            try {
                const { data } = await axios.post(
                    "http://localhost:4000",
                    {},
                    { withCredentials: true }
                );
                const { status, user, id } = data;
                setUsername(user);
                setUserId(id);
                return status
                    ? toast(`Hello ${user}`, {
                        position: "top-left",
                    })
                    : (removeCookie("token"), navigate("/login"));
            }
            catch (error) {
                console.log(error);
                navigate("/login");
            }
        };
        verifyCookie();
    }, [cookies.token, navigate, removeCookie]);

    useEffect(() => {
        const fetchToDos = async () => {
            if (userId === '') {
                console.log("Fetching user id");
            }
            else {
                const response = await axios.get(`http://localhost:4000/todo/get?userid=${userId}`);
                const toDos = response.data.toDos;
                toDos.map((todo) => {
                    dispatch(addTodo(todo));
                })
            }
        }

        const fetchDoneToDos = async () => {
            if (userId === '') {
                console.log("Fetching user id");
            }
            else {
                const response = await axios.get(`http://localhost:4000/done/get?userid=${userId}`);
                const doneToDos = response.data.toDos;
                doneToDos.map((todo) => {
                    dispatch(addDoneTodo(todo));
                })
            }
        }

        dispatch(resetToDos());
        dispatch(resetDoneToDos());
        fetchToDos();
        fetchDoneToDos();
    }, [userId, dispatch]);

    const Logout = () => {
        removeCookie("token");
        setUserId("");
        setUsername("");

        navigate("/login");
    };

    return (<div className="todopage">
        <button id="logout" onClick={Logout}>LOGOUT</button>
        <div className='parent'>
            <ToastContainer closeOnClick hideProgressBar={true} theme="dark"></ToastContainer>
            <ToDoCard userId={userId}></ToDoCard>
            <DoneCard></DoneCard>
        </div>
    </div>
    );
}