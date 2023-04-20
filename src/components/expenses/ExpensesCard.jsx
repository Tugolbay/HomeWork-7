import styles from "styled-components";
export const ExpensesCard = ({ el }) => {
  return (
    <div>
      <Card>
        <Card2>
          <Title>{el.title}</Title>
          <PriceParent>
            <Price>${el.price}</Price>
          </PriceParent>
          <DateParent>
            <Date>{el.date}</Date>
          </DateParent>
        </Card2>
      </Card>
    </div>
  );
};

const Card = styles.div`
  position: relative;
  top: 400px;
  left: 322px;
  background: #1f1f1f;
  width: 780px;
  height: 150px;
  border-radius: 12px;
  z-index: 1;
`;
const Card2 = styles.div`
position: relative;
top: 25px;
left: 15px;
background: #4b4b4b;
width: 748px;
height: 104px;
border-radius: 12px;
z-index: 1;
`;
const Title = styles.div`
font-family: "Inter";
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
color: #ffffff;
margin-left: 112px;
padding-top: 40px;
`;
const PriceParent = styles.div`
position: absolute;
left: 608px;
bottom: 30px;
width: 112px;
height: 44px;
background: #40005d;
border: 1px solid #ffffff;
border-radius: 10px;
font-family: "Inter";
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #ffffff;
`;
const Price = styles.div`
margin-top: 10px;
margin-left: 35px;
`;

const DateParent = styles.div`
position: absolute;
left: 10px;
bottom: 10px;
width: 82.11px;
height: 80px;
background: #2a2a2a;
border: 1px solid #ffffff;
border-radius: 10px;
font-family: "Montserrat";
font-style: normal;
font-weight: 800;
font-size: 18px;
line-height: 22px;
color: #ffffff;
`;
const Date = styles.div`
margin-top: 5px;
margin-left: 25px;
width: 30px;
`;
