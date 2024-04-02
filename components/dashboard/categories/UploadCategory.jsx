import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import AlertShowing from "../AlertShowing";

const UploadCategory = ({ responseName, setResponseName }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const token = useState(localStorage.getItem("token"));
    const [showAlert, setShowAlert] = useState(false);
    const [categoryData, setCategoryData] = useState({
        title: "",
        link: "",
        productGroups: [
            {
                groupTitle: "",
                products: [{ title: "", link: "" }]
            }
        ]
    });
    const fetchUrl = `${apiUrl}/api/category`;

    const handleChange = (event, groupIndex, productIndex) => {
        const { name, value } = event.target;
        if (groupIndex !== undefined && productIndex !== undefined) {
            const newProductGroups = categoryData.productGroups.map((group, i) => {
                if (i === groupIndex) {
                    const newProducts = group.products.map((product, j) => {
                        if (j === productIndex) {
                            return { ...product, [name]: value };
                        }
                        return product;
                    });
                    return { ...group, products: newProducts };
                }
                return group;
            });
            setCategoryData({ ...categoryData, productGroups: newProductGroups });
        } else if (groupIndex !== undefined) {
            const newProductGroups = categoryData.productGroups.map((group, i) => {
                if (i === groupIndex) {
                    return { ...group, [name]: value };
                }
                return group;
            });
            setCategoryData({ ...categoryData, productGroups: newProductGroups });
        } else {
            setCategoryData({ ...categoryData, [name]: value });
        }
    };

    const addProductGroup = () => {
        setCategoryData({
            ...categoryData,
            productGroups: [...categoryData.productGroups, { groupTitle: "", products: [{ title: "", link: "" }] }]
        });
    };

    const addProduct = (groupIndex) => {
        const newProductGroups = categoryData.productGroups.map((group, i) => {
            if (i === groupIndex) {
                return { ...group, products: [...group.products, { title: "", link: "" }] };
            }
            return group;
        });
        setCategoryData({ ...categoryData, productGroups: newProductGroups });
    };

    const saveCategory = async (e) => {
        e.preventDefault();

        if (!categoryData.title.trim() || !categoryData.link.trim() || categoryData.productGroups.some(group => !group.groupTitle.trim() || group.products.some(product => !product.title.trim() || !product.link.trim()))) {
            alert('Please fill all fields.');
            return;
        }
        try {
            const response = await fetch(fetchUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token[0],
                },
                body: JSON.stringify(categoryData),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            const newCategory = await response.json();
            setResponseName(newCategory);
            setShowAlert(true);
            reset();
        } catch (error) {
            console.error("Error creating category:", error.message);
            // Handle the error (e.g., display an error message to the user)
        }
    };

    const reset = () => {
        setCategoryData({
            title: "",
            link: "",
            productGroups: [
                {
                    groupTitle: "",
                    products: [{ title: "", link: "" }]
                }
            ]
        });
    };

    return (
        <div className="bg-white p-8 w-[370px] h-fit rounded-ROne mb-5">
            <h4 className="font-medium text-lg">Add Category</h4>
            <div className="flex flex-col items-center justify-start">
                <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="title">Category Name</Label>
                    <Input
                        type="text"
                        name="title"
                        value={categoryData.title}
                        placeholder="Category Name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="mt-8 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="link">Category Link</Label>
                    <Input
                        type="text"
                        name="link"
                        value={categoryData.link}
                        placeholder="Category Link"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                {categoryData.productGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="mt-8 w-full">
                        <Label htmlFor={`groupTitle-${groupIndex}`}>Group Title</Label>
                        <Input
                            type="text"
                            name="groupTitle"
                            value={group.groupTitle}
                            placeholder="Group Title"
                            onChange={(e) => handleChange(e, groupIndex)}
                        />
                        {group.products.map((product, productIndex) => (
                            <div key={productIndex} className="mt-4 grid space-y-3 w-full max-w-sm items-center gap-1.5">
                                <div>
                                    <Label htmlFor={`productTitle-${groupIndex}-${productIndex}`}>Product Title</Label>
                                    <Input
                                        type="text"
                                        name="title"
                                        value={product.title}
                                        placeholder="Product Title"
                                        onChange={(e) => handleChange(e, groupIndex, productIndex)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor={`productLink-${groupIndex}-${productIndex}`}>Product Link</Label>
                                    <Input
                                        type="text"
                                        name="link"
                                        value={product.link}
                                        placeholder="Product Link"
                                        onChange={(e) => handleChange(e, groupIndex, productIndex)}
                                    />
                                </div>
                            </div>
                        ))}
                        <Button className="bg-black text-white mt-4 w-full" onClick={() => addProduct(groupIndex)}>Add Product</Button>
                    </div>
                ))}
                <Button className="bg-black text-white mt-4 w-full" onClick={addProductGroup}>Add Product Group</Button>
                <Button className="bg-primary text-white mt-4 w-full" onClick={saveCategory}>Save Category</Button>
            </div>
            {showAlert && <AlertShowing showAlert={showAlert} />}
        </div>
    );
};

export default UploadCategory;