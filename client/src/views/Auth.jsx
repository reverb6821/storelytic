import { Outlet } from 'react-router-dom'
import AuthImg from '../assets/auth_bg.png'

const Auth = () => {
  return (
    <>
      <section className="h-screen w-full bg-white dark:bg-gray-800">
        <div className="px-6 h-full text-gray-800">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src={AuthImg}
                sizes={50}
                className="w-full"
                alt="Sample image"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Auth