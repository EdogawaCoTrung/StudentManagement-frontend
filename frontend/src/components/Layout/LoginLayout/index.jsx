import ButtonUsage from "../../share/Button";

export default function LogIn({ children }) {
    return (
        <div className="w-full h-full p-20 bg-gradient-to-b from-sky-300 to-sky-100">
        <div className="w-full h-full bg-white rounded-xl shadow-lg"> 
            <div className="md:w-1/2  h-full justify-left py-2 float-left grid place-items-center object-contain ">
                <img
                className="mx-auto h-auto w-auto flex flex-col "
                src="../src/images/Login.png"
                alt="Your Company"  
                />
            </div>
    
            <div className="md:w-1/2 h-full px-16 py-16 md:py-10 sm:mx-auto md:float-right grid place-items-center">
                <form className="space-y-6 w-full px-16 py-12 border-2 border-solid rounded-xl  bg-sky-100 font-sans shadow-lg" action="#" method="POST">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                        TÊN ĐĂNG NHẬP
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                                placeholder="Tên đăng nhập"
                            />
                        </div>
                    </div>
        
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" 
                                    className="block text-sm font-medium leading-6 text-gray-900">
                                MẬT KHẨU
                            </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 
                            ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                            placeholder="Mật khẩu"
                        />
                        </div>
                        <div>
                        <a href="#"
					    class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot Password?</a>
                        </div>
                    </div>

    
                    <div className="grid place-items-center">
                        <ButtonUsage
                            text="ĐĂNG NHẬP"
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-sky-400 px-3 py-1.5 text-sm font-semibold leading-6
                            text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  