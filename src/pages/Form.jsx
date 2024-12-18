import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


const formSchema = z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    details: z.string(),
    capacity: z.number().or(z.string()),
    dimensions_b: z.number().or(z.string()),
    dimensions_l: z.number().or(z.string()),
    dimensions_h: z.number().or(z.string()),
    weight: z.number().or(z.string()),
    p_material: z.string(),
    s_material: z.string().min(),
    color: z.string(),
    mechanism: z.string().min(),
    style: z.string().min(),
    productype: z.string().min(),
    images: z.string(),
    video: z.string(),
});

const ExampleFormPage = () => {
    const [files, setFiles] = useState([])
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            category: "",
            details: "",
            capacity: "",
            dimensions_b: '',
            dimensions_l: '',
            dimensions_h: '',
            weight: "",
            p_material: "",
            s_material: "",
            color: "",
            mechanism: "",
            style: "",
            productype: "",
            images: "",
            video: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="max-w-3xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Product Information</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Name */}
                    <FormField
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter product name"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Description</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter product description"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Category</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter product category"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="details"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Details</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter product Details"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="capacity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Capacity</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter product capacity"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="space-y-3"><FormLabel>Product Dimensions :</FormLabel>
                        <div className="flex gap-2">
                            <div className="w-full">
                                <FormField
                                    name="dimensions_b"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className="text-gray-600">breadth</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type='number'
                                                    placeholder="000"
                                                    className="border rounded-md p-2 w-full"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    name="dimensions_l"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className="text-gray-600">Length</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type='number'
                                                    placeholder="000"
                                                    className="border rounded-md p-2 w-full"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    name="dimensions_h"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className="text-gray-600">Heigth</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type='number'
                                                    placeholder="000"
                                                    className="border rounded-md p-2 w-full"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <FormField
                        name="weight"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Weight</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="000"
                                        type='number'
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="space-y-3">
                        <FormLabel>Product material :</FormLabel>

                        <div className="flex gap-2">
                            <div className="w-full">
                                <FormField
                                    name="p_material"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className="text-gray-600">Primary material</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder=""
                                                    className="border rounded-md p-2 w-full"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    name="s_material"
                                    render={({ field }) => (
                                        <FormItem className="">
                                            <FormLabel className="text-gray-600">Secondary material</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder=""
                                                    className="border rounded-md p-2 w-full"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <FormField
                        name="color"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Material Color</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter material color"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="mechanism"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mechanism</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter mechanism"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="style"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Style</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter Style"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Age */}
                    <FormField
                        name="productype"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Type</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter Product Type"
                                        className="border rounded-md p-2 w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="images"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Images</FormLabel>
                                <FormControl>
                                    <FilePond
                                        {...field}
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" 
                                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full rounded-md py-2 "
                    >
                        Submit
                    </Button>
                </form>
            </Form>

        </div>
    );
};

export default ExampleFormPage;
