import Link from "next/link";
import React, { ReactElement } from "react";
import styled, { ThemedStyledFunction } from "styled-components";

const IconHome = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-active-icon"
  >
    <path
      fill="#146EB4"
      fillRule="evenodd"
      d="M12.92 2.716l7.5 5.834c.366.284.58.72.58 1.184V20c0 1.105-.895 2-2 2h-3.46l.005-.09v-7.274l-.004-.155C15.461 13.098 14.313 12 12.909 12h-1.818l-.155.004c-1.384.08-2.481 1.228-2.481 2.632v7.273l.004.09L5 22c-1.105 0-2-.895-2-2V9.734c0-.463.214-.9.58-1.184l7.5-5.834c.54-.421 1.3-.421 1.84 0zm-.01 10.92l.108.006c.501.055.891.479.891.994v7.273l.005.09h-3.829l.006-.09v-7.273l.006-.109c.054-.5.478-.89.994-.89h1.818z"
    ></path>
  </svg>
);
const IconCategories = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" class="navbar-active-icon">
    <g
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-width="1.8"
      transform="translate(3.004 3)"
    >
      <rect width="6.991" height="6.991" rx="0.5"></rect>
      <rect width="6.991" height="6.991" x="10.983" rx="0.5"></rect>
      <g transform="translate(0 11.033)">
        <rect width="6.991" height="6.991" rx="0.5"></rect>
        <rect width="6.991" height="6.991" x="10.983" rx="0.5"></rect>
      </g>
    </g>
  </svg>
);
const IconBag = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-inactive-icon"
  >
    <g strokeWidth="0">
      <path d="M18 1.15H6c-.268 0-.52.126-.68.34l-3 4c-.11.147-.17.326-.17.51v14c0 1.574 1.276 2.85 2.85 2.85h14c1.574 0 2.85-1.276 2.85-2.85V6c0-.184-.06-.363-.17-.51l-3-4c-.16-.214-.412-.34-.68-.34zm-.425 1.7l2.575 3.433V20c0 .635-.515 1.15-1.15 1.15H5l-.125-.007c-.576-.062-1.025-.55-1.025-1.143V6.282L6.424 2.85h11.151z"></path>
      <path d="M21 5.15c.47 0 .85.38.85.85 0 .433-.324.79-.743.843L21 6.85H3c-.47 0-.85-.38-.85-.85 0-.433.324-.79.743-.843L3 5.15h18zM16 9.15c.47 0 .85.38.85.85 0 2.679-2.171 4.85-4.85 4.85S7.15 12.679 7.15 10c0-.47.38-.85.85-.85s.85.38.85.85c0 1.74 1.41 3.15 3.15 3.15s3.15-1.41 3.15-3.15c0-.47.38-.85.85-.85z"></path>
    </g>
  </svg>
);
const IconOrders = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-inactive-icon"
  >
    <g strokeWidth="0">
      <path d="M2.752 18c.858 0 1.553.695 1.553 1.552 0 .858-.695 1.553-1.553 1.553-.857 0-1.552-.695-1.552-1.553 0-.857.695-1.552 1.552-1.552zm18.99.452c.608 0 1.1.493 1.1 1.1 0 .567-.429 1.034-.98 1.094l-.12.006h-13c-.607 0-1.1-.492-1.1-1.1 0-.567.43-1.033.98-1.093l.12-.007h13zM2.752 10.5c.858 0 1.553.695 1.553 1.552 0 .858-.695 1.553-1.553 1.553-.857 0-1.552-.695-1.552-1.553 0-.857.695-1.552 1.552-1.552zm18.99.452c.608 0 1.1.493 1.1 1.1 0 .567-.429 1.034-.98 1.094l-.12.006h-13c-.607 0-1.1-.492-1.1-1.1 0-.567.43-1.033.98-1.093l.12-.007h13zM2.752 3c.858 0 1.553.695 1.553 1.552 0 .858-.695 1.553-1.553 1.553-.857 0-1.552-.695-1.552-1.553C1.2 3.695 1.895 3 2.752 3zm18.99.452c.608 0 1.1.493 1.1 1.1 0 .567-.429 1.034-.98 1.094l-.12.006h-13c-.607 0-1.1-.492-1.1-1.1 0-.567.43-1.033.98-1.093l.12-.007h13z"></path>
    </g>
  </svg>
);
interface Props {}
const SFooter = styled.footer`
  position: fixed;
  border-top: 1px solid #dee2e6 !important;
  bottom: 0;
  left: 0;
  background: white;
  width: 100%;
`;
const SFooterWrapper = styled.div`
  max-width: 71.25rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const SMenuContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.25rem;
  margin-bottom: 0.625rem;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
`;
const SMenuItem = styled.p`
  font-size: 0.875rem;
`;
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
