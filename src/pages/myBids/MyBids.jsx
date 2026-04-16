import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyBidsTable from "./components/MyBidsTable";

const MyBids = () => {
    const [myBids, setMyBids] = useState([]);
    const [deleteBids, setDeleteBids] = useState(false)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/bids?userEmail=${user.email}`,{
                headers: {
                    authentication : `Bearer ${user.accessToken}`
                }
            })
            .then((res) => res.json())
            .then((result) => setMyBids(result));
        }
    }, [user, deleteBids]);

    return (
        <section className="bg-[#E9E9E9] p-20">
            <h2 className="text-[#001931] text-5xl text-center font-bold mb-10">
                My Bids:{" "}
                <span className="bg-linear-to-bl from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    {String(myBids?.length ?? 0).padStart(2, "0")}
                </span>
            </h2>
            <MyBidsTable myBids={myBids} deleteBids={deleteBids} setDeleteBids={setDeleteBids}></MyBidsTable>
        </section>
    );
};

export default MyBids;
