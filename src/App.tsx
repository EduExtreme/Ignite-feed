import { Post, PostType } from "./components/Post";
import Header from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import Sidebar from "./components/Sidebar";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/eduextreme.png",
      name: "Eduardo Silva",
      role: "Web developer Front End Jr",
    },

    content: [
      { type: "paragraph ", content: "Fala galera" },
      {
        type: "paragraph ",
        content: "acabei de subir mais um projeto para o meu portifolio.",
      },
      { type: "paragraph ", content: "É um projeto que fiz no NLW Return" },
      { type: "link", content: "https://github.com/eduextreme" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/oRafael07.png",
      name: "Rafael",
      role: "Web developer Back End Jr",
    },

    content: [
      { type: "paragraph ", content: "Fala galera" },
      {
        type: "paragraph ",
        content: "acabei de subir mais um projeto para o meu portifolio.",
      },
      { type: "paragraph ", content: "É um projeto que fiz no NLW Return" },
      { type: "link", content: "https://github.com/oRafael07" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/moisesnetouou.png",
      name: "Moisés Neto",
      role: "Web developer Front End ",
    },

    content: [
      { type: "paragraph ", content: "Fala galera" },
      {
        type: "paragraph ",
        content: "acabei de subir mais um projeto para o meu portifolio.",
      },
      { type: "paragraph ", content: "É um projeto que fiz no NLW Return" },
      { type: "link", content: "https://github.com/moisesnetouou" },
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
];

export default function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
