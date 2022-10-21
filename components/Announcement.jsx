import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  display: none;
  font-size: 12px;
`;

const Announcement = () => {
  // const convertMsToHr = (ms) => {
  //   let sec = ms / 1000;
  //   let min = sec / 60;
  //   let hr = min / 60;
  //   return hr;
  // };
  const [display, setDisplay] = useState("none");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    if (date.toLocaleTimeString() >= "08:00:00 PM") {
      setDisplay("flex");
    }
    if (date.toLocaleTimeString() >= "09:00:00 AM") {
      setDisplay("none");
    }

    return function cleanup() {
      clearInterval(timer);
    };
  }, [date]);

  return (
    <Container style={{ display: display }}>
      Close right now. We open at 9AM everyday!
    </Container>
  );
};

export default Announcement;
