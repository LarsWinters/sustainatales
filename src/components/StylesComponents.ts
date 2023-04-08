import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 0px;
`;

export const Header = styled.header`
  background-color: #4caf50;
  padding: 20px 0;
  color: white;
  text-align: center;
  font-size: 2em;
`;

export const Main = styled.main`
  margin-top: 30px;
`;

export const PostCard = styled.article`
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 30px;
`;

export const PostTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const PostContent = styled.p`
  font-size: 1.1em;
  line-height: 1.5;
`;

export const PostDate = styled.small`
  display: block;
  margin-bottom: 10px;
  font-style: italic;
  color: #777;
`;
