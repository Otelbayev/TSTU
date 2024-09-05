import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const supportedLanguages = ["uz", "en", "ru"]; // Define supported languages
const defaultLanguage = "uz"; // Set default language

const LanguageRedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);

    // Check if the first segment is a language code
    const hasLanguagePrefix = supportedLanguages.includes(pathSegments[0]);

    if (!hasLanguagePrefix) {
      // Redirect to default language route (you can customize this logic)
      const newPath = `/${defaultLanguage}${currentPath}`;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null; // No UI needed for this component
};

export default LanguageRedirectHandler;
