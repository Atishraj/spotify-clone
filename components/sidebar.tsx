    "use client"
    import {usePathname} from "next/navigation" ;
    import { useMemo,useState,useEffect } from "react";
    import Box from "./box";
    import SideBarItem from "./sidebarItem";
    interface SideBarProps {
    children: React.ReactNode;
    }
    const SideBar : React.FC<SideBarProps> = ({
        children
    })=>{
        const [isClient, setIsClient] = useState(false)
        useEffect(() => {
            setIsClient(true)
        }, [])
        const pathname = usePathname();
        const routes = useMemo(() => [
            {
                lable :'Home',
                active : pathname !== '/search',
                href:'/',
            },
            {
                lable :'Search',
                active : pathname === '/search',
                href:'/search',
            }
        ], [pathname])
        return (
            <div>
              <div 
                className="
                  hidden 
                  md:flex 
                  flex-col 
                  gap-y-2 
                  bg-black 
                  h-full 
                  w-[300px] 
                  p-2
                "
              >
                <Box>
                  <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (
                      <SideBarItem key={item.lable} {...item} />
                    ))}
                  </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                  {/* <Library songs={songs} /> */}
                </Box>
              </div>
              <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
              </main>
            </div>
          );
    }
    export default SideBar;