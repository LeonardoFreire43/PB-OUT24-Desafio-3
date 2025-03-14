import { FunctionComponent, useState } from 'react';
import styles from './Filter.module.css';
import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}

const RangeSlider = () => {
  const [value, setValue] = useState<number[]>([60, 395]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={10}
        max={450}
        sx={{
          color: 'black', // Cor preta do Slider
          width: '82%',
        }}
      />
      <div className={styles.sliderValues}>
        <span>${value[0]}</span> - <span>${value[1]}</span>
      </div>
    </Box>
  );
};

interface FilterProps {
  onDressStyleChange: (style: string) => void;
}

const Filter: FunctionComponent<FilterProps> = ({ onDressStyleChange }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  const handleSizeClick = (size: string) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleApplyFilter = () => {
    alert('Filters have been applied');
  };

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
        <RangeSlider />
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.filtersParent}>
          <b className={styles.filters}>Colors</b>
          <img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-up.svg" />
        </div>
        <div className={styles.colorButtonContainer}>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'red' ? styles.selected : ''}`}
              style={{ backgroundColor: '#f50606' }}
              onClick={() => handleColorClick('red')}
            >
              {selectedColor === 'red' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'yellow' ? styles.selected : ''}`}
              style={{ backgroundColor: '#f5dd06' }}
              onClick={() => handleColorClick('yellow')}
            >
              {selectedColor === 'yellow' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'orange' ? styles.selected : ''}`}
              style={{ backgroundColor: '#f57906' }}
              onClick={() => handleColorClick('orange')}
            >
              {selectedColor === 'orange' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'blue' ? styles.selected : ''}`}
              style={{ backgroundColor: '#06caf5' }}
              onClick={() => handleColorClick('blue')}
            >
              {selectedColor === 'blue' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'purple' ? styles.selected : ''}`}
              style={{ backgroundColor: '#7d06f5' }}
              onClick={() => handleColorClick('purple')}
            >
              {selectedColor === 'purple' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'pink' ? styles.selected : ''}`}
              style={{ backgroundColor: '#f506a4' }}
              onClick={() => handleColorClick('pink')}
            >
              {selectedColor === 'pink' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'darkBlue' ? styles.selected : ''}`}
              style={{ backgroundColor: '#063af5' }}
              onClick={() => handleColorClick('darkBlue')}
            >
              {selectedColor === 'darkBlue' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'white' ? styles.selected : ''}`}
              style={{ backgroundColor: '#fff' }}
              onClick={() => handleColorClick('white')}
            >
              {selectedColor === 'white' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'black' ? styles.selected : ''}`}
              style={{ backgroundColor: '#000' }}
              onClick={() => handleColorClick('black')}
            >
              {selectedColor === 'black' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
          </div>
          <div className={styles.colorButtonWrapper}>
            <button
              className={`${styles.colorButton} ${selectedColor === 'green' ? styles.selected : ''}`}
              style={{ backgroundColor: '#00ff00' }}
              onClick={() => handleColorClick('green')}
            >
              {selectedColor === 'green' && <img src="/FRAMESDESKTOP/Selected.svg" alt="Selected" />}
            </button>
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
          {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map((size) => (
            <button
              key={size}
              className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.filtersParent}>
          <b className={styles.filters}>Dress Style</b>
          <img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-up.svg" />
        </div>
        <div className={styles.frameGroup}>
          {["Casual", "Formal", "Party", "Gym"].map((style) => (
            <div
              key={style}
              className={styles.filtersParent}
              onClick={() => onDressStyleChange(style)}
            >
              <div className={styles.filters}>{style}</div>
              <img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/Arrow-right-filter.svg" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.applyFilterWrapper}>
        <button className={styles.applyFilterButton} onClick={handleApplyFilter}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;