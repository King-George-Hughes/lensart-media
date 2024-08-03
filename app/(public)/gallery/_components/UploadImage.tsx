"use client";

import { Button } from "@/components/ui/button";
import React, { createContext, useEffect, useState } from "react";

// Define the context to manage the script loading state
interface CloudinaryScriptContextProps {
  loaded: boolean;
}

const CloudinaryScriptContext =
  createContext<CloudinaryScriptContextProps | null>(null);

interface UploadWidgetProps {
  uwConfig: any; // You may replace 'any' with a more specific type based on Cloudinary's widget configuration
  setPublicId?: (id: string) => void;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

declare global {
  interface Window {
    cloudinary: any; // You can create a more specific type for Cloudinary if needed
  }
}

const UploadWidget: React.FC<UploadWidgetProps> = ({
  uwConfig,
  setPublicId,
  setState,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev) => [...prev, result.info.secure_url]);
            if (setPublicId) setPublicId(result.info.public_id);
          }
        },
      );

      const uploadButton = document.getElementById("upload_widget");
      if (uploadButton) {
        uploadButton.addEventListener(
          "click",
          () => {
            myWidget.open();
          },
          false,
        );
      }
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <Button
        size={"sm"}
        id="upload_widget"
        onClick={initializeCloudinaryWidget}
      >
        Upload Images
      </Button>
    </CloudinaryScriptContext.Provider>
  );
};

export default UploadWidget;

export { CloudinaryScriptContext };
