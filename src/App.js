import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import { useTranslation } from "react-i18next";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from "./i18n";
import Profile from "./components/Profile";
import "./App.scss";
import About from "./pages/About/About";
import Works from "./pages/Works/Works";
import Contacts from "./pages/Contacts/Contacts";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
    const { t } = useTranslation();
    const [language, setLanguage] = useLocalStorage("language", "en");
    console.log('language',language)
    const handlerLanguageChange = (selectedLanguage) => {
        i18n.changeLanguage(selectedLanguage);
        setLanguage(selectedLanguage);
    };

    return (
        <div className="general__page">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/demo" element={<ProjectPage />} />
                    <Route path="/demo/:id" element={<ProjectPage />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
