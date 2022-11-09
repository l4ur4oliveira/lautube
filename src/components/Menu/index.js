import styled from "styled-components";
import Search from "./components/Search";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu({ searchValue, setSearchValue }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </StyledMenu>
  );
}

function Logo() {
  return (
    <svg className="logo" width="107" height="25" viewBox="0 0 107 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.5763 3.75579C33.1808 2.28736 32.0229 1.12956 30.5546 0.734213C27.8719 5.96046e-08 17.1411 0 17.1411 0C17.1411 0 6.41025 0 3.72756 0.705974C2.28736 1.10132 1.10132 2.28736 0.705975 3.75579C0 6.43849 0 12.0016 0 12.0016C0 12.0016 0 17.5929 0.705975 20.2474C1.10132 21.7158 2.25912 22.8736 3.72756 23.2689C6.43851 24.0032 17.1411 24.0032 17.1411 24.0032C17.1411 24.0032 27.8719 24.0032 30.5546 23.2972C32.0229 22.9019 33.1808 21.7441 33.5763 20.2756C34.2821 17.5929 34.2821 12.0298 34.2821 12.0298C34.2821 12.0298 34.3103 6.43849 33.5763 3.75579Z" fill="#FF0000"/>
      <path d="M13.7242 6.86209V17.1411L22.6477 12.0016L13.7242 6.86209Z" fill="white"/>
      <path className="text" d="M101.269 17.7291C101.269 18.6893 101.297 19.4235 101.353 19.9035C101.41 20.3836 101.523 20.7507 101.72 20.9484C101.89 21.1743 102.172 21.2872 102.568 21.2872C103.076 21.2872 103.415 21.0896 103.613 20.6942C103.81 20.2989 103.895 19.6494 103.923 18.7175L106.832 18.8869C106.86 19.0281 106.86 19.1976 106.86 19.4235C106.86 20.8072 106.493 21.852 105.73 22.5298C104.968 23.2075 103.895 23.5464 102.511 23.5464C100.845 23.5464 99.6874 23.0098 99.0096 21.965C98.3318 20.9201 97.993 19.3105 97.993 17.1079V14.4816C97.993 12.2225 98.3318 10.5847 99.0378 9.53983C99.7439 8.49499 100.93 7.98668 102.596 7.98668C103.754 7.98668 104.657 8.21259 105.279 8.63617C105.9 9.05975 106.324 9.73749 106.578 10.6129C106.832 11.5166 106.945 12.7591 106.945 14.3405V16.9102H101.269V17.7291ZM101.692 10.6411C101.523 10.8671 101.41 11.2059 101.353 11.686C101.297 12.166 101.269 12.9003 101.269 13.8886V14.9617H103.754V13.8886C103.754 12.9285 103.725 12.1943 103.669 11.686C103.613 11.1777 103.471 10.8388 103.302 10.6411C103.133 10.4435 102.85 10.3305 102.511 10.3305C102.116 10.3023 101.862 10.4152 101.692 10.6411Z" fill="#282828"/>
      <path className="text" d="M84.9464 8.32555V23.3769H82.292L82.0097 21.5414H81.925C81.2189 22.9251 80.1176 23.6311 78.6775 23.6311C77.6892 23.6311 76.9549 23.2922 76.4749 22.6427C75.9949 21.9932 75.7688 20.9766 75.7688 19.5647V8.32555H79.1576V19.367C79.1576 20.0447 79.2423 20.5248 79.3833 20.8072C79.5246 21.0896 79.7789 21.2308 80.1176 21.2308C80.4001 21.2308 80.6824 21.1461 80.9649 20.9484C81.2472 20.7789 81.445 20.553 81.558 20.2706V8.32555H84.9464Z" fill="#282828"/>
      <path className="text" d="M76.7854 5.50165H73.4249V23.3487H70.121V5.50165H66.7605V2.76245H76.7854V5.50165Z" fill="#282828"/>
      <path className="text" d="M96.1574 10.7259C95.9596 9.76574 95.6208 9.088 95.1691 8.66439C94.7173 8.24082 94.0678 8.0149 93.2769 8.0149C92.6557 8.0149 92.0626 8.18434 91.5261 8.55147C90.9895 8.89031 90.566 9.37039 90.2838 9.93515H90.2555V2H86.9798V23.3487H89.7755L90.1143 21.9367H90.199C90.453 22.445 90.8486 22.8404 91.3851 23.151C91.9216 23.4334 92.4864 23.6028 93.1359 23.6028C94.2935 23.6028 95.1126 23.0663 95.6491 22.0215C96.1856 20.9766 96.4682 19.3105 96.4682 17.0796V14.7076C96.4399 12.985 96.3552 11.6577 96.1574 10.7259ZM93.0512 16.8537C93.0512 17.955 92.9947 18.8022 92.9099 19.4235C92.8252 20.0447 92.6557 20.4965 92.4582 20.7507C92.2321 21.0049 91.9499 21.1461 91.6108 21.1461C91.3286 21.1461 91.0743 21.0896 90.8486 20.9484C90.6225 20.8072 90.4248 20.6095 90.2838 20.3554V11.8272C90.3968 11.4318 90.5943 11.093 90.8768 10.8106C91.1591 10.5564 91.4699 10.4152 91.7804 10.4152C92.1191 10.4152 92.4016 10.5564 92.5712 10.8106C92.7687 11.093 92.8817 11.5448 92.9664 12.166C93.0512 12.8155 93.0794 13.7192 93.0794 14.877V16.8537H93.0512Z" fill="#282828"/>
      <path className="text" fillRule="evenodd" clipRule="evenodd" d="M52.2196 15.2135C52.2053 15.3039 52.1706 15.39 52.118 15.4652C52.0652 15.5405 51.9961 15.603 51.9155 15.648C51.7533 15.7516 51.6112 15.8035 51.4676 15.8553C51.1616 15.9597 50.8396 16.0642 50.4989 16.1854C50.1397 16.3065 49.8178 16.4277 49.5305 16.5154C49.1721 16.6366 48.8314 16.7411 48.5078 16.8622C48.2641 16.9653 48.0356 17.0996 47.8274 17.2617C47.6339 17.435 47.4652 17.6335 47.3253 17.8516C47.1818 18.094 47.0912 18.4065 47.0912 18.7709C47.0912 19.5004 47.2705 20.0553 47.6297 20.4021C47.988 20.7672 48.6524 20.9402 49.6368 20.9402C50.641 20.9402 51.3222 20.7497 51.6822 20.3678C52.0397 19.9859 52.2187 19.4486 52.2187 18.755L52.2196 15.2135ZM49.6376 7.52545C51.3958 7.52545 52.6862 7.85554 53.5103 8.53242C54.3352 9.1926 54.7475 10.0416 54.7475 11.0477V19.6216C54.7475 19.9684 54.6765 20.3503 54.5515 20.7664C54.4247 21.1842 54.1746 21.5653 53.7799 21.9113C53.4037 22.2598 52.884 22.5547 52.2204 22.7804C51.5572 23.006 50.6967 23.1272 49.6387 23.1272C48.5822 23.1272 47.72 23.006 47.0576 22.7804C46.3949 22.5547 45.8743 22.2598 45.4981 21.9113C45.1484 21.5995 44.8832 21.2058 44.7274 20.7664C44.6007 20.3511 44.5288 19.9692 44.5288 19.6224V18.2519C44.5288 17.5224 44.7257 16.8455 45.1204 16.2547C45.5152 15.648 46.0704 15.2319 46.788 14.9712C47.1463 14.85 47.5586 14.7288 48.0244 14.5726C48.491 14.4154 48.9201 14.2592 49.3512 14.1213C49.7822 13.9817 50.1585 13.8422 50.4805 13.7202C50.6746 13.6433 50.8721 13.5742 51.0721 13.5129L51.3949 13.3567C51.5216 13.2873 51.6458 13.1829 51.7717 13.0441C51.8968 12.9063 52.0042 12.75 52.0945 12.5762C52.1902 12.3879 52.2394 12.1801 52.2383 11.9695V11.4138C52.2397 11.2101 52.1964 11.0086 52.1116 10.823C52.0405 10.614 51.8968 10.4235 51.6998 10.2505C51.5029 10.0767 51.2335 9.93801 50.9115 9.83271C50.5884 9.72991 50.1593 9.67727 49.674 9.67727C48.67 9.67727 48.0065 9.86947 47.6481 10.2673C47.3441 10.6149 47.1648 11.0486 47.1292 11.5341C47.1292 11.6385 47.0397 11.7079 46.9315 11.7079L44.745 11.743C44.6933 11.7432 44.6432 11.7232 44.6063 11.6872C44.5691 11.6512 44.5481 11.6022 44.5473 11.5508V11.0494C44.5473 10.5622 44.6379 10.111 44.8348 9.67727C45.0326 9.24272 45.3375 8.87924 45.7493 8.56585C46.1616 8.25417 46.7001 7.99426 47.3449 7.82044C47.9729 7.61153 48.7436 7.52545 49.6396 7.52545H49.6376ZM66.7605 19.2397V19.7603C66.7605 19.9859 66.7267 20.2985 66.6363 20.6979C66.5644 21.079 66.349 21.4784 66.0083 21.8594C65.6676 22.2422 65.1657 22.589 64.4846 22.8664C63.8034 23.1447 62.8702 23.2843 61.6702 23.2843C60.4701 23.2843 59.5369 23.1447 58.8557 22.8664C58.1746 22.589 57.6725 22.2597 57.332 21.8603C56.9913 21.4792 56.7759 21.0798 56.704 20.682C56.633 20.2809 56.5798 19.9868 56.5798 19.7611V8.08118C56.5798 7.97672 56.6693 7.88897 56.7767 7.88897H58.9097C59.018 7.88897 59.1075 7.97672 59.1075 8.08118V19.0141C59.1075 19.3784 59.1609 19.6391 59.2149 19.8472C59.2697 20.0561 59.3772 20.2634 59.5386 20.4372C59.6991 20.6277 59.9512 20.784 60.2908 20.9051C60.6136 21.0271 61.0626 21.0973 61.6179 21.0973C62.1924 21.0973 62.6573 21.0271 62.9986 20.9051C63.3393 20.784 63.5903 20.6277 63.7696 20.4539C63.9469 20.2809 64.0737 20.0904 64.1271 19.8815C64.1811 19.6726 64.2538 19.5004 64.2538 18.9957V8.06445C64.2538 7.96084 64.3425 7.87392 64.4499 7.87392H66.5829C66.6895 7.87392 66.779 7.96084 66.779 8.06613V19.2413H66.7622L66.7605 19.2397ZM40.0794 2.02518H42.2132C42.3207 2.02518 42.4102 2.11125 42.4102 2.21487V22.884C42.4096 22.9352 42.3886 22.9841 42.3517 23.02C42.3148 23.056 42.265 23.0762 42.2132 23.0762H40.0794C40.0277 23.0762 39.9779 23.056 39.941 23.02C39.904 22.9841 39.8831 22.9352 39.8825 22.884V2.21487C39.8993 2.11125 39.972 2.02518 40.0794 2.02518Z" fill="#282828"/>
    </svg>
  )
}
