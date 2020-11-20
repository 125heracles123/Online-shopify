import Link from "next/link";
import React, { ReactElement } from "react";
import styled, { ThemedStyledFunction } from "styled-components";
import { IconBag, IconCategories, IconHome, IconOrders } from "./helpers";

interface Props {}
export default function Menu({}: Props): ReactElement {
  return (
    <SFooter>
      <SFooterWrapper>
        <Link href="/" passHref>
          <SMenuContainer>
            <IconHome />
            <SMenuItem>Home</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/" passHref>
          <SMenuContainer>
            <IconCategories />
            <SMenuItem>Categories</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/" passHref>
          <SMenuContainer>
            <IconBag />
            <SMenuItem>Bag</SMenuItem>
          </SMenuContainer>
        </Link>
        <Link href="/" passHref>
          <SMenuContainer>
            <IconOrders />
            <SMenuItem>Orders</SMenuItem>
          </SMenuContainer>
        </Link>
      </SFooterWrapper>
    </SFooter>
  );
}
const SFooter = styled.footer`
  position: fixed;
  border-top: 1px solid #dee2e6 !important;
  bottom: 0;
  left: 0;
  background: white;
  width: 100%;
`;
const SFooterWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const SMenuContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing["1"]};
  margin-bottom: 0.625rem;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing["2"]} ${theme.spacing["4"]}`};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
const SMenuItem = styled.p`
  font-size: 0.875rem;
`;
