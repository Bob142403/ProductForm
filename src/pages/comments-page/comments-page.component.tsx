import { useEffect, useState } from "react";
import { Avatar, Skeleton, Typography } from "antd";

import { commentApi } from "../../api/comment";
import styles from "./comments-page.style.module.css";

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
    <div className={styles.wrapper}>
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
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentInfo}>
                <Avatar className={styles.avatar}>{comment.username[0]}</Avatar>
                <Text>{comment.username}</Text>
              </div>
              <Paragraph style={{ marginLeft: "40px" }}>
                {comment.message}
              </Paragraph>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
