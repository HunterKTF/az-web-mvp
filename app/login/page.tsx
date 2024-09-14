import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <section className={"w-screen h-screen flex flex-auto justify-center items-center"}>
            <form className={"flex flex-col gap-9 p-10 bg-[#F6F6F6] rounded-xl shadow-xl shadow-neutral-400"}>
                <h2 className={"text-4xl"}>Login</h2>
                <div className={"flex flex-col gap-3"}>
                    <label htmlFor="email">Email:</label>
                    <input className={"w-[300px] h-[35px] px-2 border border-black rounded-xl"}
                           id="email" name="email" type="email" required/>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <label htmlFor="password">Password:</label>
                    <input className={"w-[300px] h-[35px] px-2 border border-black rounded-xl"}
                           id="password" name="password" type="password" required/>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <button className={"bg-[#1F60EE] w-[300px] h-[35px] text-white rounded-xl"}
                            formAction={login}>Log in
                    </button>
                    <button className={" border border-[#1F60EE] w-[300px] h-[35px] text-[#1F60EE] rounded-xl"}
                            formAction={signup}>Sign up
                    </button>
                </div>
            </form>
        </section>
    )
}