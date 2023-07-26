
import { ReactElement, useEffect } from "react";
import NavBar from "./nav-bar";
import { useTranslation } from "react-i18next";

interface Layout {
    children: ReactElement;
}
function Layout({ children }: Layout) {
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("language") || "ar");
    }, [i18n]);

    return (
        <div dir={i18n.language === "ar" ? "rtl" : "ltr"} className=" bg-homeBackground bg-cover bg-no-repeat w-full h-screen">
            <NavBar />
            {children}
        </div>
    );
}

export default Layout;