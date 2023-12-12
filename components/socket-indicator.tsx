"use client"

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () =>{
    const { isConnected } = useSocket();

    if(!isConnected){
        return(
            <Badge variant="outline" className="bg-yellow-600 text-white border-none">
                Fallback: polling every 1s
            </Badge>
            // <>
            
            // <div className="bg-yellow-500 w-2.5 h-2.5 rounded-full ml-2 mr-2">

            // </div>
            // <span className="text-sm mr-2">Connecting...</span> 
            // </>
        )
    }
    return(
        <Badge variant="outline" className="bg-emerald-600 text-white border-none ">
            Live: Real-time updates
        </Badge>
        // <>
        
        // <div className="bg-emerald-500 w-2.5 h-2.5 rounded-full ml-2 mr-2">

        // </div>
        // <span className="text-sm mr-2">Online</span>
        // </>
    )
}
