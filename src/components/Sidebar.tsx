import Avatar from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
        alt="avatar image"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/eduextreme.png" />
        <strong>Eduardo Silva</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
