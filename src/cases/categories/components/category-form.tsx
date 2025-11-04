import { SideBarForm } from "@/components/layout/side-bar-form";
import { useNavigate, useParams } from "react-router-dom";
import { useCategoryById, useCreateCategory, useDeleteCategory, useUpdateCategory } from "../hooks/use-category";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const categoryFormSchema = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 3 caracteres").max(60, "O nome deve ter no máximo 60 caracteres"),
});

export function CategoryForm() {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useCategoryById(id ?? "");

    const navigate = useNavigate();

    const createCategory = useCreateCategory();
    const updateCategory = useUpdateCategory()
    const deleteCategory = useDeleteCategory();

    const form = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        defaultValues: {
            name: data?.name ?? "",
        },
    });

    useEffect(() => {
        if (data) {
            form.reset({
                name: data.name,
            });
        }
    }, [data, form])
    
    function onSubmit(value: z.infer<typeof categoryFormSchema>) {
        if (id) {
            updateCategory.mutate({
                id,
                category: {
                    name: value.name,
                }
            },{
                onSettled: () => {
                    navigate('/categories');
                }
            });
        } else {
            createCategory.mutate({
                name: value.name,
            },{
                onSettled: () => {
                    navigate('/categories');
                }
            }
        ); 
        }
    }


    function onDelete() {
        if (id) {
            deleteCategory.mutate(id, {
                onSettled: () => {
                    navigate('/categories');
                }
            });
        }
    }

    return (
        <SideBarForm 
            {...(id && {onDelete: onDelete})}
            isLoading={isLoading}
            title={id ? "Atualizar Categoria" : "Cadastro de Categoria" }
            onSave={form.handleSubmit(onSubmit)}
        >
            <Form {...form}>
                <form className="space-y-4 ">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome</FormLabel>
                            <FormControl>
                                <Input placeholder="Nome..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </form>
            </Form>
        </SideBarForm>
    )
}