import * as React from "react"
import { GalleryVerticalEnd, User } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Avatar } from "../ui/avatar"

const chatList = [
    {
        title: "chat-1",
        url: "#",
    },
    {
        title: "chat-2",
        url: "#",
        isActive: true,
    },
    {
        title: "chat-3",
        url: "#",
    },
    {
        title: "chat-4",
        url: "#",
    },
    {
        title: "chat-5",
        url: "#",
    }
]
// This is sample data.
const data = {
    navMain: [
        {
            title: "New chat",
            url: "#"
        },
        {
            title: "HISTORY",
            items: chatList,

        },
    ],
}

export function ChatSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (

        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                {/* OUR LOGO */}
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <div className="flex items-center justify-center px-4 py-2 gap-6">
                                <User />
                                <div className="text-lg font-semibold text-center uppercase">the wolfs</div>

                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <SidebarGroupContent>

                        <SidebarMenu className="gap-2">
                            {data.navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url} className="font-medium">
                                            {item.title}
                                        </a>
                                    </SidebarMenuButton>
                                    {item.items?.length ? (
                                        <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                                            {item.items.map((item) => (
                                                <SidebarMenuSubItem key={item.title}>
                                                    <SidebarMenuSubButton asChild isActive={item.isActive}>
                                                        <a href={item.url}>{item.title}</a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            ))}
                                        </SidebarMenuSub>
                                    ) : null}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
