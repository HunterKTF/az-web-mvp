import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

import NavBar from "./components/nav-bar";
import Titles from "./components/titles";

export default async function PrivatePage() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <div className={"w-screen h-screen flex flex-col items-center"}>
            <nav className={"w-full h-fit px-5 py-8 bg-[#F6F6F6]"}>
                <NavBar {...data.user} />
            </nav>
            <header className={"w-full h-fit px-5 py-8 bg-[#F6F6F6]"}>
                <Titles />
            </header>
            <section className={"w-full h-full p-4 flex flex-col gap-4"}>

                <div className={"w-full h-[45%] gap-4 flex flex-row"}>
                    <div className={"w-[75%] h-full bg-[#F6F6F6] rounded-xl"}>
                        Reporting
                    </div>
                    <div className={"w-full h-full bg-[#F6F6F6] rounded-xl"}>
                        Monthly Income
                    </div>
                </div>

                <div className={"w-full h-full gap-4 flex flex-row"}>
                    <div className={"w-[30%] h-full gap-4 flex flex-col"}>
                        <div className={"w-full h-[70%] bg-[#F6F6F6] rounded-2xl"}>
                            Bank
                        </div>
                        <div className={"w-full h-[30%] bg-[#F6F6F6] rounded-2xl"}>
                            Sales
                        </div>
                    </div>
                    <div className={"w-[20%] h-full gap-4 flex flex-col"}>
                        <div className={"w-full h-[50%] bg-[#F6F6F6] rounded-2xl"}>
                            Business Plans
                        </div>
                        <div className={"w-full h-[50%] bg-[#F6F6F6] rounded-2xl"}>
                            Traffic Status
                        </div>
                    </div>
                    <div className={"w-[25%] h-full gap-4 flex flex-col bg-[#F6F6F6] rounded-2xl"}>
                        Traffic Status
                    </div>
                    <div className={"w-[25%] h-full gap-4 flex flex-col"}>
                        <div className={"w-full h-[50%] bg-[#F6F6F6] rounded-2xl"}>
                            Total Income
                        </div>
                        <div className={"w-full h-[50%] bg-[#F6F6F6] rounded-2xl"}>
                            Stock Product
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}