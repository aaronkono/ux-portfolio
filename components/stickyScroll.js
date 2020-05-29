import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 1.34rem;
  padding-bottom: 1.34rem;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    padding-top: 5.34rem;
    padding-bottom: 5.34rem;
  }
`;
export const LeftColumn = styled.div`
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 768px) {
    width: 32%;
    padding-left: 0;
    padding-right: 32px;
  }
`;
export const RightColumn = styled.div`
  width: 100%;
  padding: 32px 16px 16px;
  @media (min-width: 768px) {
    width: 68%;
    padding: 0;
  }
`;
export const StickyContainer = styled.div`
  position: relative;
  top: 0;
  @media (min-width: 768px) {
    position: sticky;
    top: 100px;
  }
`;
