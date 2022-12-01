import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ArticleLayout = ({ image, children }) => {
  return (
    <StyledArticleLayout>
      <picture className="image">
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          alt={image.alt}
        />
      </picture>

      <div className="content">{children}</div>
    </StyledArticleLayout>
  );
};

const StyledArticleLayout = styled.article`
  .image{
    img{
      width: 100%;
      object-fit: contain;
      height: 100%;
    }
  }
  .content{
    min-height: 406px;
  }
`;

export default ArticleLayout;
