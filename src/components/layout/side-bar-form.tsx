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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { DeleteIcon, TrashIcon } from "lucide-react";

type SideBarFormProps = {
    title: string;
    children: ReactNode;
    onSave?: () => void;
    isLoading: boolean;
    onDelete?: () => void;
}

export function SideBarForm({
    title,
    children,
    onSave,
    isLoading,
    onDelete
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
            <div className="px-6">
                {children}
            </div>

            <SheetFooter>
                <div className="flex flex-row gap-2">

                    <Button
                        type="button"
                        onClick={onSave}
                        disabled={isLoading}
                    >
                        Salvar
                    </Button>
                    <SheetClose asChild>
                        <Button variant="outline" disabled={isLoading}>
                            Cancelar
                        </Button>
                    </SheetClose>

                    {onDelete &&
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={onDelete}
                                    disabled={isLoading}
                                    variant="destructive"
                                    >
                                    <TrashIcon />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Remover Registro</p>
                            </TooltipContent>
                        </Tooltip>
                    }
                </div>
            </SheetFooter>
        </SheetContent>
    </Sheet>
    )
}