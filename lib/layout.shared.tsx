import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { BluetoothIcon, Flame, Layers, Layers2Icon } from 'lucide-react';
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center">
       
          <Layers className=" size-4.5 mr-2 text-white" />
      
          <span className="hidden md:inline-flex items-center text-lg  tracking-tight text-black dark:text-white">
            Buttoncn
          </span>
        </div>
      ),
    },
   
  };
}