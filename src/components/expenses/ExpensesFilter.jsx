import styles from "styled-components";
export const ExpensesFilter = (props) => {
  return (
    <FilterContainer>
      <FilterCard>
        <FilterText>Фильтр по городу</FilterText>
        <Select onChange={props.getValue}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </Select>
        <Statistics>
          <Expenses1 />
          <Expenses2 />
          <Expenses3 />
          <Expenses4 />
          <Expenses5 />
          <Expenses6 />
          <Expenses7 />
          <Expenses8 />
          <Expenses9 />
          <Expenses10 />
          <Expenses11 />
          <Expenses12 />
        </Statistics>
      </FilterCard>
    </FilterContainer>
  );
};

const FilterContainer = styles.div`
display: flex;
`;
const FilterCard = styles.div`
top: 549px;
left: 330px;
position: absolute;
width: 780px;
height: 632px;
background: #1f1f1f;
border-radius: 12px;
`;
const FilterText = styles.p`
position: relative;
top: 40px;
left: 16px;
font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #ffffff;
`;
const Select = styles.select`
position: relative;
bottom: 10px;
left: 640px;
width: 124px;
height: 43px;
background: #ffffff;
border-radius: 6px;
`;

const Statistics = styles.div`
position: relative;
top: 10px;
left: 16px;
width: 748px;
height: 151px;
background: #F8DFFF;
border-radius: 12px;
`;

const Expenses1 = styles.div`
position: relative;
top: 14px;
left: 29px;
width: 10px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses2 = styles.div`
position: absolute;
top: 14px;
left: 77px;
width: 36px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses3 = styles.div`
position: absolute;
top: 14px;
left: 153px;
width: 18px;
height: 108px;
background: #4826B9;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses4 = styles.div`
position: absolute;
top: 14px;
left: 211px;
width: 14px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses5 = styles.div`
position: absolute;
top: 14px;
left: 265px;
width: 14px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses6 = styles.div`
position: absolute;
top: 14px;
left: 318px;
width: 22px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses7 = styles.div`
position: absolute;
top: 14px;
left: 377px;
width: 18px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses8 = styles.div`
position: absolute;
top: 14px;
left: 438px;
width: 12px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses9 = styles.div`
position: absolute;
top: 14px;
left: 489px;
width: 14px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses10 = styles.div`
position: absolute;
top: 14px;
left: 542px;
width: 32px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses11 = styles.div`
position: absolute;
top: 14px;
left: 617px;
width: 26px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
const Expenses12 = styles.div`
position: absolute;
top: 14px;
left: 684px;
width: 34px;
height: 108px;
background: #A892EE;
border: 1px solid #363636;
border-radius: 12px;
`;
