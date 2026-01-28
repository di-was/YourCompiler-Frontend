"use client";

import { useState } from "react";
import Editor from "@/components/Editor/Editor";
import Navbar from "@/components/Navbar/Navbar";
import OutputPanel from "@/components/OutputPanel/OutputPanel";
import {Group, Panel, Separator} from "react-resizable-panels";


export default function Home() {
  const [navbarLayout, setNavbarLayout] = useState<[number, number]>([55, 45])

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900">
      <Navbar layout={navbarLayout} />
      
      <div className="flex-[9]">
        <Group orientation="horizontal" className="h-full w-full" onLayoutChange={(size) => 
         {
            const values = Object.values(size) as number[];
            setNavbarLayout([values[0], values[1]])
            
        }}>
            <Panel defaultSize={600} minSize={400}>
              <Editor />
            </Panel>  

            <Separator className="w-1 bg-gray-800 hover:bg-gray-600 cursor-col-resize" />
            
            <Panel defaultSize={500} minSize={200}>
              <OutputPanel/>
            </Panel>
        </Group>
      </div>
      
    </div>
  );
}

