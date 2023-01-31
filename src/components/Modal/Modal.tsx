import React from 'react';
import { isFavorite } from '../../app/utils/favorites';
import { isPost, parseEntity } from '../../app/utils/posts';
import { Comment, Post } from '../../features/Posts/postsSlice';
import { User } from '../../features/Users/usersSlice';

import activeStar from '../Grid/icon_star.png';
import inactiveStar from '../Grid/icon_star_inactive.png';
import closeIcon from './icon_close.svg';

import styles from './Modal.module.css';

interface IModalProps {
  comments?: Comment[];
  item?: Post | User;
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
        <span className={styles['comment-number']}>{comment.id}</span>
        <span className={styles['comment-text']}>{comment.body}</span>
      </p>
    );
  });

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
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
