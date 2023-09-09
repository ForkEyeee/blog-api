import { useEffect, useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import CardItem from "./cardItem";
const Home = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/posts");
        // console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const text = await response.text();
        // console.log(text);
        const data = JSON.parse(text);
        setMessage(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(message);
  return (
    <Box>
      {message.map(message => (
        <CardItem
          key={message._id}
          url={message._id}
          title={message.title}
          comments={message.comments}
          time={message.time}
          content={message.content}
          published={message.published}
        />
      ))}
    </Box>
  );
};

export default Home;
