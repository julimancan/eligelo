import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ArticleLayout = ({ image, children , className}) => {
  return (
    <StyledArticleLayout className={className}>
      <picture className="image">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </picture>

      <section className="content">{children}</section>
    </StyledArticleLayout>
  );
};

const StyledArticleLayout = styled.article`
  display: flex;
  flex-direction: column;
  .image {
    height: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .content {
  }

  @media (min-width: 900px) {
    height: 42rem;
    flex-direction: ${({className}) =>  className.includes('left')? 'row-reverse': 'row'};
    .image {
      width: 50%;
      img{
        height: 100%;
        object-fit: cover;
      }
    }
    .content {
      width: 50%;
    }
  }
`;

export default ArticleLayout;
