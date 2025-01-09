"use client";
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "@/assets/CategoryPage/Header/rivexa-logo.svg";

const Index = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.allorigins.win/get?url=https://docs.rivexa.com/Code%20of%20Conduct.htm"
        );
        setData(response.data.contents);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data === null || data === undefined) {
    return <p>Loading...</p>;
  }

  const normalizedData = data.replace(/�/g, "");

  return (
    <main>
      <div>
        <div className="mt-20 p-4 flex justify-end">
          <img src={Logo.src} alt="Description" />
        </div>
        <div
          className="m-2 -mt-7 p-4 "
          dangerouslySetInnerHTML={{ __html: normalizedData }}
        />
      </div>
    </main>
  );
};

export default Index;
