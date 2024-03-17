import Link from 'next/link';
import { Button } from 'src/components/Button';
import { css } from 'styled-system/css';
import { vstack } from 'styled-system/patterns';

export default async function RegularExpenditure() {
  return (
    <div
      className={vstack({
        position: 'relative',
        height: '100%',
        justify: 'center',
        pb: 72,
      })}
    >
      <EmptyView />
      <div
        className={css({
          position: 'absolute',
          bottom: 20,
          px: 20,
          width: '100%',
        })}
      >
        <Button asChild>
          <Link href="/">추가하기</Link>
        </Button>
      </div>
    </div>
  );
}

function EmptyView() {
  return (
    <div>
      <div
        className={css({
          fontSize: 80,
        })}
      >
        ✨
      </div>
      <p
        className={css({
          textStyle: 'Body_14_B',
          color: 'gray10',
          whiteSpace: 'pre',
          textAlign: 'center',
        })}
      >
        고정지출을 추가하고{'\n'}매달 간편하게 지출을 기입하세요!
      </p>
    </div>
  );
}
