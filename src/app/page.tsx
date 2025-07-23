import Image from "next/image";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ChatSidebar } from "@/components/chat/chat-sidebar";
import ChatBox from "@/components/chat/chat-chatbox";
import ChatKnowledgeBase from "@/components/chat/chat-knowledgebase";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <SidebarProvider>
          {/* SIDEBAR */}
          <ChatSidebar />

          {/* CHATBOX */}
          <SidebarInset className="h-screen">
  
            <div className="grid grid-cols-4 h-full">
              <div className="col-span-3">
                <ChatBox />
              </div>
              <div className="col-span-1">
                <ChatKnowledgeBase />
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>

      </main>
    </div>
  );
}
