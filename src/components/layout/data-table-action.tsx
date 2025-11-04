import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DeleteIcon, EditIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface DataTableActionProps {
    id?: string | number;
}

export function DataTableAction({
    id
}: DataTableActionProps) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleNavigateToId() {
        const path = location.pathname;
        navigate(`${path}/${id}`);
    }

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button 
                    variant="outline"
                    size="icon"
                    onClick={handleNavigateToId}
                    >
                    <EditIcon />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Editar/remover registro</p>
            </TooltipContent>
        </Tooltip>
    )
}