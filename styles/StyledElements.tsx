import styled from "styled-components";
export const SDetailNav = styled.nav`
  padding: 1.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
  left: 0;
  /* box-shadow: 0 0.5px 4px 0 #ccc; */
  background-color: ${({ theme }) => theme.colors.white};
`;
export const SDetailHeader = styled.div`
  /* margin-top: ${({ theme }) => theme.spacing["6"]}; */
  display: flex;
  justify-content: space-between;
  & .details-icon {
    fill: #000;
    stroke: #000;
    transition: all 0.2s;
    cursor: pointer;
  }
  & .details-icon:hover {
    fill: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;
export const SGoBackLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  & h2 {
    margin-left: 8px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize["lg"]};
  }
  & svg {
    margin-right: ${({ theme }) => theme.spacing["1"]};
  }
  & .cart-icon {
    transition: all 0.2s;
    cursor: pointer;
  }
  & .cart-icon:hover {
    fill: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;
export const SDetailsRight = styled.div`
  display: flex;
  align-items: center;
  & .cart-icon {
    position: relative;
    margin-left: ${({ theme }) => theme.spacing["4"]};
  }
`;
export const SIconBadge = styled.span`
  width: 1.3rem;
  /* margin-left: -8px; */
  height: 1.3rem;
  border-radius: 50%;
  background-color: #e50b20;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-weight: bold;
  right: -10px;
  top: -7px;
`;
export const SDetailsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing["5"]};
  grid-template-columns: repeat(12, 1fr);
  margin-top: ${({ theme }) => theme.spacing["24"]};
`;
export const SImageContainer = styled.div`
  grid-column: 1/6;
`;
export const SDetailContainer = styled.div`
  grid-column: 6/13;
  margin-top: ${({ theme }) => theme.spacing["4"]};
  display: flex;
  flex-direction: column;
  margin-left: ${({ theme }) => theme.spacing["10"]};
  & h2 {
    font-size: ${({ theme }) => theme.fontSize["lg"]};
    margin-bottom: ${({ theme }) => theme.spacing["2"]};
  }
  & #price-container {
    display: flex;
    align-items: center;
  }
`;
export const SBaseCost = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize["xl"]};
`;
export const SQuantity = styled.small`
  margin-bottom: ${({ theme }) => theme.spacing["3"]};
`;
export const SOriginalCost = styled.p`
  /* font-weight: bold; */
  margin-left: ${({ theme }) => theme.spacing["2"]};
  text-decoration: line-through;
  color: grey;
  font-size: ${({ theme }) => theme.fontSize["sm"]};
`;
export const SPercentageOff = styled.small`
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  background-color: #ee741f;
  font-weight: bold;
  display: inline-block;
  height: 22px;
  border-radius: 4px;
  padding-top: 1.5px;
  padding-left: ${({ theme }) => theme.spacing["2"]};
  padding-right: ${({ theme }) => theme.spacing["2"]};
  margin-left: ${({ theme }) => theme.spacing["2"]};
  text-transform: uppercase;
`;
export const SImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const SButtonContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: ${({ theme }) => theme.spacing["10"]};
`;
export const SButton = styled.a`
  padding: 1.2rem 40px;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
`;
export const SCheckoutButtonLarge = styled(SButton)`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    background-color: #115f9c;
  }
`;
export const SButtonAdd = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
  & span {
    margin-right: ${({ theme }) => theme.spacing["2"]};
  }
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  transition: all 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  }
  & svg {
    fill: #146eb4;
  }
`;