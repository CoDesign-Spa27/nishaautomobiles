import React, { useState, useEffect } from "react";
import Location from "../components/Location";
import Appbar from "../components/Appbar";
import Footer from "../components/Footer";
import loader from "../assets/laoder.json";
import Lottie from "react-lottie-player";

const ContactUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading the Location component (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <Appbar />
      <main className="flex-grow mt-28 flex justify-center items-center">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Lottie animationData={loader}
             loop
             play
             style={{ width: 100, height: 100 }}
            />
          </div>
        ) : (
          <Location />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
