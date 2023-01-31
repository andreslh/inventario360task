import React from 'react';
import { isFavorite } from '../../app/utils/favorites';
import { parseEntity } from '../../app/utils/parsers';
import { isPost } from '../../app/utils/posts';
import { Comment, Post } from '../../features/Posts/postsSlice';
import { Album, User } from '../../features/Users/usersSlice';

import activeStar from '../Grid/icon_star.png';
import inactiveStar from '../Grid/icon_star_inactive.png';
import closeIcon from './icon_close.svg';

import styles from './Modal.module.css';

interface IModalProps {
  item?: Post | User;
  comments?: Comment[];
  albums?: Album[];
  onClose: () => void;
}

export function Modal(props: IModalProps) {
  const isPostItem = isPost(props.item);
  const content = parseEntity(props.item);

  const favoriteIcon = (id?: string) => {
    const entity = isPostItem ? 'posts' : 'users';
    return isFavorite(entity, id) ? activeStar : inactiveStar;
  };

  const commentsContent: JSX.Element[] = [];
  props.comments?.forEach((comment) => {
    commentsContent.push(
      <p className={styles.comment} key={comment.id}>
        <span className={styles['comment-number']}>
          {comment.id.padStart(2, '0')}
        </span>
        <span className={styles['comment-text']}>{comment.body}</span>
      </p>
    );
  });

  const albumsContent: JSX.Element[] = [];
  props.albums?.forEach((album) => {
    albumsContent.push(
      <img
        className={styles.album}
        src={album.image}
        alt={album.title}
        title={album.title}
        key={album.id}
      />
    );
  });

  console.log(props.item);
  return (
    <div className={styles.Modal}>
      <div className={styles['modal-content']}>
        <div className={styles['modal-header']}>
          <div>
            <h2>{content.name}</h2>
            <div className={styles['header-detail']}>
              <img src={favoriteIcon(props.item?.id)} alt='Favorite' />
              <span className={styles.id}>ID: {props.item?.id}</span>{' '}
              <span>
                / {content.detailPrefix}
                {content.detail}
              </span>
            </div>
          </div>
          <div>
            <img
              src={closeIcon}
              alt='Close'
              onClick={() => props.onClose()}
              className={styles['modal-close']}
            />
          </div>
        </div>
        <div className={styles['modal-body']}>
          <div className={styles['body-content']}>{content.body}</div>
          <div className={styles['body-details']}>
            {isPostItem ? (
              <>
                <h3 className={styles['comments-title']}>
                  Comments <span>({props.comments?.length})</span>
                </h3>
                {commentsContent}
              </>
            ) : (
              <>
                <h3 className={styles['comments-title']}>
                  Albums <span>({props.albums?.length})</span>
                </h3>
                {albumsContent}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
