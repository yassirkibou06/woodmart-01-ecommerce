"use client"
"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AlertShowing from "../AlertShowing";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const AddProducts = ({ responseProduct, setResponseProduct }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [showAlert, setShowAlert] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [prod, setProd] = useState({
        title: "",
        sku: "",
        description: "",
        images: [],
        price: "",
        brand: "",
        quantity: "",
        sold: "",
        category: "",
        color: ""
    });
    const [products, setProducts] = useState({
        title: "",
        sku: "",
        description: "",
        images: null,
        price: "",
        brand: "",
        quantity: "",
        sold: "",
        category: "",
        color: ""
    });

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

    const handleChange = (event, property) => {
        setProducts({
            ...products,
            [property]: event.target.value,
        });
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageObjects = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            imageObjects.push(file);
        }

        setProducts({
            ...products,
            images: imageObjects
        });
    };

    const addProduct = async () => {
        if (!products.title.trim() || !products.sku || !products.price || !products.quantity) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/product`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
                },
                body: JSON.stringify(prod),
            });

            if (response.status === 200) {
                alert("Product added successfully");
                setShowAlert(true);
                reset();
            } else {
                alert("Error adding product");
            }
            const product = await response.json();
            setResponseProduct(product);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const addProductImage = async (e) => {
        e.preventDefault();

        if (products.images.length === 0) {
            alert("Please select an image for the product.");
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < products.images.length; i++) {
            formData.append('images', products.images[i]);
        }

        try {
            const response = await fetch(`${apiUrl}/api/upload`, {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": "Bearer " + token,
                },
            });

            if (response.status === 200) {
                const imageUrls = await response.json();
                alert("Product images uploaded successfully");
                console.log("Image URLs:", imageUrls);

                // Update state with image URLs
                setProd({ ...products, images: imageUrls });
            } else {
                alert("Error uploading product images");
            }
            setFormSubmitted(true);
        } catch (error) {
            console.error("Error uploading product images:", error);
        }
    };
    // This useEffect will be triggered whenever 'prod' is updated
    useEffect(() => {
        if (formSubmitted && prod !== null) {
            addProduct();
        }
    }, [formSubmitted, prod]);

    const handleCategorySelect = (selectedCategory) => {
        setProducts({
            ...products,
            category: selectedCategory,
        });
    };

    const reset = () => {
        setProducts({
            title: "",
            sku: "",
            description: "",
            price: "",
            images: [null],
            brand: "",
            quantity: "",
            sold: "",
            category: "",
            color: "",
            ratings: [
                {
                    star: "",
                    comment: ""
                }
            ]
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/category`);
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <div className="for-all px-7 pt-32 pb-7">
            <h2 className="font-medium text-[28px]">Add Products</h2>
            <div className="flex gap-2 items-center">
                <Link className="text-gray-400 font-medium text-[13px] hover:text-primary" href="/">Home</Link>
                <span className="bg-gray-400 mx-1 w-1 h-1 rounded-full"></span>
                <h4 className="text-gray-400 font-medium text-[13px]">Add Product</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-addProduct grid-rows-1 mt-10 px-5 md:px-20 gap-5">
                <div className="bg-white p-8 w-auto h-fit rounded-ROne mb-5">
                    <h4 className="font-medium text-lg">General</h4>
                    <div className="flex flex-col items-center justify-start">
                        {/*title*/}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                value={products.title}
                                placeholder="Name"
                                onChange={(event) => handleChange(event, 'title')}
                            />
                        </div>
                        {/*sku*/}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Sku</Label>
                            <Input
                                type="text"
                                value={products.sku}
                                placeholder="5520"
                                onChange={(event) => handleChange(event, 'sku')}
                            />
                        </div>
                        {/**Price */}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="currentPrice">Price</Label>
                            <Input
                                type="text"
                                value={products.price}
                                placeholder="price"
                                onChange={(event) => handleChange(event, 'price')}
                            />
                        </div>
                        {/**Sold */}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="sku">Sold</Label>
                            <Input
                                type="text"
                                value={products.sold}
                                placeholder="Sold"
                                onChange={(event) => handleChange(event, 'sold')}
                            />
                        </div>
                        {/**Qty */}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                                type="text"
                                value={products.quantity}
                                placeholder="Quantity"
                                onChange={(event) => handleChange(event, 'quantity')}
                            />
                        </div>
                        {/**Brand */}
                        <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="brand">Brand</Label>
                            <Input
                                type="text"
                                value={products.brand}
                                placeholder="Brand"
                                onChange={(event) => handleChange(event, 'brand')}
                            />
                        </div>
                    </div>
                    {/**button */}
                    <div className="mt-8 hidden md:grid">
                        <Button onClick={(e) => {
                            addProductImage(e);
                        }}>Add Product</Button>
                    </div>
                    <div className="absolute left-[45%] top-[10%]">
                        {showAlert && <AlertShowing showAlert={showAlert} />}
                    </div>
                </div>
                {/*////////////// */}
                {/*////////////// */}
                <div className="bg-white p-8 w-[370px] h-fit rounded-ROne">
                    {/**image multi */}
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="photo">Picture</Label>
                        <Input
                            id="photo"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                    </div>
                    {/**category */}
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="category">Category</Label>
                        <Select
                            defaultValue={products.category}
                            onValueChange={handleCategorySelect}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((item) => (
                                    <SelectItem
                                        key={item._id}
                                        value={item.title}
                                    >
                                        {item.title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {/** hex color*/}
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="color">Color</Label>
                        <Input
                            type="text"
                            value={products.color}
                            placeholder="#FFFFFF"
                            onChange={(event) => handleChange(event, 'color')}
                        />
                    </div>
                    {/**description */}
                    <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            value={products.description}
                            onChange={(event) => handleChange(event, 'description')}
                            placeholder="Description"
                            className="w-full h-32 border-gray-300 border rounded-ROne p-2 focus:outline-primary"
                        />
                    </div>
                    {/**button */}
                    <div className="mt-8 grid md:hidden">
                        <Button onClick={(e) => {
                            addProductImage(e);
                        }}>Add Product</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
