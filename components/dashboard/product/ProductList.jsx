"use client"
import { React, useState, useEffect } from "react";
import { columns } from "@/components/dashboard/tableDataForProds/columns";
import { DataTable } from "@/components/dashboard/tableDataForProds/data-table"
import { ScaleLoader } from "react-spinners";
import EditProduct from "../product/EditProduct"

const ProductList = ({ product, setResponseProduct }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prodId, setProdId] = useState(null);
    const [responseProd, setResponseProd] = useState(null);
    const [open, setOpen] = useState(false);
    const fetchUrl = `${apiUrl}/api/product`;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            // Handle the case when token is not available in localStorage
            // For example, redirect user to login page or show an alert
            console.error("Token not found in localStorage");
            return;
        }
        setToken(token);
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(fetchUrl, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        //"Authorization": "Bearer " + token,
                    },
                });
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [product, responseProd]);

    const deleteProduct = (e, id) => {
        e.preventDefault();
        fetch(fetchUrl + "/" + id, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token,
            },
        }).then((res) => {
            if (data) {
                setData((prevElement) => {
                    return prevElement.filter((nameI) => nameI._id !== id);
                });
            }
        });
    };

    const editProduct = (e, id) => {
        e.preventDefault();
        setProdId(id);
        setOpen(true)
    };

    return (
        <>
            {loading && <div className="flex items-center justify-center"><ScaleLoader width={2} height={15} color="#1c61e7" /></div>}
            {!loading && (
                <DataTable columns={columns(deleteProduct, editProduct)} data={data} />
            )
            }
            {open && <EditProduct prodId={prodId} setResponseProd={setResponseProd} setOpen={setOpen} open={open} />}
        </>
    );
}

export default ProductList;