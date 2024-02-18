'use client';

import Link from 'next/link';
import styled from '@emotion/styled';

/* type to get Prop for text and route to redirect */
type Props = {
  text: string;
  route: string;
};

/* Style the Link component imported 
  rounded corners, padding, margin, color, text-decoration, font-size, cursor and blue background
*/
const LinkCustom = styled(Link)`
  border-radius: 4px;
  padding: 8px 16px;
  margin: 8px;
  color: white;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
  background-color: #3b80f2;
`;

const LinkRenderingMode = ({ text, route }: Props) => {
  return (
    <LinkCustom href={route}>
      {text}
    </LinkCustom>
  );
}

export default LinkRenderingMode;