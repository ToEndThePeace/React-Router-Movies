import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

function SavedList(props) {
  const {removeFromSavedList} = props;
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      <LinkList>
        {props.list.map((movie) => (
          <FlexInline key={movie.id} className="saved-movie">
            <NavLink to={`/movies/${movie.id}`} activeClassName="active">{movie.title}</NavLink>
            <CloseButton onClick={() => removeFromSavedList(movie.title)}>
              &times;
            </CloseButton>
          </FlexInline>
        ))}
      </LinkList>
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CloseButton = styled.div`
  margin-left: 10px;
  font-size: 25px;
  line-height: 16px;
`;
const FlexInline = styled.span`
  display: flex;
  align-items: center;
`;

export default SavedList;
