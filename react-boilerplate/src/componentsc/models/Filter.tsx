import { FunctionComponent } from 'react';
import styles from './Filter.module.css';
import React from 'react';


const Filter:FunctionComponent = () => {
  	return (
    		<div className={styles.frameParent}>
      			<div className={styles.filtersParent}>
        				<b className={styles.filters}>Filters</b>
        				<img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Filters.svg" />
      			</div>
      			<div className={styles.frameChild} />
      			<div className={styles.frameGroup}>
        				<div className={styles.filtersParent}>
          					<div className={styles.filters}>T-shirts</div>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
        				</div>
        				<div className={styles.filtersParent}>
          					<div className={styles.filters}>Shorts</div>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
        				</div>
        				<div className={styles.filtersParent}>
          					<div className={styles.filters}>Shirts</div>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
        				</div>
        				<div className={styles.filtersParent}>
          					<div className={styles.filters}>Hoodie</div>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
        				</div>
        				<div className={styles.filtersParent}>
          					<div className={styles.filters}>Jeans</div>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
        				</div>
      			</div>
      			<div className={styles.frameChild} />
      			<div className={styles.frameContainer}>
        				<div className={styles.filtersParent}>
          					<b className={styles.filters}>Price</b>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-up.svg" />
        				</div>
        				<div className={styles.parent}>
          					<div className={styles.div}>$50</div>
          					<div className={styles.div1}>$200</div>
          					<img className={styles.groupChild} alt="" src="Group 6.svg" />
        				</div>
      			</div>
      			<div className={styles.frameChild} />
      			<div className={styles.frameContainer}>
        				<div className={styles.filtersParent}>
          					<b className={styles.filters}>Colors</b>
          					<img className={styles.frameIcon1} alt="" src="Frame.png" />
        				</div>
        				<div className={styles.frameParent1}>
          					<div className={styles.groupParent}>
            						<img className={styles.groupIcon} alt="" src="Group 8.svg" />
            						<div className={styles.ellipseDiv} />
            						<div className={styles.frameChild1} />
            						<div className={styles.frameChild2} />
            						<div className={styles.frameChild3} />
          					</div>
          					<div className={styles.groupParent}>
            						<img className={styles.groupIcon} alt="" src="Group 8.svg" />
            						<div className={styles.frameChild5} />
            						<div className={styles.frameChild6} />
            						<div className={styles.frameChild7} />
            						<div className={styles.frameChild8} />
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameChild} />
      			<div className={styles.frameContainer}>
        				<div className={styles.filtersParent}>
          					<b className={styles.filters}>Size</b>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-up.svg" />
        				</div>
        				<div className={styles.frameParent3}>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>XX-Small</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>X-Small</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>Small</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>Medium</div>
          					</div>
          					<div className={styles.largeWrapper}>
            						<div className={styles.large}>Large</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>X-Large</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>XX-Large</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>3X-Large</div>
          					</div>
          					<div className={styles.xxSmallWrapper}>
            						<div className={styles.filters}>4X-Large</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameChild} />
      			<div className={styles.frameContainer}>
        				<div className={styles.filtersParent}>
          					<b className={styles.filters}>Dress Style</b>
          					<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-up.svg" />
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.filtersParent}>
            						<div className={styles.filters}>Casual</div>
            						<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
          					</div>
          					<div className={styles.filtersParent}>
            						<div className={styles.filters}>Formal</div>
            						<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
          					</div>
          					<div className={styles.filtersParent}>
            						<div className={styles.filters}>Party</div>
            						<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
          					</div>
          					<div className={styles.filtersParent}>
            						<div className={styles.filters}>Gym</div>
            						<img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.applyFilterWrapper}>
        				<div className={styles.large}>Apply Filter</div>
      			</div>
    		</div>);
};

export default Filter;
