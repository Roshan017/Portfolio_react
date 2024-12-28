import { useState } from "react";

// Utility to simulate a delay
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const OnSubmit = () => {
  const [Loading, SetLoading] = useState(false);
  const [res, SetRes] = useState(null);

  const submit = async (url, data) => {
    console.log("Data being submitted:", data);
    const rand = Math.random();
    SetLoading(true);
    try {
      await wait(2000);
      if (rand < 0.5) {
        throw new Error("Something Went Wrong");
      }

      SetRes({
        type: "success",
        message: `Thanks for Submitting ${data.firstName}, We will contact you shortly`,
      });
    } catch (e) {
      SetRes({
        type: "error",
        message: "Something went wrong, Please try again",
      });
    } finally {
      SetLoading(false);
    }
  };

  return { Loading, res, submit };
};

export default OnSubmit;
