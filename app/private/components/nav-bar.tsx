'use client'

import {logout} from "@/app/login/actions";

import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function NavBar(props: any) {
    return (
        <div className={"flex flex-row justify-between"}>
            <div className={"flex flex-row gap-5"}>
                <div className={"bg-white rounded-full p-2 w-fit"}>
                    <Bars3CenterLeftIcon className={"size-6 text-blue-500"}/>
                </div>
                <div className={"bg-white rounded-full p-2 w-fit"}>
                    <DocumentArrowUpIcon className={"size-6 text-blue-500"}/>
                </div>
                <div className={"flex flex-col justify-center"}>
                    <p className={"text-sm font-bold"}>MVP App</p>
                    <p className={"text-sm text-[#B2B2B2]"}>Dashboard</p>
                </div>
            </div>
            <div className={"w-[40%] flex flex-row items-center"}>
                <div className={"bg-white rounded-l-xl p-2.5 w-fit"}>
                    <MagnifyingGlassIcon className={"size-5 text-black"} />
                </div>
                <input className={"w-full h-full rounded-r-xl text-xs px-2"}
                       type={"search"} placeholder={"Search Task"} />
            </div>
            <div className={"flex flex-row gap-5"}>
                <div className={"bg-white rounded-full p-2 w-fit"}>
                    <BellIcon className={"size-6 text-black"}/>
                </div>
                <div className={"flex flex-row gap-2"}>
                    <img className="inline-block h-10 w-10 rounded-full"
                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                         alt=""/>
                    <div className={"flex flex-col justify-center"}>
                        <p className={"text-sm font-bold"}>John Doe</p>
                        <p className={"text-xs text-[#B2B2B2]"}>User</p>
                    </div>
                    <form action={logout}>
                        <button className={"rounded-full p-2 w-fit"} type={"submit"}>
                            <ArrowRightStartOnRectangleIcon className={"size-6 text-black"}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}