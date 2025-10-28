import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type SideBarFormProps = {
    title: string;
    children: ReactNode;
    onSave: () => void;
}

export function SideBarForm({
    title,
    children,
    onSave
} : SideBarFormProps) {
    const navigate = useNavigate();
    const location = useLocation();

    function handleCloseForm(open: boolean) {
        if (!open) {
            const currentPath = location.pathname;
            const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
            navigate(parentPath);
        }
    }

    return (
    <Sheet open={true} onOpenChange={handleCloseForm}>
        <SheetContent>  
            <SheetHeader>
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>
                    Preencha os campos abaixo e clique em Salvar.
                </SheetDescription>
            </SheetHeader>

            {children}

            <SheetFooter>
                <div className="flex flex-row">

                    <Button
                        onClick={onSave}>
                        Salvar
                    </Button>

                    <SheetClose asChild>
                        <Button variant="outline" className="ml-2">
                            Cancelar
                        </Button>
                    </SheetClose>

                </div>
            </SheetFooter>
        </SheetContent>
    </Sheet>
    )
}