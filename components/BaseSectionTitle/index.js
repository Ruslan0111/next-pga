import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function BaseSectionTitle({
  titleSmall,
  titleBig,
  titleBigColor = '#061331',
  titleSmallColor = '#717171',
  borderColor = '#FFA206'
}) {
  const { t } = useTranslation();

  return (
    <h2 style={{color: titleBigColor, borderColor: borderColor}} className={`${styles.base__section__title} pn-bold`}>
      <span style={{color: titleSmallColor}} className="pn-light text-sm">{ t(titleSmall) }</span>
      { t(titleBig) }
    </h2>
  )
}

export default BaseSectionTitle;