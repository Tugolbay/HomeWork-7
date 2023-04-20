import styls from "styled-components";
export const ButtonStyled = (props) => {
  console.log(props);
  return (
    <div>
      <Button pinks={props.colors} color={props.bgColors}>
        Click
      </Button>
      <AnotherButton pinks={props.colors} color={props.bgColors}>
        Clicked
      </AnotherButton>
    </div>
  );
};

const Button = styls.button`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.color};
    color: ${(props) => props.pinks};
    &:hover {
      background-color: #1f21ad;
    }
`;

const AnotherButton = styls.button`
width: 200px;
height: 200px;
background-color: ${(props) => props.color};
color: ${(props) => props.pinks};
&:hover {
  background-color: #871fad;
}
`;
