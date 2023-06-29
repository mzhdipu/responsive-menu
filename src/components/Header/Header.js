import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    const routers = [
        {'id' : 1, 'name': 'Home', 'path' : '/home'},
        {'id' : 2, 'name': 'About', 'path' : '/about'},
        {'id' : 3, 'name': 'Services', 'path' : '/services'},
        {'id' : 4, 'name': 'Blog', 'path' : '/blogs'},
        {'id' : 5, 'name': 'Contact', 'path' : '/contact'},
    ]
    return (
        <div>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden" >
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>           

            <ul className={`md:flex justify-center absolute md:static bg-orange-500 py-4 duration-500 ease-in-out ${open ? 'top-10': 'top-[-200px]'}`}>
                {
                    routers.map(router => <Link key={router.id} router={router}></Link>)
                }
            </ul>
        </div>
    );
};

export default Header;