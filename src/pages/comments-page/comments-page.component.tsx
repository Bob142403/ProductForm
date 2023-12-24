import { useEffect, useState } from "react";
import { commentApi } from "../../api/comment";
import { Avatar, Skeleton, Typography } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import TextArea from "antd/es/input/TextArea";

const { Text, Paragraph } = Typography;

// const messageDate = (date: Date): string => {
//   const monthes = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const month = monthes[date.getMonth()];
//   const day = date.getDate();
//   const hours = date.getHours();
//   const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
//   return month + " " + day + ", " + hours + ":" + minutes;
// };

export const CommentsPage = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  //   const [comment, setComment] = useState<string>("");

  useEffect(() => {
    getComments();
  }, []);

  async function getComments() {
    setLoading(true);
    const data = await commentApi.getComments();
    setComments(data.comments);
    setLoading(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      {loading ? (
        <>
          <Skeleton active avatar paragraph={{ rows: 3 }} />
          <Skeleton active avatar paragraph={{ rows: 3 }} />
          <Skeleton active avatar paragraph={{ rows: 3 }} />
          <Skeleton active avatar paragraph={{ rows: 3 }} />
        </>
      ) : (
        <>
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
                >
                  {comment.username[0]}
                </Avatar>

                <Text>{comment.username}</Text>

                {/* <Text type="secondary">
              {messageDate(new Date(+comment.createat))}
            </Text> */}
              </div>
              <Paragraph style={{ marginLeft: "42px" }}>
                {comment.message}
              </Paragraph>
            </div>
          ))}
        </>
      )}
      {/* <TextArea
        placeholder="Comment"
        value={comment}
        onChange={(elem) => setComment(elem.target.value)}
        autoSize
        style={{ marginBottom: "20px" }}
      /> */}
    </div>
  );
};
