import Overlay from '../Components/Header/provider/Overlay';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Sidebar/Sidebar';
import ContextProvider from '../Components/Header/provider/Context';

const style = {
    container: `gradient-bg-blue h-screen overflow-hidden relative`,
    mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
    main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};

const Main =({ children })=>{
    return (
        <ContextProvider>
          <div className={style.container}>
            <div className="flex items-start">
              <Overlay />
              <Sidebar mobilePosition="right" />
              <div className={style.mainContainer}>
                <Header />
                <main className={style.main}>{children}</main>
              </div>
            </div>
          </div>
        </ContextProvider>
      );
}

export default Main;