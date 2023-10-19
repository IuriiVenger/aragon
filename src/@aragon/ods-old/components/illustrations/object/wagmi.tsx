import React from 'react';
import {type IconType} from '../../icons';

export const Wagmi: IconType = ({height = 160, width = 160, ...props}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 160 160"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9125 84.8063C19.0889 82.7719 20.7107 81.3662 21.7779 80.5889C22.8639 79.7811 23.816 79.1228 24.6341 78.614L29.7743 81.7707C27.9355 87.0433 26.8092 92.1726 26.3954 97.1585C26.3108 98.1781 26.2559 99.1917 26.2309 100.199C26.8226 99.4022 27.3985 98.5645 27.9586 97.6862C31.1041 92.7537 33.7507 86.5405 35.8983 79.0465C36.048 78.524 36.1954 77.9952 36.3403 77.4601L41.0425 80.0951L40.668 81.4768C39.6623 85.2413 39.0133 88.1505 38.7212 90.2043C38.4901 91.9811 38.3165 93.7185 38.2004 95.4163C38.1317 96.4217 38.0831 97.4132 38.0547 98.3908C38.6517 97.6058 39.2233 96.7883 39.7696 95.9383C42.8875 91.0869 45.1792 85.1781 46.6446 78.2117C46.7589 77.6686 46.8681 77.1191 46.9723 76.5631L51.8951 79.3019C51.7151 80.3237 51.5023 81.3391 51.2567 82.3483C51.0355 83.2574 50.7878 84.1614 50.5134 85.0604C50.3409 85.6256 50.1578 86.1888 49.9643 86.7499C49.2306 88.8774 48.3459 90.976 47.3101 93.0457C45.0842 97.4935 42.4278 101.287 39.341 104.427L33.4157 101.262C33.4174 101.207 33.4193 101.15 33.4214 101.091C33.4512 100.231 33.5117 99.0196 33.6028 97.4581C33.0208 98.5775 32.4325 99.6326 31.8379 100.623C31.0074 102.007 30.1647 103.265 29.3097 104.397C28.7975 105.094 28.2607 105.796 27.6991 106.505L20.9477 102.833C20.7639 97.7901 21.2805 92.951 22.4973 88.3157C22.7418 87.3845 23.0145 86.4615 23.3155 85.5467C22.6183 86.1031 21.8723 86.7316 21.0776 87.4322C21.0315 87.4728 20.9853 87.5137 20.939 87.5547C20.5526 87.897 20.1549 88.2561 19.7458 88.632L16.9125 84.8063ZM20.4077 90.1967C19.5414 94.2864 19.1894 98.5191 19.3488 102.891L19.382 103.802L28.1171 108.554L28.9531 107.499C29.5239 106.778 30.0706 106.063 30.5929 105.353C31.2396 104.496 31.8765 103.574 32.5039 102.589L39.6428 106.402L40.4819 105.548C43.7001 102.275 46.4498 98.34 48.7409 93.7617C49.8202 91.6051 50.7413 89.4158 51.5036 87.1941L51.83 87.2882C50.349 90.6377 49.213 93.8158 48.4301 96.8207L48.1192 98.0137L56.0695 102.489L56.4824 100.296C57.108 96.9746 58.1747 93.5384 59.6927 89.9859C60.824 90.5023 61.8784 91.0659 62.8572 91.6756C62.6856 92.323 62.4667 93.1287 62.1997 94.0952L61.8638 95.3113L69.9261 99.7672L70.4362 97.7577C70.9897 95.5774 71.4733 93.4403 71.8866 91.3463L71.8877 91.5606L78.098 95.0857L78.7965 94.8266C79.8261 94.4446 80.8401 94.0193 81.8384 93.5508C81.62 94.0347 81.3839 94.5526 81.1301 95.1048L80.5076 96.459L88.145 100.649L88.861 99.0842C90.6419 95.1921 92.1444 91.3279 93.3668 87.492L100.152 91.3497L100.591 89.1851C101.056 86.8927 101.505 84.8159 101.939 82.9539L101.942 82.9431C102.272 81.4816 102.629 80.0146 103.014 78.5418C103.105 80.4655 103.228 82.5306 103.383 84.7363L103.445 85.6296L110.426 89.2651L111.152 87.8063C112.613 84.8712 114.041 81.9282 115.435 78.9773C115.194 80.1034 114.923 81.3266 114.622 82.6475L114.338 83.8908L122.643 87.8948L123.022 85.8314C123.382 83.8713 123.697 82.0878 123.968 80.4815L131.232 84.5452L131.611 82.3086C132.281 78.3556 133.412 73.4928 135.015 67.7095C135.909 64.5128 137.186 60.896 138.855 56.8545L139.37 55.6064L131.95 50.9499L131.209 52.6579C128.971 57.8158 127.101 63.14 125.598 68.6297C125.792 66.5789 125.997 63.8896 126.214 60.5729L126.282 59.5265L117.386 54.9436L116.741 56.5972C114.738 61.7292 112.788 66.4073 110.891 70.633C110.884 68.1731 110.968 65.643 111.141 63.0425L111.21 62.0061L102.191 57.2463L101.495 58.8089C99.4174 63.4759 97.538 68.3562 95.8566 73.449L95.8543 73.456C95.3211 75.0963 94.7546 77.077 94.1545 79.3943L86.7065 77.5648L86.4051 79.2422C86.1515 80.6539 85.9095 81.8814 85.6793 82.9274C84.4758 83.5977 83.0948 84.2773 81.5326 84.9651C81.636 84.1854 81.7886 83.4073 81.9906 82.6305C82.8777 79.2199 84.5006 76.0972 86.888 73.2595L86.8499 73.4231L94.9886 75.6788L95.4446 74.1892C96.2058 71.7025 96.6486 69.4063 96.7439 67.3125L96.7947 66.1956L87.0106 62.1001L86.2813 62.6341C81.7751 65.9335 78.2178 70.2247 75.6078 75.4763C74.7077 77.2899 73.9683 79.1088 73.3926 80.9306C73.6829 77.6159 73.7671 74.4274 73.6432 71.3662L73.6056 70.4376L64.6153 65.7809L64.864 68.6744C64.9167 69.2869 64.9582 69.9069 64.9885 70.5346L62.9233 69.4033L62.0811 70.4241C59.9206 73.0427 57.8021 76.1243 55.7226 79.6597L53.5625 79.0593L53.6686 78.4576L45.8089 74.0849L45.3997 76.2683C44.2436 82.4364 42.4666 87.7445 40.0913 92.2196C40.1562 91.6248 40.228 91.025 40.3066 90.4203C40.5857 88.4634 41.2142 85.6316 42.213 81.8926C42.2133 81.8917 42.2135 81.8907 42.2138 81.8898L42.9132 79.3093L35.3323 75.0612L34.7959 77.0419C33.0155 83.6156 30.8778 89.1837 28.4001 93.7722C28.9587 90.0402 29.9186 86.2158 31.2851 82.2976L31.7092 81.0814L24.6288 76.7331L23.7891 77.2553C22.9233 77.7938 21.9353 78.4779 20.8293 79.3004C19.6766 80.1408 17.9957 81.6036 15.8199 83.6374L14.7775 84.6118L19.5186 91.0137L20.4077 90.1967ZM51.5308 85.5367L54.0543 86.2647C53.8225 86.7593 53.5984 87.2497 53.3818 87.736C51.8858 91.0947 50.7513 94.2574 49.9784 97.2241L54.9101 100C55.0128 99.4547 55.1268 98.9069 55.2523 98.3566C56.0258 94.9627 57.2312 91.4751 58.8685 87.894C61.0334 88.76 62.9749 89.7839 64.6932 90.9655C64.5068 91.7149 64.1898 92.9001 63.742 94.5212L68.8854 97.364C69.0223 96.825 69.1547 96.2888 69.2828 95.7555C71.4202 86.8568 72.3408 78.7486 72.0445 71.4309L66.4582 68.5374C66.5111 69.1529 66.553 69.7753 66.584 70.4045C66.6008 70.7446 66.6143 71.0867 66.6247 71.4309C66.6349 71.7732 66.6421 72.1175 66.646 72.4637C66.649 72.7309 66.6502 72.9993 66.6495 73.2688L63.3152 71.4423C61.0078 74.2389 58.7316 77.6024 56.4864 81.5327L53.76 80.7748L51.5308 85.5367ZM87.475 70.2656C88.0274 69.7173 88.6087 69.1809 89.2191 68.6565C89.1658 69.5423 89.0894 70.3312 88.9897 71.0233C88.9226 71.49 88.8449 71.9126 88.7566 72.2912L93.9147 73.7208C93.9147 73.7208 93.9147 73.7209 93.9147 73.7208C94.6476 71.3268 95.0579 69.1663 95.1455 67.2398L87.2265 63.925C82.9388 67.0645 79.5435 71.1523 77.0406 76.1884C74.6445 81.0162 73.4586 85.8289 73.483 90.6263L78.2399 93.3265C79.8144 92.7423 81.3521 92.0521 82.8529 91.2559C83.6148 90.8517 84.3673 90.4201 85.1102 89.9612C84.8856 90.5595 84.5491 91.3726 84.1007 92.4007C83.6893 93.3439 83.1837 94.468 82.5839 95.773L87.4061 98.4185C87.6297 97.9298 87.8487 97.4417 88.0634 96.9541C90.2158 92.0638 91.9162 87.2278 93.1645 82.4462C93.2393 82.1599 93.3124 81.8737 93.3839 81.5878C93.4418 81.3565 93.4985 81.1254 93.5542 80.8944L87.9799 79.5251C87.8808 80.0768 87.7832 80.602 87.6871 81.1008C87.4791 82.1804 87.2781 83.1362 87.0842 83.9682C85.4897 84.8987 83.5887 85.834 81.3811 86.7743C80.8609 86.9958 80.3237 87.2177 79.7694 87.4397C79.7693 86.8527 79.7945 86.2669 79.845 85.6824C79.9449 84.5258 80.1439 83.3742 80.4422 82.2277C81.6064 77.7518 83.9507 73.7644 87.475 70.2656ZM110.968 74.307C110.487 75.3369 110.009 76.3376 109.534 77.3092C109.455 76.2139 109.395 75.1042 109.354 73.98C109.227 70.4422 109.29 66.7609 109.544 62.9362L102.957 59.4597C102.74 59.947 102.525 60.4367 102.313 60.9288C100.511 65.0978 98.8657 69.4384 97.376 73.9506C96.4283 76.8659 95.3611 80.9193 94.1744 86.1106L99.0232 88.8672C99.1371 88.3054 99.2501 87.7561 99.3623 87.2195C99.7102 85.5552 100.05 84.0122 100.381 82.5907C101.08 79.4974 101.898 76.3807 102.838 73.2407C103.348 71.535 103.894 69.8224 104.475 68.1029C104.416 69.6722 104.405 71.4585 104.442 73.4619C104.5 76.6373 104.679 80.3581 104.979 84.6242L109.72 87.0933C109.957 86.6155 110.194 86.1376 110.43 85.6595C112.577 81.3109 114.65 76.9451 116.649 72.5622C116.682 72.489 116.716 72.4157 116.749 72.3425C117.495 70.7044 118.231 69.064 118.957 67.4211C118.828 68.5221 118.598 70.2348 118.266 72.5591C118.245 72.7087 118.222 72.863 118.198 73.0222C117.844 75.3363 117.172 78.6633 116.182 83.0033L121.448 85.5425C121.551 84.9834 121.65 84.4391 121.745 83.9094C122.292 80.869 122.718 78.3121 123.022 76.2384C123.221 74.8857 123.448 73.213 123.702 71.2204C123.976 69.1972 124.281 65.6133 124.617 60.4686L118.231 57.1788C118.035 57.6821 117.839 58.1811 117.643 58.6759C115.353 64.4739 113.128 69.6843 110.968 74.307ZM65.6429 85.7655C65.7306 85.1729 65.8124 84.5917 65.8883 84.0219C66.1839 81.8022 66.3894 79.7562 66.5049 77.8839C66.5655 76.901 66.6013 75.966 66.6123 75.0789C66.0571 75.7779 65.4978 76.5296 64.9342 77.3339C63.9649 78.7172 62.9833 80.2561 61.9892 81.9507C61.723 82.4045 61.4558 82.8694 61.1878 83.3456C61.6804 83.5625 62.1642 83.7904 62.6391 84.0294C63.1563 84.2896 63.6629 84.5629 64.1592 84.8494C64.6646 85.1412 65.1592 85.4466 65.6429 85.7655ZM64.3892 83.1426C64.5001 82.2685 64.5961 81.4245 64.6774 80.6104C64.2679 81.2579 63.8552 81.9347 63.4393 82.641C63.7596 82.8033 64.0763 82.9705 64.3892 83.1426ZM124.835 79.1334C126.41 70.6393 128.812 62.5234 132.042 54.7856C132.25 54.2871 132.462 53.7902 132.677 53.2948L137.376 56.2438C135.689 60.3277 134.389 64.0061 133.474 67.2789C132.078 72.3152 131.031 76.6806 130.333 80.3753C130.225 80.9467 130.125 81.502 130.034 82.0413L124.835 79.1334Z"
        fill="#001F5C"
      />
      <path
        d="M49.9036 55.3084C50.1818 55.651 50.6856 55.7027 51.0288 55.4237C51.3721 55.1447 51.4247 54.6409 51.1465 54.2982L42.1003 43.1582C41.822 42.8156 41.3183 42.764 40.975 43.0429C40.6318 43.3219 40.5791 43.8258 40.8574 44.1684L49.9036 55.3084Z"
        fill="#3164FA"
      />
      <path
        d="M44.9197 61.173C45.2438 61.4726 45.75 61.4521 46.0502 61.1273C46.3505 60.8026 46.3311 60.2964 46.007 59.9969L30.2699 45.4541C29.9458 45.1546 29.4396 45.175 29.1394 45.4998C28.8391 45.8246 28.8585 46.3307 29.1826 46.6303L44.9197 61.173Z"
        fill="#3164FA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M122.8 103C122.8 105.651 120.651 107.8 118 107.8C115.349 107.8 113.2 105.651 113.2 103C113.2 100.349 115.349 98.1998 118 98.1998C120.651 98.1998 122.8 100.349 122.8 103ZM118 106.2C119.767 106.2 121.2 104.767 121.2 103C121.2 101.233 119.767 99.7998 118 99.7998C116.233 99.7998 114.8 101.233 114.8 103C114.8 104.767 116.233 106.2 118 106.2Z"
        fill="#3164FA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M109.2 103C109.2 98.1397 113.14 94.1998 118 94.1998C122.86 94.1998 126.8 98.1397 126.8 103C126.8 107.86 122.86 111.8 118 111.8C113.14 111.8 109.2 107.86 109.2 103ZM118 95.7998C114.024 95.7998 110.8 99.0234 110.8 103C110.8 106.976 114.024 110.2 118 110.2C121.976 110.2 125.2 106.976 125.2 103C125.2 99.0234 121.976 95.7998 118 95.7998Z"
        fill="#3164FA"
      />
    </svg>
  );
};