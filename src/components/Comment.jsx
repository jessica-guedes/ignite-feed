import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https:github.com/jakeliny.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jakeliny</strong>

              <time 
                title='22 de Março às 09:06h'
                dateTime='2023-03-22 09:06:00'>
                Cerca de 1h atrás
             </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}