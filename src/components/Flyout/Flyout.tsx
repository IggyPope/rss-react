import { useEffect, useState } from 'react';

import { useThemeContext } from '@/context/hooks';
import { useDownloadCharacters } from '@/hooks/useDownloadCharacters';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetSelection } from '@/store/slices/selectionSlice';

import { Button } from '../ui/Button';
import styles from './Flyout.module.scss';

export const Flyout = () => {
  const { theme } = useThemeContext();

  const selectedCharacters = useAppSelector(
    (state) => state.selection.selectedCharacters,
  );

  const dispatch = useAppDispatch();

  const [isMinimized, setIsMinimized] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (isHidden && selectedCharacters.length > 0) {
      setIsHidden(false);
    } else if (!isHidden && selectedCharacters.length === 0) {
      setIsHidden(true);
      setIsMinimized(false);
    }
  }, [isHidden, selectedCharacters.length]);

  const downloadCsv = useDownloadCharacters();

  return (
    <div
      className={[
        styles.flyout,
        theme === 'light' ? styles.light : null,
        isMinimized ? styles.minimized : null,
        isHidden ? styles.hidden : null,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {isMinimized ? (
        <button className={styles.gear} onClick={() => setIsMinimized(false)}>
          ⚙
        </button>
      ) : (
        <>
          <button className={styles.close} onClick={() => setIsMinimized(true)}>
            ✖
          </button>
          <p>{selectedCharacters.length} characters selected</p>
          <div className={styles.buttons}>
            <Button onClick={() => dispatch(resetSelection())}>
              Unselect all
            </Button>
            <Button onClick={downloadCsv}>Download</Button>
          </div>
        </>
      )}
    </div>
  );
};
